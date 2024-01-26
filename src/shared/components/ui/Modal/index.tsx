import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
    active: boolean,
    onHide: () => void,
};

export const Modal: FC<PropsWithChildren<Props>> = ({ active, onHide, children }) => {
    return (
        <div
            className={
                classNames(styles.modal,
                    { [styles.modal_active]: active })
                }
            onClick={onHide}
        >
            <div
                className={styles.modal_content} 
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};