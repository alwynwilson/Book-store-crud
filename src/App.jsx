import "./App.css";
import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
