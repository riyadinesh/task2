import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./AllProducts";
import ProductDetails from "./ProductDetail";

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<AllProducts/>}/>
      <Route exact path="/products/:productId" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;

