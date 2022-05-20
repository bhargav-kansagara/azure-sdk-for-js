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
  SignaturesOverrides,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Will update the status of policy's signature overrides for IDPS
 *
 * @summary Will update the status of policy's signature overrides for IDPS
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/FirewallPolicySignatureOverridesPatch.json
 */
async function patchSignatureOverrides() {
  const subscriptionId = "e747cc13-97d4-4a79-b463-42d7f4e558f2";
  const resourceGroupName = "rg1";
  const firewallPolicyName = "firewallPolicy";
  const parameters: SignaturesOverrides = {
    name: "default",
    type: "Microsoft.Network/firewallPolicies/signatureOverrides",
    id:
      "/subscriptions/e747cc13-97d4-4a79-b463-42d7f4e558f2/resourceGroups/rg1/providers/Microsoft.Network/firewallPolicies/firewallPolicy/signatureOverrides/default",
    properties: { signatures: { "2000105": "Off", "2000106": "Deny" } }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.firewallPolicyIdpsSignaturesOverrides.patch(
    resourceGroupName,
    firewallPolicyName,
    parameters
  );
  console.log(result);
}

patchSignatureOverrides().catch(console.error);