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
  Slice,
  SlicesListByMobileNetworkOptionalParams,
  SlicesDeleteOptionalParams,
  SlicesGetOptionalParams,
  SlicesGetResponse,
  SlicesCreateOrUpdateOptionalParams,
  SlicesCreateOrUpdateResponse,
  TagsObject,
  SlicesUpdateTagsOptionalParams,
  SlicesUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Slices. */
export interface Slices {
  /**
   * Lists all slices in the mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param options The options parameters.
   */
  listByMobileNetwork(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SlicesListByMobileNetworkOptionalParams
  ): PagedAsyncIterableIterator<Slice>;
  /**
   * Deletes the specified network slice.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    options?: SlicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the specified network slice.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    options?: SlicesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets information about the specified network slice.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    options?: SlicesGetOptionalParams
  ): Promise<SlicesGetResponse>;
  /**
   * Creates or updates a network slice. Must be created in the same location as its parent mobile
   * network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param parameters Parameters supplied to the create or update network slice operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    parameters: Slice,
    options?: SlicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SlicesCreateOrUpdateResponse>,
      SlicesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a network slice. Must be created in the same location as its parent mobile
   * network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param parameters Parameters supplied to the create or update network slice operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    parameters: Slice,
    options?: SlicesCreateOrUpdateOptionalParams
  ): Promise<SlicesCreateOrUpdateResponse>;
  /**
   * Updates slice tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param parameters Parameters supplied to update network slice tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    parameters: TagsObject,
    options?: SlicesUpdateTagsOptionalParams
  ): Promise<SlicesUpdateTagsResponse>;
}
