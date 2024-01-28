import { FC, ComponentProps, useId } from "react";
import classNames from "classnames";
import PlusIcon from "@src/shared/assets/plus.svg?react";
import styles from "./styles.module.scss";
import { notReachable } from "@src/shared/utils/notReachable";

interface Props extends ComponentProps<"button"> {
    buttonType: "add";
}

const getIconByType = (type: Props["buttonType"]) => {
    switch (type) {
        case "add":
            return <PlusIcon className={styles.icon} />;
        default:
            return notReachable(type);
    }
};

export const ButtonWithIcon: FC<Props> = ({
    id,
    className,
    buttonType,
    ...props
}) => {
    const randomId = useId();
    return (
        <button
            {...props}
            id={id || randomId}
            className={classNames(className, styles.button)}
        >
            {getIconByType(buttonType)}
        </button>
    );
};
