/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SourceControlConfigurations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SourceControlConfigurationClient } from "../sourceControlConfigurationClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SourceControlConfiguration,
  SourceControlConfigurationsListNextOptionalParams,
  SourceControlConfigurationsListOptionalParams,
  SourceControlConfigurationsListResponse,
  SourceControlConfigurationsGetOptionalParams,
  SourceControlConfigurationsGetResponse,
  SourceControlConfigurationsCreateOrUpdateOptionalParams,
  SourceControlConfigurationsCreateOrUpdateResponse,
  SourceControlConfigurationsDeleteOptionalParams,
  SourceControlConfigurationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SourceControlConfigurations operations. */
export class SourceControlConfigurationsImpl
  implements SourceControlConfigurations {
  private readonly client: SourceControlConfigurationClient;

  /**
   * Initialize a new instance of the class SourceControlConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: SourceControlConfigurationClient) {
    this.client = client;
  }

  /**
   * List all Source Control Configurations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    options?: SourceControlConfigurationsListOptionalParams
  ): PagedAsyncIterableIterator<SourceControlConfiguration> {
    const iter = this.listPagingAll(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
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
        return this.listPagingPage(
          resourceGroupName,
          clusterRp,
          clusterResourceName,
          clusterName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    options?: SourceControlConfigurationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SourceControlConfiguration[]> {
    let result: SourceControlConfigurationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
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
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    options?: SourceControlConfigurationsListOptionalParams
  ): AsyncIterableIterator<SourceControlConfiguration> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets details of the Source Control Configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param sourceControlConfigurationName Name of the Source Control Configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    sourceControlConfigurationName: string,
    options?: SourceControlConfigurationsGetOptionalParams
  ): Promise<SourceControlConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        sourceControlConfigurationName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create a new Kubernetes Source Control Configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param sourceControlConfigurationName Name of the Source Control Configuration.
   * @param sourceControlConfiguration Properties necessary to Create KubernetesConfiguration.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    sourceControlConfigurationName: string,
    sourceControlConfiguration: SourceControlConfiguration,
    options?: SourceControlConfigurationsCreateOrUpdateOptionalParams
  ): Promise<SourceControlConfigurationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        sourceControlConfigurationName,
        sourceControlConfiguration,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * This will delete the YAML file used to set up the Source control configuration, thus stopping future
   * sync from the source repo.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param sourceControlConfigurationName Name of the Source Control Configuration.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    sourceControlConfigurationName: string,
    options?: SourceControlConfigurationsDeleteOptionalParams
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
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        sourceControlConfigurationName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * This will delete the YAML file used to set up the Source control configuration, thus stopping future
   * sync from the source repo.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param sourceControlConfigurationName Name of the Source Control Configuration.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    sourceControlConfigurationName: string,
    options?: SourceControlConfigurationsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
      sourceControlConfigurationName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all Source Control Configurations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    options?: SourceControlConfigurationsListOptionalParams
  ): Promise<SourceControlConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        options
      },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    nextLink: string,
    options?: SourceControlConfigurationsListNextOptionalParams
  ): Promise<SourceControlConfigurationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        nextLink,
        options
      },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/sourceControlConfigurations/{sourceControlConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.sourceControlConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/sourceControlConfigurations/{sourceControlConfigurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlConfiguration
    },
    201: {
      bodyMapper: Mappers.SourceControlConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.sourceControlConfiguration,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.sourceControlConfigurationName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/sourceControlConfigurations/{sourceControlConfigurationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.sourceControlConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/sourceControlConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlConfigurationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlConfigurationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
