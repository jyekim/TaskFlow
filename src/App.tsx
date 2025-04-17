import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "../src/pages/Board";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col ">
      <Header/>
      <Routes>     
        <Route path="/" element={<Board/>}/>
        <Route path="/board" element={<Board />} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
