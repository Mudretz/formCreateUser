import { FC } from "react";
import { Button } from "../../ui";
import SuccesIcon from "@src/shared/assets/success.svg?react";
import Modal from "../../../../components/common/modalWindow/ModalWindow";
import style from "./styles.module.scss";

type Props = {
    active: boolean;
    onHide: () => void;
    message: string;
    onClick?: () => void;
};

const ModalSuccess: FC<Props> = ({ active, onHide, message, onClick }) => {
    return (
        <Modal active={active} onHide={onHide}>
            <div className={style.container}>
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
