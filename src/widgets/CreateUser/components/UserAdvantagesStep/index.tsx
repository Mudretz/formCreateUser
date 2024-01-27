import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@src/shared/components/ui";
import {
    FormValuesUserAdvantagesStep,
    schemaUserAdvantagesStep,
} from "../../constants/schema";
import { UserAdvantagesFieldsArray } from "../UserAdvantagesFieldsArray";
import { useAppDispatch, useAppSelector } from "@src/app/store/hooks";
import { stepDecrease } from "../../slice/createUser.slices";
import { getUserAdvantages } from "@src/entities/user/slice/user.selectors";
import { userAdvantagesReceived } from "@src/entities/user/slice/user.slice";
import { prepareValueUserAdvantages } from "../../helpers";
import styles from "./styles.module.scss";
import { RadioGroup } from "@src/shared/components/common";
import { GroupCheckbox } from "@src/shared/components/common/GroupCheckbox";

export const UserAdvantagesStep: FC = () => {
    const dispatch = useAppDispatch();
    const userAdvantages = useAppSelector(getUserAdvantages);

    const form = useForm<FormValuesUserAdvantagesStep>({
        defaultValues: prepareValueUserAdvantages(userAdvantages),
        resolver: yupResolver(schemaUserAdvantagesStep),
    });
    const {
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmit = (data: FormValuesUserAdvantagesStep) => {
        dispatch(
            userAdvantagesReceived({
                ...data,
                advantages: data.advantages.map((item) => item.advantage),
            }),
        );
    };

    const goBack = () => {
        dispatch(stepDecrease());
    };

    return (
        <FormProvider {...form}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <UserAdvantagesFieldsArray />
                <GroupCheckbox
                    name='checkboxes'
                    label='Checkbox group'
                    data={[1, 2, 3]}
                    showError
                    errors={errors}
                />
                <RadioGroup
                    name='radioOption'
                    label='Checkbox group'
                    data={[1, 2, 3]}
                    showError
                    errors={errors}
                />
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
