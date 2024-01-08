import './App.scss'

import Container from './components/layouts/Container/Container';
import AuthPage from './components/pages/AuthPage/AuthPage';
import { Routes, Route } from "react-router-dom";

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
