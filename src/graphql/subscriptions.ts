/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRoutineTemplate = /* GraphQL */ `subscription OnCreateRoutineTemplate(
  $filter: ModelSubscriptionRoutineTemplateFilterInput
  $owner: String
) {
  onCreateRoutineTemplate(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRoutineTemplateSubscriptionVariables,
  APITypes.OnCreateRoutineTemplateSubscription
>;
export const onUpdateRoutineTemplate = /* GraphQL */ `subscription OnUpdateRoutineTemplate(
  $filter: ModelSubscriptionRoutineTemplateFilterInput
  $owner: String
) {
  onUpdateRoutineTemplate(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRoutineTemplateSubscriptionVariables,
  APITypes.OnUpdateRoutineTemplateSubscription
>;
export const onDeleteRoutineTemplate = /* GraphQL */ `subscription OnDeleteRoutineTemplate(
  $filter: ModelSubscriptionRoutineTemplateFilterInput
  $owner: String
) {
  onDeleteRoutineTemplate(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRoutineTemplateSubscriptionVariables,
  APITypes.OnDeleteRoutineTemplateSubscription
>;
export const onCreateRoutineLog = /* GraphQL */ `subscription OnCreateRoutineLog(
  $filter: ModelSubscriptionRoutineLogFilterInput
  $owner: String
) {
  onCreateRoutineLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRoutineLogSubscriptionVariables,
  APITypes.OnCreateRoutineLogSubscription
>;
export const onUpdateRoutineLog = /* GraphQL */ `subscription OnUpdateRoutineLog(
  $filter: ModelSubscriptionRoutineLogFilterInput
  $owner: String
) {
  onUpdateRoutineLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRoutineLogSubscriptionVariables,
  APITypes.OnUpdateRoutineLogSubscription
>;
export const onDeleteRoutineLog = /* GraphQL */ `subscription OnDeleteRoutineLog(
  $filter: ModelSubscriptionRoutineLogFilterInput
  $owner: String
) {
  onDeleteRoutineLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRoutineLogSubscriptionVariables,
  APITypes.OnDeleteRoutineLogSubscription
>;
export const onCreateExercise = /* GraphQL */ `subscription OnCreateExercise(
  $filter: ModelSubscriptionExerciseFilterInput
  $owner: String
) {
  onCreateExercise(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExerciseSubscriptionVariables,
  APITypes.OnCreateExerciseSubscription
>;
export const onUpdateExercise = /* GraphQL */ `subscription OnUpdateExercise(
  $filter: ModelSubscriptionExerciseFilterInput
  $owner: String
) {
  onUpdateExercise(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseSubscriptionVariables,
  APITypes.OnUpdateExerciseSubscription
>;
export const onDeleteExercise = /* GraphQL */ `subscription OnDeleteExercise(
  $filter: ModelSubscriptionExerciseFilterInput
  $owner: String
) {
  onDeleteExercise(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseSubscriptionVariables,
  APITypes.OnDeleteExerciseSubscription
>;
