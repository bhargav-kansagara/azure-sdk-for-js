/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HybridContainerServiceClient } = require("@azure/arm-hybridcontainerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Puts the Hybrid AKS virtual network
 *
 * @summary Puts the Hybrid AKS virtual network
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-05-01-preview/examples/PutVirtualNetwork.json
 */
async function putVirtualNetwork() {
  const subscriptionId = "a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b";
  const resourceGroupName = "test-arcappliance-resgrp";
  const virtualNetworksName = "test-vnet-static";
  const virtualNetworks = {
    extendedLocation: {
      name: "/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation",
      type: "CustomLocation",
    },
    location: "westus",
    properties: {
      infraVnetProfile: {
        hci: {
          mocGroup: "target-group",
          mocLocation: "MocLocation",
          mocVnetName: "test-vnet",
        },
      },
      vipPool: [{ endIP: "192.168.0.50", startIP: "192.168.0.10" }],
      vmipPool: [{ endIP: "192.168.0.130", startIP: "192.168.0.110" }],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const result = await client.virtualNetworksOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualNetworksName,
    virtualNetworks
  );
  console.log(result);
}

putVirtualNetwork().catch(console.error);
