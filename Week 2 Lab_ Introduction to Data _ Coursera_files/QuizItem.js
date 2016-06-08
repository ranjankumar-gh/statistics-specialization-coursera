define("bundles/ondemand/components/quiz/QuizItem",["require","exports","module","classnames","q","react-with-addons","underscore","bundles/assess/assessmentTypes/phoenixQuiz/assessment","bundles/assess/assessmentTypes/phoenixQuiz/assessment.attempt","bundles/content-feedback/constants/ItemTypes","bundles/ondemand/components/ItemLayout","bundles/ondemand/components/item/LightItemLayout","bundles/ondemand/utils/itemViewValidator","bundles/phoenix/components/OrigamiRegion","js/lib/getPropsFromPromise","js/lib/waitFor","pages/open-course/assessment/clients/contentRequesterAssessmentClient","pages/open-course/assessment/clients/naptimeAssessmentClient","pages/open-course/assessment/models/exam/assessment","pages/open-course/assessment/models/openSinglePage/assessment","pages/open-course/assessment/models/quiz/assessment","pages/open-course/common/contentRequester","pages/open-course/common/models/itemGroup","pages/open-course/common/models/itemMetadata","pages/open-course/common/naptimeItemClient","pages/open-course/common/singletons/course","pages/open-course/common/singletons/courseGrade","pages/open-course/common/singletons/courseMaterials","pages/open-course/common/singletons/courseProgress","pages/open-course/common/singletons/verificationDisplay","pages/open-course/common/utils/lockExperiment","pages/open-course/verification/views/verification"],function(require,exports,module){"use strict";function _defaults(e,o){for(var r=Object.getOwnPropertyNames(o),s=0;s<r.length;s++){var t=r[s],n=Object.getOwnPropertyDescriptor(o,t);n&&n.configurable&&void 0===e[t]&&Object.defineProperty(e,t,n)}return e}function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function _inherits(s,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):_defaults(s,e))}function getContentModelPromise(e){if("assessOpenSinglePage"===e.getTypeName())return P({metadata:e});if("quiz"===e.getTypeName())return w({metadata:e});if("exam"===e.getTypeName())return O({metadata:e})}function getClient(e){if("assessOpenSinglePage"===e.getTypeName()||"quiz"===e.getTypeName()){var s=new T(e);return new v(s)}if("exam"===e.getTypeName()){var t=new q(e);return new h(e,t)}}var n=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},o=function(){function defineProperties(n,t){for(var s=0;s<t.length;s++){var e=t[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,s,t){return s&&defineProperties(e.prototype,s),t&&defineProperties(e,t),e}}(),r=function get(r,p,u){var t=!0;e:for(;t;){var s=r,a=p,i=u;t=!1,null===s&&(s=Function.prototype);var e=Object.getOwnPropertyDescriptor(s,a);if(void 0===e){var n=Object.getPrototypeOf(s);if(null===n)return void 0;r=n,p=a,u=i,t=!0,e=n=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(i)}},a=require("classnames"),i=require("q"),e=require("react-with-addons"),p=require("underscore"),u=p.compose,c=require("bundles/assess/assessmentTypes/phoenixQuiz/assessment"),m=require("bundles/assess/assessmentTypes/phoenixQuiz/assessment.attempt"),l=require("bundles/content-feedback/constants/ItemTypes"),d=require("bundles/ondemand/components/ItemLayout"),g=require("bundles/ondemand/components/item/LightItemLayout"),f=require("bundles/ondemand/utils/itemViewValidator"),y=require("bundles/phoenix/components/OrigamiRegion"),t=require("js/lib/getPropsFromPromise"),b=require("js/lib/waitFor"),v=require("pages/open-course/assessment/clients/contentRequesterAssessmentClient"),h=require("pages/open-course/assessment/clients/naptimeAssessmentClient"),O=require("pages/open-course/assessment/models/exam/assessment"),P=require("pages/open-course/assessment/models/openSinglePage/assessment"),w=require("pages/open-course/assessment/models/quiz/assessment"),T=require("pages/open-course/common/contentRequester"),j=require("pages/open-course/common/models/itemGroup"),s=require("pages/open-course/common/models/itemMetadata"),q=require("pages/open-course/common/naptimeItemClient"),x=require("pages/open-course/common/singletons/course"),I=require("pages/open-course/common/singletons/courseGrade"),M=require("pages/open-course/common/singletons/courseMaterials"),C=require("pages/open-course/common/singletons/courseProgress"),R=require("pages/open-course/common/singletons/verificationDisplay"),z=require("pages/open-course/common/utils/lockExperiment"),L=require("pages/open-course/verification/views/verification"),k={start:c,verify:L,attempt:m},G=function(t){function QuizItem(){var e=this;_classCallCheck(this,QuizItem),r(Object.getPrototypeOf(QuizItem.prototype),"constructor",this).apply(this,arguments),this.state={state:"start",stateOptions:{}},this.onStateChange=function(s,t){e.setState({state:s,stateOptions:t||{}})}}return _inherits(QuizItem,t),o(QuizItem,[{key:"componentDidMount",value:function componentDidMount(){var e=this.props,s=e.course,t=e.courseMaterials,n=e.courseGrade,o=e.courseProgress;z.setup(s.get("id"),t,n,o)}},{key:"renderView",value:function renderView(){var r=this.props.isLoaded,t=this.state,s=t.state,i=t.stateOptions,o=k[s];if(!o)throw new Error("Unknown state: "+s);var p=a("rc-QuizItem",{state:s});return e.createElement("div",{className:p},r&&e.createElement(y,{ViewClass:o,viewOptions:n({},this.props,i,{onStateChange:this.onStateChange})}))}},{key:"render",value:function render(){var t=this.props.itemMetadata,n=this.state.state,s=this.renderView();return"start"===n?e.createElement(d,null,e.createElement(g,{itemMetadata:t,itemType:l.Quiz,isCard:!0},s)):s}}],[{key:"propTypes",value:{itemMetadata:e.PropTypes.instanceOf(s).isRequired,course:e.PropTypes.object.isRequired,courseProgress:e.PropTypes.object.isRequired,courseMaterials:e.PropTypes.object.isRequired,courseGrade:e.PropTypes.object.isRequired,verificationDisplay:e.PropTypes.object.isRequired,model:e.PropTypes.object.isRequired,nextItemMetadataOrItemGroup:e.PropTypes.oneOfType([e.PropTypes.instanceOf(j),e.PropTypes.instanceOf(s)]),isLoaded:e.PropTypes.bool},enumerable:!0}]),QuizItem}(e.Component),E=f(G,{renderItemLayout:!0});module.exports=u(t(function(s,t){var e=s.itemMetadata;return i.all([getContentModelPromise(e),x,I,C,M,R]).spread(function(t,n,o,r,s,a){return{isLoaded:!0,course:n,courseProgress:r,courseMaterials:s,courseGrade:o,verificationDisplay:a,assessmentClient:getClient(e),model:t,nextItemMetadataOrItemGroup:s.getNeighbors(e).nextItemMetadataOrItemGroup}})}),b(function(e){var s=e.isLoaded;return!!s}))(E)});