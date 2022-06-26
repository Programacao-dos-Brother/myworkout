import { Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";

const AppRoutes = () => {
    // Implement auth verification here
    const isUserAuthenticated = false;
    if (!isUserAuthenticated) {
        return <LoginPage />;
    }

    return (
        <Routes>
        </Routes>
    );
}

export default AppRoutes;