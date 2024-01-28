import { FC } from "react";
import { ErrorType } from "@src/shared/types/common";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { ErrorMessageForm } from "../ErrorMessageForm";
import styles from "./styles.module.scss";
import { Checkbox } from "../../ui";

type Props = {
    name: keyof FieldValues;
    data: number[];
    label?: string;
} & ErrorType;

export const GroupCheckbox: FC<Props> = ({ name, data, label, ...props }) => {
    const { control } = useFormContext();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        value: Props["data"],
        onChange: (event: Props["data"]) => void,
    ) => {
        const numberValue = Number(e.target.value);
        const findItem = value.find((item: number) => item === numberValue);
        if (findItem) {
            onChange(value.filter((item: number) => item !== numberValue));
        } else {
            onChange([...value, numberValue].sort());
        }
    };

    return (
        <div className={styles.list}>
            {label}
            {data.map((item) => (
                <label key={item} className={styles.label}>
                    <Controller
                        name={name}
                        control={control}
                        render={({ field: { onChange, value, ...rest } }) => (
                            <Checkbox
                                {...rest}
                                value={item}
                                checked={
                                    !!value.find(
                                        (value: number) => value === item,
                                    )
                                }
                                onChange={(e) =>
                                    handleChange(e, value, onChange)
                                }
                            />
                        )}
                    />
                    {item}
                </label>
            ))}
            <ErrorMessageForm name={name} {...props} />
        </div>
    );
};
