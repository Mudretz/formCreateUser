import { FC } from "react";
import MaskedInput, { MaskedInputProps } from "react-text-mask";
import classNames from "classnames";
import styles from "./styles.module.scss";

const InputMask: FC<MaskedInputProps> = ({ className, ...props}) => {
    return (
        <MaskedInput
            {...props}
            className={classNames(styles.input, className)}
        />
    );
};

export default InputMask;