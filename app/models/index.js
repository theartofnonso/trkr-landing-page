// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RoutineTemplate, RoutineLog, Exercise } = initSchema(schema);

export {
  RoutineTemplate,
  RoutineLog,
  Exercise
};