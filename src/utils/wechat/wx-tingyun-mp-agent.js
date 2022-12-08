/*AGENT_VERSION=1.3.10-sgcc.1*/"use strict";var i=wx;function f(){return+new Date}function a(t){var e;try{e=i.getStorageSync(t)}catch(t){}return e}function r(t,e){try{i.setStorageSync(t,e)}catch(t){}}function t(){return i.getSystemInfoSync()}function d(t){return t.statusCode}function e(){return["requestPayment","scanCode","previewImage"]}function n(){return"request"}var s=[],p={context:null},o={networkType:"",system:t()};function c(t){s.push({timestamp:f(),route:t})}function u(){s=[]}function h(){return s.slice()}function l(e){return function(t){return"Array"===e&&Array.isArray?Array.isArray(t):Object.prototype.toString.call(t)==="[object "+e+"]"}}var m=l("String"),y=l("Array"),g=l("Function"),v=l("Object"),T=l("Boolean"),D=l("Number");function b(t,e){return function(){if(g(e))try{e.apply(this,arguments)}catch(t){}if(g(t))return t.apply(this,arguments)}}function S(e,n,a){return function(){var t;if(g(n))try{n.apply(this,arguments)}catch(t){}if(g(e)&&(t=e.apply(this,arguments)),g(a))try{a.apply(this,arguments)}catch(t){}return t}}function q(t,e){var n,a;v(t)&&g(t.handler)&&(n=t.name,a=t.handler,t=t.afterHandler,e[n]=S(e[n],a,t),e[n]._ty_hook=!0)}function x(){return(getCurrentPages()||[]).map(function(t){return t.route})}function I(){var t=x();return 0<t.length?t[t.length-1]:""}var _=function(){function t(t){return t<0?NaN:t<=30?0|Math.random()*(1<<t):t<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<t-30))*(1<<30):NaN}function e(t,e){for(var n=t.toString(16),a=e-n.length,r="0";0<a;a>>>=1,r+=r)1&a&&(n=r+n);return n}return function(){return e(t(32),8)+"-"+e(t(16),4)+"-"+e(16384|t(12),4)+"-"+e(32768|t(14),4)+"-"+e(t(48),12)}}();function k(t){return t&&m(t)?JSON.parse(t):t}function E(t){try{return k(t)}catch(t){}return null}function C(t,e){var n="",a=!1;try{n=JSON.stringify(t)}catch(t){a=!(n="")}return e?{error:a,value:n}:n}function A(t){return t+""}function O(t){return t?v(t)?C(t).length:m(t)?t.length:t instanceof ArrayBuffer?t.byteLength:t.length||0:0}function R(t,e){t=v(t)?C(t):m(t)?t:"";return t=e?t.substring(0,e):t}var F="recordTyTime",L="TINGYUN_UID",M="custom",N="TRIGGER_LIFECYCLE",P="2.6.4",j=20,w="event",H="request",z="api",B="timer",U=1500,Y=!0,G=!0,K=5,$="TY_CONFIG",V="TY_SAMPLING",J="TY_SETDATA_THRESHOLD",X="TY_SETDATA_TRACE",Q="TY_SETDATA_TRACEHINT",W="TY_IGNORE_ERRCODES",Z="TY_SETDATA_TIME_INTERVAL",tt=[500,1500],et=256,nt=256,at="__ty_page_param",rt="__ty_component_hooked";function it(t){t&&(o.rid=t)}var st={},ot=!1;function ct(t){null==(st=t||{}).requestFailMessageSize&&(st.requestFailMessageSize=nt),null==st.apiFailMessageSize&&(st.apiFailMessageSize=et),st.releaseId&&it(st.releaseId)}function ut(){return ot}function dt(t){ot=t}function ht(){for(var t=0;t<arguments.length;t++)if(null!=arguments[t])return arguments[t]}var lt=n();function ft(t){this.size=t||100,this.queue=[],this.running=!1}ft.prototype.add=function(t){this.queue.length>=this.size||(this.queue.push(t),this.running||(this.running=!0,this.run()))},ft.prototype.run=function(){var t=this;this.handler(this.queue.shift(),function(){0<t.queue.length?t.run():t.running=!1})},ft.prototype.handler=function(t,e){var n={url:t.url||"".concat(st.beacon).concat(t.uri),method:t.method||"POST",_no_record:!0,success:function(){t.success&&t.success.apply(this,arguments)},fail:function(){t.fail&&t.fail.apply(this,arguments)},complete:function(){t.complete&&t.complete.apply(this,arguments),e()}};t.data&&(n.data=t.data),t.header&&(n.header=Object.assign(n.header||{},t.header)),i[lt](n)};var pt=new ft;function mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var yt=6e5,gt=qt(V),vt=!1;function Tt(t){return null!=t&&D(t)}function Dt(t){return null!=t&&T(t)}function bt(t){return null!=t&&y(t)}function St(t){return bt(t)&&2==t.length}function qt(t){var e=a($);if(e&&v(e))return e[t]}function xt(t){var e=a($);if(e&&v(e)||(e={}),t)for(var n in t)mt(t,n)&&(e[n]=t[n]);r($,e)}function It(t,a){var r=this,i={};t.forEach(function(t){var e=t.key,n=t.storeKey,t=t.validFunc;!!t&&t.call(r,a[e])&&(st[e]=a[e],i[n]=a[e])}),xt(i)}function _t(t){st.key&&st.beacon&&pt.add({uri:"/mp-config/config/pullSampling?encodeMpId=".concat(st.key),success:function(t){var e=t.data||{},t=e.data;200===e.code&&t&&(Tt(t.sampling)&&(gt=t.sampling,(e={})[V]=gt,xt(e)),It([{key:"setdataThreshold",storeKey:J,validFunc:Tt},{key:"setdataTrace",storeKey:X,validFunc:Dt},{key:"setdataTraceHint",storeKey:Q,validFunc:Dt},{key:"ignoreErrorCodes",storeKey:W,validFunc:bt},{key:"setdataTimeInterval",storeKey:Z,validFunc:St}],t))},complete:function(){t&&t(gt)}})}function kt(){gt=gt||(+st.sampleRate||1);var t=Math.random();vt=t<=gt}function Et(){return{uniqueId:0,requestId:0,apiId:0,otherActions:[],eventActions:[],setData:{threshold:ht(st.setdataThreshold,qt(J),U),setDataTrace:ht(st.setdataTrace,qt(X),Y),setDataTraceHint:ht(st.setdataTraceHint,qt(Q),G),setDataTimeInterval:ht(st.setdataTimeInterval,qt(Z),tt),stuck:!1,max:0,currentSegmentTime:0,data:{},requestBridge:[]},reqStat:{currentSegmentTime:0,data:{}},lastSetDataInOnReady:0,stuck:!1,jsError:!1,netError:!1,recordFirstLoad:!1}}function Ct(){return{stuck:!1,firstLoad:0,jsError:!1,netError:!1}}setInterval(_t,yt);var At={},Ot=[],Rt=0,Ft={},Lt=Et(),Mt=Ct(),Nt={canSend:!1,sent:!1,apiRemain:0,needClearDeferredData:!1};function Pt(){At={},Ot=[],Rt=0,Nt.apiRemain=0,Lt=Et(),Nt.needClearDeferredData=!0}function jt(){Mt=Ct()}function wt(t){var e;Lt.eventActions||(Lt.eventActions=[]),Lt.otherActions||(Lt.otherActions=[]),t&&(t.type===w?(e=st&&st.eventMaxSize||j,Lt.eventActions&&Lt.eventActions.length>=e&&Lt.eventActions.shift(),Lt.eventActions.push(t)):Lt.otherActions.push(t))}function Ht(t,e){for(var n in e)mt(e,n)&&e[n]&&0<e[n].count&&t.push(Object.assign(e[n]||{},{timestamp:+n}))}function zt(){var t=[],e=[];Ht(t,Lt.setData.data),Ht(e,Lt.reqStat.data);var n={metric:{jsError:Ot&&0<Ot.length,netError:Lt.netError,stuck:Lt.stuck}};return 0<t.length&&(n.setData={threshold:ht(Lt.setData.threshold,U),setDataTrace:ht(Lt.setData.setDataTrace,Y),setDataTraceHint:ht(Lt.setData.setDataTraceHint,G),setDataTimeInterval:ht(Lt.setData.setDataTimeInterval,tt),max:Lt.setData.max,requestBridge:Lt.setData.requestBridge,data:t}),0<e.length&&(n.reqStat=e),!At.onLoad||(e=(e=Lt.lastSetDataInOnReady)||At.onReady)&&(e=0<(e=e-At.onLoad)?e:0,n.metric.firstLoad=e),Mt=n.metric,n}function Bt(){Rt=f()}var Ut={uid:Yt(),sid:_(),v:"1.3.10-sgcc.1",at:"wx"};function Yt(){var t=a(L);return t||(t=_(),r(L,t)),t}function Gt(t){var e;vt&&((e=Object.assign({},Ut,o||{},{key:st.key},t||{})).launch=!t,e.launch&&(e.launchOptions=p.launchOptions),pt.add({uri:"/mp-app",data:e}))}function Kt(t){var e;vt&&(N===t&&(Nt.canSend=!0),!Nt.sent&&Nt.canSend&&(e=Object.assign({},{path:Ft.current,pageEvent:Object.assign({},At),errs:Ot.slice(),fromPath:Ft.prev||"",actions:(Lt.eventActions||[]).concat(Lt.otherActions||[])},Object.assign({},Ut,o||{},{key:st.key}),0<Rt?{ct:Rt}:{},zt()),(t=h())&&(e.routeTrack=t),pt.add({uri:"/mp-page",data:e}),Pt(),Nt.sent=!0,Nt.canSend=!1))}function $t(t){kt();var e=t.path,n=t.query,a=t.scene;o.openPath=e,st.disableFetchQuery||(o.query=n),o.scene=a,p.launchOptions=t,i.getNetworkType({success:function(t){o.networkType=t.networkType},complete:function(){Gt()}})}function Vt(t){var e="",n="";m(t)?e=t:t&&(e=t.stack,n=t.message),e&&(e={time:f(),stack:e},n&&(e.msg=n),Ot.push(e))}function Jt(){var t=h();u();var e=Ft.current;Ft.prev="",Ft.current="",Gt({routeTrack:t,closePath:e,metric:Mt})}function Xt(t,e){t=t.split("."),e=e.split(".");for(var n=Math.max(t.length,e.length);t.length<n;)t.push("0");for(;e.length<n;)e.push("0");for(var a=0;a<n;a++){var r=parseInt(t[a]),i=parseInt(e[a]);if(i<r)return 1;if(r<i)return-1}return 0}function Qt(){return 0<=Wt(o,P)}function Wt(t,e){var n="";return(n=t&&t.system?t.system.SDKVersion:n)&&e?Xt(n,e):-1}var Zt=[{name:"onLaunch",handler:$t},{name:"onError",handler:Vt},{name:"onHide",handler:Jt}];function te(e){return Zt.forEach(function(t){q(t,e)}),e}function ee(t){return Qt()||!ut()?t:te.apply(this,arguments)}function ne(){var e=App;App=function(t){if(t=te(t),e)return e.call(this,t)}}function ae(t){return st.ignoredPages&&y(st.ignoredPages)?st.ignoredPages.indexOf(t)<0:!st.pages||!y(st.pages)||-1<st.pages.indexOf(t)}function re(t,e){if(!v(e))return t;try{var n=Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&");n&&(t+="?".concat(n))}catch(t){}return t}function ie(){var c=this.setData,u=Lt.setData.threshold,d=Lt.setData.setDataTrace,h=Lt.setData.setDataTraceHint,l=Lt.setData.setDataTimeInterval;this.setData=function(){var a=arguments[0],r=arguments[1],t=f(),i={start:t},s=p.context,o=s&&s.type===H&&s.data&&s.data.recordFirstLoad;(Lt.recordFirstLoad||o)&&(i.calcFirstLoad=!0);try{var e=Lt.setData.currentSegmentTime;1e3<t-e?(Lt.setData.currentSegmentTime=t,Lt.setData.data[t]={count:0,grade:{good:{count:0},normal:{count:0},bad:{count:0}},traces:[]},i.segmentTime=t):i.segmentTime=e}catch(t){}function n(){try{i.end=f(),i.calcFirstLoad&&i.end>Lt.lastSetDataInOnReady&&(Lt.lastSetDataInOnReady=i.end),i.duration=i.end-i.start;var t=Lt.setData.data[i.segmentTime];if(t.count++,i.duration>Lt.setData.max&&(Lt.setData.max=i.duration),i.duration>l[1]?t.grade.bad.count++:i.duration>l[0]?t.grade.normal.count++:t.grade.good.count++,i.duration>u&&(Lt.stuck||(Lt.stuck=!0),t.traces.length<K&&d))try{var e=C(a,!0),n={timestamp:i.start,duration:i.duration,size:e.value.length};h&&(n.hint=e.value.substring(0,200)),e.error&&(n.error=e.error),t.traces.push(n)}catch(t){}o&&Lt.setData.requestBridge.push({start:i.start,end:i.end,requestId:s.data.requestId,url:s.data.url})}catch(t){}return r&&r.apply(this,arguments)}return c.call(this,arguments[0],n)}}function se(){ae(this.route)&&(Nt.needClearDeferredData&&(jt(),Nt.needClearDeferredData=!1),Lt.recordFirstLoad=!0,ie.call(this),At.onLoad=f(),this[at]=re(this.route,arguments[0]))}function oe(){var t;ae(this.route)&&(Nt.needClearDeferredData&&(jt(),Nt.needClearDeferredData=!1),At.onShow=f(),c(t=this[at]||this.route),Ft.prev=Ft.current,Ft.current=t,Nt.sent=!1)}function ce(){ae(this.route)&&(At.onReady=f())}function ue(){ae(this.route)&&(Lt.recordFirstLoad=!1)}function de(){ae(this.route)&&(At.onHide=f(),Kt(N))}function he(){ae(this.route)&&(At.onUnload=f(),Kt(N))}var le=[{name:"onLoad",handler:se},{name:"onShow",handler:oe},{name:"onReady",handler:ce,afterHandler:ue},{name:"onHide",handler:de},{name:"onUnload",handler:he}];function fe(t,e){for(var n in t){var a;mt(t,n)&&g(t[n])&&!t[n]._ty_hook&&g(e)&&(a=t[n],t[n]=e.call(this,n,a),t[n]._ty_hook=!0)}}var pe=[H,z,B];function me(){var e={};return pe.forEach(function(t){e[t]={current:0,children:0}}),e}function ye(t,e){for(var n=0;n<t.length;n++)if(t[n].cid===e.id){e.requests&&0<e.requests.length&&(t[n].requests=e.requests),e.apis&&0<e.apis.length&&(t[n].apis=e.apis);break}}function ge(t){t=t||{},this.id=++Lt.uniqueId,this.parent=t.parent||null,this.name=t.name||"<root>",this.type=t.type||w,this.subType=this.type===w?t.subType||"tap":t.subType,this.requests=[],this.apis=[],this.remain=me(),this.s=f(),this.e=null,this.data=t.data,this.closed=!1,this.path=Ft.current,this.prevPath=Ft.prev,this.dataComposed=t.dataComposed||!1}ge.prototype.end=function(t){var e;this.closed||(t&&((e=this.getItemsByType(t.type))&&0<e.length&&ye(e,t),this.updateRemain(-1,t.type)),this.isNoRemain()&&(this.e=f(),this.closed=!0,this.parent?this.parent.end(this):(wt(this.composeActionData()),p.context=null)))},ge.prototype.getItemsByType=function(t){var e;return t===H?e=this.requests:t===z&&(e=this.apis),e},ge.prototype.isNoRemain=function(t){var e,n=!0;for(e in this.remain)if(mt(this.remain,e))if(!(this.remain[e].current<=0&&(!!t||this.remain[e].children<=0))){n=!1;break}return n},ge.prototype.setData=function(t){this.data=t},ge.prototype.hasPrevAssignedData=function(){return this.requests&&0<this.requests.length||this.apis&&0<this.apis.length},ge.prototype.composeActionData=function(){var t={id:this.id,name:this.name,type:this.type,start:this.s,end:this.e,duration:0<this.e-this.s?this.e-this.s:0,path:this.path,prevPath:this.prevPath};return this.requests&&0<this.requests.length&&(t.requests=this.requests),this.apis&&0<this.apis.length&&(t.apis=this.apis),this.data&&(t.data=this.data),this.type!==H&&this.type!==z||(delete(t=Object.assign({},t,this.data)).data,this.type===H&&delete t.name),t},ge.prototype.canEnd=function(){return this.isNoRemain(!0)},ge.prototype.isEventChildContext=function(){for(var t=this.parent,e=!1;null!=t;){if(t.type===w){e=!0;break}t=t.parent}return e},ge.prototype.updateRemain=function(t,e){e=e||H;var n=t||0;this.remain[e].current=this.remain[e].current+n;for(var a=this.parent;a;)a.remain[e].children=a.remain[e].children+n,a=a.parent},Object.defineProperty(ge.prototype,"current",{get:function(){return p.context},enumerable:!0,configurable:!0});var ve="tyname";function Te(t){return!t||"tap"!==t.type||!v(t.target)||!v(t.currentTarget)||null==t.timeStamp}function De(t,e){var n=t.target||{},a=n.offsetLeft,r=n.offsetTop,i=n.id,s=n.dataset,o=t.detail||{},n=o.x,o=o.y;t._relatedInfo&&(c=t._relatedInfo.anchorTargetText);var c={target:{offsetLeft:a,offsetTop:r,id:i,x:n,y:o},dataset:{name:s[ve],targetName:c,methodName:e}},e=e||"";p.context=new ge({name:e,type:w,subType:t.type,data:c,dataComposed:!0})}function be(){p.context&&p.context.canEnd()&&p.context.end(),p.context=null}function Se(a,r){return function(){var t,e=arguments[0]||{},n=Te(e);if(!n)try{De.call(this,e,a)}catch(t){}try{t=r.apply(this,arguments)}finally{if(!n)try{be.call(this)}catch(t){}}return t}}function qe(e){var n=p.context;return function(){var t;p.context=n;try{t=e.apply(this,arguments)}finally{p.context=null}return t}}function xe(e,t){if(!e||e[rt])return e;t=t||{},e.methods||(e.methods={});t=(null!=t.disbaleComponentLifeCycleHook?t:st).disbaleComponentLifeCycleHook;return null!=t&&!1!==t||le.forEach(function(t){q(t,e.methods)}),fe(e.methods,Se),e[rt]=!0,e}function Ie(t,e){return ut()?xe.apply(this,arguments):t}function _e(){var e=Component;Component=function(t){t=xe(t),e&&e.call(this,t)}}function ke(t){p.context=t.context}function Ee(){p.context&&p.context.canEnd()&&p.context.end()}var Ce=n(),Ae=i[Ce];function Oe(t,e){if(!t)return null;return E(t["X-Tingyun-Data"])}function Re(t,e){st.id&&(t.header["X-Tingyun"]="c=B|".concat(st.id))}function Fe(t){if(!t)return 0;var e=t.header,n=t.data,t=0;return t=!(t=+(e&&e["Content-Length"]))||!D(t)||Number.isNaN(t)?O(n)||0:t}function Le(t,e){var n={},e=Oe(t.header,e.r);return e&&(n.s_id=e.id,n.s_name=e.tname,n.t_id=e.tid,n.s_du=e.duration,"user"in e&&(n.s_user=e.user)),n}function Me(t,e,n){return{requestId:t.requestId,type:H,url:t.url,method:t.method,start:t.start,end:t.end,cbTime:t.cbTime,duration:0<t.end-t.start?t.end-t.start:0,send:O(e.data),rec:Fe(n),statusCode:t.statusCode||0,failMessage:t.failMessage||"",cid:t.cid}}function Ne(t,e){var n;t.context||(n="".concat(t.url,"-").concat(t.requestId),t.context=new ge({parent:e,name:n,type:H,data:t.data}))}var Pe=function(){var t,e,o,n,a,c,u=arguments[0]||{};return!u._no_record&&u.url&&ut()&&(1e3<(t=f())-(e=Lt.reqStat.currentSegmentTime)&&(e=t,Lt.reqStat.currentSegmentTime=t,Lt.reqStat.data[t]={count:0}),Lt.reqStat.data[e].count++,e=p.context,(o={requestId:++Lt.requestId,url:u.url,method:u.method&&u.method.toUpperCase()||"GET",callbackContextCreated:!1,cbTime:0,recordFirstLoad:Lt.recordFirstLoad,data:{}}).data={url:o.url,requestId:o.requestId,recordFirstLoad:o.recordFirstLoad},Ne(o,e),o.context&&(o.cid=o.context.id),o.r=f()%1e9,u.header=u.header||{},Re(u),n=u.success,a=u.fail,c=u.complete,u.success=qe(function(){var t;if(o.end||(o.end=f()),ke(o),n){var e=f();try{t=n.apply(this,arguments)}finally{e=f()-e;0<e&&(o.cbTime+=e)}}return t}),u.fail=qe(function(){var t;if(o.end||(o.end=f()),ke(o),a){var e=f();try{t=a.apply(this,arguments)}finally{e=f()-e;0<e&&(o.cbTime+=e)}}return t}),u.complete=qe(function(t){var e,n;o.end||(o.end=f()),o.statusCode=d(t);var a=st[M];if(a&&g(a))try{var r=a.apply(this,arguments);v(r)&&(n={custom:r})}catch(t){}if(ke(o),c){var i=f();try{e=c.apply(this,arguments)}finally{var s=f()-i;0<s&&(o.cbTime+=s)}}i=t,s=!1;400<=(i=i||{}).statusCode&&(st.ignoreErrorCodes||[]).indexOf(i.statusCode)<0?(s=!0,t=i.data,o.failMessage=R(t,st.requestFailMessageSize)):i.errMsg&&!i.statusCode&&(s=!0,o.failMessage=i.errMsg.substring(0,st.requestFailMessageSize)),s&&!Lt.netError&&(Lt.netError=!0);s=Le(i,o),i=Me(o,u,i);return o.context&&(o.context.dataComposed=!0),Object.assign(o.data,i,s||{},n||{}),Ee(),e}),o.start=t,e&&(e.updateRemain(1),e.requests.push(o.data))),Ae.apply(this,arguments)};function je(){Object.defineProperty(i,Ce,{configurable:!0,enumerable:!0,writable:!0,value:Pe})}function we(e){return le.forEach(function(t){q(t,e)}),fe(e,Se),e[F]=Bt,e}function He(t){return Qt()||!ut()?t:we.apply(this,arguments)}function ze(){var e=Page;Page=function(t){if(t=we(t),e)return e.call(this,t)}}function Be(t){o.uid=t,r(L,t)}function Ue(){return o.uid}function Ye(t,e,n){null==t[e]&&(t[e]=n)}function Ge(e){var t,n,a,r;st.sgcc_beacon&&(e=e||{},t=o.scene,n=o.openPath,r=o.system,a={USER_ACCOUNT_ID:Ue()||"",RECORD_TIME:A(f()),PAGENAME:I(),$scene:A(t),$open_path:n},r&&(a.$system_model=r.model,a.$system_os=r.system,a.$system_version=r.version,a.$system_sdk_version=r.SDKVersion),Object.keys(a).forEach(function(t){Ye(e,t,a[t])}),r=[R(e)],pt.add({url:st.sgcc_beacon,data:r,header:{"content-type":"text/plain;charset=UTF-8"}}))}function Ke(){return p.context}var $e,Ve={version:"1.3.10-sgcc.1",setUser:Be,hookApp:ee,hookPage:He,hookComponent:Ie,request:Pe,getContext:Ke,setReleaseId:it},Je={track:Ge};Object.assign(Ve,Je);var Xe=["success","fail"],Qe=[],We={requestPayment:{fail:function(){var t=arguments&&arguments[0],e="fail";return e=t&&v(t)&&"requestPayment:fail cancel"===t.errMsg?"cancel":e}}};function Ze(){($e=st.hookApis||e()).forEach(function(t){-1<Qe.indexOf(t)||"request"===t||Qe.push(t)})}function tn(t){return{apiId:t.apiId,type:z,name:t.name,success:t.success||0,fail:t.fail||0,cancel:t.cancel||0,start:t.start,end:t.end,duration:0<t.end-t.start?t.end-t.start:0,count:1,failMessage:t.failMessage||"",cid:t.cid}}function en(t,e){var n;t.context||(n="".concat(t.name,"-").concat(t.apiId),t.context=new ge({parent:e,name:n,type:z,data:t.data}))}function nn(a){var r=i[a];return function(){var t=arguments[0]||{},e=p.context,n={apiId:++Lt.apiId,name:a,data:{}};return en(n,e),n.context&&(n.cid=n.context.id),Xe.forEach(function(e){t[e]=qe(b(t[e],function(){var t;n.end||(n.end=f()),ke(n),(t=We[a]&&We[a][e]&&g(We[a][e])?We[a][e].apply(this,arguments):e)&&(n[t]=1),"fail"===t&&(t=arguments&&arguments[0],n.failMessage=R(t,st.apiFailMessageSize))}))}),t.complete=qe(S(t.complete,function(){n.end||(n.end=f()),ke(n)},function(){Object.assign(n.data,tn(n)),n.context&&(n.context.dataComposed=!0),Ee()})),e&&(e.updateRemain(1,z),e.apis.push(n.data)),n.start=f(),r.apply(this,arguments)}}function an(t){t&&i[t]&&Object.defineProperty(i,t,{configurable:!0,enumerable:!0,writable:!0,value:nn(t)})}function rn(){$e||Ze();var e={};return Qe.forEach(function(t){e[t]=nn(t)}),e}function sn(){$e||Ze(),Qe.forEach(function(t){an(t)})}function on(t){t&&!Qt()||(ne(),ze(),je(),_e(),sn()),t&&Object.assign(Ve,rn()||{})}function cn(t){ut()||(ct(t||{}),dt(!0),_t(),t=!0,on(t=null!=st.plugin?st.plugin:t))}function un(){return Ve.config=cn,Ve}i.onNetworkStatusChange(function(t){o.networkType=t.networkType});var dn=un();module.exports=dn;