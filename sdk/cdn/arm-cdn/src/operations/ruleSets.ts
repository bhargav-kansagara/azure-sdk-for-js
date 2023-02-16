/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RuleSets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  RuleSet,
  RuleSetsListByProfileNextOptionalParams,
  RuleSetsListByProfileOptionalParams,
  RuleSetsListByProfileResponse,
  Usage,
  RuleSetsListResourceUsageNextOptionalParams,
  RuleSetsListResourceUsageOptionalParams,
  RuleSetsListResourceUsageResponse,
  RuleSetsGetOptionalParams,
  RuleSetsGetResponse,
  RuleSetsCreateOptionalParams,
  RuleSetsCreateResponse,
  RuleSetsDeleteOptionalParams,
  RuleSetsListByProfileNextResponse,
  RuleSetsListResourceUsageNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RuleSets operations. */
export class RuleSetsImpl implements RuleSets {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class RuleSets class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists existing AzureFrontDoor rule sets within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param options The options parameters.
   */
  public listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: RuleSetsListByProfileOptionalParams
  ): PagedAsyncIterableIterator<RuleSet> {
    const iter = this.listByProfilePagingAll(
      resourceGroupName,
      profileName,
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
        return this.listByProfilePagingPage(
          resourceGroupName,
          profileName,
          options,
          settings
        );
      }
    };
  }

  private async *listByProfilePagingPage(
    resourceGroupName: string,
    profileName: string,
    options?: RuleSetsListByProfileOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<RuleSet[]> {
    let result: RuleSetsListByProfileResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProfile(
        resourceGroupName,
        profileName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProfileNext(
        resourceGroupName,
        profileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProfilePagingAll(
    resourceGroupName: string,
    profileName: string,
    options?: RuleSetsListByProfileOptionalParams
  ): AsyncIterableIterator<RuleSet> {
    for await (const page of this.listByProfilePagingPage(
      resourceGroupName,
      profileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Checks the quota and actual usage of the given AzureFrontDoor rule set under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally.
   * @param options The options parameters.
   */
  public listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsListResourceUsageOptionalParams
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listResourceUsagePagingAll(
      resourceGroupName,
      profileName,
      ruleSetName,
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
        return this.listResourceUsagePagingPage(
          resourceGroupName,
          profileName,
          ruleSetName,
          options,
          settings
        );
      }
    };
  }

  private async *listResourceUsagePagingPage(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsListResourceUsageOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Usage[]> {
    let result: RuleSetsListResourceUsageResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listResourceUsage(
        resourceGroupName,
        profileName,
        ruleSetName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listResourceUsageNext(
        resourceGroupName,
        profileName,
        ruleSetName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listResourceUsagePagingAll(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsListResourceUsageOptionalParams
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listResourceUsagePagingPage(
      resourceGroupName,
      profileName,
      ruleSetName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists existing AzureFrontDoor rule sets within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param options The options parameters.
   */
  private _listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: RuleSetsListByProfileOptionalParams
  ): Promise<RuleSetsListByProfileResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, options },
      listByProfileOperationSpec
    );
  }

  /**
   * Gets an existing AzureFrontDoor rule set with the specified rule set name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsGetOptionalParams
  ): Promise<RuleSetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, ruleSetName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new rule set within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsCreateOptionalParams
  ): Promise<RuleSetsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, ruleSetName, options },
      createOperationSpec
    );
  }

  /**
   * Deletes an existing AzureFrontDoor rule set with the specified rule set name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, profileName, ruleSetName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing AzureFrontDoor rule set with the specified rule set name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      ruleSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Checks the quota and actual usage of the given AzureFrontDoor rule set under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally.
   * @param options The options parameters.
   */
  private _listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    options?: RuleSetsListResourceUsageOptionalParams
  ): Promise<RuleSetsListResourceUsageResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, ruleSetName, options },
      listResourceUsageOperationSpec
    );
  }

  /**
   * ListByProfileNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByProfile method.
   * @param options The options parameters.
   */
  private _listByProfileNext(
    resourceGroupName: string,
    profileName: string,
    nextLink: string,
    options?: RuleSetsListByProfileNextOptionalParams
  ): Promise<RuleSetsListByProfileNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, nextLink, options },
      listByProfileNextOperationSpec
    );
  }

  /**
   * ListResourceUsageNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param ruleSetName Name of the rule set under the profile which is unique globally.
   * @param nextLink The nextLink from the previous successful call to the ListResourceUsage method.
   * @param options The options parameters.
   */
  private _listResourceUsageNext(
    resourceGroupName: string,
    profileName: string,
    ruleSetName: string,
    nextLink: string,
    options?: RuleSetsListResourceUsageNextOptionalParams
  ): Promise<RuleSetsListResourceUsageNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, ruleSetName, nextLink, options },
      listResourceUsageNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RuleSetListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RuleSet
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.ruleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RuleSet
    },
    201: {
      bodyMapper: Mappers.RuleSet
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.ruleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.ruleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listResourceUsageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}/usages",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.ruleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RuleSetListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listResourceUsageNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.nextLink,
    Parameters.ruleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
