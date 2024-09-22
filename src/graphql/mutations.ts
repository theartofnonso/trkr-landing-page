/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const deleteUserExerciseData = /* GraphQL */ `mutation DeleteUserExerciseData {
  deleteUserExerciseData
}
` as GeneratedMutation<
  APITypes.DeleteUserExerciseDataMutationVariables,
  APITypes.DeleteUserExerciseDataMutation
>;
export const deleteUserRoutineTemplateData = /* GraphQL */ `mutation DeleteUserRoutineTemplateData {
  deleteUserRoutineTemplateData
}
` as GeneratedMutation<
  APITypes.DeleteUserRoutineTemplateDataMutationVariables,
  APITypes.DeleteUserRoutineTemplateDataMutation
>;
export const deleteUserRoutineLogData = /* GraphQL */ `mutation DeleteUserRoutineLogData {
  deleteUserRoutineLogData
}
` as GeneratedMutation<
  APITypes.DeleteUserRoutineLogDataMutationVariables,
  APITypes.DeleteUserRoutineLogDataMutation
>;
export const createRoutineTemplate = /* GraphQL */ `mutation CreateRoutineTemplate(
  $input: CreateRoutineTemplateInput!
  $condition: ModelRoutineTemplateConditionInput
) {
  createRoutineTemplate(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRoutineTemplateMutationVariables,
  APITypes.CreateRoutineTemplateMutation
>;
export const updateRoutineTemplate = /* GraphQL */ `mutation UpdateRoutineTemplate(
  $input: UpdateRoutineTemplateInput!
  $condition: ModelRoutineTemplateConditionInput
) {
  updateRoutineTemplate(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRoutineTemplateMutationVariables,
  APITypes.UpdateRoutineTemplateMutation
>;
export const deleteRoutineTemplate = /* GraphQL */ `mutation DeleteRoutineTemplate(
  $input: DeleteRoutineTemplateInput!
  $condition: ModelRoutineTemplateConditionInput
) {
  deleteRoutineTemplate(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRoutineTemplateMutationVariables,
  APITypes.DeleteRoutineTemplateMutation
>;
export const createRoutineLog = /* GraphQL */ `mutation CreateRoutineLog(
  $input: CreateRoutineLogInput!
  $condition: ModelRoutineLogConditionInput
) {
  createRoutineLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRoutineLogMutationVariables,
  APITypes.CreateRoutineLogMutation
>;
export const updateRoutineLog = /* GraphQL */ `mutation UpdateRoutineLog(
  $input: UpdateRoutineLogInput!
  $condition: ModelRoutineLogConditionInput
) {
  updateRoutineLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRoutineLogMutationVariables,
  APITypes.UpdateRoutineLogMutation
>;
export const deleteRoutineLog = /* GraphQL */ `mutation DeleteRoutineLog(
  $input: DeleteRoutineLogInput!
  $condition: ModelRoutineLogConditionInput
) {
  deleteRoutineLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRoutineLogMutationVariables,
  APITypes.DeleteRoutineLogMutation
>;
export const createExercise = /* GraphQL */ `mutation CreateExercise(
  $input: CreateExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  createExercise(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateExerciseMutationVariables,
  APITypes.CreateExerciseMutation
>;
export const updateExercise = /* GraphQL */ `mutation UpdateExercise(
  $input: UpdateExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  updateExercise(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateExerciseMutationVariables,
  APITypes.UpdateExerciseMutation
>;
export const deleteExercise = /* GraphQL */ `mutation DeleteExercise(
  $input: DeleteExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  deleteExercise(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteExerciseMutationVariables,
  APITypes.DeleteExerciseMutation
>;
