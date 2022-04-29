/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ServersImpl,
  FirewallRulesImpl,
  ConfigurationsImpl,
  CheckNameAvailabilityImpl,
  LocationBasedCapabilitiesImpl,
  VirtualNetworkSubnetUsageImpl,
  OperationsImpl,
  DatabasesImpl,
  GetPrivateDnsZoneSuffixImpl
} from "./operations";
import {
  Servers,
  FirewallRules,
  Configurations,
  CheckNameAvailability,
  LocationBasedCapabilities,
  VirtualNetworkSubnetUsage,
  Operations,
  Databases,
  GetPrivateDnsZoneSuffix
} from "./operationsInterfaces";
import { PostgreSQLManagementFlexibleServerClientOptionalParams } from "./models";

export class PostgreSQLManagementFlexibleServerClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the PostgreSQLManagementFlexibleServerClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: PostgreSQLManagementFlexibleServerClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PostgreSQLManagementFlexibleServerClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-postgresql-flexible/6.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-06-01";
    this.servers = new ServersImpl(this);
    this.firewallRules = new FirewallRulesImpl(this);
    this.configurations = new ConfigurationsImpl(this);
    this.checkNameAvailability = new CheckNameAvailabilityImpl(this);
    this.locationBasedCapabilities = new LocationBasedCapabilitiesImpl(this);
    this.virtualNetworkSubnetUsage = new VirtualNetworkSubnetUsageImpl(this);
    this.operations = new OperationsImpl(this);
    this.databases = new DatabasesImpl(this);
    this.getPrivateDnsZoneSuffix = new GetPrivateDnsZoneSuffixImpl(this);
  }

  servers: Servers;
  firewallRules: FirewallRules;
  configurations: Configurations;
  checkNameAvailability: CheckNameAvailability;
  locationBasedCapabilities: LocationBasedCapabilities;
  virtualNetworkSubnetUsage: VirtualNetworkSubnetUsage;
  operations: Operations;
  databases: Databases;
  getPrivateDnsZoneSuffix: GetPrivateDnsZoneSuffix;
}