import { FC, PropsWithChildren } from "react";
import { FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import style from "./FormInputLayout.module.scss";

type ErrorType = {
    showError?: false,
} | {
    showError?: true,
    errors: FieldErrors
};

type Props = {
    name: string,
    formText?: string,
    showError?: boolean,
} & ErrorType;

const FormInputLayout: FC<PropsWithChildren<Props>> = ({ name, formText, children, ...props }) => {

    return (
        <div className={style.form}>
            {formText &&
                <label htmlFor={name}>{formText}</label>
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
                                <p className={style.error}>{message}</p>
                            )}
                        />
                        :
                        <p className={style.error}>{"\u00A0"}</p>
                    }
                </>
            }
        </div>
    );
};

export default FormInputLayout;