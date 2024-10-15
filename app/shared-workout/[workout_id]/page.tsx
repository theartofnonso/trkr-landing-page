'use client'

import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';
import {getRoutineTemplate} from "@/src/graphql/queries";
import {useParams} from 'next/navigation'
import {useEffect, useState} from "react";
import {BWExerciseSection, DRExerciseSection, WRExerciseSection} from "@/app/components/ExerciseCard";
import {ExerciseTemplate} from "@/app/components/ExerciseCard";
import LoadingSpinner from "@/app/components/LoadingSpinner";

const config = {
    "aws_project_region": "eu-west-2",
    "aws_mobile_analytics_app_id": "8007617972cc4e2e85f3f412ec30e0f3",
    "aws_mobile_analytics_app_region": "eu-west-2",
    "Analytics": {
        "AWSPinpoint": {
            "appId": "8007617972cc4e2e85f3f412ec30e0f3",
            "region": "eu-west-2"
        }
    },
    "aws_cloud_logic_custom": [
        {
            "name": "api71b45aa3",
            "endpoint": "https://6ifisht6d2.execute-api.eu-west-2.amazonaws.com/prod",
            "region": "eu-west-2"
        }
    ],
    "aws_appsync_graphqlEndpoint": "https://nh2ymicuzzbrdi3xijrwna7vua.appsync-api.eu-west-2.amazonaws.com/graphql",
    "aws_appsync_region": "eu-west-2",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_cognito_identity_pool_id": "eu-west-2:9e6eabe1-913f-4753-8cf0-f87711f31b12",
    "aws_cognito_region": "eu-west-2",
    "aws_user_pools_id": "eu-west-2_iOqG7UL7T",
    "aws_user_pools_web_client_id": "4p0fhv8552rpfi7k9jc70729lj",
    "oauth": {},
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};

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
