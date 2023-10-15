import { FC } from "react";
import MaskedInput, { MaskedInputProps } from "react-text-mask";
import style from "@/components/common/FormPhoneInput/FormInputMask.module.scss";
import classNames from "classnames";

const InputMask: FC<MaskedInputProps> = (props) => {
    return (
        <MaskedInput
            {...props}
            className={classNames(style.input, props.className)}
        />
    );
};

export default InputMask;