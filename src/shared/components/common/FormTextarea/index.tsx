import { ComponentProps, FC } from "react";
import { useFormContext } from "react-hook-form";
import { omit } from "lodash";
import { ErrorType } from "@src/shared/types/common";
import { Textarea } from "../../ui";
import { ErrorMessageForm } from "..";
import { MAX_TEXT_COUNT } from "@src/pages/CreateUser/constants/data";
import { isString } from "@src/shared/types/typeGuards";
import styles from "./style.module.scss";

type Props = {
    name: string;
    label?: string;
} & ErrorType &
    ComponentProps<"textarea">;

export const FormTextarea: FC<Props> = ({ name, label, ...props }) => {
    const { register, watch } = useFormContext();
    const value = watch(name);

    const stringCount = (): number => {
        if (isString(value)) {
            return value.trim().split(" ").join("").length;
        }
        return 0;
    };

    return (
        <div className={styles.form}>
            {label}
            <Textarea {...omit(props, ["showError"])} {...register(name)} />
            <p>
                {stringCount()}/{MAX_TEXT_COUNT}
            </p>
            <ErrorMessageForm name={name} {...props} />
        </div>
    );
};
