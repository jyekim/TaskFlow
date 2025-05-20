import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "../src/pages/Board";
import Login from "../src/pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/common/Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 임시주석처리용용 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        {/* 임시주석처리용용 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Board />} />
          <Route path="/board" element={<Board />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
