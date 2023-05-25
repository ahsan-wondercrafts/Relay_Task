/**
 * @generated SignedSource<<f6ee5cb5c8c71be8ce74b2d9e5ff0fe9>>
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
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CheckIn",
    "kind": "LinkedField",
    "name": "addCheckIn",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayEnvironmentAddMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayEnvironmentAddMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8e8d92b3ea8ca308569236b0fcfdb168",
    "id": null,
    "metadata": {},
    "name": "RelayEnvironmentAddMutation",
    "operationKind": "mutation",
    "text": "mutation RelayEnvironmentAddMutation(\n  $input: AddCheckInInput!\n) {\n  addCheckIn(input: $input) {\n    id\n    name\n    comment\n    image_url\n  }\n}\n"
  }
};
})();

node.hash = "34709b08c7846b0497e24e2cdf643b07";

module.exports = node;
