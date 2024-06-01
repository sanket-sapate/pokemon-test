import { Route, Routes } from "react-router-dom";
import DisplayPokemon from "./DisplayPokemon";
import Login from "./Login";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function AllRoutes() {
    return (<>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<DisplayPokemon />} />
            </Routes>
            <ToastContainer/>
        </>
    );
}