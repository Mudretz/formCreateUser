import { act, render, renderHook, screen } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import { FormInputLayout } from "..";

type FormValues = {
    test: string;
};

describe("Тестирование FormInputLayout", () => {
    test("Базовое тестирование", async () => {
        const { result: formHookReturn } = renderHook(() =>
            useForm<FormValues>(),
        );
        const { rerender } = render(
            <FormProvider {...formHookReturn.current}>
                <FormInputLayout
                    name={"test"}
                    label={"Текстовое поле"}
                    showError={true}
                    errors={formHookReturn.current.formState.errors}
                >
                    <input
                        id={"test"}
                        {...formHookReturn.current.register("test")}
                    />
                </FormInputLayout>
            </FormProvider>,
        );
        const inp = screen.getByRole("textbox");
        expect(inp).toBeInTheDocument();
        expect(screen.getByLabelText("Текстовое поле")).toBeInTheDocument();
        act(() => {
            formHookReturn.current.setError("test", {
                message: "errorValues",
            });
        });

        rerender(
            <FormProvider {...formHookReturn.current}>
                <FormInputLayout
                    name={"test"}
                    label={"Текстовое поле"}
                    showError={true}
                    errors={formHookReturn.current.formState.errors}
                >
                    <input
                        id={"test"}
                        {...formHookReturn.current.register("test")}
                    />
                </FormInputLayout>
            </FormProvider>,
        );
        expect(await screen.findByText("errorValues")).toBeInTheDocument();

        rerender(
            <FormProvider {...formHookReturn.current}>
                <FormInputLayout name={"test"} showError={false}>
                    <input
                        id={"test"}
                        {...formHookReturn.current.register("test")}
                    />
                </FormInputLayout>
            </FormProvider>,
        );
        expect(screen.queryByText("errorValues")).toBeNull();
        expect(screen.queryByLabelText("Текстовое поле")).toBeNull();
    });
});
