import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer"
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
       <Footer /> 
    </Router>
  );
}

export default App;
