import { ComponentProps, forwardRef, useId } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Input= forwardRef<HTMLInputElement,ComponentProps<"input">>(({ className, id, ...props}, ref) => {
    const randomId = useId();
    return (
        <input
            {...props}
            ref={ref}
            id={id || randomId}
            className={classNames(styles.input, className)}
        />
    );
});

export default Input;