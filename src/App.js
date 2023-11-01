import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

import FavoritesProvider from "./context/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
        <Footer />
      </Router>
    </FavoritesProvider>
  );
}
export default App;
