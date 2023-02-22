import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../src/pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h2>error 404 : This page does not exist!</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
