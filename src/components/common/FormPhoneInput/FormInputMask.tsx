import { FC } from "react";
import { Controller, useFormContext, useFormState } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import{ MaskedInputProps } from "react-text-mask";
import InputMask from "@/components/ui/Inputs/InputMask/InputMask.tsx";
import style from "./FormInputMask.module.scss";

type Props = {
    name: string,
    formText?: string,
    showError?: boolean,
} & MaskedInputProps;

const FormInputMask: FC<Props> = ({ name, formText, showError = true, ...props}) => {
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

export default FormInputMask;