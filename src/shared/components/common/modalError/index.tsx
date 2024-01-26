import { ComponentProps, FC } from "react";
import errorIcon from "../../../assets/error.svg";
import Modal from "../../../../components/common/modalWindow/ModalWindow";

import iconClose from "../../../assets/iconClose.svg";
import styles from "./styles.module.scss";
import { Button } from "../../ui";

interface Props extends Pick<ComponentProps<"button">, "onClick"> {
    active: boolean;
    onHide: () => void;
}

export const ModalError: FC<Props> = ({ active, onHide, onClick }) => {
    return (
        <Modal active={active} onHide={onHide}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>Ошибка</p>
                    <img
                        className={styles.close}
                        src={iconClose}
                        alt='закрыть'
                        onClick={onHide}
                    />
                </div>
                <img className={styles.error} src={errorIcon} alt='ошибка' />
                <div className={styles.button}>
                    <Button
                        id='button-to-main'
                        onClick={onClick}
                        theme='primary'
                    >
                        Закрыть
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
