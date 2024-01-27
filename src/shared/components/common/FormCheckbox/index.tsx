import { FC, useId } from "react";
import styles from "./styles.module.scss";
import { ErrorType } from "@src/shared/types/common";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Checkbox } from "../../ui/Checkbox";

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
            {props.showError && (
                <>
                    {props.errors[name] ? (
                        <ErrorMessage
                            errors={props.errors}
                            name={name}
                            render={({ message }) => (
                                <p className={styles.error}>{message}</p>
                            )}
                        />
                    ) : (
                        <p className={styles.error}>{"\u00A0"}</p>
                    )}
                </>
            )}
        </div>
    );
};
