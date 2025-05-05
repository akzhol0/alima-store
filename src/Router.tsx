import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextOverAll } from "./context/logic";
import HomePage from "./components/home-page/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AllProducts from "./components/all-products-page/AllProducts";
import SinglePage from "./components/single-page/SinglePage";
import Cart from "./components/cart/Cart";
import CategoryProd from "./components/category-products/CategoryProd";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserProfile from "./components/user-profile/UserProfile";
import SavedProducts from "./components/saved/SavedProducts";

function Router() {
  return (
    <BrowserRouter>
      <ContextOverAll>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/all-products" element={<AllProducts />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/single-product/:id" element={<SinglePage />}></Route>
          <Route path="/category/:categoryTitle" element={<CategoryProd />}></Route>
          <Route path="/auth/login" element={<Login/>}></Route>
          <Route path="/auth/register" element={<Register />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
          <Route path='/auth' element={<Login/>}></Route>
          <Route path="/saved" element={<SavedProducts/>}></Route>
        </Routes>
        <Footer />
      </ContextOverAll>
    </BrowserRouter>
  )
}

export default Router
