import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "../Components/Register";
import Login from "../Components/Login";
import WelcomePage from "../Components/WelcomePage";

const RouterNavigate = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/welcome" element={<WelcomePage />} />

        </Routes>
        </BrowserRouter>
    )
};

export default RouterNavigate;