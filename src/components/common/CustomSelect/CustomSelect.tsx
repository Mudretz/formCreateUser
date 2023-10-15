import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import style from "./CustomSelect.module.scss";

export type IOption = {
    value: string | number,
    label: string
};

type BaseProps = {
    name: string,
    options: IOption[],
    id?: string,
    placeholder?: string,
    isSearchable?: boolean,
    isMulti?: boolean
};

type CommonSelect = {
    type: "common"
};

type FormSelect = {
    type: "form",
    formText?: string,
    showError?: boolean
};

const CustomSelect: FC<BaseProps & (CommonSelect | FormSelect)> = ({
    name,
    placeholder,
    id,
    options,
    isSearchable,
    isMulti,
    ...props
}) => {
    const { control, formState, getFieldState} = useFormContext();
    const { error } = getFieldState(name, formState)


    switch (props.type) {
        case "common": {
            return (
                <Controller
                    control={control}
                    name={name}
                    render={({ field}) => (
                        <Select
                            {...field}
                            options={options}
                            inputId={id}
                            instanceId={`field-sex-option-${field.value}`}
                            classNamePrefix="react-select"
                            placeholder={placeholder}
                            isSearchable={isSearchable}
                            isMulti={isMulti}
                        />
                    )}
                />
            );
        }
        case "form": {
            const { formText, showError= true } = props;
            return (
                <div className={style.form}>
                    {formText &&
                        <p>{formText}</p>
                    }
                    <Controller
                        control={control}
                        name={name}
                        render={({ field}) => (
                            <Select
                                {...field}
                                options={options}
                                inputId={id}
                                instanceId={`field-sex-option-${field.value}`}
                                placeholder={placeholder}
                                isSearchable={isSearchable}
                                isMulti={isMulti}
                            />
                        )}
                    />
                    {showError &&
                        <p className={style.error}>{error?.message || "\u00A0"}</p>
                    }
                </div>
            )
        }
        default: {
            const _exhaustiveCheck: never = props;
            return _exhaustiveCheck
        }
    }
};

export default CustomSelect;