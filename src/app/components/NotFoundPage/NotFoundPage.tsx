import { FC } from "react";
import style from "./NotFoundPage.module.scss";

const NotFoundPage: FC = () => {
    return (
        <div className={style.container}>
            <p>Страница не найдена</p>
        </div>
    );
};
 
export default NotFoundPage;