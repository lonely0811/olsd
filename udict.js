var obj = JSON.parse($response.body);
obj= {
  "data": {
    "originalTransactionId": "190001858611658",
    "localCode": "VN",
    "status": "VERIFY_SUCCESS",
    "priceActualUsd": 0,
    "currency": "CNY",
    "isNew": "new",
    "originalPurchaseDate": 1704598459000,
    "productId": "3_week_t1_4.99_220516_ud",
    "transactionId": "190001858611658",
    "outTradeNo": "",
    "currentDate": 1704600696872,
    "introOfferStatus": "STATUS_OFF",
    "id": 0,
    "quantity": 1,
    "webOrderLineItemId": "190000847324937",
    "purchaseDate": 1704598458000,
    "requestCountry": "VN",
    "trial": false,
    "md5": "fb5688f85a5c8db28f2d4a8c4000294c",
    "requestIp": "103.151.241.5",
    "statusCode": 0,
    "environment": "production",
    "createDate": 1704600696872,
    "expireDate": 1704857658000,
    "product": "hindi",
    "autoRenewStatus": "STATUS_OFF",
    "subscriptionStatus": "ENABLED",
    "idfa": "3FCB8B61-4008-4D21-B657-24E90B996964"
  },
  { "status": 0,
  "msg": "success"
};
$done({body: JSON.stringify(obj)});
