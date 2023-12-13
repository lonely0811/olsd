const url = $request.url;
const isQX = typeof $task !== "undefined";
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

function finalizeResponse(content) {
  return { status: isQX ? "HTTP/1.1 200 OK" : 200, headers: $response.headers, body: JSON.stringify(content) };
}

$done(isQX ? finalizeResponse(chxm1023) : chxm1023);
