/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete an SSH public key.
 *
 * @summary Delete an SSH public key.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/sshPublicKeyExamples/SshPublicKeys_Delete_MaximumSet_Gen.json
 */
async function sshPublicKeysDeleteMaximumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const sshPublicKeyName = "aaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.sshPublicKeys.delete(
    resourceGroupName,
    sshPublicKeyName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Delete an SSH public key.
 *
 * @summary Delete an SSH public key.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/sshPublicKeyExamples/SshPublicKeys_Delete_MinimumSet_Gen.json
 */
async function sshPublicKeysDeleteMinimumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const sshPublicKeyName = "aaaaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.sshPublicKeys.delete(
    resourceGroupName,
    sshPublicKeyName
  );
  console.log(result);
}

async function main() {
  sshPublicKeysDeleteMaximumSetGen();
  sshPublicKeysDeleteMinimumSetGen();
}

main().catch(console.error);
