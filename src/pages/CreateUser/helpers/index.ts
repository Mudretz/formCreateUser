import { UserAdvantages } from "@src/entities/user/slice/user.types";
import { FormValuesUserAdvantagesStep } from "../constants/schema";

export const prepareValueUserAdvantages = (
    data: UserAdvantages,
): FormValuesUserAdvantagesStep => {
    return {
        ...data,
        advantages: data.advantages.map((item) => ({
            advantage: item,
        })),
    };
};