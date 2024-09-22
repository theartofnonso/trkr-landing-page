'use client'

import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';
import config from '../../../src/amplifyconfiguration.json';
import {getRoutineTemplate} from "@/src/graphql/queries";
import {useParams} from 'next/navigation'
import {useEffect, useState} from "react";

Amplify.configure(config);

// Define the Set interface
interface Set {
    value1: number;
    value2: number;
    checked: boolean;
}

// Define the Exercise interface
interface Exercise {
    id: string;
    name: string;
    primaryMuscleGroup: string;
    type: string;
    owner: boolean;
    video: string | null;
    creditSource: string | null;
    credit: string | null;
}

// Define the ExerciseLog interface
interface ExerciseTemplate {
    superSetId: string;
    exercise: Exercise;
    notes: string;
    sets: Set[];
}

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

export default function WorkoutTracker() {

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
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-white text-white p-4 md:p-6 lg:p-8">
            <div className="max-w-md mx-auto">

                <div className="space-y-6">
                    {workout.exercises.map((exerciseTemplate: ExerciseTemplate, index: number) => (
                        <ExerciseSection
                            key={index}
                            superSetId={exerciseTemplate.superSetId}
                            exercise={exerciseTemplate.exercise}
                            notes={exerciseTemplate.notes}
                            sets={exerciseTemplate.sets}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

function ExerciseSection({exercise, notes, sets}: ExerciseTemplate) {
    return (
        <section className="bg-white border border-black rounded-lg p-4 text-black font-[family-name:var(--font-geist-sans)]">
            <h2 className="text-lg font-medium mb-3">{exercise.name}</h2>
            <h5 className="text-lg font-medium mb-3">{notes}</h5>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                <div>WEIGHT</div>
                <div>REPS</div>
                {sets.map((set, index) => (
                    <>
                        <div key={`weight-${index}`} className="bg-white border border-black p-2 rounded">
                            {set.value1}
                        </div>
                        <div key={`reps-${index}`} className="bg-white border border-black p-2 rounded">
                            {set.value2}
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}