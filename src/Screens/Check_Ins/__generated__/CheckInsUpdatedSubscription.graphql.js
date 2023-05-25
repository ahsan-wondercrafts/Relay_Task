/**
 * @generated SignedSource<<238aaf0b36d6b67782d0d5c5c50ee2eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CheckIn",
    "kind": "LinkedField",
    "name": "checkInUpdated",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "comment",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image_url",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CheckInsUpdatedSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CheckInsUpdatedSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b78319ae9c8773df55d791537f62ed06",
    "id": null,
    "metadata": {},
    "name": "CheckInsUpdatedSubscription",
    "operationKind": "subscription",
    "text": "subscription CheckInsUpdatedSubscription {\n  checkInUpdated {\n    id\n    name\n    comment\n    image_url\n  }\n}\n"
  }
};
})();

node.hash = "39b3ef610874bf1c81eb9ff645fa9eb4";

module.exports = node;
