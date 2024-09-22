/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoutineTemplateInput = {
  id?: string | null,
  owner?: string | null,
  data: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type ModelRoutineTemplateConditionInput = {
  owner?: ModelStringInput | null,
  data?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoutineTemplateConditionInput | null > | null,
  or?: Array< ModelRoutineTemplateConditionInput | null > | null,
  not?: ModelRoutineTemplateConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type RoutineTemplate = {
  __typename: "RoutineTemplate",
  id: string,
  owner?: string | null,
  data: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRoutineTemplateInput = {
  id: string,
  owner?: string | null,
  data?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type DeleteRoutineTemplateInput = {
  id: string,
  _version?: number | null,
};

export type CreateRoutineLogInput = {
  id?: string | null,
  owner?: string | null,
  data: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type ModelRoutineLogConditionInput = {
  owner?: ModelStringInput | null,
  data?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoutineLogConditionInput | null > | null,
  or?: Array< ModelRoutineLogConditionInput | null > | null,
  not?: ModelRoutineLogConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type RoutineLog = {
  __typename: "RoutineLog",
  id: string,
  owner?: string | null,
  data: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRoutineLogInput = {
  id: string,
  owner?: string | null,
  data?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type DeleteRoutineLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateExerciseInput = {
  id?: string | null,
  owner?: string | null,
  data: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type ModelExerciseConditionInput = {
  owner?: ModelStringInput | null,
  data?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseConditionInput | null > | null,
  or?: Array< ModelExerciseConditionInput | null > | null,
  not?: ModelExerciseConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Exercise = {
  __typename: "Exercise",
  id: string,
  owner?: string | null,
  data: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateExerciseInput = {
  id: string,
  owner?: string | null,
  data?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type DeleteExerciseInput = {
  id: string,
  _version?: number | null,
};

export type ModelRoutineTemplateFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  data?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoutineTemplateFilterInput | null > | null,
  or?: Array< ModelRoutineTemplateFilterInput | null > | null,
  not?: ModelRoutineTemplateFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRoutineTemplateConnection = {
  __typename: "ModelRoutineTemplateConnection",
  items:  Array<RoutineTemplate | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRoutineLogFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  data?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoutineLogFilterInput | null > | null,
  or?: Array< ModelRoutineLogFilterInput | null > | null,
  not?: ModelRoutineLogFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRoutineLogConnection = {
  __typename: "ModelRoutineLogConnection",
  items:  Array<RoutineLog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  data?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelExerciseConnection = {
  __typename: "ModelExerciseConnection",
  items:  Array<Exercise | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionRoutineTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  data?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoutineTemplateFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoutineTemplateFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionRoutineLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  data?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoutineLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoutineLogFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionExerciseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  data?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type DeleteUserExerciseDataMutationVariables = {
};

export type DeleteUserExerciseDataMutation = {
  deleteUserExerciseData: boolean,
};

export type DeleteUserRoutineTemplateDataMutationVariables = {
};

export type DeleteUserRoutineTemplateDataMutation = {
  deleteUserRoutineTemplateData: boolean,
};

export type DeleteUserRoutineLogDataMutationVariables = {
};

export type DeleteUserRoutineLogDataMutation = {
  deleteUserRoutineLogData: boolean,
};

export type CreateRoutineTemplateMutationVariables = {
  input: CreateRoutineTemplateInput,
  condition?: ModelRoutineTemplateConditionInput | null,
};

export type CreateRoutineTemplateMutation = {
  createRoutineTemplate?:  {
    __typename: "RoutineTemplate",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRoutineTemplateMutationVariables = {
  input: UpdateRoutineTemplateInput,
  condition?: ModelRoutineTemplateConditionInput | null,
};

export type UpdateRoutineTemplateMutation = {
  updateRoutineTemplate?:  {
    __typename: "RoutineTemplate",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRoutineTemplateMutationVariables = {
  input: DeleteRoutineTemplateInput,
  condition?: ModelRoutineTemplateConditionInput | null,
};

export type DeleteRoutineTemplateMutation = {
  deleteRoutineTemplate?:  {
    __typename: "RoutineTemplate",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRoutineLogMutationVariables = {
  input: CreateRoutineLogInput,
  condition?: ModelRoutineLogConditionInput | null,
};

export type CreateRoutineLogMutation = {
  createRoutineLog?:  {
    __typename: "RoutineLog",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRoutineLogMutationVariables = {
  input: UpdateRoutineLogInput,
  condition?: ModelRoutineLogConditionInput | null,
};

export type UpdateRoutineLogMutation = {
  updateRoutineLog?:  {
    __typename: "RoutineLog",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRoutineLogMutationVariables = {
  input: DeleteRoutineLogInput,
  condition?: ModelRoutineLogConditionInput | null,
};

export type DeleteRoutineLogMutation = {
  deleteRoutineLog?:  {
    __typename: "RoutineLog",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExerciseMutationVariables = {
  input: CreateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type CreateExerciseMutation = {
  createExercise?:  {
    __typename: "Exercise",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExerciseMutationVariables = {
  input: UpdateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseMutation = {
  updateExercise?:  {
    __typename: "Exercise",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExerciseMutationVariables = {
  input: DeleteExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type DeleteExerciseMutation = {
  deleteExercise?:  {
    __typename: "Exercise",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetRoutineTemplateQueryVariables = {
  id: string,
};

export type GetRoutineTemplateQuery = {
  getRoutineTemplate?:  {
    __typename: "RoutineTemplate",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRoutineTemplatesQueryVariables = {
  filter?: ModelRoutineTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutineTemplatesQuery = {
  listRoutineTemplates?:  {
    __typename: "ModelRoutineTemplateConnection",
    items:  Array< {
      __typename: "RoutineTemplate",
      id: string,
      owner?: string | null,
      data: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRoutineTemplatesQueryVariables = {
  filter?: ModelRoutineTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRoutineTemplatesQuery = {
  syncRoutineTemplates?:  {
    __typename: "ModelRoutineTemplateConnection",
    items:  Array< {
      __typename: "RoutineTemplate",
      id: string,
      owner?: string | null,
      data: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRoutineLogQueryVariables = {
  id: string,
};

export type GetRoutineLogQuery = {
  getRoutineLog?:  {
    __typename: "RoutineLog",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRoutineLogsQueryVariables = {
  filter?: ModelRoutineLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutineLogsQuery = {
  listRoutineLogs?:  {
    __typename: "ModelRoutineLogConnection",
    items:  Array< {
      __typename: "RoutineLog",
      id: string,
      owner?: string | null,
      data: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRoutineLogsQueryVariables = {
  filter?: ModelRoutineLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRoutineLogsQuery = {
  syncRoutineLogs?:  {
    __typename: "ModelRoutineLogConnection",
    items:  Array< {
      __typename: "RoutineLog",
      id: string,
      owner?: string | null,
      data: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseQueryVariables = {
  id: string,
};

export type GetExerciseQuery = {
  getExercise?:  {
    __typename: "Exercise",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesQuery = {
  listExercises?:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      owner?: string | null,
      data: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExercisesQuery = {
  syncExercises?:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      owner?: string | null,
      data: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRoutineTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionRoutineTemplateFilterInput | null,
  owner?: string | null,
};

export type OnCreateRoutineTemplateSubscription = {
  onCreateRoutineTemplate?:  {
    __typename: "RoutineTemplate",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRoutineTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionRoutineTemplateFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRoutineTemplateSubscription = {
  onUpdateRoutineTemplate?:  {
    __typename: "RoutineTemplate",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRoutineTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionRoutineTemplateFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRoutineTemplateSubscription = {
  onDeleteRoutineTemplate?:  {
    __typename: "RoutineTemplate",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRoutineLogSubscriptionVariables = {
  filter?: ModelSubscriptionRoutineLogFilterInput | null,
  owner?: string | null,
};

export type OnCreateRoutineLogSubscription = {
  onCreateRoutineLog?:  {
    __typename: "RoutineLog",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRoutineLogSubscriptionVariables = {
  filter?: ModelSubscriptionRoutineLogFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRoutineLogSubscription = {
  onUpdateRoutineLog?:  {
    __typename: "RoutineLog",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRoutineLogSubscriptionVariables = {
  filter?: ModelSubscriptionRoutineLogFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRoutineLogSubscription = {
  onDeleteRoutineLog?:  {
    __typename: "RoutineLog",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
  owner?: string | null,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise?:  {
    __typename: "Exercise",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise?:  {
    __typename: "Exercise",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise?:  {
    __typename: "Exercise",
    id: string,
    owner?: string | null,
    data: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
