!function(n){var e=function(n,e,s){var t=function template(s){var t=[],i={},o,e=s||{};return function(e,s){t.push('<label><input type="radio"'+n.attr("name",e,!0,!1)+n.attr("value",s.id,!0,!1)+' class="coursera-assess-question-optionBase-option-input"/><div data-js="user-html" class="coursera-assess-question-optionBase-option-text"><span data-js="option-display"></span></div></label>')}.call(this,"instanceId"in e?e.instanceId:"undefined"!=typeof instanceId?instanceId:void 0,"option"in e?e.option:"undefined"!=typeof option?option:void 0),t.join("")};return function(n){return n&&"_t"in n&&(e=n._t.merge(e)),t(n)}};"function"==typeof define&&define.amd?define(["js/vendor/jade","i18n!bundles/assess/questionTypes/mcq/student/nls/optionTemplate"],function(n,t){var s;return e(n,t,s)}):n.jade.templates["bundles.assess.questionTypes.mcq.student.optionTemplate"]=e(n.jade.helpers)}(window);