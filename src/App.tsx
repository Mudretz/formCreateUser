import './App.scss'
import { Routes, Route } from "react-router-dom";
import Container from "@/components/layouts/Container/Container.tsx";
import AuthPage from "@/components/Pages/AuthPage/AuthPage.tsx";

function App() {

    return (
        <Routes>
            <Route element={<Container />}>
                <Route path="/" element={<AuthPage />} />
                {/*<Route path="/create" element={<CreateUserPage />} />*/}
                {/*<Route path="*" element={<NotFoundPage />} />*/}
            </Route>
        </Routes>
    )
}

export default App;
