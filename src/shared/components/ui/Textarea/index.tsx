import { ComponentProps, forwardRef, useId } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Textarea = forwardRef<
    HTMLTextAreaElement,
    ComponentProps<"textarea">
>(({ className, id, ...props }, ref) => {
    const randomId = useId();
    return (
        <textarea
            {...props}
            ref={ref}
            id={id || randomId}
            className={classNames(className, styles.textarea)}
        />
    );
});
