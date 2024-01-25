import { FC } from "react";
import { Controller, useFormContext, useFormState } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import{ MaskedInputProps } from "react-text-mask";
import InputMask from "../../ui/InputMask";
import style from "./FormInputMask.module.scss";

interface Props extends MaskedInputProps {
    name: string,
    formText?: string,
    showError?: boolean,
};

export const FormInputMask: FC<Props> = ({ name, formText, showError = true, ...props}) => {
    const { control} = useFormContext();
    const { errors } = useFormState({
        control: control
    });

    return (
        <div className={style.form}>
            {formText &&
                <label htmlFor={name}>{formText}</label>
            }
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value }}) => (
                    <InputMask
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        {...props}
                    />
                )}
            />
            {showError &&
                <>
                    {errors[name]
                        ?
                        <ErrorMessage
                            errors={errors}
                            name={name}
                            render={({ message }) =>(
                                <p className={style.error}>{message}</p>
                            )}
                        />
                        :
                        <p className={style.error}>{"\u00A0"}</p>
                    }
                </>
            }
        </div>
    );
};