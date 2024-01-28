import { FC } from "react";
import styles from "./styles.module.scss";

export const NotFoundPage: FC = () => {
    return (
        <div className={styles.container}>
            <p>Страница не найдена</p>
        </div>
    );
};
