import { FC } from "react";
import styles from "./styles.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@src/shared/components/ui";
import {
    FormValuesUserAdvantagesStep,
    shemaUserAdvantagesStep,
} from "../../constants/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserAdvantagesFieldsArray } from "../UserAdvantagesFieldsArray";
import { useAppDispatch, useAppSelector } from "@src/app/store/hooks";
import { stepDecrease } from "../../slice/createUser.slices";
import { getUserAdvantages } from "@src/entities/user/slice/user.selectors";
import { FormCheckbox } from "@src/shared/components/common";

export const UserAdvantagesStep: FC = () => {
    const dispatch = useAppDispatch();
    const userAdvantages = useAppSelector(getUserAdvantages);

    const form = useForm<FormValuesUserAdvantagesStep>({
        defaultValues: userAdvantages,
        resolver: yupResolver(shemaUserAdvantagesStep),
    });
    const { handleSubmit, register } = form;

    const onSubmit = (data: FormValuesUserAdvantagesStep) => {
        console.log(data);
    };

    const goBack = () => {
        dispatch(stepDecrease());
    };

    return (
        <FormProvider {...form}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <UserAdvantagesFieldsArray />
                <FormCheckbox
                    name='checkboxes'
                    label="1"
                />
                {/* <RadioGroup
                    name='Radio Group'
                    nameInput='radioOption'
                    data={radioGroupData}
                    errorMessage={errors.radioOption?.message || ""}
                /> */}
                <div className={styles.buttons_group}>
                    <Button
                        id='button-back'
                        onClick={goBack}
                        theme={"secondary"}
                    >
                        Back
                    </Button>
                    <Button id='button-next' theme='primary'>
                        Далее
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
