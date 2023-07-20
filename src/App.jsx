import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import { HomePage } from "./pages/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products/:productId" element={<Product />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
