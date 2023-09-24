import { FC, ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import style from "./FormInput.module.scss";

type Props = {
    name: string,
    formText?: string,
    showError?: boolean
};

const FormInput: FC<Props & ComponentProps<"input">> = ({ name, formText, showError= true, ...props }) => {
    const { register, formState, getFieldState} = useFormContext();
    const { error } = getFieldState(name, formState)

    return (
        <div className={style.form}>
            {formText &&
                <p>{formText}</p>
            }
            <input
                className={classNames(style.input)}
                {...register(name)}
                {...props}
            />
            {showError &&
                <p className={style.error}>{error?.message || "\u00A0"}</p>
            }
        </div>
    );
};

export default FormInput;