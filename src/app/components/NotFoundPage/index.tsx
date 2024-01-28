import { FC } from "react";
import style from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = () => {
    return (
        <div className={style.container}>
            <p>Страница не найдена</p>
        </div>
    );
};
