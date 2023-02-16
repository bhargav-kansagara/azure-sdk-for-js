/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EducationManagementClient } = require("@azure/arm-education");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Approve student joining the redeemable lab
 *
 * @summary Approve student joining the redeemable lab
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/JoinRequestApproveAndDeny.json
 */
async function joinRequestApprove() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const invoiceSectionName = "{invoiceSectionName}";
  const joinRequestName = "{joinRequestName}";
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const result = await client.joinRequests.approve(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
    joinRequestName
  );
  console.log(result);
}

async function main() {
  joinRequestApprove();
}

main().catch(console.error);
