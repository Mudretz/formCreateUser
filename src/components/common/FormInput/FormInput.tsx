import { FC, ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import Input from "src/components/ui/Inputs/Input/Input.tsx";
import style from "./FormInput.module.scss";

type Props = {
    name: string,
    formText?: string,
    showError?: boolean
};

const FormInput: FC<Props & ComponentProps<"input">> = ({ name, formText, showError, ...props }) => {
    const { register, formState, getFieldState} = useFormContext();
    const { error } = getFieldState(name, formState)

    return (
        <div className={style.form}>
            {formText &&
                <p></p>
            }
            <Input
                {...register(name)}
                {...props}
            />
            {showError &&
                <p className={style.error}>{error?.message || ""}</p>
            }
        </div>
    );
};

export default FormInput;