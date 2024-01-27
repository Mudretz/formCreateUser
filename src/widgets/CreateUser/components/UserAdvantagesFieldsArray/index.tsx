import { FC } from "react";
import styles from "./styles.module.scss";
import DeleteIcon from "@src/shared/assets/delete.svg?react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormValuesUserAdvantagesStep } from "../../constants/schema";
import { Input } from "@src/shared/components/ui";
import { ButtonWithIcon } from "@src/shared/components/ui";
import { ErrorText } from "@src/shared/components/ui";

export const UserAdvantagesFieldsArray: FC = () => {
    const {
        control,
        register,
        formState: { errors },
    } = useFormContext<FormValuesUserAdvantagesStep>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "advantages",
    });

    return (
        <div className={styles.container}>
            <p>Advantages</p>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <Input
                        id={`field-advatages-${index + 1}`}
                        {...register(`advantages.${index}.advantage`)}
                    />
                    <DeleteIcon
                        id={`button-remove-${index + 1}`}
                        className={styles.delete}
                        onClick={() => remove(index)}
                    />
                    {errors.advantages && (
                        <ErrorText className={styles.error}>
                            {errors.advantages[index]?.advantage?.message}
                        </ErrorText>
                    )}
                </div>
            ))}
            <ButtonWithIcon
                buttonType='add'
                id='button-add'
                type='button'
                onClick={() =>
                    append({
                        advantage: "",
                    })
                }
            />
        </div>
    );
};
