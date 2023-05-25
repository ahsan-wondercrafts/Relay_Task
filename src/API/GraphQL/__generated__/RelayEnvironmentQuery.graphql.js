/**
 * @generated SignedSource<<58921ce49bf6ce83907507c1dd9e5547>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "order_by",
        "value": {
          "created_at": "desc"
        }
      }
    ],
    "concreteType": "CheckInConnection",
    "kind": "LinkedField",
    "name": "check_in_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CheckInEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CheckIn",
            "kind": "LinkedField",
            "name": "node",
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
                "name": "comment",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "created_at",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "image_url",
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
                "name": "updated_at",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "check_in_connection(order_by:{\"created_at\":\"desc\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayEnvironmentQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayEnvironmentQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3729a7a4c6c4ffaedc5d71f435990c06",
    "id": null,
    "metadata": {},
    "name": "RelayEnvironmentQuery",
    "operationKind": "query",
    "text": "query RelayEnvironmentQuery {\n  check_in_connection(order_by: {created_at: desc}) {\n    edges {\n      node {\n        id\n        comment\n        created_at\n        image_url\n        name\n        updated_at\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "75081b1d6db9d092cc5fdf7485316ac7";

module.exports = node;
