if (typeof $request !== 'undefined') {
  const lowerCaseRequestHeaders = Object.fromEntries(
    Object.entries($request.headers).map(([k, v]) => [k.toLowerCase(), v])
  );

  $request.headers = new Proxy(lowerCaseRequestHeaders, {
    get: function (target, propKey, receiver) {
      return Reflect.get(target, propKey.toLowerCase(), receiver);
    },
    set: function (target, propKey, value, receiver) {
      return Reflect.set(target, propKey.toLowerCase(), value, receiver);
    },
  });
}
if (typeof $response !== 'undefined') {
  const lowerCaseResponseHeaders = Object.fromEntries(
    Object.entries($response.headers).map(([k, v]) => [k.toLowerCase(), v])
  );

  $response.headers = new Proxy(lowerCaseResponseHeaders, {
    get: function (target, propKey, receiver) {
      return Reflect.get(target, propKey.toLowerCase(), receiver);
    },
    set: function (target, propKey, value, receiver) {
      return Reflect.set(target, propKey.toLowerCase(), value, receiver);
    },
  });
}

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
