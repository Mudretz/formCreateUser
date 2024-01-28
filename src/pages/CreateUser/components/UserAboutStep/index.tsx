import { FC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@src/shared/components/ui";
import { useAppDispatch, useAppSelector } from "@src/app/store/hooks";
import { stepDecrease, stepReceived } from "../../slice/createUser.slices";
import {
    FormValuesUserAboutStep,
    schemaUserAboutStep,
} from "../../constants/schema";
import { FormTextarea } from "@src/shared/components/common/FormTextarea";
import { useCreateUserMutation } from "@src/entities/user/service/user.service";
import { userAboutReceived, userClear } from "@src/entities/user/slice/user.slice";
import { getUser } from "@src/entities/user/slice/user.selectors";
import { transformUserDataForApi } from "@src/entities/user/helpers";
import { TypeModals } from "@src/shared/types/common";
import { TYPE_MODALS } from "@src/shared/constants/common";
import { ModalError } from "@src/shared/components/common";
import ModalSuccess from "@src/shared/components/common/ModalSuccess";
import styles from "./styles.module.scss";

export const UserAboutStep: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector(getUser);
    const [createUser] = useCreateUserMutation();
    const [modal, setModal] = useState<TypeModals>(null);

    const form = useForm<FormValuesUserAboutStep>({
        resolver: yupResolver(schemaUserAboutStep),
    });
    const {
        handleSubmit,
        formState: { errors },
    } = form;

    const goBack = () => {
        dispatch(stepDecrease());
    };

    const onHide = () => {
        setModal(null);
    };

    const handleSuccess = () => {
        dispatch(stepReceived(1));
        dispatch(userClear());
        navigate("/");
    };

    const onSubmit = (data: FormValuesUserAboutStep) => {
        dispatch(userAboutReceived(data));
        if (user.userInfo.sex?.label && user.userAdvantages.radioOption) {
            createUser(
                transformUserDataForApi({
                    ...user,
                    userAbout: {
                        text: data.text,
                    },
                }),
            )
                .unwrap()
                .then(() => setModal(TYPE_MODALS.success))
                .catch(() => setModal(TYPE_MODALS.success));
        }
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <FormTextarea
                    name='text'
                    label='about'
                    showError
                    errors={errors}
                />
                <div className={styles.buttonsGroup}>
                    <Button
                        id='button-back'
                        onClick={goBack}
                        theme={"secondary"}
                    >
                        Назад
                    </Button>
                    <Button id='button-send' theme='primary'>
                        Отправить
                    </Button>
                </div>
            </form>
            <ModalSuccess
                active={modal === TYPE_MODALS.success}
                onHide={onHide}
                onClick={handleSuccess}
                message='Форма успешно отправлена'
            />
            <ModalError active={modal === TYPE_MODALS.error} onHide={onHide} />
        </FormProvider>
    );
};
