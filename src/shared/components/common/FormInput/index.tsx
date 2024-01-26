import { FC, ComponentProps } from "react";
import { useFormContext, useFormState } from "react-hook-form";
import { FormInputLayout } from "..";
import { Input } from "../../ui";

interface Props extends ComponentProps<"input"> {
    name: string;
    label?: string;
    showError?: boolean;
}

export const FormInput: FC<Props> = ({
    name,
    label,
    showError = true,
    ...props
}) => {
    const { register, control } = useFormContext();
    const { errors } = useFormState({
        control: control,
    });

    return (
        <FormInputLayout
            name={name}
            label={label}
            showError={showError}
            errors={errors}
        >
            <Input {...props} {...register(name)} id={name} />
        </FormInputLayout>
    );
};
