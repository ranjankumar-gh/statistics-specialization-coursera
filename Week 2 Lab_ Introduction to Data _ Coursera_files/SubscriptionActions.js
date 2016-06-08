define("bundles/discussions/actions/SubscriptionActions",["require","exports","module","bundles/discussions/utils/subscriptionUtils"],function(require,exports,module){"use strict";var i=require("bundles/discussions/utils/subscriptionUtils");exports.fetchSubscriptions=function(s){i.userHasTeachingPermissions().then(function(t){s.dispatch("UPDATE_CAN_TEACH",t),t&&(s.dispatch("FETCH_SUBSCRIPTIONS"),i.getUserSubscriptionsForCourse().then(function(i){s.dispatch("UPDATE_SUBSCRIPTIONS",i)},function(i){s.dispatch("SUBSCRIPTION_FAILED",i)}))})},exports.addSubscription=function(s,t){var n=t.entityType,c=t.entityId;i.subscribeUserToEntity(n,c).then(function(i){s.dispatch("ADD_SUBSCRIPTION",i)},function(i){s.dispatch("SUBSCRIPTION_FAILED",i)})},exports.deleteSubscription=function(s,t){var n=t.subscriptionId;i.unsubscribeUserFromEntity(n).then(function(i){s.dispatch("DELETE_SUBSCRIPTION",i)},function(i){s.dispatch("SUBSCRIPTION_FAILED",i)})}});