/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApplicationInsightsManagementClient } = require("@azure/arm-appinsights");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates a favorite that has already been added to an Application Insights component.
 *
 * @summary Updates a favorite that has already been added to an Application Insights component.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2015-05-01/examples/FavoriteUpdate.json
 */
async function favoriteList() {
  const subscriptionId = "subid";
  const resourceGroupName = "my-resource-group";
  const resourceName = "my-ai-component";
  const favoriteId = "deadb33f-5e0d-4064-8ebb-1a4ed0313eb2";
  const favoriteProperties = {
    category: undefined,
    config:
      '{"MEDataModelRawJSON":"{\\"version\\": \\"1.4.1\\",\\"isCustomDataModel\\": true,\\"items\\": [{\\"id\\": \\"90a7134d-9a38-4c25-88d3-a495209873eb\\",\\"chartType\\": \\"Area\\",\\"chartHeight\\": 4,\\"metrics\\": [{\\"id\\": \\"preview/requests/count\\",\\"metricAggregation\\": \\"Sum\\",\\"color\\": \\"msportalfx-bgcolor-d0\\"}],\\"priorPeriod\\": false,\\"clickAction\\": {\\"defaultBlade\\": \\"SearchBlade\\"},\\"horizontalBars\\": true,\\"showOther\\": true,\\"aggregation\\": \\"Sum\\",\\"percentage\\": false,\\"palette\\": \\"fail\\",\\"yAxisOption\\": 0,\\"title\\": \\"\\"},{\\"id\\": \\"0c289098-88e8-4010-b212-546815cddf70\\",\\"chartType\\": \\"Area\\",\\"chartHeight\\": 2,\\"metrics\\": [{\\"id\\": \\"preview/requests/duration\\",\\"metricAggregation\\": \\"Avg\\",\\"color\\": \\"msportalfx-bgcolor-j1\\"}],\\"priorPeriod\\": false,\\"clickAction\\": {\\"defaultBlade\\": \\"SearchBlade\\"},\\"horizontalBars\\": true,\\"showOther\\": true,\\"aggregation\\": \\"Avg\\",\\"percentage\\": false,\\"palette\\": \\"greenHues\\",\\"yAxisOption\\": 0,\\"title\\": \\"\\"},{\\"id\\": \\"cbdaab6f-a808-4f71-aca5-b3976cbb7345\\",\\"chartType\\": \\"Bar\\",\\"chartHeight\\": 4,\\"metrics\\": [{\\"id\\": \\"preview/requests/duration\\",\\"metricAggregation\\": \\"Avg\\",\\"color\\": \\"msportalfx-bgcolor-d0\\"}],\\"priorPeriod\\": false,\\"clickAction\\": {\\"defaultBlade\\": \\"SearchBlade\\"},\\"horizontalBars\\": true,\\"showOther\\": true,\\"aggregation\\": \\"Avg\\",\\"percentage\\": false,\\"palette\\": \\"magentaHues\\",\\"yAxisOption\\": 0,\\"title\\": \\"\\"},{\\"id\\": \\"1d5a6a3a-9fa1-4099-9cf9-05eff72d1b02\\",\\"grouping\\": {\\"kind\\": \\"ByDimension\\",\\"dimension\\": \\"context.application.version\\"},\\"chartType\\": \\"Grid\\",\\"chartHeight\\": 1,\\"metrics\\": [{\\"id\\": \\"basicException.count\\",\\"metricAggregation\\": \\"Sum\\",\\"color\\": \\"msportalfx-bgcolor-g0\\"},{\\"id\\": \\"requestFailed.count\\",\\"metricAggregation\\": \\"Sum\\",\\"color\\": \\"msportalfx-bgcolor-f0s2\\"}],\\"priorPeriod\\": true,\\"clickAction\\": {\\"defaultBlade\\": \\"SearchBlade\\"},\\"horizontalBars\\": true,\\"showOther\\": true,\\"percentage\\": false,\\"palette\\": \\"blueHues\\",\\"yAxisOption\\": 0,\\"title\\": \\"\\"}],\\"currentFilter\\": {\\"eventTypes\\": [1,2],\\"typeFacets\\": {},\\"isPermissive\\": false},\\"timeContext\\": {\\"durationMs\\": 75600000,\\"endTime\\": \\"2018-01-31T20:30:00.000Z\\",\\"createdTime\\": \\"2018-01-31T23:54:26.280Z\\",\\"isInitialTime\\": false,\\"grain\\": 1,\\"useDashboardTimeRange\\": false},\\"jsonUri\\": \\"Favorite_BlankChart\\",\\"timeSource\\": 0}"}',
    favoriteId: "deadb33f-5e0d-4064-8ebb-1a4ed0313eb2",
    favoriteType: "shared",
    isGeneratedFromTemplate: false,
    name: "Derek Changed This",
    sourceType: undefined,
    tags: ["TagSample01", "TagSample02", "TagSample03"],
    timeModified: "2018-02-02T18:39:11.6569686Z",
    version: "ME",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(credential, subscriptionId);
  const result = await client.favorites.update(
    resourceGroupName,
    resourceName,
    favoriteId,
    favoriteProperties
  );
  console.log(result);
}

favoriteList().catch(console.error);
