/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Result of the request to list Dedicated HSM Provider operations. It contains a list of operations. */
export interface DedicatedHsmOperationListResult {
  /** List of Dedicated HSM Resource Provider operations. */
  value?: DedicatedHsmOperation[];
}

/** REST API operation */
export interface DedicatedHsmOperation {
  /** The name of the Dedicated HSM Resource Provider Operation. */
  name?: string;
  /**
   * Gets or sets a value indicating whether it is a data plane action
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** The display string. */
  display?: DedicatedHsmOperationDisplay;
}

/** The display string. */
export interface DedicatedHsmOperationDisplay {
  /** The Resource Provider of the operation */
  provider?: string;
  /** Resource on which the operation is performed. */
  resource?: string;
  /** Operation type: Read, write, delete, etc. */
  operation?: string;
  /** The object that represents the operation. */
  description?: string;
}

/** The error exception. */
export interface DedicatedHsmError {
  /**
   * The error detail of the operation if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: ErrorModel;
}

/** The key vault server error. */
export interface ErrorModel {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * Contains more specific error that narrows down the cause. May be null.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: ErrorModel;
}

/** Metadata pertaining to creation and last modification of dedicated hsm resource. */
export interface SystemData {
  /** The identity that created dedicated hsm resource. */
  createdBy?: string;
  /** The type of identity that created dedicated hsm resource. */
  createdByType?: IdentityType;
  /** The timestamp of dedicated hsm resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified dedicated hsm resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified dedicated hsm resource. */
  lastModifiedByType?: IdentityType;
  /** The timestamp of dedicated hsm resource last modification (UTC). */
  lastModifiedAt?: Date;
}

/** The network profile definition. */
export interface NetworkProfile {
  /** Specifies the identifier of the subnet. */
  subnet?: ApiEntityReference;
  /** Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM. */
  networkInterfaces?: NetworkInterface[];
}

/** The API entity reference. */
export interface ApiEntityReference {
  /** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... */
  id?: string;
}

/** The network interface definition. */
export interface NetworkInterface {
  /**
   * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /** Private Ip address of the interface */
  privateIpAddress?: string;
}

/** Dedicated HSM resource */
export interface Resource {
  /**
   * The Azure Resource Manager resource ID for the dedicated HSM.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the dedicated HSM.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type of the dedicated HSM.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The supported Azure location where the dedicated HSM should be created. */
  location: string;
  /** SKU details */
  sku?: Sku;
  /** The Dedicated Hsm zones. */
  zones?: string[];
  /** Resource tags */
  tags?: { [propertyName: string]: string };
}

/** SKU of the dedicated HSM */
export interface Sku {
  /** SKU of the dedicated HSM */
  name?: SkuName;
}

/** Patchable properties of the dedicated HSM */
export interface DedicatedHsmPatchParameters {
  /** Resource tags */
  tags?: { [propertyName: string]: string };
}

/** List of dedicated HSMs */
export interface DedicatedHsmListResult {
  /** The list of dedicated HSMs. */
  value?: DedicatedHsm[];
  /** The URL to get the next set of dedicated hsms. */
  nextLink?: string;
}

/** Collection of OutboundEnvironmentEndpoint */
export interface OutboundEnvironmentEndpointCollection {
  /** Collection of resources. */
  value: OutboundEnvironmentEndpoint[];
  /**
   * Link to next page of resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Egress endpoints which dedicated hsm service connects to for common purpose. */
export interface OutboundEnvironmentEndpoint {
  /** The category of endpoints accessed by the dedicated hsm service, e.g. azure-resource-management, apiserver, etc. */
  category?: string;
  /** The endpoints that dedicated hsm service connects to */
  endpoints?: EndpointDependency[];
}

/** A domain name that dedicated hsm services are reaching at. */
export interface EndpointDependency {
  /** The domain name of the dependency. */
  domainName?: string;
  /** The Ports and Protocols used when connecting to domainName. */
  endpointDetails?: EndpointDetail[];
}

/** Connect information from the dedicated hsm service to a single endpoint. */
export interface EndpointDetail {
  /** An IP Address that Domain Name currently resolves to. */
  ipAddress?: string;
  /** The port an endpoint is connected to. */
  port?: number;
  /** The protocol used for connection */
  protocol?: string;
  /** Description of the detail */
  description?: string;
}

/** List of dedicated HSM resources. */
export interface ResourceListResult {
  /** The list of dedicated HSM resources. */
  value?: Resource[];
  /** The URL to get the next set of dedicated HSM resources. */
  nextLink?: string;
}

/** Resource information with extended details. */
export interface DedicatedHsm extends Resource {
  /**
   * Metadata pertaining to creation and last modification of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** Specifies the network interfaces of the dedicated hsm. */
  networkProfile?: NetworkProfile;
  /** Specifies the management network interfaces of the dedicated hsm. */
  managementNetworkProfile?: NetworkProfile;
  /** This field will be used when RP does not support Availability zones. */
  stampId?: string;
  /**
   * Resource Status Message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly statusMessage?: string;
  /**
   * Provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: JsonWebKeyType;
}

/** Known values of {@link IdentityType} that the service accepts. */
export enum KnownIdentityType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for IdentityType. \
 * {@link KnownIdentityType} can be used interchangeably with IdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type IdentityType = string;

/** Known values of {@link JsonWebKeyType} that the service accepts. */
export enum KnownJsonWebKeyType {
  /** The dedicated HSM has been full provisioned. */
  Succeeded = "Succeeded",
  /** The dedicated HSM is currently being provisioned. */
  Provisioning = "Provisioning",
  /** A device is currently being allocated for the dedicated HSM resource. */
  Allocating = "Allocating",
  /** The dedicated HSM is being connected to the virtual network. */
  Connecting = "Connecting",
  /** Provisioning of the dedicated HSM has failed. */
  Failed = "Failed",
  /** Validating the subscription has sufficient quota to allocate a dedicated HSM device. */
  CheckingQuota = "CheckingQuota",
  /** The dedicated HSM is currently being deleted. */
  Deleting = "Deleting"
}

/**
 * Defines values for JsonWebKeyType. \
 * {@link KnownJsonWebKeyType} can be used interchangeably with JsonWebKeyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: The dedicated HSM has been full provisioned. \
 * **Provisioning**: The dedicated HSM is currently being provisioned. \
 * **Allocating**: A device is currently being allocated for the dedicated HSM resource. \
 * **Connecting**: The dedicated HSM is being connected to the virtual network. \
 * **Failed**: Provisioning of the dedicated HSM has failed. \
 * **CheckingQuota**: Validating the subscription has sufficient quota to allocate a dedicated HSM device. \
 * **Deleting**: The dedicated HSM is currently being deleted.
 */
export type JsonWebKeyType = string;

/** Known values of {@link SkuName} that the service accepts. */
export enum KnownSkuName {
  /** The dedicated HSM is a Safenet Luna Network HSM A790 device. */
  SafeNetLunaNetworkHSMA790 = "SafeNet Luna Network HSM A790",
  /** The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 1 local master key which supports up to 60 calls per second. */
  PayShield10KLMK1CPS60 = "payShield10K_LMK1_CPS60",
  /** The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 1 local master key which supports up to 250 calls per second. */
  PayShield10KLMK1CPS250 = "payShield10K_LMK1_CPS250",
  /** The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 1 local master key which supports up to 2500 calls per second. */
  PayShield10KLMK1CPS2500 = "payShield10K_LMK1_CPS2500",
  /** The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 2 local master keys which supports up to 60 calls per second. */
  PayShield10KLMK2CPS60 = "payShield10K_LMK2_CPS60",
  /** The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 2 local master keys which supports up to 250 calls per second. */
  PayShield10KLMK2CPS250 = "payShield10K_LMK2_CPS250",
  /** The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 2 local master keys which supports up to 2500 calls per second. */
  PayShield10KLMK2CPS2500 = "payShield10K_LMK2_CPS2500"
}

/**
 * Defines values for SkuName. \
 * {@link KnownSkuName} can be used interchangeably with SkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SafeNet Luna Network HSM A790**: The dedicated HSM is a Safenet Luna Network HSM A790 device. \
 * **payShield10K_LMK1_CPS60**: The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 1 local master key which supports up to 60 calls per second. \
 * **payShield10K_LMK1_CPS250**: The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 1 local master key which supports up to 250 calls per second. \
 * **payShield10K_LMK1_CPS2500**: The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 1 local master key which supports up to 2500 calls per second. \
 * **payShield10K_LMK2_CPS60**: The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 2 local master keys which supports up to 60 calls per second. \
 * **payShield10K_LMK2_CPS250**: The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 2 local master keys which supports up to 250 calls per second. \
 * **payShield10K_LMK2_CPS2500**: The dedicated HSM is a payShield 10K, model PS10-D, 10Gb Ethernet Hardware Platform device with 2 local master keys which supports up to 2500 calls per second.
 */
export type SkuName = string;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = DedicatedHsmOperationListResult;

/** Optional parameters. */
export interface DedicatedHsmCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DedicatedHsmCreateOrUpdateResponse = DedicatedHsm;

/** Optional parameters. */
export interface DedicatedHsmUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Resource tags */
  tags?: { [propertyName: string]: string };
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type DedicatedHsmUpdateResponse = DedicatedHsm;

/** Optional parameters. */
export interface DedicatedHsmDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DedicatedHsmGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DedicatedHsmGetResponse = DedicatedHsm;

/** Optional parameters. */
export interface DedicatedHsmListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** Maximum number of results to return. */
  top?: number;
}

/** Contains response data for the listByResourceGroup operation. */
export type DedicatedHsmListByResourceGroupResponse = DedicatedHsmListResult;

/** Optional parameters. */
export interface DedicatedHsmListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {
  /** Maximum number of results to return. */
  top?: number;
}

/** Contains response data for the listBySubscription operation. */
export type DedicatedHsmListBySubscriptionResponse = DedicatedHsmListResult;

/** Optional parameters. */
export interface DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOutboundNetworkDependenciesEndpoints operation. */
export type DedicatedHsmListOutboundNetworkDependenciesEndpointsResponse = OutboundEnvironmentEndpointCollection;

/** Optional parameters. */
export interface DedicatedHsmListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type DedicatedHsmListByResourceGroupNextResponse = DedicatedHsmListResult;

/** Optional parameters. */
export interface DedicatedHsmListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type DedicatedHsmListBySubscriptionNextResponse = DedicatedHsmListResult;

/** Optional parameters. */
export interface DedicatedHsmListOutboundNetworkDependenciesEndpointsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOutboundNetworkDependenciesEndpointsNext operation. */
export type DedicatedHsmListOutboundNetworkDependenciesEndpointsNextResponse = OutboundEnvironmentEndpointCollection;

/** Optional parameters. */
export interface AzureDedicatedHSMResourceProviderOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
