import { FC, ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import Input from "src/components/ui/Inputs/Input/Input.tsx";
import style from "./CustomInput.module.scss";

type BaseProps = {
    name: string
};

type TypeInput = {
    type: "input"
};

type TypeFormInput = {
    type: "formInput"
    formText?: string,
    showError?: boolean
};

type Props = BaseProps & ComponentProps<"input"> & (TypeInput | TypeFormInput);

const CustomInput: FC<Props> = ({ name, ...props}) => {
    const { register, formState, getFieldState} = useFormContext();
    const { error } = getFieldState(name, formState)

    switch (props.type) {
        case "input": {
            return (
                <Input
                    {...register(name)}
                    {...props}
                />
            );
        }
        case "formInput": {
            const {showError, formText} = props;
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
        }
        default: {
            const _exhaustiveCheck: never = props;
            return _exhaustiveCheck;
        }
    }
};

export default CustomInput;