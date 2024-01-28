import { render, screen } from "@testing-library/react";
import { PHONE_MASK } from "@src/shared/constants/masks";
import userEvent from '@testing-library/user-event'
import InputMask from "..";

test("Тестирование InputMask", async () => {
    const onChange = vi.fn();
    render(
        <InputMask
            mask={PHONE_MASK}
            onChange={onChange}
            placeholder={"placeholder"}
            className={"testClass"}
        />
    );
    const maskInput = screen.getByRole("textbox");
    expect(maskInput).toBeInTheDocument();
    expect(maskInput).toHaveClass("testClass");
    expect(screen.getByPlaceholderText("placeholder")).toBeInTheDocument();
    await userEvent.type(maskInput, "9914");
    expect(maskInput).toHaveDisplayValue("+7 (991) 4__-__-__");
    await userEvent.type(maskInput, "test");
    expect(maskInput).toHaveDisplayValue("+7 (991) 4__-__-__");
    expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
            target: expect.objectContaining({
                value: "+7 (991) 4__-__-__"
            })
        })
    );
});