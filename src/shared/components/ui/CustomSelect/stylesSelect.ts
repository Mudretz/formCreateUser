import { Option } from "@src/shared/types/common";
import { GroupBase, StylesConfig } from "react-select";

export const getSelectStyles = <TData extends Option = Option>(): StylesConfig<
    TData,
    boolean,
    GroupBase<TData>
> => {
    return {};
};
