const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a static or dynamic public IP address.
 *
 * @summary Creates or updates a static or dynamic public IP address.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/PublicIpAddressCreateCustomizedValues.json
 */
async function createPublicIPAddressAllocationMethod() {
  const subscriptionId = "57258ec5-9436-4d6f-9f10-cab56ed01a8f";
  const resourceGroupName = "CC_Group_3";
  const publicIpAddressName = "test_js";
  const parameters = {
    idleTimeoutInMinutes: 10,
    location: "uksouth",
    publicIPAddressVersion: "IPv4",
    publicIPAllocationMethod: "Static",
    sku: { name: "Standard", tier: "Global" },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.publicIPAddresses.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publicIpAddressName,
    parameters
  );
  console.log(result);
}

createPublicIPAddressAllocationMethod().catch(console.error);
