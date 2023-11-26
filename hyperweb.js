[rewrite_local]
https?:\/\/zy6kcqa01a\.execute-api\.us-east-2\.amazonaws\.com\/prod\/verifyReceipt url script-response-body https://raw.githubusercontent.com/lonely0811/olsd/main/hyperweb.js

[mitm]
hostname = zy6kcqa01a.execute-api.us-east-2.amazonaws.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "autoRenewStatus" : "1",
  "isActive" : true,
  "expireDateMs" : 4092599349000,
  "expirationIntent" : null,
  "productId" : "ai.laso.ios.HyperWeb.yearly.subscription"
};

$done({body : JSON.stringify(chxm1023)});
