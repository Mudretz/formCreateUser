import { FC } from "react";
import { GroupBase, OptionsOrGroups, Props } from "react-select";
import { Controller, useFormContext } from "react-hook-form";
import { Option } from "@src/shared/types/common";
import { FormInputLayout } from "..";
import { CustomSelect } from "../../ui";

type PropsSelect = {
    name: string;
    label?: string;
    showError?: boolean;
    options: OptionsOrGroups<Option, GroupBase<Option>>;
} & Props<Option, boolean, GroupBase<Option>>;

export const FormSelect: FC<PropsSelect> = ({
    name,
    options,
    label,
    showError = true,
    ...props
}) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <FormInputLayout
            name={name}
            label={label}
            showError={showError}
            errors={errors}
        >
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value, name } }) => (
                    <CustomSelect
                        name={name}
                        value={value}
                        onChange={onChange}
                        options={options}
                        {...props}
                    />
                )}
            />
        </FormInputLayout>
    );
};
