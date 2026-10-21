import React, { useEffect } from "react";
import TitleComponent from "../../components/titleComponent";
import Fade from "../../components/fadeComponent";

export default function ContratacaoPalestrasForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Fade />
      <div className="fade">
        <TitleComponent title="Contratação de palestras" className="primary-blue" />
        <div className="col-12 d-flex justify-content-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdTM2qIzlb_O9rqptNiGb8ulvBald5y0aKNHXamnQN9FS0kgQ/viewform?embedded=true"
            className="iframe-custom"
            title="Formulário para contratação de palestras"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Carregando…
          </iframe>
        </div>
      </div>
    </>
  );
}
