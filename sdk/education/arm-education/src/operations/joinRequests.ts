/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { JoinRequests } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EducationManagementClient } from "../educationManagementClient";
import {
  JoinRequestDetails,
  JoinRequestsListNextOptionalParams,
  JoinRequestsListOptionalParams,
  JoinRequestsListResponse,
  JoinRequestsGetOptionalParams,
  JoinRequestsGetResponse,
  JoinRequestsApproveOptionalParams,
  JoinRequestsDenyOptionalParams,
  JoinRequestsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing JoinRequests operations. */
export class JoinRequestsImpl implements JoinRequests {
  private readonly client: EducationManagementClient;

  /**
   * Initialize a new instance of the class JoinRequests class.
   * @param client Reference to the service client
   */
  constructor(client: EducationManagementClient) {
    this.client = client;
  }

  /**
   * get student join requests
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param options The options parameters.
   */
  public list(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: JoinRequestsListOptionalParams
  ): PagedAsyncIterableIterator<JoinRequestDetails> {
    const iter = this.listPagingAll(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
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
          billingAccountName,
          billingProfileName,
          invoiceSectionName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: JoinRequestsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<JoinRequestDetails[]> {
    let result: JoinRequestsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
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
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: JoinRequestsListOptionalParams
  ): AsyncIterableIterator<JoinRequestDetails> {
    for await (const page of this.listPagingPage(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * get student join requests
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param options The options parameters.
   */
  private _list(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: JoinRequestsListOptionalParams
  ): Promise<JoinRequestsListResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, invoiceSectionName, options },
      listOperationSpec
    );
  }

  /**
   * get student join requests
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param joinRequestName Join name
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    joinRequestName: string,
    options?: JoinRequestsGetOptionalParams
  ): Promise<JoinRequestsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        joinRequestName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Approve student joining the redeemable lab
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param joinRequestName Join name
   * @param options The options parameters.
   */
  approve(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    joinRequestName: string,
    options?: JoinRequestsApproveOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        joinRequestName,
        options
      },
      approveOperationSpec
    );
  }

  /**
   * Deny student joining the redeemable lab
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param joinRequestName Join name
   * @param options The options parameters.
   */
  deny(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    joinRequestName: string,
    options?: JoinRequestsDenyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        joinRequestName,
        options
      },
      denyOperationSpec
    );
  }

  /**
   * ListNext
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    nextLink: string,
    options?: JoinRequestsListNextOptionalParams
  ): Promise<JoinRequestsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        nextLink,
        options
      },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Education/labs/default/joinRequests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JoinRequestList
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.includeDenied],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Education/labs/default/joinRequests/{joinRequestName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JoinRequestDetails
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.joinRequestName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const approveOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Education/labs/default/joinRequests/{joinRequestName}/approve",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.joinRequestName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const denyOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Education/labs/default/joinRequests/{joinRequestName}/deny",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.joinRequestName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JoinRequestList
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.nextLink,
    Parameters.invoiceSectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
