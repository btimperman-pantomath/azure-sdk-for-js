/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CheckTrafficManagerRelativeDnsNameAvailabilityParameters,
  TrafficManagerManagementClient
} from "@azure/arm-trafficmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Checks the availability of a Traffic Manager Relative DNS name.
 *
 * @summary Checks the availability of a Traffic Manager Relative DNS name.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2018-08-01/examples/NameAvailabilityTest_NameAvailable-POST-example-21.json
 */
async function nameAvailabilityTestNameAvailablePost21() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const parameters: CheckTrafficManagerRelativeDnsNameAvailabilityParameters = {
    name: "azsmnet5403",
    type: "microsoft.network/trafficmanagerprofiles"
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.checkTrafficManagerRelativeDnsNameAvailability(
    parameters
  );
  console.log(result);
}

nameAvailabilityTestNameAvailablePost21().catch(console.error);

/**
 * This sample demonstrates how to Checks the availability of a Traffic Manager Relative DNS name.
 *
 * @summary Checks the availability of a Traffic Manager Relative DNS name.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2018-08-01/examples/NameAvailabilityTest_NameNotAvailable-POST-example-23.json
 */
async function nameAvailabilityTestNameNotAvailablePost23() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const parameters: CheckTrafficManagerRelativeDnsNameAvailabilityParameters = {
    name: "azsmnet4696",
    type: "microsoft.network/trafficmanagerprofiles"
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.checkTrafficManagerRelativeDnsNameAvailability(
    parameters
  );
  console.log(result);
}

nameAvailabilityTestNameNotAvailablePost23().catch(console.error);