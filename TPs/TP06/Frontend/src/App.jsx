import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Home from './components/pages/Home'
import OrderPage from "./components/pages/OrderPage";
import ImageUploader from "./components/utilities/ImageUploader";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orderpage" element={<OrderPage />} />
          <Route path="/imageUploader/:id" element={<ImageUploader />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}