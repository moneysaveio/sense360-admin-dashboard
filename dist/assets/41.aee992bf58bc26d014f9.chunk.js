webpackJsonp([41],{1001:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(2),o=n(r),i=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},a=function(e,t,s){return 0===s?"#/":"#/"+e.split(t)[0]+t},d=function(e){var t=e.title,s=e.match,n=s.path.substr(1);n.split("/");return o.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},o.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t))},u=d;t.default=u;var c=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"getDisplayString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(a,"getUrlString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(d,"ContainerHeader","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"getDisplayString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(a,"getUrlString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(d,"ContainerHeader","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"))}()},2210:function(e,t,s){"use strict";e.exports=s(2211)},2211:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),d=s(2),u=n(d),c=s(3),_=n(c),l=s(87),p=n(l),f=s(2212),h=function(e){function t(e){r(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.onLoad=s.onLoad.bind(s),s.state={isScriptLoaded:e.isScriptLoaded},s}return i(t,e),a(t,[{key:"componentDidMount",value:function(){this.state.isScriptLoaded?this.onLoad():f(this.props.scriptUrl,this.onLoad)}},{key:"componentWillReceiveProps",value:function(e){var t=this.editorInstance;t&&t.getData()!==e.content&&t.setData(e.content)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0}},{key:"onLoad",value:function(){if(!this.unmounting){if(this.setState({isScriptLoaded:!0}),!window.CKEDITOR)return void console.error("CKEditor not found");this.editorInstance=window.CKEDITOR.appendTo(p.default.findDOMNode(this),this.props.config,this.props.content);for(var e in this.props.events){var t=this.props.events[e];this.editorInstance.on(e,t)}}}},{key:"render",value:function(){return u.default.createElement("div",{className:this.props.activeClass})}}]),t}(u.default.Component);h.defaultProps={content:"",config:{},isScriptLoaded:!1,scriptUrl:"https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js",activeClass:"",events:{}},h.propTypes={content:_.default.any,config:_.default.object,isScriptLoaded:_.default.bool,scriptUrl:_.default.string,activeClass:_.default.string,events:_.default.object},t.default=h},2212:function(e,t){function s(e,t){for(var s in t)e.setAttribute(s,t[s])}function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async=!("async"in t)||!!t.async,a.src=e,t.attrs&&s(a,t.attrs),t.text&&(a.text=""+t.text),("onload"in a?n:r)(a,o),a.onload||n(a,o),i.appendChild(a)}},930:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":a(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":a(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),u=s(2),c=n(u),_=s(2210),l=n(_),p=s(1001),f=n(p),h=s(50),m=n(h),g=function(e){function t(e){r(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.updateContent=s.updateContent.bind(s),s.state={content:"<h2>Awesome Rich Content</h2>\n<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n\n<ul>\n        <li>ullamcorper ligula</li>\n        <li>Duis vel neque</li>\n</ul>\n\n<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n"},s}return i(t,e),d(t,[{key:"updateContent",value:function(e){this.setState({content:e})}},{key:"onChange",value:function(e){var t=e.editor.getData();this.setState({content:t})}},{key:"onBlur",value:function(e){console.log("onBlur event called with event info: ",e)}},{key:"afterPaste",value:function(e){console.log("afterPaste event called with event info: ",e)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(f.default,{title:c.default.createElement(m.default,{id:"sidebar.editors.CKEditor"}),match:this.props.match}),c.default.createElement("div",{className:"jr-card"},c.default.createElement(l.default,{activeClass:"p10",content:this.state.content,events:{blur:this.onBlur.bind(this),afterPaste:this.afterPaste.bind(this),change:this.onChange.bind(this)}})))}}]),t}(c.default.Component),b=g;t.default=b;var C=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(g,"CK","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(b,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"_createClass","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(c,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(l,"_reactCkeditorComponent2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(f,"_index2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(m,"_IntlMessages2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(r,"_classCallCheck","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(o,"_possibleConstructorReturn","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(i,"_inherits","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(g,"CK","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(b,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"),__REACT_HOT_LOADER__.register(C,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/editors/routes/CK/index.js"))}()}});
//# sourceMappingURL=41.aee992bf58bc26d014f9.chunk.js.map