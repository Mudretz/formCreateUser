import * as yup from "yup";

export const stringValidation = yup.string().trim();

export const stringValidationSymbol = stringValidation.matches(
    /^[a-zA-Z0-9а-яА-Я]*$/,
    "Специальные символы не допустимы",
);

export const optionValidation = yup
    .object()
    .shape({
        value: yup.number().required(),
        label: stringValidation.required(),
    })
    .nullable();

export const optionValidationRequired = yup
    .object()
    .shape({
        value: yup.number().required(),
        label: stringValidation.required(),
    })
    .required("Выберите...")
    .nullable()
    .test("nullable", "Выберите...", (value) => value !== null);
