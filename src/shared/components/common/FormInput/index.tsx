import { FC, PropsWithChildren } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorType } from "@src/shared/types/common";
import styles from "./styles.module.scss";

type Props = {
    name: string,
    label?: string,
    showError?: boolean,
} & ErrorType;

export const FormInput: FC<PropsWithChildren<Props>> = ({ name, label, children, ...props }) => {

    return (
        <div className={styles.form}>
            {label &&
                <label htmlFor={name}>{label}</label>
            }
            {children}
            {props.showError &&
                <>
                    {props.errors[name]
                        ?
                        <ErrorMessage
                            errors={props.errors}
                            name={name}
                            render={({ message }) =>(
                                <p className={styles.error}>{message}</p>
                            )}
                        />
                        :
                        <p className={styles.error}>{"\u00A0"}</p>
                    }
                </>
            }
        </div>
    );
};