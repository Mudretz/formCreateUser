import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "..";

test("Тестирование Input", async () => {
    const onChange = vi.fn();
    render(
        <Input
            className={"testClass"}
            onChange={onChange}
            placeholder={"placeholder"}
        />,
    );
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("testClass");
    expect(screen.getByPlaceholderText("placeholder")).toBeInTheDocument();
    await userEvent.type(input, "test");
    expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
            target: expect.objectContaining({
                value: "test",
            }),
        }),
    );
});
