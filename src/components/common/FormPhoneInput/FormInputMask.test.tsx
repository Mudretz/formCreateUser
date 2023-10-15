import { render, renderHook, screen } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import userEvent from '@testing-library/user-event'
import FormInputMask from "@/components/common/FormPhoneInput/FormInputMask.tsx";
import {phoneMask} from "@/constants/mask/inputMasks.ts";

type FormValues = {
    test: string
};
describe("Тестирование FormInputMask", () => {
    test("Базовое тестирование", async () => {
        const {result: formHookReturn} = renderHook(() => useForm<FormValues>());

        render(
            <FormProvider {...formHookReturn.current}>
                <FormInputMask
                    mask={phoneMask}
                    formText={"Текстовое поле"}
                    name={"test"}
                />
            </FormProvider>
        );
        const inputMask = screen.getByRole("textbox");
        expect(inputMask).toBeInTheDocument();
        expect(screen.getByText("Текстовое поле")).toBeInTheDocument();
        await userEvent.type(inputMask, "test form");
        expect(inputMask).toHaveDisplayValue("+7 (___) ___-__-__");
        expect(formHookReturn.current.getValues("test")).toEqual("+7 (___) ___-__-__");
    });
});
