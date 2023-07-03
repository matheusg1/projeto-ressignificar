import React from "react";
import HelmetComponent from "../../components/helmetComponent";
import TitleComponent from "../../components/titleComponent";
import Fade from "../../components/fadeComponent";

export default function AcompanhamentoNutricionalForm() {
    return (
        <>
            <HelmetComponent title="Acompanhamento nutricional" />
            <Fade />
            <div className="fade">
                <TitleComponent title="Assistência nutricional" />
                <div className="col-12 d-flex justify-content-center">
                    <iframe
                        src="https://docs.google.com/forms/d/11gyroLHZUaHRjB7C0Wbqy8I6aE3mzg9wGw8hAcTRwJg/viewform?embedded=true"
                        className="iframe-custom" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
                </div>
            </div>
        </>
    )
}