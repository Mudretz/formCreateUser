import { FC } from "react";
import successIcon from "../../../assets/success.svg";
import Modal from "../../../../components/common/modalWindow/ModalWindow";
import style from "./modalSucces.module.scss";
import Button from "../../ui/Button";

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
                <img src={successIcon} alt='успешно' />
                <Button id='button-to-main' onClick={onClick} theme='primary'>
                    На главную
                </Button>
            </div>
        </Modal>
    );
};

export default ModalSuccess;
