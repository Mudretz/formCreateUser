import Select, { GroupBase, Props } from "react-select";
import { getSelectStyles } from "./stylesSelect";
import { Option } from "@src/shared/types/common";
import { useId } from "react";

export const CustomSelect = <TData extends Option = Option>({
    options,
    id,
    ...props
}: Props<TData, boolean, GroupBase<TData>>) => {
    const customSelectStyles = getSelectStyles<TData>();
    const randomId = useId();
    return (
        <Select
            options={options}
            placeholder='Выберите...'
            noOptionsMessage={() => "Cписок пуст"}
            styles={customSelectStyles}
            id={id || randomId}
            {...props}
        />
    );
};
