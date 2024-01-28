import { FC } from "react";
import { Button, Modal } from "../../ui";
import IconClose from "@src/shared/assets/iconClose.svg?react";
import ErrorIcon from "@src/shared/assets/error.svg?react";
import styles from "./styles.module.scss";

interface Props {
    active: boolean;
    onHide: () => void;
}

export const ModalError: FC<Props> = ({ active, onHide }) => {
    return (
        <Modal active={active} onHide={onHide}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>Ошибка</p>
                    <IconClose className={styles.close} onClick={onHide} />
                </div>
                <ErrorIcon className={styles.error}/>
                <div className={styles.button}>
                    <Button
                        id='button-to-main'
                        onClick={onHide}
                        theme='primary'
                    >
                        Закрыть
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
