import { FC, ComponentProps } from "react";
import {useFormContext, useFormState} from "react-hook-form";
import Input from "@/components/ui/Inputs/Input/Input.tsx";
import FormInputLayout from "@/components/layouts/FormInput/FormInputLayout.tsx";

type Props = {
    name: string,
    formText?: string,
    showError?: boolean
};

const FormInput: FC<Props & ComponentProps<"input">> = ({ name, formText, showError= true, ...props }) => {
    const { register, control } = useFormContext();
    const { errors } = useFormState({
        control: control
    });

    return (
        <FormInputLayout
            name={name}
            formText={formText}
            showError={showError}
            errors={errors}
        >
            <Input
                {...props}
                {...register(name)}
                id={name}
            />
        </FormInputLayout>
    );
};

export default FormInput;