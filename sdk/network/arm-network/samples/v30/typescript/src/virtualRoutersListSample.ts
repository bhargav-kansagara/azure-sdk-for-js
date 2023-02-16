/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets all the Virtual Routers in a subscription.
 *
 * @summary Gets all the Virtual Routers in a subscription.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VirtualRouterListBySubscription.json
 */
async function listAllVirtualRoutersForAGivenSubscription() {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualRouters.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllVirtualRoutersForAGivenSubscription().catch(console.error);
