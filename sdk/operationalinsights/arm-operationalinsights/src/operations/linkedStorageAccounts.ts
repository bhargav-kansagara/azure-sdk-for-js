/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { LinkedStorageAccounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClient } from "../operationalInsightsManagementClient";
import {
  LinkedStorageAccountsResource,
  LinkedStorageAccountsListByWorkspaceOptionalParams,
  LinkedStorageAccountsListByWorkspaceResponse,
  DataSourceType,
  LinkedStorageAccountsCreateOrUpdateOptionalParams,
  LinkedStorageAccountsCreateOrUpdateResponse,
  LinkedStorageAccountsDeleteOptionalParams,
  LinkedStorageAccountsGetOptionalParams,
  LinkedStorageAccountsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LinkedStorageAccounts operations. */
export class LinkedStorageAccountsImpl implements LinkedStorageAccounts {
  private readonly client: OperationalInsightsManagementClient;

  /**
   * Initialize a new instance of the class LinkedStorageAccounts class.
   * @param client Reference to the service client
   */
  constructor(client: OperationalInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets all linked storage accounts associated with the specified workspace, storage accounts will be
   * sorted by their data source type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: LinkedStorageAccountsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<LinkedStorageAccountsResource> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: LinkedStorageAccountsListByWorkspaceOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<LinkedStorageAccountsResource[]> {
    let result: LinkedStorageAccountsListByWorkspaceResponse;
    result = await this._listByWorkspace(
      resourceGroupName,
      workspaceName,
      options
    );
    yield result.value || [];
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: LinkedStorageAccountsListByWorkspaceOptionalParams
  ): AsyncIterableIterator<LinkedStorageAccountsResource> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create or Update a link relation between current workspace and a group of storage accounts of a
   * specific data source type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceType Linked storage accounts type.
   * @param parameters The parameters required to create or update linked storage accounts.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    dataSourceType: DataSourceType,
    parameters: LinkedStorageAccountsResource,
    options?: LinkedStorageAccountsCreateOrUpdateOptionalParams
  ): Promise<LinkedStorageAccountsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, dataSourceType, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes all linked storage accounts of a specific data source type associated with the specified
   * workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceType Linked storage accounts type.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    dataSourceType: DataSourceType,
    options?: LinkedStorageAccountsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, dataSourceType, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets all linked storage account of a specific data source type associated with the specified
   * workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceType Linked storage accounts type.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    dataSourceType: DataSourceType,
    options?: LinkedStorageAccountsGetOptionalParams
  ): Promise<LinkedStorageAccountsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, dataSourceType, options },
      getOperationSpec
    );
  }

  /**
   * Gets all linked storage accounts associated with the specified workspace, storage accounts will be
   * sorted by their data source type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: LinkedStorageAccountsListByWorkspaceOptionalParams
  ): Promise<LinkedStorageAccountsListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedStorageAccounts/{dataSourceType}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedStorageAccountsResource
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataSourceType
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedStorageAccounts/{dataSourceType}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataSourceType
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedStorageAccounts/{dataSourceType}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedStorageAccountsResource
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataSourceType
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedStorageAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedStorageAccountsListResult
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
