import { FC, ComponentProps } from "react";
import classNames from "classnames";
import style from "./styles.module.scss";

type Props = {
    theme: "primary" | "secondary"
};

const Button: FC<Props & ComponentProps<"button">> = ({ theme, ...props }) => {

    return (
        <button
            {...props}
            className={classNames(
                props.className,
                style.button, {
                [style.primary] : theme === "primary",
                [style.secondary]: theme === "secondary"
            })}
        >
            {props.children}
        </button>
    );
};
 
export default Button;