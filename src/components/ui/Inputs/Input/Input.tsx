import { FC, ComponentProps } from "react";
import classNames from "classnames";
import style from "./Input.module.scss";

const Input: FC<ComponentProps<"input">> = (props) => {
    return (
        <input
            className={classNames(style.input)}
            {...props}
        />
    );
};

export default Input;