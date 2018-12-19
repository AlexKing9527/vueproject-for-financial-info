const axios = require('axios');

axios.defaults.headers.get['Content-Type'] = 'application/xml';

axios.interceptors.response.use(function (res) {
  return res.data     //axios拦截器 只提取结果中的data
});

export let getCurrency1 = () =>{
  return axios.get('https://forexdata.wallstreetcn.com/head_tab?type=forex&fields=prod_name,last_px,px_change,px_change_rate,price_precision')
};
let getCurrency2 = () =>{
  return axios.get('https://forexdata.wallstreetcn.com/real_list?type=forex&fields=prod_name,last_px,px_change,px_change_rate,price_precision,update_time&sort_type=')
};
export let getCurrency =()=>{
  return axios.all([getCurrency1(),getCurrency2()])
};

let getCom1 = ()=>{
  return axios.get('https://forexdata.wallstreetcn.com/head_tab?type=commodity&fields=prod_name,last_px,px_change,px_change_rate,price_precision')
};
let getCom2 = ()=>{
  return axios.get('https://forexdata.wallstreetcn.com/real_list?type=commodity&fields=prod_name,last_px,px_change,px_change_rate,price_precision,update_time&sort_type=')
};
export let getCom =()=>{
  return axios.all([getCom1(),getCom2()])
};

let getIndices1 = ()=>{
  return axios.get('https://forexdata.wallstreetcn.com/head_tab?type=indice&fields=prod_name,last_px,px_change,px_change_rate,price_precision')
};
let getIndices2 = ()=>{
  return axios.get('https://forexdata.wallstreetcn.com/real_list?type=indice&fields=prod_name,last_px,px_change,px_change_rate,price_precision,update_time&sort_type=')
};
export let getIndices =()=>{
  return axios.all([getIndices1(),getIndices2()])
};

export let getAstock2 = ()=>{
  return axios.get('https://mdc.wallstreetcn.com/real?en_prod_code=000001.SS,399001.SZ,399006.SZ&fields=prod_name,last_px,px_change,px_change_rate,price_precision')
};
export let getUp = ()=>{
  return axios.get('https://mdc.wallstreetcn.com/sort?sort_type=1&data_count=10&fields=prod_name,last_px,px_change,px_change_rate,price_precision,update_time')
};
export let getDown = ()=>{
  return axios.get('https://mdc.wallstreetcn.com/sort?sort_type=0&data_count=10&fields=prod_name,last_px,px_change,px_change_rate,price_precision,update_time')
};
export let getAstock1 =()=>{
  return axios.all([getAstock2(),getUp(),getDown()])
};

let getBond1 = ()=>{
  return axios.get('https://forexdata.wallstreetcn.com/head_tab?type=bond&fields=prod_name,last_px,px_change,px_change_rate,price_precision')
};
let getBond2 = ()=>{
  return axios.get('https://forexdata.wallstreetcn.com/real_list?type=bond&fields=prod_name,last_px,px_change,px_change_rate,price_precision,update_time&sort_type=')
};
export let getBond =()=>{
  return axios.all([getBond1(),getBond2()])
};

let getCfd1 = ()=>{
  return axios.get('https://forexdata.wallstreetcn.com/head_tab?type=cfdindice&fields=prod_name,last_px,px_change,px_change_rate,price_precision')
};
let getCfd2 = ()=>{
  return axios.get('https://forexdata.wallstreetcn.com/real_list?type=cfdindice&fields=prod_name,last_px,px_change,px_change_rate,price_precision,update_time&sort_type=')
};
export let getCfd =()=>{
  return axios.all([getCfd1(),getCfd2()])
};

export let getNews = ()=>{
  return axios.get('https://api-prod.wallstreetcn.com/apiv1/content/lives/pc?limit=40')
};

export let slideNews2 = ()=>{
  let data = require('../api/slide.json')
  return data
};
export let slideNews1 = ()=>{
  return axios.get('https://m.wallstreetcn.com/apiv1/content/fabricate-articles?channel=global-carousel&limit=5')
};

export let getArtical = ()=>{
  let data = require('../api/artical.json')
  return data
};


var xhr = new XMLHttpRequest();

export let getData = () =>{
  return new Promise((res,req)=>{
    xhr.open('GET', 'https://partner-api.jin10.com/?max_id=0&count=50', true);
    xhr.setRequestHeader('Content-Type', 'application/x-javascript');
    xhr.send('ok')
    xhr.onload = function () {
      if (xhr.status == 200){
        res(xhr.response)
      }
    }
  })
}

