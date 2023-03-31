import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/header/Index"
import { ProductListing } from './components/product/list/Index';
import { ProductDetails } from './components/product/details/Index';


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={ProductListing} />
          <Route path="/product/:productId" Component={ProductListing} />
          <Route>404 Not Foound</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
