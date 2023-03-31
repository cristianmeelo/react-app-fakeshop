import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/header/Index"
import { ProductListing } from "../components/product/list/Index"
import { ProductDetails } from '../components/product/details/Index';


export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Foound</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
