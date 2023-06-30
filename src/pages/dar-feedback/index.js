import React from "react";
import HelmetComponent from "../../components/helmetComponent";

export default function Feedback() {
    return (
        <>
        <HelmetComponent title="Feedback" />
            <div className="col-12 d-flex justify-content-center mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5 mt-xxl-5">
                <iframe
                    src="https://docs.google.com/forms/d/13RXKo-IWKmwJW_TpcBDb0jJXo3XG2kuxCNF00uwVkzA/viewform?embedded=true"
                    className="iframe-custom" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
            </div>
        </>
    )
}