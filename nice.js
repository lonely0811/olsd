const url = $request.url;
var chxm1023 = JSON.parse($response.body);
const subscriptionTest = /https:\/\/nicegram\.cloud\/api\/v\d\/user\/info/;
const premiumTest = /https:\/\/restore-access\.indream\.app\/restoreAccess/;

if (subscriptionTest.test(url)) {
  chxm1023.data.user = {
    ...chxm1023.data.user,
    subscription: true,
    store_subscription: true,
    lifetime_subscription: true
  };
}

if (premiumTest.test(url)) {
  chxm1023["data"] = {"premiumAccess": true};
}

$done(isQX ? finalizeResponse(chxm1023) : chxm1023);
