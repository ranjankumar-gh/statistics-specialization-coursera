define("bundles/ondemand/components/item/ItemNavigation",["require","exports","module","react-with-addons","bundles/ondemand/appContextSingleton","pages/open-course/common/constants","pages/open-course/common/models/itemGroupChoice","bundles/ondemand/components/ItemViewHonorsModalContainer","bundles/ondemand/components/item/ItemChoiceBanner","bundles/ondemand/components/item/ItemNavTabs","bundles/ondemand/components/item/WeekDrawer","bundles/phoenix/lib/waitForStores","js/lib/coursera.store","pages/open-course/common/models/lesson","css!./__styles__/ItemNavigation"],function(require,exports,module){"use strict";function _defaults(e,r){for(var s=Object.getOwnPropertyNames(r),t=0;t<s.length;t++){var o=s[t],n=Object.getOwnPropertyDescriptor(r,o);n&&n.configurable&&void 0===e[o]&&Object.defineProperty(e,o,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var m=function(){function defineProperties(n,o){for(var t=0;t<o.length;t++){var e=o[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),r=function get(s,c,p){var o=!0;e:for(;o;){var t=s,i=c,a=p;o=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,i);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;s=n,c=i,p=a,o=!0,e=n=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(a)}},e=require("react-with-addons"),h=require("bundles/ondemand/appContextSingleton"),d=require("pages/open-course/common/constants"),i=require("pages/open-course/common/models/itemGroupChoice"),l=require("bundles/ondemand/components/ItemViewHonorsModalContainer"),a=require("bundles/ondemand/components/item/ItemChoiceBanner"),c=require("bundles/ondemand/components/item/ItemNavTabs"),p=require("bundles/ondemand/components/item/WeekDrawer"),u=require("bundles/phoenix/lib/waitForStores"),o=require("js/lib/coursera.store"),s=require("pages/open-course/common/models/lesson"),t="itemNavCollapsed";require("css!./__styles__/ItemNavigation");var n=function(n){function ItemNavigation(){var e=this;_classCallCheck(this,ItemNavigation),r(Object.getPrototypeOf(ItemNavigation.prototype),"constructor",this).apply(this,arguments),this.state={showDrawer:!o.get(t)},this.onTriggerClick=function(){e.state.showDrawer?(e.setState({showDrawer:!1}),o.set(t,!0)):(e.setState({showDrawer:!0}),o.set(t,!1))}}return _inherits(ItemNavigation,n),m(ItemNavigation,[{key:"render",value:function render(){var t=e.createElement("div",{className:"c-main-content-container","data-js":"item-container"});return e.createElement("div",{className:"rc-ItemNavigation"},e.createElement(l,{lesson:this.props.currentLesson}),e.createElement(c,{showDrawer:this.state.showDrawer,onLessonsClick:this.onTriggerClick}),e.createElement("div",{className:"horizontal-box week-drawer-container"},e.createElement(p,{weekNumber:this.props.weekNumber,currentItemId:this.props.currentItemId,isItemGroupDescriptionPage:this.props.isItemGroupDescriptionPage,currentLesson:this.props.currentLesson,showDrawer:this.state.showDrawer}),e.createElement("div",{className:"flex-1"},!!this.props.currentChoice&&e.createElement(a,{choice:this.props.currentChoice}),this.props.children||t)))}}],[{key:"propTypes",value:{weekNumber:e.PropTypes.number.isRequired,currentLesson:e.PropTypes.instanceOf(s).isRequired,currentChoice:e.PropTypes.instanceOf(i),isInChoice:e.PropTypes.bool.isRequired,currentItemId:e.PropTypes.string,isItemGroupDescriptionPage:e.PropTypes.bool.isRequired,children:e.PropTypes.node},enumerable:!0}]),ItemNavigation}(e.Component);module.exports=u(["CourseStore"],function(r,e){var s=r.CourseStore,t=s.getMaterials(),o=t&&e.currentItemId&&t.getItemMetadata(e.currentItemId),n=o&&o.getChoice();return{currentChoice:n,isInChoice:!!n}})(n),module.exports.BaseComp=n});