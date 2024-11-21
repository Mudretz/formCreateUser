import { Button, Input } from "@src/shared/components/ui";
import ModalBottomSheet from "modal-bottom-sheet";
import { FC, useState } from "react";
import styles from "./styles.module.scss";

export const TestingLibrary: FC = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button
                theme='primary'
                className={styles.button}
                onClick={() => setVisible(true)}
                type='button'
            >
                Открыть
            </Button>
            <ModalBottomSheet
                visible={visible}
                onBackdropClick={() => setVisible(false)}
                onSwipeCancel={() => setVisible(false)}
            >
                <div
                    style={{
                        height: 400,
                        padding: 20,
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                        textAlign: "center",
                    }}
                >
                    <Input />
                </div>
            </ModalBottomSheet>
        </div>
    );
};
