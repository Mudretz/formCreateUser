import { FC } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorType } from "@src/shared/types/common";
import { ErrorText } from "../../ui";

type Props = {
    name: string;
} & ErrorType;

export const ErrorMessageForm: FC<Props> = ({ name, ...props }) => {
    return (
        <>
            {props.showError && (
                <>
                    {props.errors[name] ? (
                        <ErrorMessage
                            errors={props.errors}
                            name={name}
                            render={({ message }) => (
                                <ErrorText>{message}</ErrorText>
                            )}
                        />
                    ) : (
                        <p>{"\u00A0"}</p>
                    )}
                </>
            )}
        </>
    );
};
