define("bundles/group-events/components/GroupEventsLoader",["require","exports","module","underscore","react-with-addons","bundles/phoenix/lib/waitForStores","js/lib/waitFor","bundles/group-events/actions/FacilitatedGroupEventsActions","bundles/group-events/actions/PrivateCommunityEventsActions","bundles/groups/models/Group"],function(require,exports,module){"use strict";function _defaults(e,n){for(var i=Object.getOwnPropertyNames(n),t=0;t<i.length;t++){var r=i[t],o=Object.getOwnPropertyDescriptor(n,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},r=function(){function defineProperties(o,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function get(i,s,p){var r=!0;e:for(;r;){var t=i,u=s,a=p;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,u);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;i=o,s=u,p=a,r=!0,e=o=void 0;continue e}if("value"in e)return e.value;var n=e.get;if(void 0===n)return void 0;return n.call(a)}},n=require("underscore"),i=n.compose,e=require("react-with-addons"),u=require("bundles/phoenix/lib/waitForStores"),a=require("js/lib/waitFor"),s=require("bundles/group-events/actions/FacilitatedGroupEventsActions"),p=s.loadFacilitatedGroupEvents,c=require("bundles/group-events/actions/PrivateCommunityEventsActions"),l=c.loadPrivateCommunityEvents,d=require("bundles/groups/models/Group"),v=function groupEventsLoader(n,c){var s=function(i){function GroupEventsLoaderComponent(){_classCallCheck(this,GroupEventsLoaderComponent),o(Object.getPrototypeOf(GroupEventsLoaderComponent.prototype),"constructor",this).apply(this,arguments)}return _inherits(GroupEventsLoaderComponent,i),r(GroupEventsLoaderComponent,[{key:"componentDidMount",value:function componentDidMount(){var e=this.props,o=e.hasGroupEventsStoreLoaded,t=e.facilitatedGroupId,r=e.privateCommunityGroups;o||(t?this.context.executeAction(p,{facilitatedGroupId:t}):r&&this.context.executeAction(l,{groupId:r[0].id}))}},{key:"render",value:function render(){return e.createElement(n,t({},this.props,this.state))}}],[{key:"propTypes",value:{hasGroupEventsStoreLoaded:e.PropTypes.bool.isRequired,facilitatedGroupId:e.PropTypes.string,privateCommunityGroups:e.PropTypes.arrayOf(d)},enumerable:!0},{key:"contextTypes",value:{executeAction:e.PropTypes.func.isRequired},enumerable:!0}]),GroupEventsLoaderComponent}(e.Component);return i(u({requiredStores:["FacilitatedStore","GroupEntitlementStore"],lazyStores:["GroupEventsStore"]},function(e,n){var o=e.GroupEventsStore,t=e.FacilitatedStore,r=e.GroupEntitlementStore;return{hasLoaded:t.hasLoaded()&&r.hasGroupsLoaded(),hasGroupEventsStoreLoaded:o.hasLoaded(),facilitatedGroupId:t.getEnrolledFacilitatedGroupId(),privateCommunityGroups:r.getMyGroupsWithEventsEnabled()}}),a(function(e){var t=e.hasLoaded;return t}))(s)};module.exports=v});