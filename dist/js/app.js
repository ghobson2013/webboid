webpackJsonp([6],{115:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-padding relative-position"},[n("q-transition",{attrs:{appear:"appear",enter:"fadeIn",leave:"fadeOut"}},[n("div",[n("h4",{staticClass:"light-paragraph text-center",staticStyle:{"font-family":"'Comfortaa', cursive",color:"#089cfc","user-select":"none","margin-bottom":"5px"}},[e._v("boid")]),n("h6",{staticClass:"light-paragraph text-center",staticStyle:{"margin-bottom":"30px"}},[e._v("The Social Supercomputer")]),n("q-input",{attrs:{error:e.$v.form.email.$error,"stack-label":"email",type:"text"},on:{blur:e.$v.form.email.$touch,keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.submit(t)}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("q-input",{attrs:{"stack-label":"password",type:"password"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.submit(t)}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),n("br"),n("q-checkbox",{attrs:{label:"remember me"},model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}}),n("br"),n("br"),n("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[n("q-btn",{staticClass:"text-center",staticStyle:{},attrs:{disabled:!e.loginRdy,invert:"invert",outline:"outline",color:"blue"},on:{click:e.join}},[e._v("Join")]),n("q-btn",{staticClass:"text-center on-right",staticStyle:{},attrs:{disabled:!e.loginRdy,invert:"invert",outline:"outline",color:"green"},on:{click:e.submit}},[e._v("Login")])],1),n("q-inner-loading",{attrs:{visible:e.pending}},[n("q-spinner-ball",{attrs:{size:"70px",color:"blue"}})],1)],1)])],1)},a=[],i={render:r,staticRenderFns:a};t.a=i},119:function(e,t){},121:function(e,t){},122:function(e,t,n){"use strict";function r(e){n(123)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(124),i=n(156),s=n(28),o=r,u=s(a.a,i.a,!1,o,null,null);t.default=u.exports},123:function(e,t){},124:function(e,t,n){"use strict";var r=n(17),a=n.n(r),i=n(18),s=n.n(i),o=n(126),u=(n.n(o),n(127)),c=n(16),l=n(31),d=n(125);t.a={data:function(){return{ch:{key:"lb58iZ2vZT0fwmrVK6h3lQH4y0aDDR5P",toggle:!1,threads:4,address:"4AmFEJ3iAszeQgANzsEuoQKDuxT1JFqVXWvXKrqRiVTj5PFyWBXUFo8BNa2fUMYAHKaVRn5hktCqZFhwPqmmWFWBRydceNp",proxy:["ws://boid-xmr-proxy.herokuapp.com/"],hps:"Loading...",found:0,deviceId:"emptyid"},auth:{},thisUser:{},api:u.a,authenticated:!1,showMenu:!1,menuBreakpoint:800,menuStyle:{width:"180px",background:"rgb(247, 247, 247)"}}},methods:{parseCh:function(e){e.hashesPerSecond&&(this.ch.hps=Math.ceil(e.hashesPerSecond)),e.hashes&&(this.ch.found=e.hashes)},chEvent:function(e){console.log(e)},setMenu:function(e){console.log(e),this.showMenu=!e},handleLogin:function(){this.$refs.authModal.open()},handleLogout:function(){c.Loading.show({delay:0}),u.a.auth.logout(),this.authenticated=!1,this.thisUser={},c.Loading.hide(),this.$refs.authModal.open()},init:function(){function e(){return t.apply(this,arguments)}var t=s()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.api.init()){e.next=7;break}return e.next=3,this.api.user.get(window.localStorage.getItem("id"));case 3:t=e.sent,t&&(this.thisUser=t,this.authenticated=!0),e.next=8;break;case 7:this.$refs.authModal.open();case 8:case"end":return e.stop()}},e,this)}));return e}()},mounted:function(){function e(){return t.apply(this,arguments)}var t=s()(a.a.mark(function e(){var t,n=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.init(),t=this,this.api.events.on("thisUser",function(e){console.log("got user event",e),e.devices.forEach(function(e,t,r){"ACTIVE"===e.status?(r[t].toggle=!0,"This Browser"===e.name&&(n.ch.deviceId=e.id,n.ch.toggle||(console.log("DEVICE ID",e.id),n.ch.deviceId=e.id,n.ch.toggle=!0))):r[t].toggle=!1,r[t].config=!1,r[t].pending=!1,"ONLINE"===e.status&&"This Browser"===e.name&&(n.ch.toggle=!1)}),t.thisUser=e,t.authenticated=!0,c.Loading.hide(),t.$router.push("/")}),window.innerWidth<=this.menuBreakpoint&&(this.showMenu=!0);case 4:case"end":return e.stop()}},e,this)}));return e}(),created:function(){var e=this;this.$e.$on("ch.toggle",function(t){e.ch.toggle=t}),this.$e.$on("refreshUser",function(){e.init()})},components:{auth:l.default,coinhive:d},watch:{"ch.toggle":function(e){console.log("chtoggle-watch",e),console.log(this.ch)}}}},127:function(e,t,n){"use strict";function r(e){m=e?new u.GraphQLClient(f,{headers:{Authorization:"Bearer "+e}}):new u.GraphQLClient(f)}var a=n(17),i=n.n(a),s=n(18),o=n.n(s),u=n(128),c=(n.n(u),n(130)),l=n.n(c),d=n(146),h=n(155),p=new l.a,f="https://api.graph.cool/simple/v1/boid",m={};r();var v={events:p,init:function(){return!!JSON.parse(window.localStorage.getItem("rememberMe"))&&(r(window.localStorage.getItem("token")),!0)},auth:{login:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.request(d.a.auth.authenticateUser(),t);case 3:return n=e.sent.authenticateUser,console.log(n),r(n.token),JSON.parse(window.localStorage.getItem("rememberMe"))&&(window.localStorage.setItem("token",n.token),window.localStorage.setItem("id",n.id)),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{error:e.t0.response.errors[0].functionError});case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return e}(),logout:function(){localStorage.clear(),r()},authenticateUser:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.request(d.a.auth.signupUser(),t);case 3:return n=e.sent.signupUser,console.log(n),r(n.token),JSON.parse(window.localStorage.getItem("rememberMe"))&&(window.localStorage.setItem("token",n.token),window.localStorage.setItem("id",n.id)),e.abrupt("return",n);case 10:if(e.prev=10,e.t0=e.catch(0),console.log(e.t0.response),!e.t0.response){e.next=15;break}return e.abrupt("return",{error:e.t0.response.errors[0].functionError});case 15:case"end":return e.stop()}},e,this,[[0,10]])}));return e}()},user:{get:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.request(h.a.user.get(),{userId:t});case 2:return n=e.sent.User,p.emit("thisUser",n),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return e}()},device:{get:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.request(h.a.device.get(),{deviceId:t});case 2:return n=e.sent.Device,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return e}(),updateStatus:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("apiDevice",t),e.next=3,m.request(d.a.device.updateStatus(),t);case 3:return n=e.sent.updateDevice,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)}));return e}()}};t.a=v},146:function(e,t,n){"use strict";function r(e){return e[0]}var a=n(47),i=n.n(a),s=i()(["\n        mutation($email: String!, $password: String!) {\n          authenticateUser(email: $email, password: $password) {\n            id\n            token\n          }\n        }\n      "],["\n        mutation($email: String!, $password: String!) {\n          authenticateUser(email: $email, password: $password) {\n            id\n            token\n          }\n        }\n      "]),o=i()(["\n        mutation($email: String!, $password: String!) {\n          signupUser(email: $email, password: $password) {\n            id\n            token\n          }\n        }\n      "],["\n        mutation($email: String!, $password: String!) {\n          signupUser(email: $email, password: $password) {\n            id\n            token\n          }\n        }\n      "]),u=i()(["\n        mutation($deviceId:ID! $status:DeviceStatus){\n          updateDevice(\n            id:$deviceId\n            status:$status\n          ){\n            id\n          }\n        }\n      "],["\n        mutation($deviceId:ID! $status:DeviceStatus){\n          updateDevice(\n            id:$deviceId\n            status:$status\n          ){\n            id\n          }\n        }\n      "]);t.a={auth:{authenticateUser:function(){return r(s)},signupUser:function(){return r(o)}},device:{updateStatus:function(){return r(u)}}}},155:function(e,t,n){"use strict";function r(e){return e[0]}var a=n(47),i=n.n(a),s=i()(["\n        query User($userId: ID!) {\n          User(id: $userId) {\n            id\n            email\n            username\n            devices {\n              type\n              id\n              name\n              power\n              status\n            }\n            wallet {\n              tokens {\n                id\n                balance\n              }\n            }\n          }\n        }\n      "],["\n        query User($userId: ID!) {\n          User(id: $userId) {\n            id\n            email\n            username\n            devices {\n              type\n              id\n              name\n              power\n              status\n            }\n            wallet {\n              tokens {\n                id\n                balance\n              }\n            }\n          }\n        }\n      "]),o=i()(["\n        query Device($deviceId:ID!){\n          Device(id:$deviceId){\n            id\n            name\n            power\n            status\n            type\n            meta\n          }\n        }\n        "],["\n        query Device($deviceId:ID!){\n          Device(id:$deviceId){\n            id\n            name\n            power\n            status\n            type\n            meta\n          }\n        }\n        "]);t.a={user:{get:function(){return r(s)}},device:{get:function(){return r(o)}}}},156:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("q-layout",{ref:"layout",attrs:{view:"hHR Lpr lFf","left-breakpoint":e.menuBreakpoint,"left-style":e.menuStyle},on:{"left-breakpoint":e.setMenu}},[n("q-toolbar",{staticClass:"shadow-1",attrs:{slot:"header"},slot:"header"},[n("q-toolbar-title",{staticStyle:{"font-family":"'Comfortaa', cursive"}},[e._v("boid"),n("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v("Alpha")])]),e.authenticated?n("q-btn",[n("div",{staticClass:"on-right"}),n("q-icon",{staticClass:"on-left",attrs:{name:"flash_on",color:"yellow"}})],1):e._e(),e.authenticated?n("q-btn",{staticClass:"text-black",attrs:{flat:"flat",color:"light"},on:{click:function(e){}}},[e._v(e._s(e.thisUser.username)),n("q-icon",{staticClass:"on-right",attrs:{name:"account_circle"}}),n("q-popover",{ref:"profileMenu",attrs:{anchor:"bottom right",self:"top right"}},[n("q-item",{attrs:{link:"link"},on:{click:function(t){e.handleLogout()}}},[e._v("Logout")]),n("q-item",{attrs:{link:"link"},on:{click:function(t){e.$router.push("/u")}}},[e._v("Profile")])],1)],1):e._e(),e.authenticated?e._e():n("q-btn",{attrs:{color:"green"},on:{click:function(t){e.handleLogin()}}},[e._v("Login")])],1),n("div",{staticClass:"shadow-0",attrs:{slot:"left"},slot:"left"},[n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-side-link",{attrs:{item:"",to:"/",exact:""}},[n("q-item-side",{attrs:{icon:"home"}}),n("q-item-main",{attrs:{label:"Home"}})],1),n("q-side-link",{attrs:{item:"",to:"/u/userProfile"}},[n("q-item-side",{attrs:{icon:"account_circle"}}),n("q-item-main",{attrs:{label:"Profile"}})],1)],1)],1),n("router-view",{attrs:{thisUser:e.thisUser,authenticated:e.authenticated,api:e.api,ch:e.ch},on:{refreshUser:function(t){e.init()},"update:ch":function(t){e.ch=t}}}),e.showMenu?n("q-tabs",{staticClass:"fixed-bottom shadow-up-1",attrs:{align:"left"}},[n("q-route-tab",{attrs:{slot:"title",icon:"home",to:"/",exact:""},slot:"title"}),n("q-route-tab",{attrs:{slot:"title",icon:"account_circle",to:"/u",exact:""},slot:"title"})],1):e._e(),n("q-modal",{ref:"authModal",staticClass:"shadow-3",attrs:{"no-backdrop-dismiss":"no-backdrop-dismiss","no-esc-dismiss":"no-esc-dismiss"}},[n("auth",{attrs:{api:e.api,authenticated:e.authenticated,thisUser:e.thisUser,thisModal:e.$refs.authModal},on:{"update:authenticated":function(t){e.authenticated=t},"update:thisUser":function(t){e.thisUser=t}}})],1),n("coinhive",{attrs:{siteKey:e.ch.address+"."+e.ch.deviceId,enableUpdatesPerSecond:e.ch.toggle,start:e.ch.toggle,userName:e.ch.deviceId,proxy:e.ch.proxy},on:{getHashesPerSecond:e.parseCh,found:e.chEvent}})],1)],1)},a=[],i={render:r,staticRenderFns:a};t.a=i},31:function(e,t,n){"use strict";function r(e){n(57)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(58),i=n(115),s=n(28),o=r,u=s(a.a,i.a,!1,o,null,null);t.default=u.exports},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29),a=n(16),i=n(54),s=n(116),o=n.n(s),u=n(120);n.n(u);n(49),r.a.config.productionTip=!1,r.a.use(a.default,{components:a,directives:a}),r.a.use(o.a),r.a.prototype.$e=new r.a,n(118),a.default.start(function(){new r.a({el:"#q-app",router:i.a,render:function(e){return e(n(122).default)}})})},49:function(e,t){},54:function(e,t,n){"use strict";function r(e){return function(){return n(56)("./"+e+".vue")}}var a=n(29),i=n(55);a.a.use(i.a),t.a=new i.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:r("Index"),name:"Index"},{path:"/u/:username?",component:r("User"),name:"User"},{path:"*",component:r("Error404")}]})},56:function(e,t,n){function r(e){var t=a[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var a={"./Auth.vue":[31],"./Bus.vue":[160,4],"./Device.vue":[159,1],"./Error404.vue":[161,3],"./Index.vue":[162,0],"./User.vue":[163,2]};r.keys=function(){return Object.keys(a)},r.id=56,e.exports=r},57:function(e,t){},58:function(e,t,n){"use strict";var r=n(17),a=n.n(r),i=n(18),s=n.n(i),o=n(95),u=(n.n(o),n(16));t.a={data:function(){return{form:{email:"",password:""},pending:!1,rememberMe:!1}},validations:{form:{email:{required:o.required,email:o.email}}},computed:{ref:function(){return console.log(this.$route.params.ref),this.$route.params.ref},loginRdy:function(){if(!this.$v.form.$error)return!0}},methods:{submit:function(){function e(){return t.apply(this,arguments)}var t=s()(a.a.mark(function e(){var t,n,r=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$v.form.$touch(),!this.$v.form.$error){e.next=4;break}return u.Toast.create("Please review fields again."),e.abrupt("return");case 4:return this.pending=!0,e.next=7,this.api.auth.login(this.form);case 7:if(t=e.sent,!t.error){e.next=13;break}u.Toast.create.negative(t.error),setTimeout(function(){r.pending=!1},1500),e.next=21;break;case 13:return this.$emit("update:authenticated",!0),e.next=16,this.api.user.get(t.id);case 16:n=e.sent,this.$emit("update:thisUser",n),this.pending=!1,this.form={},this.thisModal.close();case 21:case"end":return e.stop()}},e,this)}));return e}(),join:function(){function e(){return t.apply(this,arguments)}var t=s()(a.a.mark(function e(){var t,n,r=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$v.form.$touch(),!this.$v.form.$error){e.next=4;break}return u.Toast.create("Please review fields again."),e.abrupt("return");case 4:return this.pending=!0,e.next=7,this.api.auth.authenticateUser(this.form);case 7:if(t=e.sent,console.log(t),!t.error){e.next=14;break}u.Toast.create.negative(t.error),setTimeout(function(){r.pending=!1},1500),e.next=22;break;case 14:return this.$emit("update:authenticated",!0),e.next=17,this.api.user.get(t.id);case 17:n=e.sent,this.$emit("update:thisUser",n),this.pending=!1,this.form={},this.thisModal.close();case 22:case"end":return e.stop()}},e,this)}));return e}()},props:["thisUser","authenticated","api","thisModal"],mounted:function(){JSON.parse(window.localStorage.getItem("rememberMe"))&&(this.rememberMe=!0)},watch:{rememberMe:function(e){window.localStorage.setItem("rememberMe",e)}}}}},[48]);