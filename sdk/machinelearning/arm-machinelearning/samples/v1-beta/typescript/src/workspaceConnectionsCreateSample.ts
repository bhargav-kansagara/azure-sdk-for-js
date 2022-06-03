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
  WorkspaceConnection,
  AzureMachineLearningWorkspaces
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Add a new workspace connection.
 *
 * @summary Add a new workspace connection.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/preview/2022-02-01-preview/examples/WorkspaceConnection/create.json
 */
async function createWorkspaceConnection() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "resourceGroup-1";
  const workspaceName = "workspace-1";
  const connectionName = "connection-1";
  const parameters: WorkspaceConnection = {
    authType: "PAT",
    category: "ACR",
    target: "www.facebook.com",
    value: "secrets"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.workspaceConnections.create(
    resourceGroupName,
    workspaceName,
    connectionName,
    parameters
  );
  console.log(result);
}

createWorkspaceConnection().catch(console.error);