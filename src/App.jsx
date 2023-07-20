import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import { HomePage } from "./pages/HomePage/HomePage";
// import { NavBar } from "./components/NavBar/NavBar";
import { ProductCardHome } from "./components/ProductCardHome/ProductCardHome";
import db from '../src/db.json';

function App() {
  return (
    <>
    <ProductCardHome />
    </>

    // <Router>
    //   <NavBar />
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <ProductCardHome />
    //     {/* <Route path="/products/:productId" element={<Product />} /> */}
    //   </Routes>
    //   {/* <Footer /> */}
    // </Router>
  );
}

export default App;
