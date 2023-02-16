/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MachineGroup, ServiceMap } from "@azure/arm-servicemap";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a new machine group.
 *
 * @summary Creates a new machine group.
 * x-ms-original-file: specification/service-map/resource-manager/Microsoft.OperationalInsights/preview/2015-11-01-preview/examples/MachineGroups/SMMachineGroupsCreatePost.json
 */
async function smMachineGroupsCreatePost() {
  const subscriptionId =
    process.env["SERVICE-MAP_SUBSCRIPTION_ID"] ||
    "63BE4E24-FDF0-4E9C-9342-6A5D5A359722";
  const resourceGroupName =
    process.env["SERVICE-MAP_RESOURCE_GROUP"] || "rg-sm";
  const workspaceName = "D6F79F14-E563-469B-84B5-9286D2803B2F";
  const machineGroup: MachineGroup = {
    count: 1,
    displayName: "Foo",
    etag: "e20e75b5-5765-48a5-9503-9d1b7fd20925",
    kind: "machineGroup",
    machines: [
      {
        id:
          "/subscriptions/63BE4E24-FDF0-4E9C-9342-6A5D5A359722/resourceGroups/rg-sm/providers/Microsoft.OperationalInsights/workspaces/D6F79F14-E563-469B-84B5-9286D2803B2F/machines/m-2f2506f5-cf18-4dc6-98ba-d84ce2610ae0",
        kind: "ref:machinewithhints"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceMap(credential, subscriptionId);
  const result = await client.machineGroups.create(
    resourceGroupName,
    workspaceName,
    machineGroup
  );
  console.log(result);
}

async function main() {
  smMachineGroupsCreatePost();
}

main().catch(console.error);
