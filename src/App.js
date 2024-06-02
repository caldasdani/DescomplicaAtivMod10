import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Login from "./pages/login";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listar-tarefa" element={<ListarTarefa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;