import { ComponentProps, forwardRef } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Input= forwardRef<HTMLInputElement,ComponentProps<"input">>(({ className, ...props}, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            className={classNames(styles.input, className)}
        />
    );
});

export default Input;