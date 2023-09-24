import './App.scss';
import { Routes, Route } from "react-router-dom";
import AuthPage from 'src/components/Pages/AuthPage/AuthPage.tsx'
import CreateUserPage from "src/components/Pages/CreateUserPage/CreateUserPage.tsx";
import NotFoundPage from "src/components/Pages/NotFoundPage/NotFoundPage.tsx";
import Container from "src/components/layouts/Container/Container.tsx";

function App() {

    return (
        <Routes>
            <Route element={<Container />}>
                <Route path="/" element={<AuthPage />} />
                <Route path="/create" element={<CreateUserPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}

export default App;
