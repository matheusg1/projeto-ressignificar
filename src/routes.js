import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Feedback from './pages/feedback';
import Index from './pages/index';
import AcompanhamentoPsicologicoForm from './pages/acompanhamento-psicologico';
import AcompanhamentoPsiquiatricoForm from './pages/acompanhamento-psiquiatrico';
import AcompanhamentoNutricionalForm from './pages/acompanhamento-nutricional';
import AtendimentoPresencial from './pages/atendimento-presencial';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/atendimento-presencial" element={<AtendimentoPresencial />} />
            <Route path="/acompanhamento-psicologico" element={<AcompanhamentoPsicologicoForm />} />
            <Route path="/acompanhamento-psiquiatrico" element={<AcompanhamentoPsiquiatricoForm />} />
            <Route path="/acompanhamento-nutricional" element={<AcompanhamentoNutricionalForm />} />
            <Route path="/dar-feedback" element={<Feedback />} />
        </Routes>
    );
}