'use client'

import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';
import config from '@/src/amplifyconfiguration.json';
import {getRoutineLog} from "@/src/graphql/queries";
import {useParams} from 'next/navigation'
import {useEffect, useState} from "react";
import {BWExerciseSection, DRExerciseSection, ExerciseLog, WRExerciseSection} from "@/app/components/ExerciseCard";
import LoadingSpinner from "@/app/components/LoadingSpinner";

Amplify.configure(config);

// Define the FullBodyDay interface
interface WorkoutLog {
    notes: string;
    exercises: ExerciseLog[];
    startTime: string;
    endTime: string;
    scheduleType: string;
    name: string;
    days: number[];
    scheduledDate: string | null;
    scheduleIntervals: number;
}

export default function WorkoutLog() {

    const {workout_log_id} = useParams();

    const [workoutLog, setWorkoutLog] = useState<WorkoutLog | null>(null);

    useEffect(() => {

        async function getWorkoutLog() {

            const client = generateClient();

            const workoutLogData = await client.graphql({
                query: getRoutineLog, variables: {id: `${workout_log_id}`},
                authMode: "iam"
            });

            const workoutLogString = workoutLogData.data.getRoutineLog?.data;
            if (typeof workoutLogString === "string") {

                // Parse sets in each exercise
                const parsedData = JSON.parse(workoutLogString);

                parsedData.exercises = parsedData.exercises.map((exerciseStr: string) => {
                    const exercise = JSON.parse(exerciseStr);

                    // Parse sets within the exercise
                    exercise.sets = exercise.sets.map((setStr: string) => JSON.parse(setStr));

                    return exercise;
                });

                setWorkoutLog(parsedData);
            }
        }

        getWorkoutLog();

    }, []);

    if (!workoutLog) {
        return <LoadingSpinner/>;
    }

    const renderComponent = (exerciseTemplate: ExerciseLog, index: number) => {
        switch (exerciseTemplate.exercise.type) {
            case 'WR':
                return <WRExerciseSection
                    key={index}
                    superSetId={exerciseTemplate.superSetId}
                    exercise={exerciseTemplate.exercise}
                    notes={exerciseTemplate.notes}
                    sets={exerciseTemplate.sets}
                />;
            case 'BW':
                return <BWExerciseSection
                    key={index}
                    superSetId={exerciseTemplate.superSetId}
                    exercise={exerciseTemplate.exercise}
                    notes={exerciseTemplate.notes}
                    sets={exerciseTemplate.sets}
                />;
            case 'DR':
                return <DRExerciseSection
                    key={index}
                    superSetId={exerciseTemplate.superSetId}
                    exercise={exerciseTemplate.exercise}
                    notes={exerciseTemplate.notes}
                    sets={exerciseTemplate.sets}
                />;
            default:
                return null;
        }
    };

    const date = new Date(workoutLog.endTime);

    const dateString = date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " +
        date.getHours() + ":" + date.getMinutes();

    return (
        <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8 bg-gradient-to-b from-sapphireDark80 to-sapphireDark text-white">
            <div className="max-w-md mx-auto">

                <h1 className="flex justify-center text-lg">{workoutLog.name}</h1>
                <div>
                    <h1 className="flex justify-center text-sm pt-2 font-semibold">{dateString}</h1>
                </div>

                <div className="space-y-2">
                    {workoutLog.exercises.map((exerciseTemplate: ExerciseLog, index: number) => (
                        renderComponent(exerciseTemplate, index)
                    ))}
                </div>

            </div>
        </div>
    )
}