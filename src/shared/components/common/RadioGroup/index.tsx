import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";
import { isNumber } from "@src/shared/utils/isNumber";
import { ErrorType } from "@src/shared/types/common";
import { ErrorMessageForm } from "../ErrorMessageForm";

type Props = {
    name: string;
    label?: string;
    data: number[];
} & ErrorType;

export const RadioGroup: FC<Props> = ({ name, label, data, ...props }) => {
    const { control } = useFormContext();

    return (
        <div className={styles.formItem}>
            {label}
            <div className={styles.inputList}>
                {data.map((item) => (
                    <label key={item} className={styles.label}>
                        <Controller
                            control={control}
                            name={name}
                            render={({ field: { onChange, value, ...rest } }) => (
                                <input
                                    {...rest}
                                    checked={item === value}
                                    value={item}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (isNumber(value)) {
                                            onChange(Number(value));
                                        } else {
                                            onChange(value);
                                        }
                                    }}
                                    id={item.toString()}
                                    type='radio'
                                    className={styles.input}
                                />
                            )}
                        />
                        {item}
                    </label>
                ))}
            </div>
            <ErrorMessageForm name={name} {...props} />
        </div>
    );
};
