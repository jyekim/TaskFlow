import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "../src/pages/Board";
import Login from "../src/pages/Login";
import Layout from "./components/common/Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/board" element={<Board />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
