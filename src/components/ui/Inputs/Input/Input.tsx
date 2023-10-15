import { ComponentProps, forwardRef } from "react";
import classNames from "classnames";
import style from "./Input.module.scss";

const Input= forwardRef<HTMLInputElement,ComponentProps<"input">>((props, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            className={classNames(style.input, props.className)}
        />
    );
});

export default Input;