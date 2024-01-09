import { FC, ComponentProps } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props extends ComponentProps<"button"> {
    theme: "primary" | "secondary";
};

const Button: FC<Props> = ({
    theme,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={classNames(className, styles.button, {
                [styles.primary]: theme === "primary",
                [styles.secondary]: theme === "secondary",
            })}
        >
            {props.children}
        </button>
    );
};

export default Button;
