/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DataProtectionClient } = require("@azure/arm-dataprotection");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates a BackupVault resource belonging to a resource group.
 *
 * @summary Creates or updates a BackupVault resource belonging to a resource group.
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/preview/2022-11-01-preview/examples/VaultCRUD/PutBackupVault.json
 */
async function createBackupVault() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] || "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const resourceGroupName = process.env["DATAPROTECTION_RESOURCE_GROUP"] || "SampleResourceGroup";
  const vaultName = "swaggerExample";
  const parameters = {
    identity: { type: "None" },
    location: "WestUS",
    properties: {
      monitoringSettings: {
        azureMonitorAlertSettings: { alertsForAllJobFailures: "Enabled" },
      },
      storageSettings: [{ type: "LocallyRedundant", datastoreType: "VaultStore" }],
    },
    tags: { key1: "val1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.backupVaults.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vaultName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a BackupVault resource belonging to a resource group.
 *
 * @summary Creates or updates a BackupVault resource belonging to a resource group.
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/preview/2022-11-01-preview/examples/VaultCRUD/PutBackupVaultWithMSI.json
 */
async function createBackupVaultWithMsi() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] || "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const resourceGroupName = process.env["DATAPROTECTION_RESOURCE_GROUP"] || "SampleResourceGroup";
  const vaultName = "swaggerExample";
  const parameters = {
    identity: { type: "systemAssigned" },
    location: "WestUS",
    properties: {
      monitoringSettings: {
        azureMonitorAlertSettings: { alertsForAllJobFailures: "Enabled" },
      },
      storageSettings: [{ type: "LocallyRedundant", datastoreType: "VaultStore" }],
    },
    tags: { key1: "val1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.backupVaults.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vaultName,
    parameters
  );
  console.log(result);
}

async function main() {
  createBackupVault();
  createBackupVaultWithMsi();
}

main().catch(console.error);
