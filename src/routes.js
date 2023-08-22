import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/about';
import Feedback from './pages/dar-feedback';
import Index from './pages/index';
import AcompanhamentoPsicologicoForm from './pages/acompanhamento-psicologico';
import AcompanhamentoPsiquiatricoForm from './pages/acompanhamento-psiquiatrico';
import AcompanhamentoNutricionalForm from './pages/acompanhamento-nutricional';
import AtendimentoPresencial from './pages/locais';
import Login from './pages/login';
import Registro from './pages/registro';
import { useAuth } from "../src/hooks/useAuth";

export default function AppRoutes() {
    const { user } = useAuth();
    
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/atendimento-presencial" element={<AtendimentoPresencial />} />
            <Route path="/acompanhamento-psicologico" element={<AcompanhamentoPsicologicoForm />} />
            <Route path="/acompanhamento-psiquiatrico" element={<AcompanhamentoPsiquiatricoForm />} />
            <Route path="/acompanhamento-nutricional" element={<AcompanhamentoNutricionalForm />} />
            <Route path="/dar-feedback" element={<Feedback />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route
                path="/registro"
                element={!user ? <Registro /> : <Navigate to="/login" replace />}
            />
        </Routes>
    );
}