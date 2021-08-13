/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { SparkSessionOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SparkClientContext } from "../sparkClientContext";
import {
  SparkSessionOperationsGetSparkSessionsOptionalParams,
  SparkSessionOperationsGetSparkSessionsResponse,
  SparkSessionOptions,
  SparkSessionOperationsCreateSparkSessionOptionalParams,
  SparkSessionOperationsCreateSparkSessionResponse,
  SparkSessionOperationsGetSparkSessionOptionalParams,
  SparkSessionOperationsGetSparkSessionResponse,
  SparkSessionOperationsCancelSparkSessionOptionalParams,
  SparkSessionOperationsResetSparkSessionTimeoutOptionalParams,
  SparkSessionOperationsGetSparkStatementsOptionalParams,
  SparkSessionOperationsGetSparkStatementsResponse,
  SparkStatementOptions,
  SparkSessionOperationsCreateSparkStatementOptionalParams,
  SparkSessionOperationsCreateSparkStatementResponse,
  SparkSessionOperationsGetSparkStatementOptionalParams,
  SparkSessionOperationsGetSparkStatementResponse,
  SparkSessionOperationsCancelSparkStatementOptionalParams,
  SparkSessionOperationsCancelSparkStatementResponse
} from "../models";

/** Class representing a SparkSessionOperations. */
export class SparkSessionOperationsImpl implements SparkSessionOperations {
  private readonly client: SparkClientContext;

  /**
   * Initialize a new instance of the class SparkSessionOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SparkClientContext) {
    this.client = client;
  }

  /**
   * List all spark sessions which are running under a particular spark pool.
   * @param options The options parameters.
   */
  async getSparkSessions(
    options?: SparkSessionOperationsGetSparkSessionsOptionalParams
  ): Promise<SparkSessionOperationsGetSparkSessionsResponse> {
    const { span } = createSpan("SparkClient-getSparkSessions", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        getSparkSessionsOperationSpec
      );
      return result as SparkSessionOperationsGetSparkSessionsResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Create new spark session.
   * @param sparkSessionOptions Livy compatible batch job request payload.
   * @param options The options parameters.
   */
  async createSparkSession(
    sparkSessionOptions: SparkSessionOptions,
    options?: SparkSessionOperationsCreateSparkSessionOptionalParams
  ): Promise<SparkSessionOperationsCreateSparkSessionResponse> {
    const { span } = createSpan(
      "SparkClient-createSparkSession",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { sparkSessionOptions, options },
        createSparkSessionOperationSpec
      );
      return result as SparkSessionOperationsCreateSparkSessionResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Gets a single spark session.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  async getSparkSession(
    sessionId: number,
    options?: SparkSessionOperationsGetSparkSessionOptionalParams
  ): Promise<SparkSessionOperationsGetSparkSessionResponse> {
    const { span } = createSpan("SparkClient-getSparkSession", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { sessionId, options },
        getSparkSessionOperationSpec
      );
      return result as SparkSessionOperationsGetSparkSessionResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Cancels a running spark session.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  async cancelSparkSession(
    sessionId: number,
    options?: SparkSessionOperationsCancelSparkSessionOptionalParams
  ): Promise<void> {
    const { span } = createSpan(
      "SparkClient-cancelSparkSession",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { sessionId, options },
        cancelSparkSessionOperationSpec
      );
      return result as void;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Sends a keep alive call to the current session to reset the session timeout.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  async resetSparkSessionTimeout(
    sessionId: number,
    options?: SparkSessionOperationsResetSparkSessionTimeoutOptionalParams
  ): Promise<void> {
    const { span } = createSpan(
      "SparkClient-resetSparkSessionTimeout",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { sessionId, options },
        resetSparkSessionTimeoutOperationSpec
      );
      return result as void;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Gets a list of statements within a spark session.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  async getSparkStatements(
    sessionId: number,
    options?: SparkSessionOperationsGetSparkStatementsOptionalParams
  ): Promise<SparkSessionOperationsGetSparkStatementsResponse> {
    const { span } = createSpan(
      "SparkClient-getSparkStatements",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { sessionId, options },
        getSparkStatementsOperationSpec
      );
      return result as SparkSessionOperationsGetSparkStatementsResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Create statement within a spark session.
   * @param sessionId Identifier for the session.
   * @param sparkStatementOptions Livy compatible batch job request payload.
   * @param options The options parameters.
   */
  async createSparkStatement(
    sessionId: number,
    sparkStatementOptions: SparkStatementOptions,
    options?: SparkSessionOperationsCreateSparkStatementOptionalParams
  ): Promise<SparkSessionOperationsCreateSparkStatementResponse> {
    const { span } = createSpan(
      "SparkClient-createSparkStatement",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { sessionId, sparkStatementOptions, options },
        createSparkStatementOperationSpec
      );
      return result as SparkSessionOperationsCreateSparkStatementResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Gets a single statement within a spark session.
   * @param sessionId Identifier for the session.
   * @param statementId Identifier for the statement.
   * @param options The options parameters.
   */
  async getSparkStatement(
    sessionId: number,
    statementId: number,
    options?: SparkSessionOperationsGetSparkStatementOptionalParams
  ): Promise<SparkSessionOperationsGetSparkStatementResponse> {
    const { span } = createSpan("SparkClient-getSparkStatement", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { sessionId, statementId, options },
        getSparkStatementOperationSpec
      );
      return result as SparkSessionOperationsGetSparkStatementResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Kill a statement within a session.
   * @param sessionId Identifier for the session.
   * @param statementId Identifier for the statement.
   * @param options The options parameters.
   */
  async cancelSparkStatement(
    sessionId: number,
    statementId: number,
    options?: SparkSessionOperationsCancelSparkStatementOptionalParams
  ): Promise<SparkSessionOperationsCancelSparkStatementResponse> {
    const { span } = createSpan(
      "SparkClient-cancelSparkStatement",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { sessionId, statementId, options },
        cancelSparkStatementOperationSpec
      );
      return result as SparkSessionOperationsCancelSparkStatementResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getSparkSessionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SparkSessionCollection
    }
  },
  queryParameters: [Parameters.fromParam, Parameters.size, Parameters.detailed],
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createSparkSessionOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SparkSession
    }
  },
  requestBody: Parameters.sparkSessionOptions,
  queryParameters: [Parameters.detailed],
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSparkSessionOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SparkSession
    }
  },
  queryParameters: [Parameters.detailed],
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelSparkSessionOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId
  ],
  serializer
};
const resetSparkSessionTimeoutOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}/reset-timeout",
  httpMethod: "PUT",
  responses: { 200: {} },
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId
  ],
  serializer
};
const getSparkStatementsOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}/statements",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SparkStatementCollection
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createSparkStatementOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}/statements",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SparkStatement
    }
  },
  requestBody: Parameters.sparkStatementOptions,
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSparkStatementOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}/statements/{statementId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SparkStatement
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId,
    Parameters.statementId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelSparkStatementOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}/statements/{statementId}/cancel",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SparkStatementCancellationResult
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId,
    Parameters.statementId
  ],
  headerParameters: [Parameters.accept],
  serializer
};