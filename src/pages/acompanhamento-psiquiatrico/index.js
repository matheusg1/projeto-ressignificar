import React from "react";
import HelmetComponent from "../../components/helmetComponent";
import TitleComponent from "../../components/titleComponent";
import Fade from "../../components/fadeComponent";

export default function AcompanhamentoPsiquiatricoForm() {
    return (
        <>        
        <HelmetComponent title="Acompanhamento psiquiátrico"/>
        <Fade />
            <div className="fade">
        <TitleComponent title="Assistência psiquiátrica"/>
            <div className="col-12 d-flex justify-content-center mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5 mt-xxl-5">
                <iframe
                    src="https://docs.google.com/forms/d/1BqiUmS-lYi-HgTCeRXZccl--mdwFPC1ay7MuwZzHkGU/viewform?embedded=true"
                    className="iframe-custom"
                    title = "Formulário para atendimento psiquiátrico"
                    frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
            </div>
            </div>
        </>
    )
}