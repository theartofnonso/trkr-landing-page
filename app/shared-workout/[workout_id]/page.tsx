'use client'

import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';
import config from '../../../src/amplifyconfiguration.json';
import {getRoutineTemplate} from "@/src/graphql/queries";
import {useParams} from 'next/navigation'
import {useState} from "react";

Amplify.configure(config);

interface Set {
    weight: number
    reps: number
}

interface ExerciseSectionProps {
    title: string;
    sets: Set[];
}

export default function WorkoutTracker() {

    const workoutId = useParams().id;

    const [workout, setWorkout] = useState({});

    function getWorkout() {

        const client = generateClient();

        client.graphql({
            query: getRoutineTemplate, variables: {id: `${workoutId}`},
            authMode: "iam"
        }).then(data => {
            console.log(workout);
            setWorkout(data);
        });
    }

    getWorkout();

    return (
        <div className="min-h-screen bg-white text-white p-4 md:p-6 lg:p-8">
            <div className="max-w-md mx-auto">

                <div className="space-y-6">
                    <ExerciseSection
                        title="Smith Machine Incline Bench Press"
                        sets={[
                            {weight: 90.0, reps: 8},
                            {weight: 90.0, reps: 8},
                            {weight: 90.0, reps: 5},
                        ]}
                    />

                    <ExerciseSection
                        title="Cable Chest Press"
                        sets={[
                            {weight: 21.25, reps: 15},
                            {weight: 28.75, reps: 7},
                            {weight: 28.75, reps: 9},
                        ]}
                    />

                    <ExerciseSection
                        title="Dumbbell Lateral Raise"
                        sets={[
                            {weight: 22.5, reps: 14},
                            {weight: 22.5, reps: 11},
                        ]}
                    />
                </div>

            </div>
        </div>
    )
}

function ExerciseSection({title, sets}: ExerciseSectionProps) {
    return (
        <section className="bg-white border border-black rounded-lg p-4 text-black font-[family-name:var(--font-geist-sans)]">
            <h2 className="text-lg font-medium mb-3">{title}</h2>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                <div>WEIGHT</div>
                <div>REPS</div>
                {sets.map((set, index) => (
                    <>
                        <div key={`weight-${index}`} className="bg-white border border-black p-2 rounded">
                            {set.weight}
                        </div>
                        <div key={`reps-${index}`} className="bg-white border border-black p-2 rounded">
                            {set.reps}
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}