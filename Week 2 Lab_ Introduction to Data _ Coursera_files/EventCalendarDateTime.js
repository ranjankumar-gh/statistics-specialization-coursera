define("bundles/group-events/components/EventCalendarDateTime",["require","exports","module","i18n!nls/group-events","react-with-addons","bundles/group-events/components/LiveEventDot"],function(require,exports,module){"use strict";var t=require("i18n!nls/group-events"),e=require("react-with-addons"),n=require("bundles/group-events/components/LiveEventDot"),r=function EventCalendarDateTime(a){var r=a.event;if(r.isLive())return e.createElement("h3",{className:"rc-EventCalendarDateTime headline-2-text horizontal-box align-items-vertical-center"},e.createElement(n,null),t("Live now"));return e.createElement("h3",{className:"rc-EventCalendarDateTime headline-2-text"},r.getFormattedDate())};module.exports=r});