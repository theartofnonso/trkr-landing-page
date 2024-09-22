import React from 'react';
import {ExerciseLog} from "@/app/components/ExerciseCard";
import {findMuscleGroup} from "@/app/enums/muslce_group_enums";

interface ExerciseLogs {
    logs: ExerciseLog[]; // Specify the type of the array
}

interface ProgressBarProps {
    muscleGroup: string;
    percentage: number;
}

// Function to calculate frequency and percentages
const calculateMuscleGroupFrequency = (exerciseLogs: ExerciseLog[]): { muscleGroup: string; percentage: number; frequency: number }[] => {
    const muscleGroupMap: { [key: string]: number } = {};

    // Count how many times each primaryMuscleGroup appears
    exerciseLogs.forEach((exerciseLog) => {
        const muscleGroup = findMuscleGroup(exerciseLog.exercise.primaryMuscleGroup);
        muscleGroupMap[muscleGroup.family] = (muscleGroupMap[muscleGroup.family] || 0) + 1;
    });

    // Total number of exercises
    const totalExercises = exerciseLogs.length;

    // Convert the map into an array with percentages
    return Object.keys(muscleGroupMap).map((muscleGroup) => ({
        muscleGroup,
        frequency: muscleGroupMap[muscleGroup],
        percentage: (muscleGroupMap[muscleGroup] / totalExercises) * 100,
    }));
};

// Component to render a progress bar for each muscle group
const ProgressBar: React.FC<ProgressBarProps> = ({muscleGroup, percentage}) => (
    <div className="relative w-full h-10 bg-sapphireDark bg-opacity-30 rounded-sm overflow-hidden mb-1.5 py-2 px-2">
        {/* Text label */}
        <div className="absolute left-0 top-0 h-full text-black text-xs font-semibold flex items-center justify-center px-4">
            {muscleGroup}
        </div>
        {/* Progress bar */}
        <div className="h-full bg-white rounded-sm " style={{width: `${percentage}%`}}>
            {/* Empty progress */}
        </div>
        {/* Percentage on the right */}
        <div className="absolute right-0 top-0 h-full flex items-center justify-center px-4 text-sm font-thin text-gray-400">
            {percentage}%
        </div>
    </div>
);

// Main component
const MuscleFrequencyChart: React.FC<ExerciseLogs> = ({logs}) => {

    const muscleGroupData = calculateMuscleGroupFrequency(logs);

    return (
        <div>
            {muscleGroupData.map((data) => (
                <ProgressBar
                    key={data.muscleGroup}
                    muscleGroup={data.muscleGroup.toUpperCase()}
                    percentage={data.percentage}
                />
            ))}
        </div>
    );
}

export default MuscleFrequencyChart;