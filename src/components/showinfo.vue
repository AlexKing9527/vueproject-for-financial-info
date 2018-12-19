<template>
  <div>
    <toptab :pages="pages" :name="'infopage'" :pageclass="pageclass" class="toptab"></toptab>
    <div class="wrapper" ref="wrapper">
      <div class="top_list">
        <div class="top-item" v-for="item1 in data1" v-show="!stockinfo">
          <div v-for="(item2,index,key) in item1" class="itemplus" :class="{redborder:item2[2]>=0,greenborder:item2[2]<0}">
            <p class="itemclass1">{{item2[0]}}</p>
            <p class="itemclass2">{{item2[1]}}
              <Icon type="md-arrow-dropup" style="color: #ff433e;" v-if="item2[2]>=0"/>
              <Icon type="md-arrow-dropdown" style="color: #22c760;" v-else/>
            </p>
            <p :class="{itemclass3:item2[2]>=0,itemclass4:item2[2]<0}">
              <span style="font-weight: bold">{{item2[3]|fix(2)}}</span>
              {{item2[2]|fix()}}
            </p>
          </div>
        </div>
        <div class="top_list" v-for="item1 in data4" v-show="stockinfo">
          <div v-for="(item2,index,key) in item1" class="top-item">
            <div class="itemplus" :class="{redborder:item2[2]>=0,greenborder:item2[2]<0}">
              <p class="itemclass1">{{item2[0]}}</p>
              <p class="itemclass2">{{item2[1]}}
                <Icon type="md-arrow-dropup" style="color: #ff433e;" v-if="item2[2]>=0"/>
                <Icon type="md-arrow-dropdown" style="color: #22c760;" v-else/>
              </p>
              <p :class="{itemclass3:item2[2]>=0,itemclass4:item2[2]<0}">
                <span style="font-weight: bold">{{item2[3]|fix(2) || 0}}</span>
                {{item2[2]|fix() || 0}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="infodown" ref="infowrapper">
        <div class="infos-wrapper">
          <thead class="info-head">
          <tr v-show="!stockinfo">
            <th class="info1" style="background-color: #eaeaea">资产</th>
            <th class="info2" style="background-color: #eaeaea">现价</th>
            <th class="info3" style="background-color: #eaeaea">涨跌幅</th>
          </tr>
          <tr v-if="stockinfo">
            <th class="info1" style="width: 100%;background-color: #eaeaea">涨幅榜</th>
          </tr>
          </thead>
          <tbody class="info-head">
            <tr v-for="item1 in data2" class="info-item" v-if="!stockinfo">
              <td class="info1" v-for="(item2,index,key) in item1" v-if="key==0">
                <p class="downname">{{item2[0]}}</p>
                <p class="downname-en">{{index}}</p>
              </td>
              <td class="info2" v-for="item2 in item1">
              <span class="downval">{{item2[1] | fix(2)}}
              <Icon type="md-arrow-dropup" style="color: #ff433e;" v-if="item2[2]>=0"/>
              <Icon type="md-arrow-dropdown" style="color: #22c760;" v-else/>
              </span>
              </td>
              <td class="info3" v-for="item2 in item1">
                <p class="downradio" :class="{itemclass3:item2[2]>=0,itemclass4:item2[2]<0}">
                  {{item2[3] | fix(2)}}
                </p>
                <p class="downamount" :class="{itemclass3:item2[2]>=0,itemclass4:item2[2]<0}">
                  {{item2[2] | fix()}}
                </p>
              </td>
            </tr>
            <tr v-for="(item1,index,key) in data2" class="info-item" v-if="stockinfo && key<10">
              <td class="info1">
                <p class="downname">{{item1[0]}}</p>
                <p class="downname-en">{{index}}</p>
              </td>
              <td class="info2">
              <span class="downval">{{item1[1]}}
              <Icon type="md-arrow-dropup" style="color: #ff433e;" v-if="item1[2]>=0"/>
              <Icon type="md-arrow-dropdown" style="color: #22c760;" v-else/>
              </span>
              </td>
              <td class="info3">
                <p class="downradio" :class="{itemclass3:item1[2]>=0,itemclass4:item1[2]<0}">
                  {{item1[3] | fix(2)}}
                </p>
                <p class="downamount" :class="{itemclass3:item1[2]>=0,itemclass4:item1[2]<0}">
                  {{item1[2] | fix()}}
                </p>
              </td>
            </tr>
            <tr class="info-item" style="height: 50px" v-if="!stockinfo">
            </tr>
            <tr v-if="stockinfo" >
              <th class="info1" style="width: 100%;background-color: #eaeaea">跌幅榜</th>
            </tr>
            <tr v-for="(item1,index,key) in data3" class="info-item" v-if="stockinfo && key<10">
              <td class="info1">
                <p class="downname">{{item1[0]}}</p>
                <p class="downname-en">{{index}}</p>
              </td>
              <td class="info2">
              <span class="downval">{{item1[1]}}
              <Icon type="md-arrow-dropup" style="color: #ff433e;" v-if="item1[2]>=0"/>
              <Icon type="md-arrow-dropdown" style="color: #22c760;" v-else/>
              </span>
              </td>
              <td class="info3">
                <p class="downradio" :class="{itemclass3:item1[2]>=0,itemclass4:item1[2]<0}">
                  {{item1[3] | fix(2)}}
                </p>
                <p class="downamount" :class="{itemclass3:item1[2]>=0,itemclass4:item1[2]<0}">
                  {{item1[2] | fix()}}
                </p>
              </td>
            </tr>
            <tr class="info-item" style="height: 50px" v-if="stockinfo"></tr>
          </tbody>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import toptab from './top-tab'
    import bscroll from "better-scroll";
    import {getCurrency, getCom, getIndices, getAstock1,getAstock2, getUp,getDown, getBond, getCfd} from '../api/'

    export default {
        name: "showinfo",
        components:{
          toptab
        },
        data(){
          return{
            pages:['currencies','commodities','commodity','ashares','bonds','cfdindices'],
            pageclass:['外汇','商品','股指','沪深','债券','股指期货'],
            data1:[],data2:[],data3:[],data4:[],
            name:'',count:'',percent:'',number:'',
            stockinfo:false, contentHeight:500
          }
        },
        created(){
          this.get1();
          // setInterval(this.getData,1000*30)
        },
        filters:{
           fix(num,val){
             if(isNaN(num)||num == 0) return num
             // console.log(val)
             if (val==2){
               return num.toFixed(2) + '%'
             }
             if (!val){
               return num.toFixed(4)
             }


           }
        },
        watch:{
          $route(newval){
            console.log(newval.params.page)
            this.getData();
          }
        },
        methods:{
          getData(){
            let page_index = this.pages.indexOf(this.$route.params.page);
            if (page_index == -1) {page_index = 0 }
            switch (page_index){
              case 0:
                this.stockinfo = false;
                this.get1()
                break;
              case 1:
                this.stockinfo = false;
                this.get2()
                break;
              case 2:
                this.stockinfo = false;
                this.get3()
                break;
              case 3:
                this.stockinfo = true;
                this.get4();
                break;
              case 4:
                this.stockinfo = false;
                this.get5()
                break;
              case 5:
                this.stockinfo = false;
                this.get6()
                break;
            }
          },

          async get1(){
            let [data11,data12] = await getCurrency()
            this.data1 = [...data11.data.snapshot.data_arrs,...[]]
            this.data2 = [...data12.data.snapshot.data_arrs,...[]]
          },
          async get2(){
            let [data21,data22] = await getCom();
            this.data1 = [...data21.data.snapshot.data_arrs,...[]]
            this.data2 = [...data22.data.snapshot.data_arrs,...[]]
          },
          async get3(){
            let [data31,data32] = await getIndices();
            this.data1 = [...data31.data.snapshot.data_arrs,...[]]
            this.data2 = [...data32.data.snapshot.data_arrs,...[]]
          },
          async get4(){
            let [data41,data42,data43] = await getAstock1();
            console.log(data41.data.snapshot);
            delete data41.data.snapshot.fields;
            this.data4.push(data41.data.snapshot);
            this.data2 = data42.data.sort;
            this.data3 = data43.data.sort;
          },
          async get5(){
            let [data51,data52] = await getBond();
            this.data1 = [...data51.data.snapshot.data_arrs,...[]]
            this.data2 = [...data52.data.snapshot.data_arrs,...[]]
          },
          async get6(){
            let [data61,data62] = await getCfd();
            this.data1 = [...data61.data.snapshot.data_arrs,...[]]
            this.data2 = [...data62.data.snapshot.data_arrs,...[]]
          },

          up(item,val){
            if(val==2||val==3){
              // console.log(item);
              if (item>=0){
                return true;}
            }else return
          },
          down(item,val){
            if(val==2||val==3){
              if (item<0){
                this.flag=false;
                return true}
            }else return
          },
        },

        mounted(){
          this.$nextTick(() => {})
          }
    }
</script>

<style scoped lang="less">
  .toptab{
    position: fixed;
    background-color: white;
    z-index: 100;
  }
  .top_list{
    position: fixed;
    width: 100%;
    height: 78px;
    top:48px ;
    left: 0;
    right: 0;
    display: flex;
    background-color: white;
    .top-item{
      display: flex;
      min-width: 100px;
      width: 35%;
      align-items: center;
      justify-content: center;
        .itemplus{
          /*延长标号线*/
          padding: 9px 28px;
        }
        .redborder{
          border-bottom: 2px solid #ff433e;
        }
        .greenborder{
          border-bottom: 2px solid #22c760;
        }
        .itemclass1{
          font-size: 14px;
          color: #120f0a;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .itemclass2{
          font-size: 13px;
          white-space: nowrap;
        }

    }
  }
  .infodown{
    position: absolute;
    width: 100%;
    top:126px ;
    bottom: 50px;
    .infos-wrapper{
      position: absolute;
      width: 100%;
      .info-head{
        width: 100%;
        height: 37px;
        display: block;
        background-color: #eaeaea;
      }
      .info-head tr{
        width: 100%;
        display: flex;
        overflow: hidden;
      }
      .info-item{
        overflow: hidden;
      }
      .info1 {
        width: 50%;
        text-align: left;
        padding: 11px 20px;
        background: #fff;
        font-size: 10px;
        color: rgba(3,3,3,0.8);
        white-space: nowrap;
        overflow: hidden;
        .downname{
          font-size: 14px;
          font-weight: bold;
          color: #120f0a;
        }
        .downname-en{
          margin-top: 5px;
          font-size: 10px;
          color: #b7b7b5;
          font-weight: bold;
        }
      }
      .info2 {
        width: 25%;
        text-align: center;
        padding: 11px;
        background: #fff;
        font-size: 10px;
        color: rgba(3,3,3,0.8);
        white-space: nowrap;
        overflow: hidden;
        .downval{
          font-size: 14px;
          font-weight: bold;
          color: #120f0a;
        }
      }
      .info3 {
        width: 25%;
        text-align: center;
        padding: 11px;
        background: #fff;
        font-size: 10px;
        color: rgba(3,3,3,0.8);
        white-space: nowrap;
        overflow: hidden;
        .downradio{
          font-size: 14px;
          font-weight: bold;
        }
        .downamount{
          font-size: 12px;
          margin-top: 2px;
        }
      }

    }
  }
  .itemclass3{
    color:#ff433e;
    margin-right: 9px;
    white-space: nowrap;
  }
  .itemclass4{
    color:#22c760;
    margin-right: 9px;
    white-space: nowrap;
  }

  .wrapper{
    width: 100%;
  }
</style>
