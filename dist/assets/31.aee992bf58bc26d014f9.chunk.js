webpackJsonp([31],{1001:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(2),o=r(a),n=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},d=function(e,t,s){return 0===s?"#/":"#/"+e.split(t)[0]+t},i=function(e){var t=e.title,s=e.match,r=s.path.substr(1);r.split("/");return o.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},o.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t))},_=i;t.default=_;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"getDisplayString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(d,"getUrlString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"ContainerHeader","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(n,"getDisplayString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(d,"getUrlString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"ContainerHeader","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"))}()},1003:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(2),o=r(a),n=function(e){var t=e.heading,s=e.children,r=e.styleName,a=e.cardStyle,n=e.childrenStyle,d=e.headerOutside;return o.default.createElement("div",{className:""+r},d&&o.default.createElement("div",{className:"jr-entry-header"},o.default.createElement("h3",{className:"entry-heading heading"},t),s.length>1&&o.default.createElement("div",{className:"entry-description"},s[0])),o.default.createElement("div",{className:"jr-card "+a},!d&&t&&o.default.createElement("div",{className:"jr-card-header"},o.default.createElement("h3",{className:"card-heading"},t),s.length>1&&o.default.createElement("div",{className:"sub-heading"},s[0])),o.default.createElement("div",{className:"jr-card-body "+n},s.length>1?s[1]:s)))},d=n;t.default=d,n.defaultProps={cardStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"};var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"CardBox","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(d,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(n,"CardBox","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(d,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"))}()},2004:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":d(t))&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":d(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,s,r){return s&&e(t.prototype,s),r&&e(t,r),t}}(),_=s(2),l=r(_),c=s(78),u=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"badge-group"},l.default.createElement(c.Badge,{color:"primary"},"Primary"),l.default.createElement(c.Badge,{color:"secondary"},"Secondary"),l.default.createElement(c.Badge,{color:"success"},"Success"),l.default.createElement(c.Badge,{color:"danger"},"Danger"),l.default.createElement(c.Badge,{color:"warning"},"Warning"),l.default.createElement(c.Badge,{color:"info"},"Info"),l.default.createElement(c.Badge,{color:"light"},"Light"),l.default.createElement(c.Badge,{color:"dark"},"Dark"))}}]),t}(l.default.Component),p=u;t.default=p;var m=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"Contextual","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"),__REACT_HOT_LOADER__.register(p,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_createClass","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"),__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"),__REACT_HOT_LOADER__.register(a,"_classCallCheck","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"),__REACT_HOT_LOADER__.register(o,"_possibleConstructorReturn","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"),__REACT_HOT_LOADER__.register(n,"_inherits","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"),__REACT_HOT_LOADER__.register(u,"Contextual","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"),__REACT_HOT_LOADER__.register(p,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"),__REACT_HOT_LOADER__.register(m,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/contextual/index.js"))}()},2005:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":d(t))&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":d(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,s,r){return s&&e(t.prototype,s),r&&e(t,r),t}}(),_=s(2),l=r(_),c=s(78),u=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"badge-group"},l.default.createElement(c.Badge,{href:"javascript:void(0)",color:"primary"},"Primary"),l.default.createElement(c.Badge,{href:"javascript:void(0)",color:"secondary"},"Secondary"),l.default.createElement(c.Badge,{href:"javascript:void(0)",color:"success"},"Success"),l.default.createElement(c.Badge,{href:"javascript:void(0)",color:"danger"},"Danger"),l.default.createElement(c.Badge,{href:"javascript:void(0)",color:"warning"},"Warning"),l.default.createElement(c.Badge,{href:"javascript:void(0)",color:"info"},"Info"),l.default.createElement(c.Badge,{href:"javascript:void(0)",color:"light"},"Light"),l.default.createElement(c.Badge,{href:"javascript:void(0)",color:"dark"},"Dark"))}}]),t}(l.default.Component),p=u;t.default=p;var m=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"Links","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"),__REACT_HOT_LOADER__.register(p,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_createClass","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"),__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"),__REACT_HOT_LOADER__.register(a,"_classCallCheck","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"),__REACT_HOT_LOADER__.register(o,"_possibleConstructorReturn","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"),__REACT_HOT_LOADER__.register(n,"_inherits","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"),__REACT_HOT_LOADER__.register(u,"Links","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"),__REACT_HOT_LOADER__.register(p,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"),__REACT_HOT_LOADER__.register(m,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/links/index.js"))}()},2006:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":d(t))&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":d(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,s,r){return s&&e(t.prototype,s),r&&e(t,r),t}}(),_=s(2),l=r(_),c=s(78),u=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"badge-group"},l.default.createElement(c.Badge,{color:"primary",pill:!0},"Primary"),l.default.createElement(c.Badge,{color:"secondary",pill:!0},"Secondary"),l.default.createElement(c.Badge,{color:"success",pill:!0},"Success"),l.default.createElement(c.Badge,{color:"danger",pill:!0},"Danger"),l.default.createElement(c.Badge,{color:"warning",pill:!0},"Warning"),l.default.createElement(c.Badge,{color:"info",pill:!0},"Info"),l.default.createElement(c.Badge,{color:"light",pill:!0},"Light"),l.default.createElement(c.Badge,{color:"dark",pill:!0},"Dark"))}}]),t}(l.default.Component),p=u;t.default=p;var m=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"Pills","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"),__REACT_HOT_LOADER__.register(p,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_createClass","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"),__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"),__REACT_HOT_LOADER__.register(a,"_classCallCheck","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"),__REACT_HOT_LOADER__.register(o,"_possibleConstructorReturn","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"),__REACT_HOT_LOADER__.register(n,"_inherits","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"),__REACT_HOT_LOADER__.register(u,"Pills","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"),__REACT_HOT_LOADER__.register(p,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"),__REACT_HOT_LOADER__.register(m,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/bootstrap/pills/index.js"))}()},2007:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(2),o=r(a),n=s(78),d=function(){return o.default.createElement("div",null,o.default.createElement("h4",{className:"sub-heading"},"Primary button with badge"),o.default.createElement("div",{className:"jr-btn-group"},o.default.createElement(n.Button,{color:"primary",className:"jr-btn"},"Notifications ",o.default.createElement(n.Badge,{className:"ml-2 mb-0",color:"light"},"4")),o.default.createElement(n.Button,{color:"secondary",className:"jr-btn ml-3"},"Cart Items ",o.default.createElement(n.Badge,{className:"ml-2 py-1 mb-0",color:"light rounded-circle"},"5"))),o.default.createElement("h4",{className:"sub-heading"},"Link with badge"),o.default.createElement(n.Button,{className:"jr-btn",color:"inherit"},"Messages ",o.default.createElement(n.Badge,{className:"ml-2 mb-0",color:"primary"},"4")))},i=d;t.default=i;var _=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"ButtonWithBadge","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/button/ButtonWithBadge.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/button/ButtonWithBadge.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/button/ButtonWithBadge.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/button/ButtonWithBadge.js"),__REACT_HOT_LOADER__.register(d,"ButtonWithBadge","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/button/ButtonWithBadge.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/button/ButtonWithBadge.js"),__REACT_HOT_LOADER__.register(_,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/button/ButtonWithBadge.js"))}()},2008:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(2),o=r(a),n=s(78),d=function(){return o.default.createElement("div",null,o.default.createElement("h1",null,"Heading ",o.default.createElement(n.Badge,{color:"secondary"},"New")),o.default.createElement("h2",null,"Heading ",o.default.createElement(n.Badge,{color:"secondary"},"New")),o.default.createElement("h3",null,"Heading ",o.default.createElement(n.Badge,{color:"secondary"},"New")),o.default.createElement("h4",null,"Heading ",o.default.createElement(n.Badge,{color:"secondary"},"New")),o.default.createElement("h5",null,"Heading ",o.default.createElement(n.Badge,{color:"secondary"},"New")),o.default.createElement("h6",null,"Heading ",o.default.createElement(n.Badge,{color:"secondary"},"New")))},i=d;t.default=i;var _=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"BadgeWithHeading","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/heading/BadgeWithHeading.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/heading/BadgeWithHeading.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/heading/BadgeWithHeading.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/heading/BadgeWithHeading.js"),__REACT_HOT_LOADER__.register(d,"BadgeWithHeading","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/heading/BadgeWithHeading.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/heading/BadgeWithHeading.js"),__REACT_HOT_LOADER__.register(_,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/heading/BadgeWithHeading.js"))}()},906:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(2),o=r(a),n=s(1003),d=r(n),i=s(1001),_=r(i),l=s(2004),c=r(l),u=s(2005),p=r(u),m=s(2006),g=r(m),f=s(2007),h=r(f),E=s(2008),b=r(E),O=s(50),R=r(O),T=function(e){var t=e.match;return o.default.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},o.default.createElement(_.default,{title:o.default.createElement(R.default,{id:"sidebar.components.badge"}),match:t}),o.default.createElement("div",{className:"row mb-md-4"},o.default.createElement("div",{className:"col-md-6 order-md-2"},o.default.createElement("div",{className:"jr-entry-header"},o.default.createElement("h3",{className:"entry-heading"},o.default.createElement(R.default,{id:"component.badge.scaling"})),o.default.createElement("div",{className:"entry-description"},"Badges scale to match the size of the immediate parent element by using relative font sizing and ",o.default.createElement("a",{className:"text-danger",href:"javascript:void(0)",title:"em"},"em")," units."))),o.default.createElement(d.default,{styleName:"col-md-6 order-md-1"},o.default.createElement(b.default,null))),o.default.createElement("div",{className:"row mb-md-4"},o.default.createElement("div",{className:"col-md-6 order-md-2"},o.default.createElement("div",{className:"jr-entry-header"},o.default.createElement("h3",{className:"entry-heading"},o.default.createElement(R.default,{id:"component.badge.insideLinks"})),o.default.createElement("div",{className:"entry-description"},"Badges can be used as part of links or buttons to provide a counter. Give two examples here with sr-only class applied."))),o.default.createElement(d.default,{styleName:"col-md-6 order-md-1"},o.default.createElement(h.default,null))),o.default.createElement("div",{className:"row mb-md-4"},o.default.createElement("div",{className:"col-md-6 order-md-2"},o.default.createElement("div",{className:"jr-entry-header"},o.default.createElement("h3",{className:"entry-heading"},o.default.createElement(R.default,{id:"component.badge.contextual"})),o.default.createElement("div",{className:"entry-description"},"Add any of the below mentioned modifier classes to change the appearance of a badge."))),o.default.createElement(d.default,{styleName:"col-md-6 order-md-1",cardStyle:"py-sm-5"},o.default.createElement(c.default,null))),o.default.createElement("div",{className:"row mb-md-4"},o.default.createElement("div",{className:"col-md-6 order-md-2"},o.default.createElement("div",{className:"jr-entry-header"},o.default.createElement("h3",{className:"entry-heading"},o.default.createElement(R.default,{id:"component.badge.pill"})),o.default.createElement("div",{className:"entry-description"},"Use the .badge-pill modifier class to make badges more rounded (with a larger border-radius and additional horizontal padding). Useful if you miss the badges from v3."))),o.default.createElement(d.default,{styleName:"col-md-6 order-md-1",cardStyle:"py-sm-5"},o.default.createElement(g.default,null))),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-6 order-md-2"},o.default.createElement("div",{className:"jr-entry-header"},o.default.createElement("h3",{className:"entry-heading"},o.default.createElement(R.default,{id:"component.badge.link"})),o.default.createElement("div",{className:"entry-description"},"Using the contextual ",o.default.createElement("a",{className:"text-danger",href:"javascript:void(0)",title:"em"},".badge-*")," classes on an",o.default.createElement("code",null,"<a>"),"element quickly provide actionable badges with hover and focus states."))),o.default.createElement(d.default,{styleName:"col-md-6 order-md-1",cardStyle:"py-sm-5"},o.default.createElement(p.default,null))))},A=T;t.default=A;var D=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(T,"Badges","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(A,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(d,"_CardBox2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(_,"_ContainerHeader2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(c,"_contextual2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(p,"_links2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(g,"_pills2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(h,"_ButtonWithBadge2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(b,"_BadgeWithHeading2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(R,"_IntlMessages2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(T,"Badges","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(A,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"),__REACT_HOT_LOADER__.register(D,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/badges/index.js"))}()}});
//# sourceMappingURL=31.aee992bf58bc26d014f9.chunk.js.map