webpackJsonp([32],{1001:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(2),l=a(r),n=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},d=function(e,t,s){return 0===s?"#/":"#/"+e.split(t)[0]+t},o=function(e){var t=e.title,s=e.match,a=s.path.substr(1);a.split("/");return l.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},l.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t))},i=o;t.default=i;var c=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"getDisplayString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(d,"getUrlString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(o,"ContainerHeader","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(n,"getDisplayString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(d,"getUrlString","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(o,"ContainerHeader","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/ContainerHeader/index.js"))}()},1003:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(2),l=a(r),n=function(e){var t=e.heading,s=e.children,a=e.styleName,r=e.cardStyle,n=e.childrenStyle,d=e.headerOutside;return l.default.createElement("div",{className:""+a},d&&l.default.createElement("div",{className:"jr-entry-header"},l.default.createElement("h3",{className:"entry-heading heading"},t),s.length>1&&l.default.createElement("div",{className:"entry-description"},s[0])),l.default.createElement("div",{className:"jr-card "+r},!d&&t&&l.default.createElement("div",{className:"jr-card-header"},l.default.createElement("h3",{className:"card-heading"},t),s.length>1&&l.default.createElement("div",{className:"sub-heading"},s[0])),l.default.createElement("div",{className:"jr-card-body "+n},s.length>1?s[1]:s)))},d=n;t.default=d,n.defaultProps={cardStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"};var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"CardBox","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(d,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(n,"CardBox","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(d,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/CardBox/index.js"))}()},1940:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(2),l=a(r),n=s(78),d=function(){return l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-lg-6 col-12"},l.default.createElement("h5",null,"Default Alerts"),l.default.createElement(n.Alert,{className:"border",color:"default"},"This is a default alert — check it out!"),l.default.createElement("h5",null,"primary Alerts"),l.default.createElement(n.Alert,{className:"border",color:"primary"},"This is a primary alert — check it out!"),l.default.createElement("h5",null,"Secondary Alerts"),l.default.createElement(n.Alert,{className:"border",color:"secondary"},"This is a secondary alert — check it out!"),l.default.createElement("h5",null,"Success Alerts"),l.default.createElement(n.Alert,{className:"border",color:"success"},"This is a success alert — check it out!"),l.default.createElement("h5",null,"Danger Alerts"),l.default.createElement(n.Alert,{className:"border",color:"danger"},"This is a danger alert — check it out!")),l.default.createElement("div",{className:"col-lg-6 col-12"},l.default.createElement("h5",null,"Warning Alerts"),l.default.createElement(n.Alert,{className:"border",color:"warning"},"This is a warning alert — check it out!"),l.default.createElement("h5",null,"Info Alerts"),l.default.createElement(n.Alert,{className:"border",color:"info"},"This is a info alert — check it out!"),l.default.createElement("h5",null,"Light Alerts"),l.default.createElement(n.Alert,{className:"border",color:"light"},"This is a light alert — check it out!"),l.default.createElement("h5",null,"Dark Alerts"),l.default.createElement(n.Alert,{className:"border",color:"dark"},"This is a dark alert — check it out!")))},o=d;t.default=o;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"DefaultAlerts","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/default/DefaultAlerts.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/default/DefaultAlerts.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/default/DefaultAlerts.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/default/DefaultAlerts.js"),__REACT_HOT_LOADER__.register(d,"DefaultAlerts","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/default/DefaultAlerts.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/default/DefaultAlerts.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/default/DefaultAlerts.js"))}()},1941:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(2),l=a(r),n=s(78),d=function(){return l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-lg-6 col-12"},l.default.createElement("h5",null,"Default Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"bg-white text-black border"},"This is Default alert — check it out!"),l.default.createElement("h5",null,"Primary Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"bg-primary text-white border-primary"},"This is a primary alert — check it out!"),l.default.createElement("h5",null,"Secondary Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"bg-secondary text-white border-secondary"},"This is a secondary alert — check it out!"),l.default.createElement("h5",null,"Success Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"bg-success text-white border-success"},"This is a success alert — check it out!"),l.default.createElement("h5",null,"Danger Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"bg-danger text-white border-danger"},"This is a danger alert — check it out!")),l.default.createElement("div",{className:"col-lg-6 col-12"},l.default.createElement("h5",null,"Warning Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"bg-warning text-white border-warning"},"This is a warning alert — check it out!"),l.default.createElement("h5",null,"Info Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"bg-info text-white border-info"},"This is a info alert — check it out!"),l.default.createElement("h5",null,"Light Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"bg-light text-black border-light"},"This is a light alert — check it out!"),l.default.createElement("h5",null,"Dark Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"bg-dark text-white border-dark"},"This is a dark alert — check it out!")))},o=d;t.default=o;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"DismissingAlerts","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/dismiss/DismissingAlerts.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/dismiss/DismissingAlerts.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/dismiss/DismissingAlerts.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/dismiss/DismissingAlerts.js"),__REACT_HOT_LOADER__.register(d,"DismissingAlerts","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/dismiss/DismissingAlerts.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/dismiss/DismissingAlerts.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/dismiss/DismissingAlerts.js"))}()},1942:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(2),l=a(r),n=s(78),d=function(){return l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-lg-6 col-12"},l.default.createElement("h5",null,"Default Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"alert-addon-card bg-white text-black border overflow-hidden"},l.default.createElement("span",{className:"icon-addon alert-addon"},l.default.createElement("i",{className:"zmdi zmdi-case-play zmdi-hc-fw zmdi-hc-lg"})),l.default.createElement("span",{className:"d-inline-block"},"This is a Default alert — check it out!")),l.default.createElement("h5",null,"Primary Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"alert-addon-card bg-primary text-white overflow-hidden border-primary"},l.default.createElement("span",{className:"icon-addon alert-addon"},l.default.createElement("i",{className:"zmdi zmdi-case-play zmdi-hc-fw zmdi-hc-lg"})),l.default.createElement("span",{className:"d-inline-block"},"This is a Primary alert — check it out!")),l.default.createElement("h5",null,"Secondary Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"alert-addon-card bg-secondary text-white overflow-hidden border-secondary"},l.default.createElement("span",{className:"icon-addon alert-addon"},l.default.createElement("i",{className:"zmdi zmdi-notifications zmdi-hc-fw zmdi-hc-lg"})),l.default.createElement("span",{className:"d-inline-block"},"This is a Secondary alert — check it out!")),l.default.createElement("h5",null,"Success Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"alert-addon-card bg-success bg-success text-white overflow-hidden border-success"},l.default.createElement("span",{className:"icon-addon alert-addon"},l.default.createElement("i",{className:"zmdi zmdi-cloud-done zmdi-hc-fw zmdi-hc-lg"})),l.default.createElement("span",{className:"d-inline-block"},"This is a Success alert — check it out!")),l.default.createElement("h5",null,"Danger Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"alert-addon-card bg-danger bg-danger text-white overflow-hidden border-danger"},l.default.createElement("span",{className:"icon-addon alert-addon"},l.default.createElement("i",{className:"zmdi zmdi-delete zmdi-hc-fw zmdi-hc-lg"})),l.default.createElement("span",{className:"d-inline-block"},"This is a Danger alert — check it out!"))),l.default.createElement("div",{className:"col-lg-6 col-12"},l.default.createElement("h5",null,"Warning Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"alert-addon-card bg-warning bg-warning text-white overflow-hidden border-warning"},l.default.createElement("span",{className:"icon-addon alert-addon"},l.default.createElement("i",{className:"zmdi zmdi-headset zmdi-hc-fw zmdi-hc-lg"})),l.default.createElement("span",{className:"d-inline-block"},"This is a Warning alert — check it out!")),l.default.createElement("h5",null,"Info Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"alert-addon-card bg-info bg-info text-white overflow-hidden border-info"},l.default.createElement("span",{className:"icon-addon alert-addon"},l.default.createElement("i",{className:"zmdi zmdi-info zmdi-hc-fw zmdi-hc-lg"})),l.default.createElement("span",{className:"d-inline-block"},"This is a Info alert — check it out!")),l.default.createElement("h5",null,"Light Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"alert-addon-card bg-light bg-light text-black overflow-hidden border-light"},l.default.createElement("span",{className:"icon-addon alert-addon"},l.default.createElement("i",{className:"zmdi zmdi-shopping-basket zmdi-hc-fw zmdi-hc-lg"})),l.default.createElement("span",{className:"d-inline-block"},"This is a Light alert — check it out!")),l.default.createElement("h5",null,"Dark Alerts"),l.default.createElement(n.UncontrolledAlert,{className:"alert-addon-card bg-dark bg-dark text-white overflow-hidden border-dark"},l.default.createElement("span",{className:"icon-addon alert-addon"},l.default.createElement("i",{className:"zmdi zmdi-wifi zmdi-hc-fw zmdi-hc-lg"})),l.default.createElement("span",{className:"d-inline-block"},"This is a Dark alert — check it out!"))))},o=d;t.default=o;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"AlertsWithIcons","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/icon/AlertsWithIcons.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/icon/AlertsWithIcons.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/icon/AlertsWithIcons.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/icon/AlertsWithIcons.js"),__REACT_HOT_LOADER__.register(d,"AlertsWithIcons","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/icon/AlertsWithIcons.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/icon/AlertsWithIcons.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/icon/AlertsWithIcons.js"))}()},1943:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(2),l=a(r),n=s(78),d=function(){return l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-lg-6 col-12"},l.default.createElement("h5",null,"Default Alerts"),l.default.createElement(n.Alert,{className:"bg-white border text-black"},"This is a default alert — check it out!"),l.default.createElement("h5",null,"Primary Alerts"),l.default.createElement(n.Alert,{className:"bg-primary border-primary text-white"},"This is a primary alert — check it out!"),l.default.createElement("h5",null,"Secondary Alerts"),l.default.createElement(n.Alert,{className:"bg-secondary border-secondary text-white"},"This is a secondary alert — check it out!"),l.default.createElement("h5",null,"Success Alerts"),l.default.createElement(n.Alert,{className:"bg-success border-success text-white"},"This is a success alert — check it out!"),l.default.createElement("h5",null,"Danger Alerts"),l.default.createElement(n.Alert,{className:"bg-danger border-danger text-white"},"This is a danger alert — check it out!")),l.default.createElement("div",{className:"col-lg-6 col-12"},l.default.createElement("h5",null,"Warning Alerts"),l.default.createElement(n.Alert,{className:"bg-warning border-warning text-white"},"This is a warning alert — check it out!"),l.default.createElement("h5",null,"Info Alerts"),l.default.createElement(n.Alert,{className:"bg-info border-info text-white"},"This is a info alert — check it out!"),l.default.createElement("h5",null,"Light Alerts"),l.default.createElement(n.Alert,{className:"bg-light border-light text-black"},"This is a light alert — check it out!"),l.default.createElement("h5",null,"Dark Alerts"),l.default.createElement(n.Alert,{className:"bg-dark border-dark text-white"},"This is a dark alert — check it out!")))},o=d;t.default=o;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"HighlightedAlerts","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/heighlighted/HighlightedAlerts.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/heighlighted/HighlightedAlerts.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/heighlighted/HighlightedAlerts.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/heighlighted/HighlightedAlerts.js"),__REACT_HOT_LOADER__.register(d,"HighlightedAlerts","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/heighlighted/HighlightedAlerts.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/heighlighted/HighlightedAlerts.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/heighlighted/HighlightedAlerts.js"))}()},1944:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(2),l=a(r),n=s(78),d=function(){return l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-lg-6 col-12"},l.default.createElement(n.Alert,{className:"border-primary bg-primary text-white"},l.default.createElement("h3",{className:"alert-heading"},"Welcome!"),l.default.createElement("p",null,"You are successfully login into your account. We recommend you to go the settings and use our 2 step verification system."))),l.default.createElement("div",{className:"col-lg-6 col-12"},l.default.createElement(n.Alert,{className:"border-danger",color:"danger"},l.default.createElement("h3",{className:"alert-heading"},"Security Alert!"),l.default.createElement("p",null,"It seems like that your login information is compromised. Last time you login from was London. Secure Your Account"))))},o=d;t.default=o;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"AlertWithDetailed","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/detailed/AlertWithDetailed.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/detailed/AlertWithDetailed.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/detailed/AlertWithDetailed.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/detailed/AlertWithDetailed.js"),__REACT_HOT_LOADER__.register(d,"AlertWithDetailed","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/detailed/AlertWithDetailed.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/detailed/AlertWithDetailed.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/detailed/AlertWithDetailed.js"))}()},902:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(2),l=a(r),n=s(1001),d=a(n),o=s(1003),i=a(o),c=s(1940),u=a(c),_=s(1941),m=a(_),h=s(1942),f=a(h),g=s(1943),p=a(g),E=s(1944),A=a(E),T=s(50),D=a(T),b=function(e){var t=e.match;return l.default.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},l.default.createElement(d.default,{title:l.default.createElement(D.default,{id:"sidebar.components.alerts"}),match:t}),l.default.createElement("div",{className:"row mb-md-4"},l.default.createElement(i.default,{styleName:"col-lg-12",heading:l.default.createElement(D.default,{id:"component.alert.default"}),headerOutside:!0},l.default.createElement("div",null,"Alerts are available for any length of text. There are total of eight css classes could be used to draw an alert message. These classes are ",l.default.createElement("span",{className:"text-danger"},".alert-success, .alert-danger, .alert-info, .alert-primary, .alert-secondary, .alert-warning, .alert-light, .alert-dark")),l.default.createElement(u.default,null))),l.default.createElement("div",{className:"row mb-md-4"},l.default.createElement(i.default,{styleName:"col-lg-12",heading:l.default.createElement(D.default,{id:"component.alert.highlighted"}),headerOutside:!0},l.default.createElement("div",null,"Alerts are available for any length of text. There are total of eight css classes could be used to draw an alert message. These classes are ",l.default.createElement("span",{className:"text-danger"},".alert-success, .alert-danger, .alert-info, .alert-primary, .alert-secondary, .alert-warning, .alert-light, .alert-dark")),l.default.createElement(p.default,null))),l.default.createElement("div",{className:"row mb-md-4"},l.default.createElement(i.default,{styleName:"col-lg-12",heading:l.default.createElement(D.default,{id:"component.alert.dismissible"}),headerOutside:!0},l.default.createElement("div",null,"Alerts are available for any length of text. There are total of eight css classes could be used to draw an alert message. These classes are ",l.default.createElement("span",{className:"text-danger"},".alert-success, .alert-danger, .alert-info, .alert-primary, .alert-secondary, .alert-warning, .alert-light, .alert-dark")),l.default.createElement(m.default,null))),l.default.createElement("div",{className:"row mb-md-4"},l.default.createElement(i.default,{styleName:"col-12",heading:l.default.createElement(D.default,{id:"component.alert.withIcons"}),headerOutside:!0},l.default.createElement("div",null,"Alerts are available for any length of text. There are total of eight css classes could be used to draw an alert message. These classes are ",l.default.createElement("span",{className:"text-danger"},".alert-success, .alert-danger, .alert-info, .alert-primary, .alert-secondary, .alert-warning, .alert-light, .alert-dark")),l.default.createElement(f.default,null))),l.default.createElement("div",{className:"row mb-md-4"},l.default.createElement(i.default,{styleName:"col-12",cardStyle:"p-0 bg-transparent border-0",heading:l.default.createElement(D.default,{id:"component.alert.withDetailedHTML"}),headerOutside:!0},l.default.createElement("div",null,"Alerts are available for any length of text. There are total of eight css classes could be used to draw an alert message. These classes are ",l.default.createElement("span",{className:"text-danger"},".alert-success, .alert-danger, .alert-info, .alert-primary, .alert-secondary, .alert-warning, .alert-light, .alert-dark")),l.default.createElement(A.default,null))))},O=b;t.default=O;var R=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"Alerts","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(O,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(d,"_index2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(i,"_index4","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(u,"_DefaultAlerts2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(m,"_DismissingAlerts2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(f,"_AlertsWithIcons2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(p,"_HighlightedAlerts2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(A,"_AlertWithDetailed2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(D,"_IntlMessages2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(b,"Alerts","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(O,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"),__REACT_HOT_LOADER__.register(R,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/components/routes/alert/index.js"))}()}});
//# sourceMappingURL=32.aee992bf58bc26d014f9.chunk.js.map