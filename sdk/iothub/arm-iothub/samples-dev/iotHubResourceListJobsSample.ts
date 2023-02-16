/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IotHubClient } from "@azure/arm-iothub";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
 *
 * @summary Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/preview/2022-04-30-preview/examples/iothub_listjobs.json
 */
async function iotHubResourceListJobs() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName = "myResourceGroup";
  const resourceName = "testHub";
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.iotHubResource.listJobs(
    resourceGroupName,
    resourceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

iotHubResourceListJobs().catch(console.error);
