import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userEvent from '@testing-library/user-event'
import store from "@/store/store.ts";
import AuthPage from "@/components/Pages/AuthPage/AuthPage.tsx";

describe("Тестирование AuthPage", () => {
    test("Тестирование", async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <AuthPage />
                </MemoryRouter>
            </Provider>
        );
    })
});