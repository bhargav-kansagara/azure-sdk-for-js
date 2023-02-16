/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  VirtualMachineScaleSetVMReimageParameters,
  VirtualMachineScaleSetVMsReimageOptionalParams,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
 *
 * @summary Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSetVMs_Reimage_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetVMSReimageMaximumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaa";
  const instanceId = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const vmScaleSetVMReimageInput: VirtualMachineScaleSetVMReimageParameters = {
    tempDisk: true
  };
  const options: VirtualMachineScaleSetVMsReimageOptionalParams = {
    vmScaleSetVMReimageInput
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMs.beginReimageAndWait(
    resourceGroupName,
    vmScaleSetName,
    instanceId,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
 *
 * @summary Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSetVMs_Reimage_MinimumSet_Gen.json
 */
async function virtualMachineScaleSetVMSReimageMinimumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaaaaa";
  const instanceId = "aaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMs.beginReimageAndWait(
    resourceGroupName,
    vmScaleSetName,
    instanceId
  );
  console.log(result);
}

async function main() {
  virtualMachineScaleSetVMSReimageMaximumSetGen();
  virtualMachineScaleSetVMSReimageMinimumSetGen();
}

main().catch(console.error);
