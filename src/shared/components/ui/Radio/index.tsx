import { FC } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";

type Props = {
    name: string;
    nameInput: string;
    data: number[];
    errorMessage: string;
};

export const Radio: FC<Props> = ({ name, nameInput, data, errorMessage }) => {
    const { register } = useFormContext();

    return (
        <div className={styles.form_item}>
            <p>{name}</p>
            <div className={styles.input_list}>
                {data.map((item, index) => (
                    <label key={item}>
                        <input
                            id={`field-radio-group-option-${index + 1}`}
                            type='radio'
                            value={item}
                            {...register(nameInput)}
                            className={styles.input}
                        />
                        {item}
                    </label>
                ))}
            </div>
            <p className={styles.error}>{errorMessage}</p>
        </div>
    );
};
