define("bundles/ui/components/CollapsibleMessage",["require","exports","module","react-with-addons","classnames","i18n!nls/ui","css!./__styles__/CollapsibleMessage"],function(require,exports,module){"use strict";function _defaults(e,n){for(var s=Object.getOwnPropertyNames(n),t=0;t<s.length;t++){var o=s[t],r=Object.getOwnPropertyDescriptor(n,o);r&&r.configurable&&void 0===e[o]&&Object.defineProperty(e,o,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var o=function(){function defineProperties(r,o){for(var t=0;t<o.length;t++){var e=o[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),r=function get(s,i,c){var o=!0;e:for(;o;){var t=s,l=i,a=c;o=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,l);if(void 0===e){var r=Object.getPrototypeOf(t);if(null===r)return void 0;s=r,i=l,c=a,o=!0,e=r=void 0;continue e}if("value"in e)return e.value;var n=e.get;if(void 0===n)return void 0;return n.call(a)}},e=require("react-with-addons"),t=require("classnames"),n=require("i18n!nls/ui");require("css!./__styles__/CollapsibleMessage");var s=function(s){function CollapsibleMessage(t){var e=this;_classCallCheck(this,CollapsibleMessage),r(Object.getPrototypeOf(CollapsibleMessage.prototype),"constructor",this).call(this,t),this.onToggleClick=function(){e.setState({isCollapsed:!e.state.isCollapsed}),e.props.onToggleClick()},this.state={isCollapsed:t.isInitiallyCollapsed}}return _inherits(CollapsibleMessage,s),o(CollapsibleMessage,null,[{key:"propTypes",value:{children:e.PropTypes.node.isRequired,className:e.PropTypes.string,showToggle:e.PropTypes.bool,onToggleClick:e.PropTypes.func,isInitiallyCollapsed:e.PropTypes.bool},enumerable:!0},{key:"defaultProps",value:{onToggleClick:function onToggleClick(){},showToggle:!0,isInitiallyCollapsed:!1},enumerable:!0}]),o(CollapsibleMessage,[{key:"render",value:function render(){var s=this.props,o=s.showToggle,l=s.className,r=this.state.isCollapsed,a=t("color-secondary-text",{"cif-chevron-up":!r,"cif-chevron-down":r}),i=t("rc-CollapsibleMessage","comfy","primary",l,{"card-rich-interaction":o,"card-no-action":!o}),c=t("message-content",{truncated:o&&r});return e.createElement("div",{className:i},e.createElement("div",{className:c},this.props.children,o&&r&&e.createElement("div",{className:"truncate-gradient"})),o&&e.createElement("button",{className:"nostyle message-toggle",onClick:this.onToggleClick,"aria-hidden":"true"},e.createElement("i",{className:a}),e.createElement("span",{className:"color-secondary-text"},n(r?"More":"Less"))))}}]),CollapsibleMessage}(e.Component);module.exports=s});