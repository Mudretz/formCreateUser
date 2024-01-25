import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";

export const AppLayout: FC = () => {
    return (
        <div className={styles.layout}>
            <Outlet />
        </div>
    );
};
