# Troubleshooting Azure Key Vault SDK Issues

The Azure Key Vault SDKs for JavaScript use a common HTTP pipeline and authentication to create, update, and delete secrets,
keys, and certificates in Key Vault and Managed HSM. This troubleshooting guide contains steps for diagnosing issues
common to these SDKs.

For any package-specific troubleshooting guides, see any of the following:

* [Troubleshooting Azure Key Vault Administration SDK Issues](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/keyvault-admin/TROUBLESHOOTING.md)
* [Troubleshooting Azure Key Vault Certificates SDK Issues](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/keyvault-certificates/TROUBLESHOOTING.md)
* [Troubleshooting Azure Key Vault Keys SDK Issues](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/keyvault-keys/TROUBLESHOOTING.md)
* [Troubleshooting Azure Key Vault Secrets SDK Issues](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/keyvault-secrets/TROUBLESHOOTING.md)

## Table of Contents

* [Troubleshooting Authentication Issues](#troubleshooting-authentication-issues)
  * [HTTP 401 Errors](#http-401-errors)
    * [Frequent HTTP 401 Errors in Logs](#frequent-http-401-errors-in-logs)
    * [AKV10032: Invalid issuer](#akv10032-invalid-issuer)
    * [Other Authentication Issues](#other-authentication-issues)
  * [HTTP 403 Errors](#http-403-errors)
    * [Operation Not Permitted](#operation-not-permitted)
* [Other Service Errors](#other-service-errors)
  * [HTTP 429: Too Many Request](#http-429-too-many-requests)

## Troubleshooting Authentication Issues

### HTTP 401 Errors

HTTP 401 errors may indicate problems authenticating.

#### Frequent HTTP 401 Errors in Logs

Most often, this is expected. Azure Key Vault issues a challenge for initial requests that force authentication. You may see these errors most often during application startup, but may also see these periodically during the application's lifetime when authentication tokens are near expiration.

If you are not seeing subsequent exceptions from the Key Vault SDKs, authentication challenges are likely the cause.

#### AKV10032: Invalid issuer

You may see an error similar to:

```text
RestError: AKV10032: Invalid issuer. Expected one of https://sts.windows.net/{tenant 1}/, found https://sts.windows.net/{tenant 2}/.
{
  "name": "RestError",
  "code": "Unauthorized",
  "statusCode": 401
  ...
}
```

This is most often caused by being logged into a different tenant than the Key Vault authenticates.

See our [DefaultAzureCredential] documentation to see the order credentials are read. You may be logged into a different tenant for one credential that gets read before another credential. For example, you might be logged into Visual Studio
under the wrong tenant even though you're logged into the Azure CLI under the right tenant.

Automatic tenant discovery support has been added when referencing package `@azure/identity` version
2.0.0 or newer, and any of the following Key Vault SDK package versions or newer:

Package | Minimum Version
--- | ---
`@azure/keyvault-admin` | 4.2.0
`@azure/keyvault-certificates` | 4.4.0
`@azure/keyvault-keys` | 4.4.0
`@azure/keyvault-secrets` | 4.4.0

Upgrading to these package versions should resolve any "Invalid Issuer" errors as long as the application or user is a member of the resource's tenant.

#### Other Authentication Issues

If you are using the `@azure/identity` package - which contains [DefaultAzureCredential] - to authenticate requests to Azure Key Vault, please see our [troubleshooting guide](https://aka.ms/azsdk/js/identity/troubleshoot).

### HTTP 403 Errors

HTTP 403 errors indicate the user is not authorized to perform a specific operation in Key Vault or Managed HSM.

#### Operation Not Permitted

You may see an error similar to:

```text
RestError: Operation decrypt is not permitted on this key.
{
  "name": "RestError",
  "code": "Forbidden",
  "statusCode": 403
  ...
}
```

The message and inner `code` may vary, but the rest of the text will indicate which operation is not permitted.

This error indicates that the authenticated application or user does not have permissions to perform that operation, though the cause may vary.

1. Check that the application or user has the appropriate permissions:
    * [Access policies](https://docs.microsoft.com/azure/key-vault/general/assign-access-policy) (Key Vault)
    * [Role-Based Access Control (RBAC)](https://docs.microsoft.com/azure/key-vault/general/rbac-guide) (Key Vault and Managed HSM)
2. If the appropriate permissions are assigned to your application or user, make sure you are authenticating as that user.
    * If using the [DefaultAzureCredential] a different credential might've been used than one you expected. [Enable logging](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/README.md#logging) and you will see which credential the [DefaultAzureCredential] used as shown below, and why previously-attempted credentials were rejected.

## Other Service Errors

To troubleshoot additional HTTP service errors not described below, see [Azure Key Vault REST API Error Codes](https://docs.microsoft.com/azure/key-vault/general/rest-error-codes).

### HTTP 429: Too Many Requests

If you get an exception or see logs that describe HTTP 429, you may be making too many requests to Key Vault too quickly.

Possible solutions include:

1. Use a singleton for any `CertificateClient`, `KeyClient`, or `SecretClient` in your application for a single Key Vault.
2. Use a single instance of [DefaultAzureCredential] or other credential you use to authenticate your clients for each Key Vault or Managed HSM endpoint you need to access.
3. Use Azure App Configuration for storing non-secrets and references to Key Vault secrets. Storing all app configuration in Key Vault will increase the likelihood of requests being throttled as more application instances are started. See [our @azure/app-configuration](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/appconfiguration/app-configuration/README.md) for more information.
4. If you are performing encryption or decryption operations, consider using wrap and unwrap operations for a symmetric key which may also improve application throughput.

See our [Azure Key Vault throttling guide](https://docs.microsoft.com/azure/key-vault/general/overview-throttling) for more information.

[DefaultAzureCredential]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/README.md#defaultazurecredential