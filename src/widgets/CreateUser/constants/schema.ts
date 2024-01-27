import {
    booleanValidation,
    optionValidationRequired,
    stringValidation,
    stringValidationSymbol,
} from "@src/shared/yup";
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

export const shemaUserAdvantagesStep = yup.object({
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
        // .object()
        // .shape({
        //     1: booleanValidation,
        //     2: booleanValidation,
        //     3: booleanValidation,
        // })
        // .test(
        //     "is-one-true",
        //     "Выберите один или несколько вариантов",
        //     (value) => {
        //         if (Object.values(value).some((item) => item === true)) {
        //             return false;
        //         }
        //         return true;
        //     },
        // ),
    .array()
    .required("Выберите один или несколько вариантов")
    .min(1, "Выберите один или несколько вариантов"),
    radioOption: yup.string().required("Выберите один из вариантов"),
});

export type FormValuesUserInfoStep = yup.InferType<typeof schemaUserInfoStep>;
export type FormValuesUserAdvantagesStep = yup.InferType<
    typeof shemaUserAdvantagesStep
>;
