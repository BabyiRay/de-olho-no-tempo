
import {Route, Routes, BrowserRouter} from ' react-router-dom';

import Home from './Pages/Home';
import Form from './Pages/Form';

function Router () {
    return (
        <BrowserRouter>
        <Routers>
            <Royte element={<Home />} path="/" exact />
            <Route element={<Form />} path="/cadastro" />
        </BrowserRouter>
    )
}

export default Router;
