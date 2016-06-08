define("bundles/discussions/components/redesign/landing/DiscussionsDescription",["require","exports","module","react-with-addons","bundles/ui/components/CollapsibleMessage","i18n!nls/discussions","css!bundles/discussions/components/redesign/landing/__styles__/DiscussionsDescription"],function(require,exports,module){"use strict";function _defaults(e,s){for(var r=Object.getOwnPropertyNames(s),n=0;n<r.length;n++){var t=r[n],o=Object.getOwnPropertyDescriptor(s,t);o&&o.configurable&&void 0===e[t]&&Object.defineProperty(e,t,o)}return e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):_defaults(n,e))}var t=function(){function defineProperties(o,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}(),o=function get(r,a,u){var t=!0;e:for(;t;){var n=r,i=a,c=u;t=!1,null===n&&(n=Function.prototype);var e=Object.getOwnPropertyDescriptor(n,i);if(void 0===e){var o=Object.getPrototypeOf(n);if(null===o)return void 0;r=o,a=i,u=c,t=!0,e=o=void 0;continue e}if("value"in e)return e.value;var s=e.get;if(void 0===s)return void 0;return s.call(c)}},e=require("react-with-addons"),s=require("bundles/ui/components/CollapsibleMessage"),n=require("i18n!nls/discussions");require("css!bundles/discussions/components/redesign/landing/__styles__/DiscussionsDescription");var r=function(r){function DiscussionsDescription(){_classCallCheck(this,DiscussionsDescription),o(Object.getPrototypeOf(DiscussionsDescription.prototype),"constructor",this).apply(this,arguments)}return _inherits(DiscussionsDescription,r),t(DiscussionsDescription,[{key:"render",value:function render(){return e.createElement(s,{className:"rc-DiscussionsDescription",showToggle:!1,isInitiallyCollapsed:!1},e.createElement("div",{className:"label-text color-secondary-text"},n("Description")),e.createElement("p",{className:"description"},n("Welcome to the course discussion forums!\n            Ask questions, debate ideas, and find classmates who share your goals.\n            Browse popular threads below or other forums in the sidebar.")))}}]),DiscussionsDescription}(e.Component);module.exports=r});