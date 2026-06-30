import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProteinDetail from "./pages/ProteinDetail";

import Home from "./pages/Home";
import Proteins from "./pages/Proteins";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/proteins" element={<Proteins />} />
        <Route path="/proteins/:id" element={<ProteinDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
