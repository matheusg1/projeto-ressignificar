import React, { useEffect } from "react";
import TitleComponent from "../../components/titleComponent";
import Fade from "../../components/fadeComponent";

export default function AcompanhamentoPsicologicoForm() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

    return (
        <>
            {/* <HelmetComponent title="Acompanhamento psicológico" /> */}
            <Fade />
            <div className="fade">
                <TitleComponent title="Assistência psicológica" className="primary-blue"/>
                <div className="col-12 d-flex justify-content-center">
                    <iframe
                        src="https://docs.google.com/forms/d/1GMMb1JQ4WLaPwcT1yXiQ_-162f9sWjcOf9NeRjyiCeE/viewform?embedded=true"
                        className="iframe-custom"
                        title = "Formulário para atendimento psicológico"
                        frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
                </div>
            </div>
        </>
    )
}