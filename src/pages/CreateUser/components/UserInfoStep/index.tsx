import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { FormInput, FormSelect } from "@src/shared/components/common";
import { Button } from "@src/shared/components/ui";
import {
    FormValuesUserInfoStep,
    schemaUserInfoStep,
} from "../../constants/schema";
import { useAppDispatch, useAppSelector } from "@src/app/store/hooks";
import { getUserInfo } from "@src/entities/user/slice/user.selectors";
import { userInfoReceived } from "@src/entities/user/slice/user.slice";
import { stepIncrease } from "../../slice/createUser.slices";
import { SEX_OPTIONS } from "../../constants/data";
import styles from "./styles.module.scss";

export const UserInfoStep: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector(getUserInfo);

    const form = useForm<FormValuesUserInfoStep>({
        defaultValues: userInfo,
        resolver: yupResolver(schemaUserInfoStep),
    });

    const { handleSubmit } = form;

    const onSubmit = (data: FormValuesUserInfoStep) => {
        dispatch(userInfoReceived(data));
        dispatch(stepIncrease());
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <FormProvider {...form}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formList}>
                    <FormInput
                        id='field-nickname'
                        name='nickname'
                        label='Nickname'
                    />
                    <FormInput id='field-name' name='name' label='Name' />
                    <FormInput
                        id='field-surname'
                        name='surname'
                        label='Surname'
                    />
                    <FormSelect
                        id='field-sex'
                        name='sex'
                        options={SEX_OPTIONS}
                        placeholder='Не выбрано'
                        label='Sex'
                    />
                </div>
                <div className={styles.buttons_group}>
                    <Button id='button-back' theme='secondary' onClick={goBack}>
                        Назад
                    </Button>
                    <Button id='button-next' theme='primary'>
                        Далее
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
