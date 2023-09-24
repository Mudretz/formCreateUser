import { FC } from "react";
import {Outlet} from "react-router-dom";
import style from "./Container.module.scss";
const Container: FC = () => {
    return (
        <div className={style.container}>
            <Outlet />
        </div>
    );
};

export default Container;