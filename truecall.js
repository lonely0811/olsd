function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}
const features = [
  { id: "spam_blocking", rank: -2147483648, status: "Included" },
  { id: "caller_id", rank: -2147483648, status: "Included" },
  { id: "siri_search", rank: 1, status: "Included" },
  { id: "no_ads", rank: 2, status: "Included" },
  { id: "extended_spam_blocking", rank: 3, status: "Included" },
  { id: "ct_call_recording", rank: 7, status: "Included" },
  { id: "call_assistant", rank: 2, status: "Included" },
  { id: "who_viewed_my_profile", rank: 9, status: "Included" },
  { id: "incognito_mode", rank: 11, status: "Included" },
  { id: "premium_badge", rank: 15, status: "Included" },
  { id: "premium_support", rank: 11, status: "Included" },
  { id: "gold_caller_id", rank: 20, status: "Included" }
  { id: "premium_app_icon", rank: 19, status: "Included" },
];
var obj;
switch ($request.url) {
  case findUrl(/subscriptions\/status/):
      obj = {
        expire: "2099-09-06T11:20:25Z",
        start: "2022-09-03T11:20:25Z",
        paymentProvider: "Apple",
        isExpired: false,
        isGracePeriodExpired: false,
        subscriptionStatus: "INITIAL_BUY",
        inAppPurchaseAllowed: true,
        product: {
          id: "renewable.gold.annual",
          sku: "renewable.gold.annual",
          contentType: "subscription",
          productType: "GoldYearly",
          isFreeTrial: true
        },
        tier: { id: "gold", feature: features }
      }
    break;
  case findUrl(/products\/apple/):
      obj = {
  "tier": [
    {
      "id": "gold",
      "product": [
        {
          "productType": "GoldYearly",
          "id": "renewable.gold.annual",
          "sku": "renewable.gold.annual",
          "contentType": "subscription",
          "rank": 6,
          "paymentProvider": "Apple",
          "clientProductMetadata": {
            "selectionRank": 5,
            "displayOrder": 5,
            "isEntitledPremiumScreenProduct": false
          }
        }
      ],
      "feature": features,
      "rank": 5
    }
  ]
}
    break;
}
$done({body: JSON.stringify(obj)});
