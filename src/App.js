import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Altere Switch para Routes
import Header from './components/Header'; // Importa o componente Header

const App = () => {
    return (
        <Router>
            <Header />
            <main className="p-4">
                <Routes> {/* Altere Switch para Routes */}
                    <Route path="/" element={<h2>Bem-vindo à Página Inicial!</h2>} />
                    <Route path="/about" element={<h2>Sobre</h2>} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
