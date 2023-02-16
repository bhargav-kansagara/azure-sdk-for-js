/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EncryptionScope, StorageManagementClient } from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update encryption scope properties as specified in the request body. Update fails if the specified encryption scope does not already exist.
 *
 * @summary Update encryption scope properties as specified in the request body. Update fails if the specified encryption scope does not already exist.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2022-09-01/examples/StorageAccountPatchEncryptionScope.json
 */
async function storageAccountPatchEncryptionScope() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "resource-group-name";
  const accountName = "{storage-account-name}";
  const encryptionScopeName = "{encryption-scope-name}";
  const encryptionScope: EncryptionScope = {
    keyVaultProperties: {
      keyUri:
        "https://testvault.vault.core.windows.net/keys/key1/863425f1358359c"
    },
    source: "Microsoft.KeyVault"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.encryptionScopes.patch(
    resourceGroupName,
    accountName,
    encryptionScopeName,
    encryptionScope
  );
  console.log(result);
}

storageAccountPatchEncryptionScope().catch(console.error);
