(this["webpackJsonptypescript-react-starter"]=this["webpackJsonptypescript-react-starter"]||[]).push([[0],{117:function(e,t){},12:function(e,t,n){e.exports={container:"List_container__2OosZ",item:"List_item__1y8N8",left:"List_left__KqN5s",right:"List_right__28ilk",time:"List_time__v5igY",item_right:"List_item_right__2jFlG"}},139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),o=n.n(i),c=n(14),s=(n(88),n(7)),l=n(27),u=n(19),p=n(2),m=n(3),d=n(5),f=n(4),h=n(6),_=n(12),g=n.n(_),b=n(15),v=n.n(b),O=n(46),y=n.n(O),j=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).loadAvatar=function(e){return e},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.src,n=e.cls,a=e.uid,i=void 0===a?1:a,o=e.name,c=this.props.doNotUseDefault;t||this.loadAvatar(i);t&&(c=!0);var s=i%5+1;return r.a.createElement("div",{className:v()(y.a.avatar,n)},c?null:r.a.createElement("div",{className:v()(y.a.default,"bg-r".concat(s))},o&&o.slice(-2)))}}]),t}(r.a.Component),E=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.src,e.cls,e.uid,e.name),n=e.msg,a=e.time;return r.a.createElement("div",{className:g.a.item},r.a.createElement(j,{cls:g.a.left,name:t}),r.a.createElement("div",{className:g.a.right},r.a.createElement("p",{className:g.a.time},a),n))}}]),t}(r.a.Component),x=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.src,e.cls,e.uid,e.name),n=e.msg,a=e.time;return r.a.createElement("div",{className:g.a.item_right},r.a.createElement("div",{className:g.a.right},r.a.createElement("p",{className:g.a.time},a),n),r.a.createElement(j,{cls:g.a.left,name:t}))}}]),t}(r.a.Component),C=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).node=void 0,n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){this.node&&this.node.scrollIntoView&&this.node.scrollIntoView(),console.log(this.node,"===this.node")}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.cls,t.uid,t.name,this.props),a=n.msgList,i=n.userId,o=a.length;return r.a.createElement("div",{className:g.a.container},o?a.map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i==t.user_id?r.a.createElement(x,{time:t.time,name:t.username,uid:t.id,ref:function(t){return e.node=t},key:t.id,msg:t.content}):r.a.createElement(E,{time:t.time,name:t.username,uid:t.id,ref:function(t){return e.node=t},key:t.id,msg:t.content})})):null)}}]),t}(r.a.Component),k=n(37),N=n(18),w=n(23),I=n(20),L=n.n(I);var A=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).input=void 0,n.saveInput=function(e){n.input=e},n.keyDownHandler=n.keyDownHandler.bind(Object(w.a)(n)),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"keyDownHandler",value:function(e){var t=this.props,n=t.onPressEnter,a=t.onKeyDown;13===e.keyCode&&n&&n(e),a&&a(e)}},{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"renderAffixInput",value:function(e){var t,n=this.props,a=n.prefix,i=n.suffix,o=n.cls,c=v()((t={},Object(N.a)(t,L.a.affix_input,!0),Object(N.a)(t,L.a.prefix_input,a),Object(N.a)(t,L.a.suffix_input,i),t));return r.a.createElement("span",{className:c},a?r.a.createElement("span",{className:L.a.prefix},a):null,r.a.createElement("input",Object.assign({ref:this.saveInput,className:v()(L.a.input,o)},e)),i?r.a.createElement("span",{className:L.a.suffix},i):null)}},{key:"render",value:function(){var e=this.props,t=e.cls,n=e.prefix,a=e.suffix,i=Object(k.a)(e,["cls","prefix","suffix"]);return"value"in this.props&&(i.value=this.props.value,delete i.defaultValue),n||a?this.renderAffixInput(i):r.a.createElement("input",Object.assign({ref:this.saveInput,className:v()(L.a.input,t)},i,{onKeyDown:this.keyDownHandler}))}}]),t}(a.Component),B=n(75),U=n.n(B),D=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=n.props.onChange;t&&t(e.target.value)},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:U.a.container},r.a.createElement(A,{onChange:this.handleChange,value:this.props.value}))}}]),t}(r.a.Component),S=n(21),T=n.n(S),H=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).clickHandler=n.clickHandler.bind(Object(w.a)(n)),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"clickHandler",value:function(){var e=this.props,t=e.onClick,n=e.disabledWhenLoading;e.loading&&n||t&&t()}},{key:"render",value:function(){var e,t=this.props,n=t.type,a=t.loading,i=t.children,o=t.cls,c=t.size,s=void 0===c?"middle":c,l=(t.htmlType,t.isGroup),u=Object(k.a)(t,["type","loading","children","cls","size","htmlType","isGroup"]),p=v()(T.a.btn,[T.a[n]],[T.a[s]],(e={},Object(N.a)(e,T.a.loading,a),Object(N.a)(e,T.a.in_group,l),e),o);return r.a.createElement("button",Object.assign({className:p,onClick:this.clickHandler},u),a?r.a.createElement("i",{className:v()(T.a.iconfont,T.a["icon-loading"])}):null,i)}}]),t}(a.Component),P={msgList:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"HOME_UPDATE_COUNT":var r=e.msgList,i=void 0===r?[]:r;return console.log(i.concat(a),"msgList.concat(payload)",a),Object(s.a)({},e,{msgList:i.concat(a)});default:return Object(s.a)({},e)}},R=n(76),G=n.n(R),z=n(47),F=n.n(z),J=G()("http://111.229.251.78:8003/"),K=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={message:""},n.handleChange=function(e){n.setState({message:e})},n.sendMsg=function(){var e=n.state.message;J.emit("chat",{user_id:n.props.global.userId,content:e})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;J.on("chat",(function(t){console.log(t,"socket-chat"),e.props.updateMsgList(t),e.setState({message:""})})),this.props.global.userId||(window.location.href="#/login")}},{key:"render",value:function(){var e=this.props,t=e.msgList,n=e.global;return r.a.createElement("div",{className:F.a.container},r.a.createElement(C,{msgList:t,userId:n.userId}),r.a.createElement(D,{onChange:this.handleChange,value:this.state.message}),r.a.createElement("div",{className:F.a.btn},r.a.createElement(H,{type:"primary",size:"small",onClick:this.sendMsg},"\u53d1\u9001")))}}]),t}(r.a.Component),W={updateMsgList:function(e){return{type:"HOME_UPDATE_COUNT",payload:e}},asyncUpdateCount:function(e){return function(t){setTimeout((function(){t({type:"HOME_UPDATE_COUNT",payload:e+1})}),1e3)}}},Q=Object(c.b)((function(e){return Object(s.a)({global:e.global},e.homePage)}),W)(K),V=n(25),X=n.n(V),Z=n(29),Y=n.n(Z);Y.a.defaults.baseURL="http://111.229.251.78:8003/",Y.a.interceptors.response.use((function(e){return console.log(e,"axios.interceptors"),e.data}));var q=function(e,t){return Y.a.get(e,{params:t})},$=function(e){return q("user/login",e)},ee=function(e){return q("user/register",e)},te={},ne=function(e){te=e,localStorage.setItem("LOCAL_STORAGE_USERINFO",JSON.stringify(e))},ae=function(){if(Object.keys(te).length)return te;var e=localStorage.getItem("LOCAL_STORAGE_USERINFO");if(e)try{var t=JSON.parse(e);return te=t}catch(n){}return{}}();console.log(ae,"userInfo");var re={userId:ae.userId,userName:ae.userName},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GLOBAL_UPDATE_USERID":return ne(a),console.log(a,"payload"),Object(s.a)({},e,{},a);default:return Object(s.a)({},e)}},oe=n(48),ce=n.n(oe),se=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).data={},n.onClick=function(){var e;return X.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n.props,"location"),t.next=3,X.a.awrap($(n.data));case 3:200===(e=t.sent).status&&(n.props.updateUserId(e.user_info.id,e.user_info.name),n.props.history.push("/")),alert(e&&e.message);case 6:case"end":return t.stop()}}))},n.onChange=function(e,t){n.data[e]=t.target.value,console.log(t.target.value,"onChange")},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:ce.a.container},r.a.createElement(A,{type:"text",placeholder:"\u7528\u6237\u540d",onChange:this.onChange.bind(this,"username"),style:{marginBottom:"10px"}}),r.a.createElement(A,{type:"password",placeholder:"\u5bc6\u7801",onChange:this.onChange.bind(this,"password"),style:{marginBottom:"10px"}}),r.a.createElement(l.b,{to:"/register",style:{float:"left"}},"\u7acb\u5373\u6ce8\u518c"),r.a.createElement("div",{className:ce.a.btn},r.a.createElement(H,{type:"primary",size:"small",onClick:this.onClick},"\u767b\u5f55")))}}]),t}(r.a.Component),le={updateUserId:function(e,t){return{type:"GLOBAL_UPDATE_USERID",payload:{userId:e,userName:t}}}},ue=Object(u.e)(Object(c.b)((function(e){return Object(s.a)({global:e.global},e.homePage)}),le)(se)),pe=n(51),me=n.n(pe),de=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).data={},n.onClick=function(){var e;return X.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.props.history,t.next=3,X.a.awrap(ee(n.data));case 3:0!==t.sent.code&&e.push("./login");case 5:case"end":return t.stop()}}))},n.onChange=function(e,t){n.data[e]=t.target.value,console.log(t.target.value,"onChange")},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:me.a.container},r.a.createElement(A,{type:"text",placeholder:"\u7528\u6237\u540d",onChange:this.onChange.bind(this,"username"),style:{marginBottom:"10px"}}),r.a.createElement(A,{type:"password",placeholder:"\u5bc6\u7801",onChange:this.onChange.bind(this,"password"),style:{marginBottom:"10px"}}),r.a.createElement("div",{className:me.a.btn},r.a.createElement(H,{type:"primary",size:"small",onClick:this.onClick},"\u6ce8\u518c")))}}]),t}(r.a.Component),fe=Object(u.e)(Object(c.b)((function(e){return Object(s.a)({global:e.global},e.homePage)}),{})(de)),he=function(){Object(c.d)((function(e){return Object(s.a)({},e.global)})),Object(c.c)();return r.a.createElement(l.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:Q}),r.a.createElement(u.a,{exact:!0,path:"/login",component:ue}),r.a.createElement(u.a,{exact:!0,path:"/register",component:fe}))},_e=n(24),ge=(n(138),n(78)),be=Object(_e.c)({global:ie,homePage:M}),ve=function(){return Object(_e.d)(be,Object(_e.a)(ge.a))}();window.TRS_STORE=ve,o.a.render(r.a.createElement(c.a,{store:ve},r.a.createElement(he,null)),document.getElementById("root"))},20:function(e,t,n){e.exports={input:"Input_input__SCFHN",affix_input:"Input_affix_input__3kubb",prefix_input:"Input_prefix_input__1Q-wP",prefix:"Input_prefix__3QSE6",suffix_input:"Input_suffix_input__2ZxwZ",suffix:"Input_suffix__2pHyS"}},21:function(e,t,n){e.exports={iconfont:"Button_iconfont__3zoME","icon-loading":"Button_icon-loading__FO-eS",loadingCircle:"Button_loadingCircle__StONJ",btn:"Button_btn__1iklE",normal:"Button_normal__gxfXj",loading:"Button_loading___7u6u",in_group:"Button_in_group__2KFD1",primary:"Button_primary__3U5oy",text:"Button_text__3UvNg",small:"Button_small__4DYQu",middle:"Button_middle__6OBa8",large:"Button_large__1K9uC"}},46:function(e,t,n){e.exports={avatar:"Avatar_avatar__TDntD",bg:"Avatar_bg__2X89u",default:"Avatar_default__sg-TN"}},47:function(e,t,n){e.exports={container:"style_container__1WWpg",btn:"style_btn__3sneX"}},48:function(e,t,n){e.exports={container:"style_container__3UGcz",btn:"style_btn__2MiBi"}},51:function(e,t,n){e.exports={container:"style_container__1pcsJ",btn:"style_btn__2i1Ww"}},75:function(e,t,n){e.exports={container:"Editor_container__-do5t"}},79:function(e,t,n){e.exports=n(139)},88:function(e,t,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.77f63dd7.chunk.js.map