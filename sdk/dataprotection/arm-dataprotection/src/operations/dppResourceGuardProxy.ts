/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DppResourceGuardProxy } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataProtectionClient } from "../dataProtectionClient";
import {
  ResourceGuardProxyBaseResource,
  DppResourceGuardProxyListNextOptionalParams,
  DppResourceGuardProxyListOptionalParams,
  DppResourceGuardProxyListResponse,
  DppResourceGuardProxyGetOptionalParams,
  DppResourceGuardProxyGetResponse,
  DppResourceGuardProxyPutOptionalParams,
  DppResourceGuardProxyPutResponse,
  DppResourceGuardProxyDeleteOptionalParams,
  UnlockDeleteRequest,
  DppResourceGuardProxyUnlockDeleteOptionalParams,
  DppResourceGuardProxyUnlockDeleteResponse,
  DppResourceGuardProxyListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DppResourceGuardProxy operations. */
export class DppResourceGuardProxyImpl implements DppResourceGuardProxy {
  private readonly client: DataProtectionClient;

  /**
   * Initialize a new instance of the class DppResourceGuardProxy class.
   * @param client Reference to the service client
   */
  constructor(client: DataProtectionClient) {
    this.client = client;
  }

  /**
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    vaultName: string,
    options?: DppResourceGuardProxyListOptionalParams
  ): PagedAsyncIterableIterator<ResourceGuardProxyBaseResource> {
    const iter = this.listPagingAll(resourceGroupName, vaultName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          vaultName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    vaultName: string,
    options?: DppResourceGuardProxyListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceGuardProxyBaseResource[]> {
    let result: DppResourceGuardProxyListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, vaultName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        vaultName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    vaultName: string,
    options?: DppResourceGuardProxyListOptionalParams
  ): AsyncIterableIterator<ResourceGuardProxyBaseResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      vaultName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    vaultName: string,
    options?: DppResourceGuardProxyListOptionalParams
  ): Promise<DppResourceGuardProxyListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      listOperationSpec
    );
  }

  /**
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param resourceGuardProxyName
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    resourceGuardProxyName: string,
    options?: DppResourceGuardProxyGetOptionalParams
  ): Promise<DppResourceGuardProxyGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, resourceGuardProxyName, options },
      getOperationSpec
    );
  }

  /**
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param resourceGuardProxyName
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    vaultName: string,
    resourceGuardProxyName: string,
    parameters: ResourceGuardProxyBaseResource,
    options?: DppResourceGuardProxyPutOptionalParams
  ): Promise<DppResourceGuardProxyPutResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        resourceGuardProxyName,
        parameters,
        options
      },
      putOperationSpec
    );
  }

  /**
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param resourceGuardProxyName
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vaultName: string,
    resourceGuardProxyName: string,
    options?: DppResourceGuardProxyDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, resourceGuardProxyName, options },
      deleteOperationSpec
    );
  }

  /**
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param resourceGuardProxyName
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  unlockDelete(
    resourceGroupName: string,
    vaultName: string,
    resourceGuardProxyName: string,
    parameters: UnlockDeleteRequest,
    options?: DppResourceGuardProxyUnlockDeleteOptionalParams
  ): Promise<DppResourceGuardProxyUnlockDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        resourceGuardProxyName,
        parameters,
        options
      },
      unlockDeleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    vaultName: string,
    nextLink: string,
    options?: DppResourceGuardProxyListNextOptionalParams
  ): Promise<DppResourceGuardProxyListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupResourceGuardProxies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGuardProxyBaseResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGuardProxyBaseResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.resourceGuardProxyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const putOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGuardProxyBaseResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.resourceGuardProxyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.resourceGuardProxyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const unlockDeleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}/unlockDelete",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UnlockDeleteResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.resourceGuardProxyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGuardProxyBaseResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
