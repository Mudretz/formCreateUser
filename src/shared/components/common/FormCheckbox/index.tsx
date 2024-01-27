import { FC, useId } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorType } from "@src/shared/types/common";
import { Checkbox } from "../../ui/Checkbox";
import { ErrorMessageForm } from "../ErrorMessageForm";
import styles from "./styles.module.scss";

type Props = {
    name: string;
    label: string;
} & ErrorType;

export const FormCheckbox: FC<Props> = ({ name, label, ...props }) => {
    const { register } = useFormContext();
    const randomId = useId();

    return (
        <div className={styles.form}>
            <label className={styles.label}>
                <Checkbox {...register} id={randomId} />
                {label}
            </label>
            <ErrorMessageForm name={name} {...props} />
        </div>
    );
};
