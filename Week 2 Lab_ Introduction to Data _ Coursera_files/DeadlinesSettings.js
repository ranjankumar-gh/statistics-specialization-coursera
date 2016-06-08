define("bundles/ondemand/components/DeadlinesSettings",["require","exports","module","react-with-addons","bundles/ondemand/components/DeadlinesDisableButton","bundles/ondemand/components/DeadlinesResetButton","i18n!nls/ondemand"],function(require,exports,module){"use strict";function _defaults(e,r){for(var a=Object.getOwnPropertyNames(r),t=0;t<a.length;t++){var n=a[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t=function(){function defineProperties(o,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),n=function get(a,u,c){var n=!0;e:for(;n;){var t=a,i=u,l=c;n=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,i);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;a=o,u=i,c=l,n=!0,e=o=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(l)}},e=require("react-with-addons"),o=require("bundles/ondemand/components/DeadlinesDisableButton"),r=require("bundles/ondemand/components/DeadlinesResetButton"),a=require("i18n!nls/ondemand"),i=function(i){function DeadlinesSettings(){_classCallCheck(this,DeadlinesSettings),n(Object.getPrototypeOf(DeadlinesSettings.prototype),"constructor",this).apply(this,arguments)}return _inherits(DeadlinesSettings,i),t(DeadlinesSettings,[{key:"render",value:function render(){return e.createElement("div",{className:"flex-1"},e.createElement("div",{className:"body-2-text title"},a("Deadlines Settings")),e.createElement("div",{className:"horizontal-box"},e.createElement(o,null),e.createElement(r,null)))}}]),DeadlinesSettings}(e.Component);module.exports=i});