import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRoutineTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RoutineTemplate, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly data: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyRoutineTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RoutineTemplate, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly data: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type RoutineTemplate = LazyLoading extends LazyLoadingDisabled ? EagerRoutineTemplate : LazyRoutineTemplate

export declare const RoutineTemplate: (new (init: ModelInit<RoutineTemplate>) => RoutineTemplate) & {
  copyOf(source: RoutineTemplate, mutator: (draft: MutableModel<RoutineTemplate>) => MutableModel<RoutineTemplate> | void): RoutineTemplate;
}

type EagerRoutineLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RoutineLog, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly data: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyRoutineLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RoutineLog, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly data: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type RoutineLog = LazyLoading extends LazyLoadingDisabled ? EagerRoutineLog : LazyRoutineLog

export declare const RoutineLog: (new (init: ModelInit<RoutineLog>) => RoutineLog) & {
  copyOf(source: RoutineLog, mutator: (draft: MutableModel<RoutineLog>) => MutableModel<RoutineLog> | void): RoutineLog;
}

type EagerExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly data: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly data: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type Exercise = LazyLoading extends LazyLoadingDisabled ? EagerExercise : LazyExercise

export declare const Exercise: (new (init: ModelInit<Exercise>) => Exercise) & {
  copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise>) => MutableModel<Exercise> | void): Exercise;
}