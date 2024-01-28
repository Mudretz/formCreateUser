import { stringValidation } from "@src/shared/yup";
import * as yup from "yup";

export const schemaUserContacts = yup.object({
    phone: stringValidation
        .required("Поле обязательно для заполнения")
        .min(18, "Поле обязательно для заполнения"),
    email: stringValidation
        .required("Поле обязательно для заполнения")
        .email("Введите email"),
});

export type FormValuesUserContacts = yup.InferType<typeof schemaUserContacts>;
