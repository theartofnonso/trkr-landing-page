enum MuscleGroupFamily {
    Legs = "Legs",
    Back = "Back",
    Arms = "Arms",
    Chest = "Chest",
    Shoulders = "Shoulders",
    Core = "Core",
    Neck = "Neck",
    FullBody = "Full Body",
    Cardio = "Cardio",
}

export interface MuscleGroupType {
    name: string;
    family: MuscleGroupFamily;
}

export const MuscleGroup: { [key: string]: MuscleGroupType } = {
    Forearms: { name: "Forearms", family: MuscleGroupFamily.Arms },
    Biceps: { name: "Biceps", family: MuscleGroupFamily.Arms },
    Triceps: { name: "Triceps", family: MuscleGroupFamily.Arms },
    Back: { name: "Back", family: MuscleGroupFamily.Back },
    Lats: { name: "Lats", family: MuscleGroupFamily.Back },
    Traps: { name: "Traps", family: MuscleGroupFamily.Back },
    Abs: { name: "Abs", family: MuscleGroupFamily.Core },
    Chest: { name: "Chest", family: MuscleGroupFamily.Chest },
    Shoulders: { name: "Shoulders", family: MuscleGroupFamily.Shoulders },
    Abductors: { name: "Abductors", family: MuscleGroupFamily.Legs },
    Adductors: { name: "Adductors", family: MuscleGroupFamily.Legs },
    Glutes: { name: "Glutes", family: MuscleGroupFamily.Legs },
    Hamstrings: { name: "Hamstrings", family: MuscleGroupFamily.Legs },
    Quadriceps: { name: "Quadriceps", family: MuscleGroupFamily.Legs },
    Calves: { name: "Calves", family: MuscleGroupFamily.Legs },
    Neck: { name: "Neck", family: MuscleGroupFamily.Neck },
    Cardio: { name: "Cardio", family: MuscleGroupFamily.Cardio },
    FullBody: { name: "Full Body", family: MuscleGroupFamily.FullBody },
    Legs: { name: "Legs", family: MuscleGroupFamily.Legs },
};

// Function to find muscle group by name string
export const findMuscleGroup = (groupName: string): MuscleGroupType => {
    return <MuscleGroupType>Object.values(MuscleGroup).find(group => group.name.toLowerCase() === groupName.toLowerCase());
}