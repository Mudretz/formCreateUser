import { render, renderHook, screen } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import userEvent from '@testing-library/user-event'
import FormInput from "@/components/common/FormInput/FormInput.tsx";

type FormValues = {
    test: string
};
describe("Тестирование FormInput", () => {
    test("Базовое тестирование", async () => {
        const { result: formHookReturn} = renderHook(() => useForm<FormValues>());
        render(
            <FormProvider {...formHookReturn.current}>
                <FormInput
                    formText={"Текстовое поле"}
                    name={"test"}
                />
            </FormProvider>
        );
        const inp = screen.getByRole("textbox");
        expect(inp).toBeInTheDocument();
        await userEvent.type(inp, "test form");
        expect(inp).toHaveDisplayValue("test form");
        expect(formHookReturn.current.getValues("test")).toEqual("test form");
    })
})
