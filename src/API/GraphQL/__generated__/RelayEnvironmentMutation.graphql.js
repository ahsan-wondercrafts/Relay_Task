/**
 * @generated SignedSource<<8bef2150e7ad44f9876f99505cf1d872>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "check_in"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "check_in",
        "variableName": "check_in"
      }
    ],
    "concreteType": "CheckIn",
    "kind": "LinkedField",
    "name": "insert_check_in_one",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayEnvironmentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayEnvironmentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f478423464fb3f3df4de4e11dad04b69",
    "id": null,
    "metadata": {},
    "name": "RelayEnvironmentMutation",
    "operationKind": "mutation",
    "text": "mutation RelayEnvironmentMutation(\n  $check_in: CheckInInput!\n) {\n  insert_check_in_one(check_in: $check_in) {\n    id\n    name\n  }\n}\n"
  }
};
})();

node.hash = "36c1e4c278be17f067f9814f3bdd2bfc";

module.exports = node;
