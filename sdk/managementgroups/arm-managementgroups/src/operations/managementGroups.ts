/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagementGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ManagementGroupsAPI } from "../managementGroupsAPI";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ManagementGroupInfo,
  ManagementGroupsListNextOptionalParams,
  ManagementGroupsListOptionalParams,
  ManagementGroupsListResponse,
  DescendantInfo,
  ManagementGroupsGetDescendantsNextOptionalParams,
  ManagementGroupsGetDescendantsOptionalParams,
  ManagementGroupsGetDescendantsResponse,
  ManagementGroupsGetOptionalParams,
  ManagementGroupsGetResponse,
  CreateManagementGroupRequest,
  ManagementGroupsCreateOrUpdateOptionalParams,
  ManagementGroupsCreateOrUpdateResponse,
  PatchManagementGroupRequest,
  ManagementGroupsUpdateOptionalParams,
  ManagementGroupsUpdateResponse,
  ManagementGroupsDeleteOptionalParams,
  ManagementGroupsDeleteResponse,
  ManagementGroupsListNextResponse,
  ManagementGroupsGetDescendantsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagementGroups operations. */
export class ManagementGroupsImpl implements ManagementGroups {
  private readonly client: ManagementGroupsAPI;

  /**
   * Initialize a new instance of the class ManagementGroups class.
   * @param client Reference to the service client
   */
  constructor(client: ManagementGroupsAPI) {
    this.client = client;
  }

  /**
   * List management groups for the authenticated user.
   *
   * @param options The options parameters.
   */
  public list(
    options?: ManagementGroupsListOptionalParams
  ): PagedAsyncIterableIterator<ManagementGroupInfo> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: ManagementGroupsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ManagementGroupInfo[]> {
    let result: ManagementGroupsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ManagementGroupsListOptionalParams
  ): AsyncIterableIterator<ManagementGroupInfo> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List all entities that descend from a management group.
   *
   * @param groupId Management Group ID.
   * @param options The options parameters.
   */
  public listDescendants(
    groupId: string,
    options?: ManagementGroupsGetDescendantsOptionalParams
  ): PagedAsyncIterableIterator<DescendantInfo> {
    const iter = this.getDescendantsPagingAll(groupId, options);
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
        return this.getDescendantsPagingPage(groupId, options, settings);
      }
    };
  }

  private async *getDescendantsPagingPage(
    groupId: string,
    options?: ManagementGroupsGetDescendantsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DescendantInfo[]> {
    let result: ManagementGroupsGetDescendantsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getDescendants(groupId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getDescendantsNext(
        groupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getDescendantsPagingAll(
    groupId: string,
    options?: ManagementGroupsGetDescendantsOptionalParams
  ): AsyncIterableIterator<DescendantInfo> {
    for await (const page of this.getDescendantsPagingPage(groupId, options)) {
      yield* page;
    }
  }

  /**
   * List management groups for the authenticated user.
   *
   * @param options The options parameters.
   */
  private _list(
    options?: ManagementGroupsListOptionalParams
  ): Promise<ManagementGroupsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get the details of the management group.
   *
   * @param groupId Management Group ID.
   * @param options The options parameters.
   */
  get(
    groupId: string,
    options?: ManagementGroupsGetOptionalParams
  ): Promise<ManagementGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a management group.
   * If a management group is already created and a subsequent create request is issued with different
   * properties, the management group properties will be updated.
   *
   * @param groupId Management Group ID.
   * @param createManagementGroupRequest Management group creation parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    groupId: string,
    createManagementGroupRequest: CreateManagementGroupRequest,
    options?: ManagementGroupsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagementGroupsCreateOrUpdateResponse>,
      ManagementGroupsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagementGroupsCreateOrUpdateResponse> => {
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
      { groupId, createManagementGroupRequest, options },
      createOrUpdateOperationSpec
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
   * Create or update a management group.
   * If a management group is already created and a subsequent create request is issued with different
   * properties, the management group properties will be updated.
   *
   * @param groupId Management Group ID.
   * @param createManagementGroupRequest Management group creation parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    groupId: string,
    createManagementGroupRequest: CreateManagementGroupRequest,
    options?: ManagementGroupsCreateOrUpdateOptionalParams
  ): Promise<ManagementGroupsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      groupId,
      createManagementGroupRequest,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a management group.
   *
   * @param groupId Management Group ID.
   * @param patchGroupRequest Management group patch parameters.
   * @param options The options parameters.
   */
  update(
    groupId: string,
    patchGroupRequest: PatchManagementGroupRequest,
    options?: ManagementGroupsUpdateOptionalParams
  ): Promise<ManagementGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      { groupId, patchGroupRequest, options },
      updateOperationSpec
    );
  }

  /**
   * Delete management group.
   * If a management group contains child resources, the request will fail.
   *
   * @param groupId Management Group ID.
   * @param options The options parameters.
   */
  async beginDelete(
    groupId: string,
    options?: ManagementGroupsDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagementGroupsDeleteResponse>,
      ManagementGroupsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagementGroupsDeleteResponse> => {
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
      { groupId, options },
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
   * Delete management group.
   * If a management group contains child resources, the request will fail.
   *
   * @param groupId Management Group ID.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    groupId: string,
    options?: ManagementGroupsDeleteOptionalParams
  ): Promise<ManagementGroupsDeleteResponse> {
    const poller = await this.beginDelete(groupId, options);
    return poller.pollUntilDone();
  }

  /**
   * List all entities that descend from a management group.
   *
   * @param groupId Management Group ID.
   * @param options The options parameters.
   */
  private _getDescendants(
    groupId: string,
    options?: ManagementGroupsGetDescendantsOptionalParams
  ): Promise<ManagementGroupsGetDescendantsResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      getDescendantsOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ManagementGroupsListNextOptionalParams
  ): Promise<ManagementGroupsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * GetDescendantsNext
   * @param groupId Management Group ID.
   * @param nextLink The nextLink from the previous successful call to the GetDescendants method.
   * @param options The options parameters.
   */
  private _getDescendantsNext(
    groupId: string,
    nextLink: string,
    options?: ManagementGroupsGetDescendantsNextOptionalParams
  ): Promise<ManagementGroupsGetDescendantsNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, nextLink, options },
      getDescendantsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.cacheControl],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{groupId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.recurse,
    Parameters.filter
  ],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept, Parameters.cacheControl],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{groupId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementGroup
    },
    201: {
      bodyMapper: Mappers.ManagementGroup
    },
    202: {
      bodyMapper: Mappers.ManagementGroup
    },
    204: {
      bodyMapper: Mappers.ManagementGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.createManagementGroupRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [
    Parameters.accept,
    Parameters.cacheControl,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{groupId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.patchGroupRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [
    Parameters.accept,
    Parameters.cacheControl,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{groupId}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.AzureAsyncOperationResults,
      headersMapper: Mappers.ManagementGroupsDeleteHeaders
    },
    201: {
      bodyMapper: Mappers.AzureAsyncOperationResults,
      headersMapper: Mappers.ManagementGroupsDeleteHeaders
    },
    202: {
      bodyMapper: Mappers.AzureAsyncOperationResults,
      headersMapper: Mappers.ManagementGroupsDeleteHeaders
    },
    204: {
      bodyMapper: Mappers.AzureAsyncOperationResults,
      headersMapper: Mappers.ManagementGroupsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept, Parameters.cacheControl],
  serializer
};
const getDescendantsOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/descendants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DescendantListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skiptoken,
    Parameters.top
  ],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept, Parameters.cacheControl],
  serializer
};
const getDescendantsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DescendantListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skiptoken,
    Parameters.top
  ],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
