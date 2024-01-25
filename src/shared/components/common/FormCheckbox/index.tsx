import { FC } from "react";
import styles from "./styles.module.scss";
import { ErrorType } from "@src/shared/types/common";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Checkbox } from "../../ui/Checkbox";

type Props = {
    name: string;
    data: number[];
    label?: string;
    register?: UseFormRegister<FieldValues>;
} & ErrorType;

export const FormCheckbox: FC<Props> = ({ name, label, data, register, ...props }) => {
    return (
        <div className={styles.form}>
            <p>{label}</p>
            <div className={styles.inputList}>
                {data.map((item, index) => (
                    <label key={item}>
                        <Checkbox
                            id={`field-checkbox-group-option-${index + 1}`}
                            value={item}
                            {...register && {...register(name)}}
                        />
                        {item}
                    </label>
                ))}
            </div>
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
