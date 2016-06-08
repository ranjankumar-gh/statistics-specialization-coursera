define("bundles/phoenix/components/SurveyModal",["require","exports","module","react-with-addons","bundles/phoenix/components/TopLevelModal","bundles/phoenix/components/Modal","i18n!nls/phoenix","css!./__styles__/SurveyModal"],function(require,exports,module){"use strict";function _defaults(e,r){for(var a=Object.getOwnPropertyNames(r),t=0;t<a.length;t++){var n=a[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n=function(){function defineProperties(o,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(a,s,u){var n=!0;e:for(;n;){var t=a,i=s,l=u;n=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,i);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;a=o,s=i,u=l,n=!0,e=o=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(l)}},e=require("react-with-addons"),r=require("bundles/phoenix/components/TopLevelModal"),a=require("bundles/phoenix/components/Modal"),t=require("i18n!nls/phoenix");require("css!./__styles__/SurveyModal");var i=function(i){function SurveyModal(){_classCallCheck(this,SurveyModal),o(Object.getPrototypeOf(SurveyModal.prototype),"constructor",this).apply(this,arguments)}return _inherits(SurveyModal,i),n(SurveyModal,[{key:"render",value:function render(){return e.createElement(r,null,e.createElement(a,{className:"rc-SurveyModal",modalName:t("How are we doing?"),handleClose:this.props.handleClose},e.createElement("div",{className:"title container"},e.createElement("h1",{className:"title-text headline-4-text"},t("How are we doing?"))),e.createElement("div",{className:"content"},t("At Coursera, we would like to provide you with the best learning experience."),t(" Please take a few minutes to tell us how we could be doing better."),e.createElement("div",{className:"button-container"},e.createElement("a",{href:this.props.surveyLink,className:"link-button primary",target:"_blank"},t("Take our survey"))))))}}],[{key:"propTypes",value:{surveyLink:e.PropTypes.string.isRequired,handleClose:e.PropTypes.func.isRequired},enumerable:!0}]),SurveyModal}(e.Component);module.exports=i});