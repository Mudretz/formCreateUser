import { FC } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "src/store/hook/hook.ts";
import { getAuthState } from "src/components/Pages/AuthPage/store/selectors.ts";
import { authReceveid } from "src/components/Pages/AuthPage/store/authPage.reducer.ts";
import { authPageSchema } from "src/components/Pages/AuthPage/schema/authPageSchema.ts";
import { stepReceived } from "src/store/step/step.ts";
import { phoneMask } from "src/constants/mask/inputMasks.ts";
import { yupResolver } from '@hookform/resolvers/yup';
import HeaderAuth from "../../layouts/HeaderAuth/HeaderAuth.tsx";
import Button from "../../common/button/Button.tsx";
import FormInputMask from "src/components/common/FormPhoneInput/FormInputMask.tsx";
import FormInput from "src/components/common/FormInput/FormInput.tsx";
import style from "./AuthPage.module.scss";

type FormData = yup.InferType<typeof authPageSchema>;

const AuthPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const authState = useAppSelector(getAuthState);
    const methods = useForm<FormData>({
            values: {
                phone: authState.phone,
                email: authState.email
            },
            resolver: yupResolver(authPageSchema)
        });
    const { handleSubmit} = methods;

    const onSubmit = (data: FormData): void => {
        dispatch(authReceveid(data));
        dispatch(stepReceived(1));
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
                        />
                        <Button
                            id="button-start"
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