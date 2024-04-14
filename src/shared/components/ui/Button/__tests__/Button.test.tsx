import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "..";

describe("Button", () => {
    test("Тестирование Button", async () => {
        const spy = vi.fn();
        render(
            <Button theme={"primary"} className={"testClass"} onClick={spy}>
                ButtonTest
            </Button>,
        );
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveClass("testClass");
        expect(screen.getByText("ButtonTest")).toBeInTheDocument();
        await userEvent.click(btn);
        expect(spy).toHaveBeenCalled();
    });
});
