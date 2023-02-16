/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Services } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SearchManagementClient } from "../searchManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SearchService,
  ServicesListByResourceGroupNextOptionalParams,
  ServicesListByResourceGroupOptionalParams,
  ServicesListByResourceGroupResponse,
  ServicesListBySubscriptionNextOptionalParams,
  ServicesListBySubscriptionOptionalParams,
  ServicesListBySubscriptionResponse,
  ServicesCreateOrUpdateOptionalParams,
  ServicesCreateOrUpdateResponse,
  SearchServiceUpdate,
  ServicesUpdateOptionalParams,
  ServicesUpdateResponse,
  ServicesGetOptionalParams,
  ServicesGetResponse,
  ServicesDeleteOptionalParams,
  ServicesCheckNameAvailabilityOptionalParams,
  ServicesCheckNameAvailabilityResponse,
  ServicesListByResourceGroupNextResponse,
  ServicesListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Services operations. */
export class ServicesImpl implements Services {
  private readonly client: SearchManagementClient;

  /**
   * Initialize a new instance of the class Services class.
   * @param client Reference to the service client
   */
  constructor(client: SearchManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of all search services in the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SearchService> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ServicesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SearchService[]> {
    let result: ServicesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SearchService> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all search services in the given subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ServicesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SearchService> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: ServicesListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SearchService[]> {
    let result: ServicesListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: ServicesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SearchService> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates or updates a search service in the given resource group. If the search service already
   * exists, all properties will be updated with the given values.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service to create or update. Search
   *                          service names must only contain lowercase letters, digits or dashes, cannot use dash as the first
   *                          two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60
   *                          characters in length. Search service names must be globally unique since they are part of the
   *                          service URI (https://<name>.search.windows.net). You cannot change the service name after the
   *                          service is created.
   * @param service The definition of the search service to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    searchServiceName: string,
    service: SearchService,
    options?: ServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServicesCreateOrUpdateResponse>,
      ServicesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServicesCreateOrUpdateResponse> => {
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
      { resourceGroupName, searchServiceName, service, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a search service in the given resource group. If the search service already
   * exists, all properties will be updated with the given values.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service to create or update. Search
   *                          service names must only contain lowercase letters, digits or dashes, cannot use dash as the first
   *                          two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60
   *                          characters in length. Search service names must be globally unique since they are part of the
   *                          service URI (https://<name>.search.windows.net). You cannot change the service name after the
   *                          service is created.
   * @param service The definition of the search service to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    searchServiceName: string,
    service: SearchService,
    options?: ServicesCreateOrUpdateOptionalParams
  ): Promise<ServicesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      searchServiceName,
      service,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing search service in the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service to update.
   * @param service The definition of the search service to update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    searchServiceName: string,
    service: SearchServiceUpdate,
    options?: ServicesUpdateOptionalParams
  ): Promise<ServicesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, service, options },
      updateOperationSpec
    );
  }

  /**
   * Gets the search service with the given name in the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    searchServiceName: string,
    options?: ServicesGetOptionalParams
  ): Promise<ServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a search service in the given resource group, along with its associated resources.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    searchServiceName: string,
    options?: ServicesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets a list of all search services in the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ServicesListByResourceGroupOptionalParams
  ): Promise<ServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets a list of all search services in the given subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ServicesListBySubscriptionOptionalParams
  ): Promise<ServicesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Checks whether or not the given search service name is available for use. Search service names must
   * be globally unique since they are part of the service URI (https://<name>.search.windows.net).
   * @param name The search service name to validate. Search service names must only contain lowercase
   *             letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain
   *             consecutive dashes, and must be between 2 and 60 characters in length.
   * @param options The options parameters.
   */
  checkNameAvailability(
    name: string,
    options?: ServicesCheckNameAvailabilityOptionalParams
  ): Promise<ServicesCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { name, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ServicesListByResourceGroupNextOptionalParams
  ): Promise<ServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ServicesListBySubscriptionNextOptionalParams
  ): Promise<ServicesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SearchService
    },
    201: {
      bodyMapper: Mappers.SearchService
    },
    202: {
      bodyMapper: Mappers.SearchService
    },
    204: {
      bodyMapper: Mappers.SearchService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.service,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SearchService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.service1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Search/searchServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Search/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityOutput
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: {
    parameterPath: { name: ["name"], typeParam: ["typeParam"] },
    mapper: { ...Mappers.CheckNameAvailabilityInput, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
