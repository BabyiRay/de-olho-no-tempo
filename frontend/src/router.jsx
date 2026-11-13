import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import Form from './assets/Pages/Form';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
