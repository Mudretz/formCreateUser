import {
    optionValidationRequired,
    stringValidation,
    stringValidationSymbol,
} from "@src/shared/yup";
import { MAX_TEXT_COUNT } from "./data";
import * as yup from "yup";

export const schemaUserInfoStep = yup.object().shape({
    nickname: stringValidationSymbol
        .required("Поле обязательно для заполнения")
        .max(30, "Максимальное колиство букв не более 30"),
    name: stringValidationSymbol
        .required("Поле обязательно для заполнения")
        .max(50, "Максимальное колиство букв не более 30"),
    surname: stringValidationSymbol
        .required("Поле обязательно для заполнения")
        .max(50, "Максимальное колиство букв не более 30"),
    sex: optionValidationRequired,
});

export const schemaUserAdvantagesStep = yup.object({
    advantages: yup
        .array()
        .of(
            yup.object().shape({
                advantage: stringValidation
                    .required("Поле обязательно для заполнения")
                    .matches(/^[A-Za-z]+$/, "Допустимы только буквы"),
            }),
        )
        .required("Поле обязательно для заполнения"),
    checkboxes: yup
        .array()
        .required("Выберите один или несколько вариантов")
        .min(1, "Выберите один или несколько вариантов"),
    radioOption: yup
        .number()
        .required()
        .nullable()
        .test(
            "nullable",
            "Выберите один из вариантов",
            (value) => value !== null,
        ),
});

export const schemaUserAboutStep = yup.object({
    text: yup
        .string()
        .required("Введите текст в поле")
        .max(MAX_TEXT_COUNT, "Максимальное колиство символов не более 200"),
});

export type FormValuesUserInfoStep = yup.InferType<typeof schemaUserInfoStep>;
export type FormValuesUserAdvantagesStep = yup.InferType<
    typeof schemaUserAdvantagesStep
>;
export type FormValuesUserAboutStep = yup.InferType<typeof schemaUserAboutStep>;
