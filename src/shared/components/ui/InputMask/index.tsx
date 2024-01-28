import { FC } from "react";
import MaskedInput, { MaskedInputProps } from "react-text-mask";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const InputMask: FC<MaskedInputProps> = ({ className, ...props}) => {
    return (
        <MaskedInput
            {...props}
            className={classNames(styles.input, className)}
        />
    );
};