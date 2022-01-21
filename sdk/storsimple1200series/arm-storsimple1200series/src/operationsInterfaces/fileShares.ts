/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  FileShare,
  FileSharesListByFileServerOptionalParams,
  Metrics,
  FileSharesListMetricsOptionalParams,
  MetricDefinition,
  FileSharesListMetricDefinitionOptionalParams,
  FileSharesListByDeviceOptionalParams,
  FileSharesGetOptionalParams,
  FileSharesGetResponse,
  FileSharesCreateOrUpdateOptionalParams,
  FileSharesCreateOrUpdateResponse,
  FileSharesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FileShares. */
export interface FileShares {
  /**
   * Retrieves all the file shares in a file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByFileServer(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileSharesListByFileServerOptionalParams
  ): PagedAsyncIterableIterator<FileShare>;
  /**
   * Gets the file share metrics
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listMetrics(
    deviceName: string,
    fileServerName: string,
    shareName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileSharesListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metrics>;
  /**
   * Retrieves metric definitions of all metrics aggregated at the file share.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listMetricDefinition(
    deviceName: string,
    fileServerName: string,
    shareName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileSharesListMetricDefinitionOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition>;
  /**
   * Retrieves all the file shares in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileSharesListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<FileShare>;
  /**
   * Returns the properties of the specified file share name.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    fileServerName: string,
    shareName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileSharesGetOptionalParams
  ): Promise<FileSharesGetResponse>;
  /**
   * Creates or updates the file share.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param fileShare The file share.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    deviceName: string,
    fileServerName: string,
    shareName: string,
    resourceGroupName: string,
    managerName: string,
    fileShare: FileShare,
    options?: FileSharesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FileSharesCreateOrUpdateResponse>,
      FileSharesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates the file share.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param fileShare The file share.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    deviceName: string,
    fileServerName: string,
    shareName: string,
    resourceGroupName: string,
    managerName: string,
    fileShare: FileShare,
    options?: FileSharesCreateOrUpdateOptionalParams
  ): Promise<FileSharesCreateOrUpdateResponse>;
  /**
   * Deletes the file share.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share Name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDelete(
    deviceName: string,
    fileServerName: string,
    shareName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileSharesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the file share.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share Name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    deviceName: string,
    fileServerName: string,
    shareName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileSharesDeleteOptionalParams
  ): Promise<void>;
}