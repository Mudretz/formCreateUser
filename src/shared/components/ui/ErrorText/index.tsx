import { ComponentProps, FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const ErrorText: FC<ComponentProps<"p">> = ({
    children,
    className,
    ...props
}) => {
    return (
        <p className={classNames(className, styles.error)} {...props}>
            {children}
        </p>
    );
};
