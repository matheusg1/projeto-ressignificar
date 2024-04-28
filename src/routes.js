import { React, } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Feedback from './pages/dar-feedback';
import AcompanhamentoPsicologicoForm from './pages/acompanhamento-psicologico';
import AcompanhamentoPsiquiatricoForm from './pages/acompanhamento-psiquiatrico';
import AcompanhamentoNutricionalForm from './pages/acompanhamento-nutricional';
import AtendimentoPresencial from './pages/locais';
import Posts from './pages/posts';
import Inicio from './pages/index';

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Inicio />} />
            {/* <Route path="/sobre" element={<About />} /> */}
            {/* <Route path="/sobre2" element={<About2 />} /> */}
            <Route path="/posts" element={<Posts />} />
            <Route path="/atendimento-presencial" element={<AtendimentoPresencial />} />
            <Route path="/acompanhamento-psicologico" element={<AcompanhamentoPsicologicoForm />} />
            <Route path="/acompanhamento-psiquiatrico" element={<AcompanhamentoPsiquiatricoForm />} />
            <Route path="/acompanhamento-nutricional" element={<AcompanhamentoNutricionalForm />} />
            <Route path="/dar-feedback" element={<Feedback />} />            
        </Routes>
    );
}