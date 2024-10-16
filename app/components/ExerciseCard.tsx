// Define the Set interface
import React from "react";
import {convertMilliseconds} from "@/app/utils/date_utils";

export interface Set {
    value1?: number;
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
export interface ExerciseTemplate {
    superSetId: string;
    exercise: Exercise;
    notes: string;
    sets: Set[];
}

// Define the ExerciseLog interface
export interface ExerciseLog {
    superSetId: string;
    exercise: Exercise;
    notes: string;
    sets: Set[];
}

export function WRExerciseSection({exercise, notes, sets}: ExerciseTemplate) {
    return (
        <section className="rounded-lg p-4 text-white font-[family-name:var(--font-geist-sans)]">
            <h2 className="text-sm font-medium mb-3 flex justify-center">{exercise.name}</h2>
            <h5 className="text-sm font-medium mb-3">{notes}</h5>

            <div className="flex justify-around">
                <div className="text-xs flex justify-center">WEIGHT</div>
                <div className="text-xs flex justify-center">REPS</div>
            </div>
            {sets.map((set, index) => (
                <div className="my-2" key={index}>
                    <div className="bg-sapphireDark80 text-white rounded-md shadow-lg py-2">
                        <div className="flex justify-between items-center">
                            <div className="flex-1 text-center">
                                <p className="text-sm font-thin">{set.value1}</p>
                            </div>
                            <div className="w-0.5 h-8 bg-sapphireLighter bg-opacity-40"></div>
                            <div className="flex-1 text-center">
                                <p className="text-sm font-thin">{set.value2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export function BWExerciseSection({exercise, notes, sets}: ExerciseTemplate) {
    return (
        <section className="rounded-lg p-4 text-white font-[family-name:var(--font-geist-sans)]">
            <h2 className="text-sm font-medium mb-3 flex justify-center">{exercise.name}</h2>
            <h5 className="text-sm font-medium mb-3">{notes}</h5>
            <div className="flex justify-around">
                <div className="text-xs flex justify-center">REPS</div>
            </div>
            {sets.map((set, index) => (
                <div className="my-2" key={index}>
                    <div className="bg-sapphireDark80 text-white rounded-md shadow-lg py-2">
                        <div className="flex justify-between items-center">
                            <div className="flex-1 text-center">
                                <p className="text-sm font-thin">{set.value2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export function DRExerciseSection({exercise, notes, sets}: ExerciseTemplate) {
    return (
        <section className="rounded-lg p-4 text-white font-[family-name:var(--font-geist-sans)]">
            <h2 className="text-sm font-medium mb-3 flex justify-center">{exercise.name}</h2>
            <h5 className="text-sm font-medium mb-3">{notes}</h5>
            <div className="flex justify-around">
                <div className="text-xs flex justify-center">TIME</div>
            </div>
            {sets.map((set, index) => (
                <div className="my-2" key={index}>
                    <div className="bg-sapphireDark80 text-white rounded-md shadow-lg py-2">
                        <div className="flex justify-between items-center">
                            <div className="flex-1 text-center">
                                <p className="text-sm font-thin">{convertMilliseconds(set.value1 ?? 0)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
