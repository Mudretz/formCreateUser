import { optionValidationRequired, stringValidationSymbol } from "@src/shared/yup";
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

export type FormValuesUserInfoStep = yup.InferType<typeof schemaUserInfoStep>;
