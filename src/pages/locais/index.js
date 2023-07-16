import Fade from '../../components/fadeComponent';
import TitleComponent from '../../components/titleComponent';
import HelmetComponent from '../../components/helmetComponent';
import ItemLocalAtendimento from '../../components/itemLocalAtendimentoPresencial';

export default function AtendimentoPresencial() {
    return (
        <>
            <HelmetComponent title="Locais" />
            <Fade />
            <div className="fade animate d-flex flex-column flex-fill">
                <TitleComponent title="Locais com atendimento presencial" />
                <div className="container-md pb-3 my-auto">
                    <div className="display-6">
                        <ItemLocalAtendimento local="Campo Mourão" idadeMinima="acima de 06 anos" />
                        <ItemLocalAtendimento local="Terra Boa" idadeMinima="acima de 06 anos" />
                        <ItemLocalAtendimento local="Maringá" idadeMinima="acima de 12 anos" />
                        <ItemLocalAtendimento local="Mamborê" idadeMinima="acima de 06 anos" />
                        <ItemLocalAtendimento local="Londrina" idadeMinima="acima de 06 anos" />
                        <ItemLocalAtendimento local="Barbosa Ferraz" idadeMinima="acima de 06 anos" />
                        <ItemLocalAtendimento local="Corumbataí" idadeMinima="acima de 12 anos" />
                    </div>
                </div>            
            </div>
        </>
    )
}