
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Screens/Home";
import ProductDetails from "./componets/ProductSection/ProductDetails";
import CartPage from "./componets/CartSection/CartPage";
import ReviewPage from "./componets/ReviewSection.js/ReviewPage";


function App() {
  return (
      <Router >
        <Routes >
        <Route exact path='/' element={ <Home />}  /> 
        <Route exact path='/item/:id' element={<ProductDetails />} /> 
        <Route exact path='/cart/page' element={ <CartPage />}  /> 
        <Route exact path='/review/page' element={ <ReviewPage />}  /> 
        </Routes>
     </Router >
  );
}

export default App;
