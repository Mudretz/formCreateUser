import { screen } from "@testing-library/react";
import { UserContactsForm } from "..";
import { MemoryRouter } from "react-router-dom";
import setupStore from "@src/app/store";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@src/shared/utils/renderWithProviders";
import * as actions from "@src/entities/user/slice/user.slice";

describe("UserContact component", () => {
    test("Тестирование структуры UserContacts", async () => {
        const component = renderWithProviders(
            <MemoryRouter>
                <UserContactsForm />
            </MemoryRouter>,
        );
        expect(component).toMatchSnapshot();
    });
    // test("Тестирование скрина UserContact", async () => {
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto("http://localhost:3000/");
    //     await page.waitForSelector("#main");
    //     const image = await page.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //     page.close();
    // });
    test("Тестирование формы", async () => {
        const userContactPost = vi.spyOn(actions, "userContactsReceived");
        const store = setupStore();
        renderWithProviders(
            <MemoryRouter>
                <UserContactsForm />
            </MemoryRouter>,
            {
                store,
            },
        );

        const inputPhone = screen.getByTestId("input-phone");
        expect(inputPhone).toBeInTheDocument();
        await userEvent.type(inputPhone, "9999999999");
        expect(inputPhone).toHaveDisplayValue("+7 (999) 999-99-99");

        const emailInput = screen.getByTestId("input-email");
        expect(emailInput).toBeInTheDocument();
        await userEvent.type(emailInput, "test@gmail.com");
        expect(emailInput).toHaveDisplayValue("test@gmail.com");

        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
        await userEvent.click(btn);

        expect(userContactPost).toHaveBeenCalledTimes(1);
        expect(userContactPost).toHaveBeenCalledWith({
            phone: "+7 (999) 999-99-99",
            email: "test@gmail.com",
        });

        expect(store.getState().user.userContacts).toEqual({
            phone: "+7 (999) 999-99-99",
            email: "test@gmail.com",
        });
    });
});
