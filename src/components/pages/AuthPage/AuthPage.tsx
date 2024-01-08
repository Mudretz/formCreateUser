import { FC } from "react";
import * as yup from "yup";
import {useAppDispatch, useAppSelector} from "@/store/hook/hook.ts";
import { useNavigate } from "react-router-dom";
import {useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { getAuthState } from "./store/selectors.ts";

import {phoneMask} from "@/constants/mask/inputMasks.ts";
import HeaderAuth from "@/components/layouts/HeaderAuth/HeaderAuth.tsx";
import FormInputMask from "@/components/common/FormPhoneInput/FormInputMask.tsx";
import FormInput from "@/components/common/FormInput/FormInput.tsx";
import Button from "@/components/common/button/Button.tsx";
import style from "./AuthPage.module.scss";
import { authReceveid } from "./store/authPage.reducer.ts";


const schema = yup.object({
    phone:
        yup
            .string()
            .trim()
            .required("Поле обязательно для заполнения")
            .min(18, "Поле обязательно для заполнения"),
    email:
        yup
            .string()
            .trim()
            .required("Поле обязательно для заполнения")
            .email("Введите email")
});

type FormData = yup.InferType<typeof schema>;
const AuthPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const authState = useAppSelector(getAuthState);
    const methods = useForm<FormData>({
            values: {
                phone: authState.phone,
                email: authState.email
            },
            resolver: yupResolver(schema)
        });
    const { handleSubmit } = methods;

    const onSubmit = (data: FormData): void => {
        dispatch(authReceveid(data));
         navigate("/create");
    };

    return (
        <div className={style.container}>
            <HeaderAuth />
            <main className={style.main}>
                <FormProvider {...methods}>
                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <FormInputMask
                            name="phone"
                            mask={phoneMask}
                            formText="Номер телефона"
                            placeholder="+7 999 999-99-99"
                            guide={false}
                        />
                        <FormInput
                            id="field-email"
                            name="email"
                            placeholder="tim.jennings@example.com"
                            data-testid="input-email"
                        />
                        <Button
                            data-testid="button-start"
                            theme="primary"
                            className={style.button}
                        >
                            Начать
                        </Button>
                    </form>
                </FormProvider>
            </main>
        </div>
    );
};
 
export default AuthPage;