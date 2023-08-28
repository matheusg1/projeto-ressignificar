import React from "react";
import HelmetComponent from "../../components/helmetComponent";
import TitleComponent from "../../components/titleComponent";
import Fade from "../../components/fadeComponent"

export default function Feedback() {
    return (
        <>
            <HelmetComponent title="Dar feedback" />
            <Fade />
            <div className="fade">
                <TitleComponent title="Dar feedback" />
                <div className="col-12 d-flex justify-content-center">
                    <iframe
                        src="https://docs.google.com/forms/d/13RXKo-IWKmwJW_TpcBDb0jJXo3XG2kuxCNF00uwVkzA/viewform?embedded=true"
                        className="iframe-custom"
                        title = "Formulário para dar um feedback do projeto"
                        frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
                </div>
            </div>
        </>

    )
}