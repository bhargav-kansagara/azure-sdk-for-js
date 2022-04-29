/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { KeyVaultManagementClient } = require("@azure/arm-keyvault");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update access policies in a key vault in the specified subscription.
 *
 * @summary Update access policies in a key vault in the specified subscription.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/updateAccessPoliciesAdd.json
 */
async function addAnAccessPolicyOrUpdateAnAccessPolicyWithNewPermissions() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "sample-group";
  const vaultName = "sample-vault";
  const operationKind = "add";
  const parameters = {
    properties: {
      accessPolicies: [
        {
          objectId: "00000000-0000-0000-0000-000000000000",
          permissions: {
            certificates: ["get"],
            keys: ["encrypt"],
            secrets: ["get"],
          },
          tenantId: "00000000-0000-0000-0000-000000000000",
        },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.vaults.updateAccessPolicy(
    resourceGroupName,
    vaultName,
    operationKind,
    parameters
  );
  console.log(result);
}

addAnAccessPolicyOrUpdateAnAccessPolicyWithNewPermissions().catch(console.error);