import { FC, ComponentProps, useId } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props extends ComponentProps<"button"> {
    theme: "primary" | "secondary";
}

export const Button: FC<Props> = ({ theme, id, className, ...props }) => {
    const randomId = useId();
    return (
        <button
            {...props}
            id={id || randomId}
            className={classNames(className, styles.button, {
                [styles.primary]: theme === "primary",
                [styles.secondary]: theme === "secondary",
            })}
        >
            {props.children}
        </button>
    );
};
