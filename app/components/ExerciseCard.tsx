
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
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                <p className="text-xs flex justify-center">WEIGHT</p>
                <div className="text-xs flex justify-center">REPS</div>
                {sets.map((set, index) => (
                    <>
                        <div key={`weight-${index}`} className="bg-sapphireLighter p-2 rounded flex justify-center">
                            {set.value1}
                        </div>
                        <div key={`reps-${index}`} className="bg-sapphireLighter p-2 rounded flex justify-center">
                            {set.value2}
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}

export function BWExerciseSection({exercise, notes, sets}: ExerciseTemplate) {
    return (
        <section className="rounded-lg p-4 text-white font-[family-name:var(--font-geist-sans)]">
            <h2 className="text-sm font-medium mb-3 flex justify-center">{exercise.name}</h2>
            <h5 className="text-sm font-medium mb-3">{notes}</h5>
            <div className="text-sm font-medium">
                <div className="text-xs flex justify-center">REPS</div>
                {sets.map((set, index) => (
                    <div key={`reps-${index}`} className="bg-sapphireLighter p-2 rounded flex justify-center">
                        {set.value2}
                    </div>
                ))}
            </div>
        </section>
    )
}

export function DRExerciseSection({exercise, notes, sets}: ExerciseTemplate) {
    return (
        <section className="rounded-lg p-4 text-white font-[family-name:var(--font-geist-sans)]">
            <h2 className="text-sm font-medium mb-3 flex justify-center">{exercise.name}</h2>
            <h5 className="text-sm font-medium mb-3">{notes}</h5>
            <div className="text-sm font-medium">
                <div className="text-xs flex justify-center">TIME</div>
                {sets.map((set, index) => (
                    <div key={`reps-${index}`} className="bg-sapphireLighter p-2 rounded flex justify-center">
                        {set.value2}
                    </div>
                ))}
            </div>
        </section>
    )
}