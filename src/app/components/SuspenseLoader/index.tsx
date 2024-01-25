import { FC } from "react";
import styles from "./styles.module.scss";

export const SuspenseLoader: FC = () => {
    return <div className={styles.container}>...Загрузка</div>;
};
