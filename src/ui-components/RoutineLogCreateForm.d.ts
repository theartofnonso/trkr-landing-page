/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RoutineLogCreateFormInputValues = {
    owner?: string;
    data?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type RoutineLogCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoutineLogCreateFormOverridesProps = {
    RoutineLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextAreaFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoutineLogCreateFormProps = React.PropsWithChildren<{
    overrides?: RoutineLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoutineLogCreateFormInputValues) => RoutineLogCreateFormInputValues;
    onSuccess?: (fields: RoutineLogCreateFormInputValues) => void;
    onError?: (fields: RoutineLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoutineLogCreateFormInputValues) => RoutineLogCreateFormInputValues;
    onValidate?: RoutineLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoutineLogCreateForm(props: RoutineLogCreateFormProps): React.ReactElement;
