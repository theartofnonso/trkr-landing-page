/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRoutineTemplate = /* GraphQL */ `query GetRoutineTemplate($id: ID!) {
  getRoutineTemplate(id: $id) {
    id
    owner
    data
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRoutineTemplateQueryVariables,
  APITypes.GetRoutineTemplateQuery
>;
export const listRoutineTemplates = /* GraphQL */ `query ListRoutineTemplates(
  $filter: ModelRoutineTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoutineTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRoutineTemplatesQueryVariables,
  APITypes.ListRoutineTemplatesQuery
>;
export const syncRoutineTemplates = /* GraphQL */ `query SyncRoutineTemplates(
  $filter: ModelRoutineTemplateFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRoutineTemplates(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      owner
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRoutineTemplatesQueryVariables,
  APITypes.SyncRoutineTemplatesQuery
>;
export const getRoutineLog = /* GraphQL */ `query GetRoutineLog($id: ID!) {
  getRoutineLog(id: $id) {
    id
    owner
    data
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRoutineLogQueryVariables,
  APITypes.GetRoutineLogQuery
>;
export const listRoutineLogs = /* GraphQL */ `query ListRoutineLogs(
  $filter: ModelRoutineLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoutineLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRoutineLogsQueryVariables,
  APITypes.ListRoutineLogsQuery
>;
export const syncRoutineLogs = /* GraphQL */ `query SyncRoutineLogs(
  $filter: ModelRoutineLogFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRoutineLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      owner
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRoutineLogsQueryVariables,
  APITypes.SyncRoutineLogsQuery
>;
export const getExercise = /* GraphQL */ `query GetExercise($id: ID!) {
  getExercise(id: $id) {
    id
    owner
    data
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExerciseQueryVariables,
  APITypes.GetExerciseQuery
>;
export const listExercises = /* GraphQL */ `query ListExercises(
  $filter: ModelExerciseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExercisesQueryVariables,
  APITypes.ListExercisesQuery
>;
export const syncExercises = /* GraphQL */ `query SyncExercises(
  $filter: ModelExerciseFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExercises(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      owner
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncExercisesQueryVariables,
  APITypes.SyncExercisesQuery
>;
