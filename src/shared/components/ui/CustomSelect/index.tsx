import Select, { GroupBase, Props } from "react-select";
import { getSelectStyles } from "./stylesSelect";
import { Option } from "@src/shared/types/common";

export const CustomSelect = <TData extends Option = Option>({
    options,
    ...props
}: Props<TData, boolean, GroupBase<TData>>) => {
    const customSelectStyles = getSelectStyles<TData>();

    return (
        <Select
            options={options}
            placeholder='Выберите...'
            noOptionsMessage={() => "Cписок пуст"}
            styles={customSelectStyles}
            {...props}
        />
    );
};