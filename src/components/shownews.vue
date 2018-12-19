<template>
  <div>
    <toptab :pages="pages" :pageclass="pageclass" :name="'newspage'"></toptab>
    <div ref="newswrapper" class="news-wrapper" @touchstart="start" @touchmove="move" @touchend="end">
      <ul>
        <!--<Scroll :height="contentHeight" :on-reach-top="getnews">-->
        <li v-for="item in data_tips" class="list_item">
          <span class="newsdate">{{getDate(item.display_time)}}</span>
          <p class="newscontent">{{item.content_text}}</p>
        </li><!--</Scroll>-->
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import Mheader from './Mheader'
    import toptab from './top-tab'
    import bsroll from "better-scroll";
    import {getNews} from '../api/'

      export default {
        name: "shownews",
        components: {
          Mheader,
          toptab
        },
        data() {
          return {
            pages:['global','astock','commodity','usstock','forex','qukuai'],
            pageclass:['宏观','A股','商品','美股','外汇','区块链'],
            data_tips: [],
            newsdate: [],
            global: [], astock: [], commodity: [], usstock: [], forex: [], qukuai: [],
            contentHeight:500, loading: false,
            oriX:0, movX:0, disX:0, oriY:0, movY:0, disY:0
          }
        },
        watch: {
          $route() {
            this.getnews();
            this.$nextTick(() => {
              this.scroll = new bsroll(this.$refs.newswrapper, {
                pullDownRefresh:{
                  threshold:30,
                  stop:40
                }
              })
            })
          }
        },
        created() {
          this.getnews();
        },

        mounted() {
          this.$nextTick(() => {
            this.scroll = new bsroll(this.$refs.newswrapper, {
              pullDownRefresh:{
                threshold:30,
                stop:40
              }
            })
            this.scroll.on('pullingDown', () => {
              this.loading = true;
              this.loadingshow();
              setTimeout(()=>{
                this.loading = false;
                this.$Spin.hide();
                this.scroll.finishPullDown()
              },500)
            })
          })
        },

        methods: {
          async getnews() {
            let that = this
            let {data} = await getNews();

            data.global.items.forEach(item => {
              this.global.push(item)
            });
            data.a_stock.items.forEach(item => {
              this.astock.push(item)
            });
            data.commodity.items.forEach(item => {
              this.commodity.push(item)
            });
            data.xiaocong.items.forEach(item => {
              this.qukuai.push(item)
            });
            data.forex.items.forEach(item => {
              this.forex.push(item)
            });
            data.us_stock.items.forEach(item => {
              this.usstock.push(item)
            });

            this.showNews()
          },

          getDate(t) {
            return new Date(t * 1000).toTimeString().slice(0, 8);
          },

        showNews() {
          let page_index = this.pages.indexOf(this.$route.params.page);
          if (page_index == -1) {page_index = 0 }

          switch (page_index) {
            case 0:
              this.data_tips = [...this.global, ...[]];
              break;
            case 1:
              this.data_tips = [...this.astock, ...[]]
              break;
            case 2:
              this.data_tips = [...this.commodity, ...[]]
              break;
            case 3:
              this.data_tips = [...this.usstock, ...[]]
              break;
            case 4:
              this.data_tips = [...this.forex, ...[]]
              break;
            case 5:
              this.data_tips = [...this.usstock, ...[]]
              break;
          }
        },

        start(e){
          this.oriX = e.changedTouches[0].pageX;
          this.oriY = e.changedTouches[0].pageY;
        },
        move(e){
          this.movX = e.changedTouches[0].pageX;
          this.movY = e.changedTouches[0].pageY;
          this.disX = this.movX - this.oriX;
          this.disY = this.movY - this.oriY;
        },
        end(){
          let page_index = this.pages.indexOf(this.$route.params.page);
          if(this.disX>120){
              if (page_index != 0){
                this.$router.push('/news'+'/'+this.pages[page_index-1])
              }else return
            }
          if(this.disX<-120){
            if (page_index != this.pages.length-1){
              this.$router.push('/news'+'/'+this.pages[page_index+1])
            }else return
          }
        },

        loadingshow(){
          if (this.loading){
          this.$Spin.show({
            render: (h) => {
              return h('div', [
                h('Icon', {
                  'class': 'demo-spin-icon-load',
                  props: {
                    type: 'ios-loading',
                    size: 18
                  }
                }),
                h('div', 'Loading')])}
            })
          }
        },


      }

    }
</script>

<style scoped lang="less">
  .news-wrapper{
    position: fixed;
    top:48px;
    bottom:49px;
    overflow: auto;
    .list_item{
      margin: 0 20px 10px 10px;
      padding-bottom: 5px;
      .newsdate{
        display: table-cell;
        font-weight: bold;
        color: #999;
        font-size: 13px;
        line-height: 18px;
        margin-bottom: 5px;
      }
      .newscontent{
        width: 100%;
        display: inline-block;
        margin: 5px 8px;
        font-size: 15px;
        line-height: 23px;
        font-weight: bold;
        word-break: break-all;
        color: #333;
      }
    }

  }
</style>
