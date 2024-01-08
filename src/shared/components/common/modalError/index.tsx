import { FC } from "react";
import errorIcon from "../../../assets/error.svg";
import Modal from "../../../../components/common/modalWindow/ModalWindow";
import Button from "../../ui/Button";
import iconClose from "../../../assets/iconClose.svg";
import styles from "./styles.module.scss";

type Props = {
    active: boolean;
    onHide: () => void;
    onClick?: () => void;
};

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
                        onClick={onClick}
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
