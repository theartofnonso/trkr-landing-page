'use client'

import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';
import config from '@/amplifyconfiguration.json';
import {getRoutineTemplate} from "@/src/graphql/queries";
import {useParams} from 'next/navigation'
import {useEffect, useState} from "react";
import {BWExerciseSection, DRExerciseSection, WRExerciseSection} from "@/app/components/ExerciseCard";
import {ExerciseTemplate} from "@/app/components/ExerciseCard";
import LoadingSpinner from "@/app/components/LoadingSpinner";

Amplify.configure(config, {ssr: true});

// Define the FullBodyDay interface
interface Workout {
    notes: string;
    exercises: ExerciseTemplate[];
    scheduleType: string;
    name: string;
    days: number[];
    scheduledDate: string | null;
    scheduleIntervals: number;
}

export default function Workout() {

    const {workout_id} = useParams();

    const [workout, setWorkout] = useState<Workout | null>(null);

    useEffect(() => {

        async function getWorkout() {

            const client = generateClient();

            const workoutData = await client.graphql({
                query: getRoutineTemplate, variables: {id: `${workout_id}`},
                authMode: "iam"
            });
            const workoutString = workoutData.data.getRoutineTemplate?.data;
            if (typeof workoutString === "string") {
                // Parse sets in each exercise
                const parsedData = JSON.parse(workoutString);
                parsedData.exercises = parsedData.exercises.map((exerciseStr: string) => {
                    const exercise = JSON.parse(exerciseStr);

                    // Parse sets within the exercise
                    exercise.sets = exercise.sets.map((setStr: string) => JSON.parse(setStr));

                    return exercise;
                });

                setWorkout(parsedData);
            }
        }

        getWorkout();

    }, []);

    if (!workout) {
        return <LoadingSpinner/>;
    }

    const renderComponent = (exerciseTemplate: ExerciseTemplate, index: number) => {
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

    return (
        <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8 bg-gradient-to-b from-sapphireDark80 to-sapphireDark text-white">
            <div className="max-w-md mx-auto">

                <h1 className="flex justify-center text-lg">{workout.name}</h1>

                <div className="space-y-2">
                    {workout.exercises.map((exerciseTemplate: ExerciseTemplate, index: number) => (
                        renderComponent(exerciseTemplate, index)
                    ))}
                </div>

            </div>
        </div>
    )
}