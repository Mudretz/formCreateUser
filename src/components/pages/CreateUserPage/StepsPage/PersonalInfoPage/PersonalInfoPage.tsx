import { FC } from "react";
import * as yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppSelector } from "src/store/hook/hook.ts";
import { stepIncrease } from "src/store/step/step.ts";
import { sexOptions } from "src/constants/sexOptions.ts";
import { personalInfoSchema } from "./schema/personalnfo.schema.ts";
import {getPersonalInfo} from "./store/selectors.ts";
import { personalInfoReceived } from "./store/personalInfo.reducer.ts";
import CustomSelect from "src/components/common/CustomSelect/CustomSelect.tsx";
import Button from "../../../../common/button/Button.tsx";
import FormInput from "src/components/common/FormInput/FormInput.tsx";
import style from "./PersonalInfoPage.module.scss";

export type FormData = yup.InferType<typeof personalInfoSchema>;

const PersonalInfoPage:FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const createUserData = useAppSelector(getPersonalInfo);

    const methods = useForm<FormData>({
        values: {
            nickname: createUserData.nickname,
            name: createUserData.name,
            surname: createUserData.surname,
            sex: createUserData.sex
        },
        resolver: yupResolver(personalInfoSchema)
    });

    const { handleSubmit} = methods;
    const onSubmit = (data: FormData): void => {
        dispatch(personalInfoReceived(data));
        dispatch(stepIncrease());
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <FormProvider {...methods}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.formList}>
                    <FormInput
                        id="field-nickname"
                        name="nickname"
                        formText="Nickname"
                    />
                    <FormInput
                        id="field-name"
                        name="name"
                        formText="Name"
                    />
                    <FormInput
                        id="field-surname"
                        name="surname"
                        formText="Surname"
                    />
                    <CustomSelect
                        id="field-sex"
                        name="sex"
                        type="form"
                        options={sexOptions}
                        placeholder="Не выбрано"
                        formText="Sex"
                    />
                </div>
                <div className={style.buttons_group}>
                    <Button
                        id="button-back"
                        theme="secondary"
                        onClick={goBack}
                    >
                        Назад
                    </Button>
                    <Button
                        id="button-next"
                        theme="primary"
                    >
                        Далее
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
 
export default PersonalInfoPage;