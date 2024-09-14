import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import OrderPage from "./components/OrderPage";
import ImageUploader from "./components/ImageUploader";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publicacionenvio" element={<OrderPage />} />
          <Route path="/imageUploader" element={<ImageUploader />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}