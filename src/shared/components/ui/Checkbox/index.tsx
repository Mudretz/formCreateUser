import { ComponentProps, forwardRef, useId } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Checkbox = forwardRef<HTMLInputElement, ComponentProps<"input">>(
    ({ className, id, ...props }, ref) => {
        const randomId = useId();
        return (
            <input
                {...props}
                ref={ref}
                id={id || randomId}
                type='checkbox'
                className={classNames(styles.input, className)}
            />
        );
    },
);
