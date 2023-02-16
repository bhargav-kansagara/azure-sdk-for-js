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
  SourceControlCreateOrUpdateParameters,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a source control.
 *
 * @summary Create a source control.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/sourceControl/createOrUpdateSourceControl.json
 */
async function createOrUpdateASourceControl() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "sampleAccount9";
  const sourceControlName = "sampleSourceControl";
  const parameters: SourceControlCreateOrUpdateParameters = {
    description: "my description",
    autoSync: true,
    branch: "master",
    folderPath: "/folderOne/folderTwo",
    publishRunbook: true,
    repoUrl: "https://sampleUser.visualstudio.com/myProject/_git/myRepository",
    securityToken: {
      accessToken: "3a326f7a0dcd343ea58fee21f2fd5fb4c1234567",
      tokenType: "PersonalAccessToken"
    },
    sourceType: "VsoGit"
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.sourceControlOperations.createOrUpdate(
    resourceGroupName,
    automationAccountName,
    sourceControlName,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateASourceControl();
}

main().catch(console.error);
