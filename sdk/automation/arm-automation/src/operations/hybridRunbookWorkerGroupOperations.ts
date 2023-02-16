/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { HybridRunbookWorkerGroupOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  HybridRunbookWorkerGroup,
  HybridRunbookWorkerGroupListByAutomationAccountNextOptionalParams,
  HybridRunbookWorkerGroupListByAutomationAccountOptionalParams,
  HybridRunbookWorkerGroupListByAutomationAccountResponse,
  HybridRunbookWorkerGroupDeleteOptionalParams,
  HybridRunbookWorkerGroupGetOptionalParams,
  HybridRunbookWorkerGroupGetResponse,
  HybridRunbookWorkerGroupCreateOrUpdateParameters,
  HybridRunbookWorkerGroupCreateOptionalParams,
  HybridRunbookWorkerGroupCreateResponse,
  HybridRunbookWorkerGroupUpdateOptionalParams,
  HybridRunbookWorkerGroupUpdateResponse,
  HybridRunbookWorkerGroupListByAutomationAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing HybridRunbookWorkerGroupOperations operations. */
export class HybridRunbookWorkerGroupOperationsImpl
  implements HybridRunbookWorkerGroupOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class HybridRunbookWorkerGroupOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of hybrid runbook worker groups.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  public listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: HybridRunbookWorkerGroupListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<HybridRunbookWorkerGroup> {
    const iter = this.listByAutomationAccountPagingAll(
      resourceGroupName,
      automationAccountName,
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
        return this.listByAutomationAccountPagingPage(
          resourceGroupName,
          automationAccountName,
          options,
          settings
        );
      }
    };
  }

  private async *listByAutomationAccountPagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    options?: HybridRunbookWorkerGroupListByAutomationAccountOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<HybridRunbookWorkerGroup[]> {
    let result: HybridRunbookWorkerGroupListByAutomationAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAutomationAccount(
        resourceGroupName,
        automationAccountName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAutomationAccountNext(
        resourceGroupName,
        automationAccountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAutomationAccountPagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    options?: HybridRunbookWorkerGroupListByAutomationAccountOptionalParams
  ): AsyncIterableIterator<HybridRunbookWorkerGroup> {
    for await (const page of this.listByAutomationAccountPagingPage(
      resourceGroupName,
      automationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Delete a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    options?: HybridRunbookWorkerGroupDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Retrieve a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    options?: HybridRunbookWorkerGroupGetOptionalParams
  ): Promise<HybridRunbookWorkerGroupGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param hybridRunbookWorkerGroupCreationParameters The create or update parameters for hybrid runbook
   *                                                   worker group.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    hybridRunbookWorkerGroupCreationParameters: HybridRunbookWorkerGroupCreateOrUpdateParameters,
    options?: HybridRunbookWorkerGroupCreateOptionalParams
  ): Promise<HybridRunbookWorkerGroupCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        hybridRunbookWorkerGroupCreationParameters,
        options
      },
      createOperationSpec
    );
  }

  /**
   * Update a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param hybridRunbookWorkerGroupUpdationParameters The hybrid runbook worker group
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    hybridRunbookWorkerGroupUpdationParameters: HybridRunbookWorkerGroupCreateOrUpdateParameters,
    options?: HybridRunbookWorkerGroupUpdateOptionalParams
  ): Promise<HybridRunbookWorkerGroupUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        hybridRunbookWorkerGroupUpdationParameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Retrieve a list of hybrid runbook worker groups.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  private _listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: HybridRunbookWorkerGroupListByAutomationAccountOptionalParams
  ): Promise<HybridRunbookWorkerGroupListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, options },
      listByAutomationAccountOperationSpec
    );
  }

  /**
   * ListByAutomationAccountNext
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nextLink The nextLink from the previous successful call to the ListByAutomationAccount
   *                 method.
   * @param options The options parameters.
   */
  private _listByAutomationAccountNext(
    resourceGroupName: string,
    automationAccountName: string,
    nextLink: string,
    options?: HybridRunbookWorkerGroupListByAutomationAccountNextOptionalParams
  ): Promise<HybridRunbookWorkerGroupListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nextLink, options },
      listByAutomationAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkerGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkerGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.hybridRunbookWorkerGroupCreationParameters,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkerGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.hybridRunbookWorkerGroupUpdationParameters,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByAutomationAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkerGroupsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAutomationAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkerGroupsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
