import { FC } from "react";
import * as yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { useAppSelector } from "src/store/hook/hook.ts";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCreateUserData } from "src/store/data/selector.ts";
import { createUserReceived } from "src/store/data/data.ts";
import { stepIncrease } from "src/store/step/step.ts";
import { sexOptions } from "src/constants/sexOptions.ts";
import { personalInfoSchema } from "src/constants/schema/personalnfoSchema.ts";
import { useNavigate } from "react-router-dom";
import Button from "../../../../common/button/Button.tsx";
import SelectInput from "../../../../common/inputs/select/SelectInput.tsx";
import FormInput from "src/components/common/FormInput/FormInput.tsx";
import style from "./PersonalInfoPage.module.scss";

export type FormData = yup.InferType<typeof personalInfoSchema>;

const PersonalInfoPage:FC = () => {
    const createUserData = useAppSelector(getCreateUserData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const methods = useForm<FormData>({
        values: {
            nickname: createUserData.nickname,
            name: createUserData.name,
            surname: createUserData.sername,
            sex: createUserData.sex
        },
        resolver: yupResolver(personalInfoSchema)
    });
    const { handleSubmit, formState: { errors } } = methods;

    const onSubmit = (data: FormData): void => {
        dispatch(createUserReceived(data));
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
                    <div className={`${style.form_item} ${style.select}`}>
                        <p>Sex</p>
                        <SelectInput
                            id="field-sex"
                            name="sex"
                            placeholder="Не выбрано"
                            options={sexOptions}
                        />
                        <p className={style.error}>{errors.sex?.label?.message || ""}</p>
                    </div>
                </div>
                <div className={style.buttons_group}>
                    <Button
                        id="button-back"
                        onClick={goBack}
                        theme={"secondary"}
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