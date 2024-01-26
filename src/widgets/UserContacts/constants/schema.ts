import * as yup from "yup";

export const schemaUserContacts = yup.object({
    phone: yup
        .string()
        .trim()
        .required("Поле обязательно для заполнения")
        .min(18, "Поле обязательно для заполнения"),
    email: yup
        .string()
        .trim()
        .required("Поле обязательно для заполнения")
        .email("Введите email"),
});

export type FormValuesUserContacts = yup.InferType<typeof schemaUserContacts>;
