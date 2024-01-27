import { ComponentProps, FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props extends ComponentProps<"p"> {}

export const ErrorText: FC<Props> = ({ children, className, ...props }) => {
    return (
        <p className={classNames(className, styles.error)} {...props}>
            {children}
        </p>
    );
};
