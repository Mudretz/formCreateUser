import { ComponentProps, FC } from "react";
import { Button, Modal } from "../../ui";
import SuccesIcon from "@src/shared/assets/success.svg?react";
import styles from "./styles.module.scss";

interface Props extends Pick<ComponentProps<"button">, "onClick"> {
    active: boolean;
    onHide: () => void;
    message: string;
}

const ModalSuccess: FC<Props> = ({ active, onHide, message, onClick }) => {
    return (
        <Modal active={active} onHide={onHide}>
            <div className={styles.container}>
                <p>{message}</p>
                <SuccesIcon />
                <Button id='button-to-main' onClick={onClick} theme='primary'>
                    На главную
                </Button>
            </div>
        </Modal>
    );
};

export default ModalSuccess;
