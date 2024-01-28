import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@src/app/store/hooks";
import { getUserContacts } from "@src/entities/user/slice/user.selectors";
import { userContactsReceived } from "@src/entities/user/slice/user.slice";
import { useNavigate } from "react-router-dom";
import { FormInput, FormInputMask } from "@src/shared/components/common";
import { PHONE_MASK } from "@src/shared/constants/masks";
import {
    FormValuesUserContacts,
    schemaUserContacts,
} from "../../constants/schema";
import { Button } from "@src/shared/components/ui";
import styles from "./styles.module.scss";

export const UserContactsForm: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userContacts = useAppSelector(getUserContacts);
    const form = useForm<FormValuesUserContacts>({
        defaultValues: userContacts,
        resolver: yupResolver(schemaUserContacts),
    });

    const { handleSubmit } = form;

    const onSubmit = (data: FormValuesUserContacts) => {
        dispatch(userContactsReceived(data));
        navigate("/create");
    };

    return (
        <FormProvider {...form}>
            <main className={styles.main}>
                <FormProvider {...form}>
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <FormInputMask
                            name='phone'
                            mask={PHONE_MASK}
                            formText='Номер телефона'
                            placeholder='+7 999 999-99-99'
                            guide={false}
                        />
                        <FormInput
                            id='field-email'
                            name='email'
                            placeholder='tim.jennings@example.com'
                            data-testid='input-email'
                        />
                        <Button
                            data-testid='button-start'
                            theme='primary'
                            className={styles.button}
                            type='submit'
                        >
                            Начать
                        </Button>
                    </form>
                </FormProvider>
            </main>
        </FormProvider>
    );
};
