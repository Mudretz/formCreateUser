import { FC } from "react";
import * as yup from "yup";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../../store/hook/hook.ts";
import { checkboxData, radioGroupData } from "../../../../../constants/dataInput.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAdvantagesData } from "../../../../../store/data/selector.ts";
import { advantagesReceived } from "../../../../../store/data/data.ts";
import { stepDecrease, stepIncrease } from "../../../../../store/step/step.ts";
import { advantagesPageSchema } from "../../../../../constants/schema/advantagesPageSchema.ts";
import TextInput from "../../../../common/inputs/textInput/TextInput.tsx";
import Button from "../../../../common/button/Button.tsx";
import Checkbox from "../../../../common/inputs/checkBox/CheckBox.tsx";
import RadioGroup from "../../../../common/inputs/radioGroup/RadioGroup.tsx";
import deleteIcon from "../../../../../assets/delete.svg";
import plusIcon from "../../../../../assets/plus.svg";
import style from "./advantagesPage.module.scss";

export type FormData = yup.InferType<typeof advantagesPageSchema>;

const AdvantagesPage: FC = () => {
    const dispatch = useAppDispatch();
    const advantages = useAppSelector(getAdvantagesData);
    const methods =  useForm<FormData>({
        defaultValues: {
            advantages: advantages.advantages,
            checkboxes: advantages.checkboxes,
            radioOption: advantages.radioOption
        },
        resolver: yupResolver(advantagesPageSchema)
    });
    const { handleSubmit, control, formState: { errors } } = methods;
    const { fields, append, remove } = useFieldArray<FormData>({
        control,
        name: "advantages"
    });
        
    const onSubmit = (data: FormData) => {
        dispatch(advantagesReceived(data));
        dispatch(stepIncrease());
    };

    const handleClick = () => {
        dispatch(stepDecrease());
    };

    return (
        <FormProvider {...methods}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Advantages</p>
                    {fields.map((field, index) => (
                        <div key={field.id}>
                            <TextInput
                                id={`field-advatages-${index + 1}`}
                                name={`advantages[${index}].advantage`}
                            />
                            <img id={`button-remove-${index + 1}`} className={style.delete} src={deleteIcon} alt="удалить" onClick={() => remove(index)}/>
                            {errors.advantages && (
                                <p className={style.error_input}>{errors.advantages[index]?.advantage?.message}</p>
                            )}
                        </div>
                    ))}
                    <button
                        id="button add"
                        type="button"
                        className={style.plus_icon}
                        onClick={() => append({
                            advantage: ""
                        })}
                    >
                        <img src={plusIcon} alt="добавить" />
                    </button>
                </div>
                <Checkbox
                    name="Checkbox group"
                    nameInput="checkboxes"
                    data={checkboxData}
                    errorMessage={errors.checkboxes?.message || ""}
                />
                <RadioGroup
                    name="Radio Group"
                    nameInput="radioOption"
                    data={radioGroupData}
                    errorMessage={errors.radioOption?.message || ""}
                />
                <div className={style.buttons_group}>
                    <Button
                        id="button-back"
                        onClick={handleClick}
                        theme={"secondary"}
                    >
                        Back
                    </Button>
                    <Button
                        id="button-next"
                        theme="primary"
                    >
                        Далее
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
 
export default AdvantagesPage;