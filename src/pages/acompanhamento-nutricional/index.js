import React, { useEffect } from "react";
import TitleComponent from "../../components/titleComponent";
import Fade from "../../components/fadeComponent";

export default function AcompanhamentoNutricionalForm() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
        <>
            {/* <HelmetComponent title="Acompanhamento nutricional" /> */}
            <Fade />
            <div className="fade">
                <TitleComponent title="Assistência nutricional" className="primary-blue"/>
                <div className="col-12 d-flex justify-content-center">
                    <iframe
                        src="https://docs.google.com/forms/d/11gyroLHZUaHRjB7C0Wbqy8I6aE3mzg9wGw8hAcTRwJg/viewform?embedded=true"
                        className="iframe-custom"
                        title = "Formulário para atendimento nutricional"
                        frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
                </div>
            </div>
        </>
    )
}