import { FC } from "react";
import {Controller, useFormContext} from "react-hook-form";
import MaskedInput from "react-text-mask";
import style from "./FormInput.module.scss";

type Props = {
    name: string,
    mask: Array<string | RegExp> | false,
    formText?: string,
    showError?: boolean,
    placeholder?: string,
    guide?: boolean,
};

const FormInputMask: FC<Props> = ({
    name,
    mask,
    formText,
    showError,
    placeholder,
    guide
}) => {
    const { control, formState, getFieldState} = useFormContext();
    const { error } = getFieldState(name, formState)

    return (
        <div className={style.form}>
            {formText &&
                <p>{formText}</p>
            }
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value }}) => (
                    <MaskedInput
                        mask={mask}
                        placeholder={placeholder}
                        guide={guide}
                        value={value}
                        onChange={onChange}
                        className={style.input}
                    />
                )}
            />
            {showError &&
                <p className={style.error}>{error?.message || ""}</p>
            }
        </div>
    );
};

export default FormInputMask;