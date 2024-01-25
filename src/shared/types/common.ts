import { FieldErrors } from "react-hook-form";

export interface Option {
    value: number;
    label: string;
}

export type ErrorType = {
    showError?: false,
} | {
    showError?: true,
    errors: FieldErrors
};