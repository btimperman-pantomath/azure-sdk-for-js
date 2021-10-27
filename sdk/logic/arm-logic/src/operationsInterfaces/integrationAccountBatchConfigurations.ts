/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  BatchConfiguration,
  IntegrationAccountBatchConfigurationsListOptionalParams,
  IntegrationAccountBatchConfigurationsGetOptionalParams,
  IntegrationAccountBatchConfigurationsGetResponse,
  IntegrationAccountBatchConfigurationsCreateOrUpdateOptionalParams,
  IntegrationAccountBatchConfigurationsCreateOrUpdateResponse,
  IntegrationAccountBatchConfigurationsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IntegrationAccountBatchConfigurations. */
export interface IntegrationAccountBatchConfigurations {
  /**
   * List the batch configurations for an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountBatchConfigurationsListOptionalParams
  ): PagedAsyncIterableIterator<BatchConfiguration>;
  /**
   * Get a batch configuration for an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param batchConfigurationName The batch configuration name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    integrationAccountName: string,
    batchConfigurationName: string,
    options?: IntegrationAccountBatchConfigurationsGetOptionalParams
  ): Promise<IntegrationAccountBatchConfigurationsGetResponse>;
  /**
   * Create or update a batch configuration for an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param batchConfigurationName The batch configuration name.
   * @param batchConfiguration The batch configuration.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    integrationAccountName: string,
    batchConfigurationName: string,
    batchConfiguration: BatchConfiguration,
    options?: IntegrationAccountBatchConfigurationsCreateOrUpdateOptionalParams
  ): Promise<IntegrationAccountBatchConfigurationsCreateOrUpdateResponse>;
  /**
   * Delete a batch configuration for an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param batchConfigurationName The batch configuration name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    integrationAccountName: string,
    batchConfigurationName: string,
    options?: IntegrationAccountBatchConfigurationsDeleteOptionalParams
  ): Promise<void>;
}