/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Certificate,
  ConnectedEnvironmentsCertificatesListOptionalParams,
  ConnectedEnvironmentsCertificatesGetOptionalParams,
  ConnectedEnvironmentsCertificatesGetResponse,
  ConnectedEnvironmentsCertificatesCreateOrUpdateOptionalParams,
  ConnectedEnvironmentsCertificatesCreateOrUpdateResponse,
  ConnectedEnvironmentsCertificatesDeleteOptionalParams,
  CertificatePatch,
  ConnectedEnvironmentsCertificatesUpdateOptionalParams,
  ConnectedEnvironmentsCertificatesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ConnectedEnvironmentsCertificates. */
export interface ConnectedEnvironmentsCertificates {
  /**
   * Get the Certificates in a given connected environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Connected Environment.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsCertificatesListOptionalParams
  ): PagedAsyncIterableIterator<Certificate>;
  /**
   * Get the specified Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Connected Environment.
   * @param certificateName Name of the Certificate.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    certificateName: string,
    options?: ConnectedEnvironmentsCertificatesGetOptionalParams
  ): Promise<ConnectedEnvironmentsCertificatesGetResponse>;
  /**
   * Create or Update a Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Connected Environment.
   * @param certificateName Name of the Certificate.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    certificateName: string,
    options?: ConnectedEnvironmentsCertificatesCreateOrUpdateOptionalParams
  ): Promise<ConnectedEnvironmentsCertificatesCreateOrUpdateResponse>;
  /**
   * Deletes the specified Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Connected Environment.
   * @param certificateName Name of the Certificate.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    certificateName: string,
    options?: ConnectedEnvironmentsCertificatesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Patches a certificate. Currently only patching of tags is supported
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Connected Environment.
   * @param certificateName Name of the Certificate.
   * @param certificateEnvelope Properties of a certificate that need to be updated
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    certificateName: string,
    certificateEnvelope: CertificatePatch,
    options?: ConnectedEnvironmentsCertificatesUpdateOptionalParams
  ): Promise<ConnectedEnvironmentsCertificatesUpdateResponse>;
}
