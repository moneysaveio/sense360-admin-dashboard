webpackJsonp([34],{1782:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),r=a(n),o=s(1783),c=a(o),l=function(e){var t=e.chatUsers,s=e.selectedSectionId,a=e.onSelectUser;return r.default.createElement("div",{className:"chat-user"},t.map(function(e,t){return r.default.createElement(c.default,{key:t,chat:e,selectedSectionId:s,onSelectUser:a})}))},i=l;t.default=i;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"ChatUserList","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(c,"_index2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(l,"ChatUserList","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/index.js"))}()},1783:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),r=a(n),o=function(e){var t=e.chat,s=e.selectedSectionId,a=e.onSelectUser;return r.default.createElement("div",{className:"chat-user-item "+(s===t.id?"active":""),onClick:function(){a(t)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:t.thumb,className:"rounded-circle size-40",alt:t.name}),r.default.createElement("span",{className:"chat-mode small "+t.status}))),r.default.createElement("div",{className:"chat-info col-xl-8 col-6"},r.default.createElement("span",{className:"name h4"},t.name),r.default.createElement("div",{className:"chat-info-des"},t.lastMessage.substring(0,25)+"..."),r.default.createElement("div",{className:"last-message-time"},t.lastMessageTime)),r.default.createElement("div",{className:"chat-date col-xl-2 col-3"},r.default.createElement("div",{className:"bg-primary rounded-circle badge text-white"},t.unreadMessage))))},c=o;t.default=c;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"UserCell","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(o,"UserCell","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ChatUserList/UserCell/index.js"))}()},1784:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),r=a(n),o=s(1785),c=a(o),l=s(1786),i=a(l),d=function(e){var t=e.conversationData,s=e.selectedUser;return r.default.createElement("div",{className:"chat-main-content"},t.map(function(e,t){return"sent"===e.type?r.default.createElement(i.default,{key:t,conversation:e}):r.default.createElement(c.default,{key:t,conversation:e,user:s})}))},_=d;t.default=_;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"Conversation","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(c,"_index2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(i,"_index4","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(d,"Conversation","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/index.js"))}()},1785:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),r=a(n),o=function(e){var t=e.conversation,s=e.user;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:s.thumb,alt:""}),r.default.createElement("div",{className:"bubble"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},c=o;t.default=c;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"ReceivedMessageCell","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(o,"ReceivedMessageCell","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}()},1786:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),r=a(n),o=function(e){var t=e.conversation;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item flex-row-reverse"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:"http://via.placeholder.com/150x150",alt:t.name}),r.default.createElement("div",{className:"bubble jambo-card"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},c=o;t.default=c;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"SentMessageCell","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(o,"SentMessageCell","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}()},1787:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),r=a(n),o=s(1788),c=a(o),l=function(e){var t=e.onSelectUser,s=e.selectedSectionId,a=e.contactList;return r.default.createElement("div",{className:"chat-user"},a.map(function(e,a){return r.default.createElement(c.default,{key:a,user:e,selectedSectionId:s,onSelectUser:t})}))},i=l;t.default=i;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"ContactList","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(c,"_index2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"ContactList","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/index.js"))}()},1788:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),r=a(n),o=function(e){var t=e.onSelectUser,s=e.selectedSectionId,a=e.user;return r.default.createElement("div",{className:"chat-user-item "+(s===a.id?"active":""),onClick:function(){t(a)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:a.thumb,className:"rounded-circle size-40",alt:"Abbott"}),r.default.createElement("span",{className:"chat-mode smallcal "+a.status}))),r.default.createElement("div",{className:"chat-contact-col col-xl-10 col-9"},r.default.createElement("div",{className:"h4 name"},a.name),r.default.createElement("div",{className:"chat-info-des"},a.mood.substring(0,30)+"..."))))},c=o;t.default=c;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"UserCell","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(o,"UserCell","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/components/chatPanel/ContactList/UserCell/index.js"))}()},997:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},i=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),d=s(2),_=a(d),u=s(78),m=s(175),h=a(m),f=s(32),p=s(177),E=a(p),g=s(1),v=a(g),C=s(1782),b=a(C),T=s(119),O=a(T),R=s(1784),A=a(R),D=s(118),U=a(D),L=s(1787),x=a(L),N=s(404),k=a(N),P=s(50),j=a(P),H=s(88),y=a(H),S=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.filterContact=function(e){return""===e?U.default.filter(function(e){return!e.recent}):U.default.filter(function(t){return!t.recent&&t.name.toLowerCase().indexOf(e.toLowerCase())>-1})},e.filterUsers=function(e){return""===e?U.default.filter(function(e){return e.recent}):U.default.filter(function(t){return t.recent&&t.name.toLowerCase().indexOf(e.toLowerCase())>-1})},e.Communication=function(){var t=(e.props,e.state),s=t.message,a=t.selectedUser,n=t.conversation,r=n.conversationData;return _.default.createElement("div",{className:"chat-main"},_.default.createElement("div",{className:"chat-main-header"},_.default.createElement("span",{className:"icon-btn d-block d-xl-none chat-btn",onClick:e.onToggleDrawer.bind(e)},_.default.createElement("i",{className:"zmdi zmdi-comment-text"})),_.default.createElement("div",{className:"chat-main-header-info"},_.default.createElement("div",{className:"chat-avatar mr-2"},_.default.createElement("div",{className:"chat-avatar-mode"},_.default.createElement("img",{src:a.thumb,className:"rounded-circle size-60",alt:""}),_.default.createElement("span",{className:"chat-mode "+a.status}))),_.default.createElement("div",{className:"chat-contact-name"},a.name))),_.default.createElement(y.default,{className:"chat-list-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 300px)":"calc(100vh - 255px)"}},_.default.createElement(A.default,{conversationData:r,selectedUser:a})),_.default.createElement("div",{className:"chat-main-footer"},_.default.createElement("div",{className:"d-flex flex-row align-items-center",style:{maxHeight:51}},_.default.createElement("div",{className:"col"},_.default.createElement("div",{className:"form-group"},_.default.createElement("textarea",{id:"required",className:"border-0 form-control chat-textarea",onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),value:s,placeholder:"Type and hit enter to send message"}))),_.default.createElement("div",{className:"chat-sent"},_.default.createElement("span",{className:"icon-btn",onClick:e.submitComment.bind(e)},_.default.createElement("i",{className:"zmdi  zmdi-mail-send"}))))))},e.AppUsersInfo=function(){return _.default.createElement("div",{className:"chat-sidenav-main"},_.default.createElement("div",{className:"bg-grey lighten-5 chat-sidenav-header"},_.default.createElement("div",{className:"chat-user-hd mb-0"},_.default.createElement("span",{className:"icon-btn back-to-chats-button size-30",onClick:function(){e.setState({userState:1})}},_.default.createElement("i",{className:"zmdi zmdi-arrow-back"}))),_.default.createElement("div",{className:"chat-user chat-user-center"},_.default.createElement("div",{className:"chat-avatar mx-auto"},_.default.createElement("img",{src:"http://via.placeholder.com/150x150",className:"avatar avatar-shadow rounded-circle size-60 huge",alt:"John Doe"})),_.default.createElement("div",{className:"user-name h4 my-2"},"Robert Johnson"))),_.default.createElement("div",{className:"chat-sidenav-content"},_.default.createElement(y.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 162px)"}},_.default.createElement("form",{className:"p-4"},_.default.createElement("div",{className:"form-group mt-4"},_.default.createElement("label",null,"Mood"),_.default.createElement(u.Input,{id:"exampleTextarea",multiline:!0,rows:3,onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),defaultValue:"it's a status....not your diary...",placeholder:"Status"}))))))},e.ChatUsers=function(){return _.default.createElement("div",{className:"chat-sidenav-main"},_.default.createElement("div",{className:"chat-sidenav-header"},_.default.createElement("div",{className:"chat-user-hd"},_.default.createElement("div",{className:"chat-avatar mr-3",onClick:function(){e.setState({userState:2})}},_.default.createElement("div",{className:"chat-avatar-mode"},_.default.createElement("img",{id:"user-avatar-button",src:"http://via.placeholder.com/150x150",className:"rounded-circle size-50",alt:""}),_.default.createElement("span",{className:"chat-mode online"}))),_.default.createElement("div",{className:"module-user-info d-flex flex-column justify-content-center"},_.default.createElement("div",{className:"module-title"},_.default.createElement("h5",{className:"mb-0"},"Robert Johnson")),_.default.createElement("div",{className:"module-user-detail"},_.default.createElement("a",{href:"javascript:void(0)",className:"text-grey"},"robert@example.com")))),_.default.createElement("div",{className:"search-wrapper"},_.default.createElement(k.default,{placeholder:"Search or start new chat",onChange:e.updateSearchChatUser.bind(e),value:e.state.searchChatUser}))),_.default.createElement("div",{className:"chat-sidenav-content"},_.default.createElement(u.Nav,{tabs:!0,className:"nav-fill"},_.default.createElement(u.NavItem,{className:"nav-item"},_.default.createElement(u.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"1"===e.state.activeTab?"active":"",onClick:function(){e.toggle("1")}},"CHATS")),_.default.createElement(u.NavItem,null,_.default.createElement(u.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"2"===e.state.activeTab?"active":"",onClick:function(){e.toggle("2")}},"CONTACTS"))),_.default.createElement(u.TabContent,{activeTab:e.state.activeTab},_.default.createElement(u.TabPane,{tabId:"1"},_.default.createElement(y.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.state.chatUsers.length?_.default.createElement("div",{className:"p-5"},e.state.userNotFound):_.default.createElement(b.default,{chatUsers:e.state.chatUsers,selectedSectionId:e.state.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))),_.default.createElement(u.TabPane,{tabId:"2"},_.default.createElement(y.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.state.contactList.length?_.default.createElement("div",{className:"p-5"},e.state.userNotFound):_.default.createElement(x.default,{contactList:e.state.contactList,selectedSectionId:e.state.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))))))},e._handleKeyPress=function(t){"Enter"===t.key&&e.submitComment()},e.handleChange=function(t,s){e.setState({value:s})},e.handleChangeIndex=function(t){e.setState({value:t})},e.onSelectUser=function(t){e.setState({loader:!0,selectedSectionId:t.id,drawerState:e.props.drawerState,selectedUser:t,conversation:e.state.conversationList.find(function(e){return e.id===t.id})}),setTimeout(function(){e.setState({loader:!1})},1500)},e.showCommunication=function(){return _.default.createElement("div",{className:"chat-box"},_.default.createElement("div",{className:"chat-box-main"},null===e.state.selectedUser?_.default.createElement("div",{className:"loader-view"},_.default.createElement("i",{className:"zmdi zmdi-comment s-128 text-muted"}),_.default.createElement("h1",{className:"text-muted"},_.default.createElement(j.default,{id:"chat.selectUserChat"})),_.default.createElement(u.Button,{className:"d-block d-xl-none",color:"primary",onClick:e.onToggleDrawer.bind(e)},_.default.createElement(j.default,{id:"chat.selectContactChat"}))):e.Communication()))},e.state={loader:!1,userNotFound:"No user found",drawerState:!1,selectedSectionId:"",selectedTabIndex:0,userState:1,activeTab:"1",searchChatUser:"",contactList:U.default.filter(function(e){return!e.recent}),selectedUser:null,message:"",chatUsers:U.default.filter(function(e){return e.recent}),conversationList:O.default,conversation:null},e}return o(t,e),i(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}}]),i(t,[{key:"submitComment",value:function(){var e=this;if(""!==this.state.message){var t=this.state.conversation.conversationData.concat({type:"sent",message:this.state.message,sentAt:(0,v.default)(new Date).format("hh:mm:ss A")});this.setState({conversation:l({},this.state.conversation,{conversationData:t}),message:"",conversationList:this.state.conversationList.map(function(s){return s.id===e.state.conversation.id?l({},e.state.conversation,{conversationData:t}):s})})}}},{key:"updateMessageValue",value:function(e){this.setState({message:e.target.value})}},{key:"updateSearchChatUser",value:function(e){this.setState({searchChatUser:e.target.value,contactList:this.filterContact(e.target.value),chatUsers:this.filterUsers(e.target.value)})}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,t=e.loader,s=e.drawerState,a=e.userState;return _.default.createElement("div",{className:"app-wrapper app-wrapper-module"},_.default.createElement("div",{className:"app-module chat-module animated slideInUpTiny animation-duration-3"},_.default.createElement("div",{className:"chat-module-box"},_.default.createElement("div",{className:"d-block d-xl-none"},_.default.createElement(h.default,{touch:!0,transitions:!0,enableDragHandle:!0,open:s,onOpenChange:this.onToggleDrawer.bind(this),sidebar:1===a?this.ChatUsers():this.AppUsersInfo()})),_.default.createElement("div",{className:"chat-sidenav d-none d-xl-flex"},1===a?this.ChatUsers():this.AppUsersInfo()),t?_.default.createElement("div",{className:"loader-view w-100",style:{height:"calc(100vh - 122px)"}},_.default.createElement(E.default,null)):this.showCommunication())))}}]),t}(d.Component),w=function(e){return{width:e.settings.width}},M=(0,f.connect)(w)(S);t.default=M;var I=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(S,"ChatPanel","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(w,"mapStateToProps","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(M,"default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_extends","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(i,"_createClass","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(_,"_react2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(h,"_rcDrawer2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(E,"_CircularProgress2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(v,"_moment2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(b,"_ChatUserList2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(O,"_conversationList2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(A,"_index2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(U,"_chatUsers2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(x,"_index4","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(k,"_index6","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(j,"_IntlMessages2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(y,"_CustomScrollbars2","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(n,"_classCallCheck","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(o,"_inherits","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(S,"ChatPanel","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(w,"mapStateToProps","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(M,"_default","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(I,"_temp","/Users/ghost/Desktop/sense360-admin-dashboard/src/app/routes/chatPanel/basic/index.js"))}()}});
//# sourceMappingURL=34.aee992bf58bc26d014f9.chunk.js.map