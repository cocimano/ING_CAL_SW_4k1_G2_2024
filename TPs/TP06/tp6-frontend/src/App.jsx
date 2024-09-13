import { Route, Routes, useNavigate, Navigate, BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import OrderPage from "./components/OrderPage";

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publicacionenvio" element={<OrderPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}