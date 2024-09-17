import React, { useEffect } from "react";
import TitleComponent from "../../components/titleComponent";
import Fade from "../../components/fadeComponent";

export default function PsicoterapiaCasalForm() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

    return (
        <>
            {/* <HelmetComponent title="Acompanhamento psicológico" /> */}
            <Fade />
            <div className="fade">
                <TitleComponent title="Psicoterapia de casal" className="primary-blue"/>
                <div className="col-12 d-flex justify-content-center">
                    <iframe
                        src="https://docs.google.com/forms/d/1inUfSg80QmESHBYtKXb6xHe0VdMUgB5zx6ESUq0ZCFs/viewform?embedded=true"
                        className="iframe-custom"
                        title = "Formulário para psicoterapia de casal"
                        frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
                </div>
            </div>
        </>
    )
}