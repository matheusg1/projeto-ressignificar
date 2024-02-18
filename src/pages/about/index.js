import React from "react";
import imgMayara from "../../img/mayara-img.webp"
import imgLilian from "../../img/lilian-img.webp"
import Fade from "../../components/fadeComponent";
import TitleComponent from '../../components/titleComponent';
import CardIdealizadora from "../../components/cardIdealizadoraComponent";

export default function About() {
    return (
        <>
            {/* <HelmetComponent title="Sobre nós" /> */}
            <Fade />
            <div className="fade">
                <TitleComponent title="Sobre nós" />
                <div className="container-fluid pb-3 col-12 col-lg-10">
                    <div
                        className="d-flex justify-content-between flex-column flex-sm-row pt-3 pb-1 px-3 glass">
                        <h3 className="fs-2 fw-bold about-topic pe-5 me-5 w-25">Objetivo</h3>
                        <div className="d-md-block fs-5 my-3 my-sm-0 w-100 about-topic-content">
                            <p className="">O objetivo do Projeto Ressignificar é proporcionar acesso a atendimentos psicológicos de
                                acordo com as
                                condições socioeconômicas de cada paciente. Assim sendo, o projeto vem com o intuito de facilitar o acesso à
                                atendimentos psicológicos, tornando possível a oportunidade de cuidar da saúde mental.
                            </p>
                            <p className="my-3">Com a dificuldade encontrada pela população em processo de vulnerabilidade social por fatores
                                socioeconômicos
                                de encontrar atendimento psicológico na rede pública, o projeto vem com o intuito de salientar a importância
                                do acompanhamento de um profissional de saúde mental, possibilitando que o púbico alvo seja alcançado,
                                melhorando assim a qualidade de vida dessas pessoas.
                            </p>
                        </div>
                    </div>
                    <div
                        className="d-flex justify-content-between flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row my-4 p-3 glass">
                        <div className="w-25 pe-5 me-5">
                            <h3 className="fs-2 fw-bold about-topic">Como</h3>
                            <h3 className="fs-2 fw-bold about-topic text-nowrap">o projeto</h3>
                            <h3 className="fs-2 fw-bold about-topic">iniciou?</h3>
                        </div>
                        <div className="d-md-block fs-5 my-3 my-sm-0 my-md-0 my-lg-0 my-xl-0 my-xxl-0 w-100 about-topic-content">
                            <p className="">
                                A ideia do projeto iniciou-se devido à pandemia de COVID-19. Em contexto de pandemia, houve o aumento do
                                sofrimento psíquico na população. Com a necessidade do isolamento social, os medos e incertezas trazidos por
                                este momento, a rápida disseminação do vírus e o desemprego, se fez necessário maior cuidado com a saúde
                                mental, principalmente no grupo que já vinha sendo acometido pelo sofrimento psíquico. Porém, com a
                                minimização da pandemia o projeto continua crescendo e sendo conhecido por todo Brasil.
                            </p>
                        </div>
                    </div>

                    <div
                        className="d-flex justify-content-between flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row my-4 p-3 glass">
                        <div className="w-25 pe-5 me-5">
                            <h3 className="fs-2 fw-bold about-topic">Como</h3>
                            <h3 className="fs-2 fw-bold about-topic">funciona?</h3>
                        </div>

                        <div className="d-md-block fs-5 my-3 my-sm-0 my-md-0 my-lg-0 my-xl-0 my-xxl-0 w-100 about-topic-content">
                            <p className="">O projeto inicialmente se dará por meio do preenchimento de um formulário, que será
                                disponibilizado nas redes sociais do projeto estando disponível para que o público possa preenchê-lo, nele
                                conterão dados de identificação, escolaridade, condições socioeconômica e valor disponível por sessão. Após o
                                preenchimento do formulário, um profissional do projeto entrará em contato no prazo de 72hrs.
                            </p>
                            <p className="my-3">O processo terapêutico a princípio será uma sessão semanal de 50min (1x na semana). A duração do
                                tratamento
                                psicoterápico varia consideravelmente dependendo da pessoa e da natureza das questões a serem trabalhadas. De
                                qualquer forma, saiba que, em hipótese alguma, você será instado a continuar no processo caso decida que é
                                hora de sair, ou caso perceba que não há mais benefícios a serem colhidos.
                            </p>
                            <p className="my-3">
                                Contamos com vários psicólogos, oferecemos atendimento online em todo Brasil e presencial em Campo
                                Mourão, Maringá, Terra Boa, Mamborê, Londrina, Barbosa Ferraz e Corumbataí.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="container-fluid d-flex justify-content-evenly flex-column flex-sm-column align-items-sm-center align-items-md-stretch flex-md-row mx-auto col-sm-12 col-md-11 col-lg-11 col-xl-10 col-xxl-8">

                    <CardIdealizadora img={imgMayara}
                        nome="Mayara de Sousa dos S. Machado"
                        crp="CRP 08/28214"
                        titulo="Idealizadora e coordenadora"
                        descricao="Formada em psicologia desde 2018, atuando na clínica desde então. Fundou o Projeto Ressignificar por acreditar no valor e na importância da psicologia." />

                    <div className="mt-5 mt-sm-5 mt-md-0"></div>

                    <CardIdealizadora
                        img={imgLilian}
                        nome="Lilian de Carvalho Mailkut"
                        crp="CRP 08/28674"
                        titulo="Idealizadora e coordenadora"
                        descricao="Formada em psicologia desde 2018, atuando na clínica desde então. Fundou o Projeto Ressignificar com o intuito de levar a psicologia para todos, independente das condições socioeconômicas."
                    />
                </div>
            </div>
        </>
    );
}