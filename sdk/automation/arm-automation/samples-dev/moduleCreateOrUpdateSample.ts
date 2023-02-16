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
  ModuleCreateOrUpdateParameters,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or Update the module identified by module name.
 *
 * @summary Create or Update the module identified by module name.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/createOrUpdateModule.json
 */
async function createOrUpdateAModule() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount33";
  const moduleName = "OmsCompositeResources";
  const parameters: ModuleCreateOrUpdateParameters = {
    contentLink: {
      contentHash: {
        algorithm: "sha265",
        value:
          "07E108A962B81DD9C9BAA89BB47C0F6EE52B29E83758B07795E408D258B2B87A"
      },
      uri:
        "https://teststorage.blob.core.windows.net/dsccomposite/OmsCompositeResources.zip",
      version: "1.0.0.0"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.moduleOperations.createOrUpdate(
    resourceGroupName,
    automationAccountName,
    moduleName,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateAModule();
}

main().catch(console.error);
