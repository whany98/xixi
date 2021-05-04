/**
滚动方块改进度刷等级。 @肥皂
添加重写和mitm
使用方法，商店搜索滚动方块下载
玩游戏直到获得游戏进度数据。。
点一个广告获得视频广告数据。
获取完数据直接退出游戏跑脚本。脚本跑完直接登录游戏提现。
每天可提现7次，大概2.3块钱一个号。


TG通知群:https://t.me/Ariszy_Scripts
TG电报交流群: https://t.me/hahaha8028

[task_local]
#滚动方块改进度刷等级
0 0 1 1 * gdfk.js, tag=滚动方块改进度, img-url=https://ae01.alicdn.com/kf/Uaade4566dd3744299956aa883f225386u.jpg, enabled=true


[rewrite_local]
#滚动方块改进度
http://game1.szmonster.com/api/main url script-request-header gdfk.js


[MITM]
hostname = game1.szmonster.com
 */



const $ = new Env('滚动方块改进度');
let status;
status = (status = ($.getval("gdfkstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const gdfkurlArr = [], gdfkggurlArr = [],gdfkhdArr = [],gdfkcount = ''
let times = Math.round(Date.now() / 1000)
let gdfkurl = $.getdata('gdfkurl')
let gdfkhd = $.getdata('gdfkhd')
let gdfkggurl = $.getdata('gdfkggurl')
let sjs = 1
!(async () => {
  if (typeof $request !== "undefined") {
    await gdfkck()
   
  } else {gdfkurlArr.push($.getdata('gdfkurl'))
    gdfkhdArr.push($.getdata('gdfkhd'))
    gdfkggurlArr.push($.getdata('gdfkggurl'))
    let gdfkcount = ($.getval('gdfkcount') || '1');
  for (let i = 2; i <= gdfkcount; i++) {
    gdfkggurlArr.push($.getdata(`gdfkggurl${i}`))
    gdfkurlArr.push($.getdata(`gdfkurl${i}`))
    gdfkhdArr.push($.getdata(`gdfkhd${i}`))
  }
    console.log(`------------- 共${gdfkhdArr.length}个账号-------------\n`)
      for (let i = 0; i < gdfkhdArr.length; i++) {
        if (gdfkhdArr[i]) {
         gdfkggurl = gdfkggurlArr[i];
          gdfkurl = gdfkurlArr[i];
          gdfkhd = gdfkhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【滚动方块${$.index}】`)
    await wkzztx();
for(i=0;i < 200;i++){
await $.wait(30000)
await gdfk();
$.log('\n执行两百次广告'+i)
}
$.msg($.name,"",'任务执行完毕。快去提现吧')
    
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//数据获取


function gdfkck() {
   if ($request.url.indexOf("Repay/upStage?") > -1) {
 const gdfkurl = $request.url
  if(gdfkurl)     $.setdata(gdfkurl,`gdfkurl${status}`)
    $.log(gdfkurl)
  const gdfkhd = JSON.stringify($request.headers)
        if(gdfkhd)    $.setdata(gdfkhd,`gdfkhd${status}`)
$.log(gdfkhd)
   $.msg($.name,"",'滚动方块'+`${status}` +'游戏进度数据获取成功！')
  }else if ($request.url.indexOf("report/adRecord?") > -1) {
 const gdfkggurl = $request.url
  if(gdfkggurl)     $.setdata(gdfkggurl,`gdfkggurl${status}`)
    $.log(gdfkggurl)
$.msg($.name,"",'滚动方块'+`${status}` +'视频广告数据获取成功！')
}
}




function wkzztx(timeout = 0) {
  return new Promise((resolve) => {


//http://game1.szmonster.com/api/main/Repay/upStage?keymap_data=%7B%22UnlockBlock%22:%22128000000%22%7D&user_id=Ka9RGq
let id = gdfkurl.replace(/%22\d+/,`%22262144`)
//$.log(id)

let url = {
        url : id,
        headers : JSON.parse(gdfkhd),
        
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 'success'){
  $.log(`\n${result.msg}`)
      //$done()
} else {
await $.wait(100);
        
       console.log(result.message)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function gdfk(timeout = 0) {
  return new Promise((resolve) => {


//http://game1.szmonster.com/api/main/report/adRecord?user_id=1xNzbO&ad_status=50&ad_code=8031458411034382&space_id=181556
let id1 = gdfkggurl.replace(/ad_status=\d+/,`ad_status=50`)
//$.log(id1)

let url = {
        url : id1,
        headers : JSON.parse(gdfkhd),
        
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 'success'){
  $.log(`\n${result.msg}`)
      //$done()
} else {
await $.wait(100);
        
       console.log(result.message)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
