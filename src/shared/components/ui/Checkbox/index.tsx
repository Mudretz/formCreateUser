import { ComponentProps, FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props extends ComponentProps<"input"> {}

export const Checkbox: FC<Props> = ({ className, ...props }) => {
    return (
        <input
            type='checkbox'
            className={classNames(styles.input, className)}
            {...props}
        />
    );
};
