import React from "react";
import imgMayara from "../../img/mayara-img.webp"
import imgLilian from "../../img/lilian-img.webp"

export default function About() {
    return (
        <>
            <div className="container-md py-3">
                <h1 className="display-1 about-heading mt-2 mb-5">
                    Sobre o projeto
                </h1>
                <div
                    className="d-flex justify-content-between flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row py-3">
                    <h2 className="fs-2 about-topic">Objetivo</h2>

                    <div className="d-md-block fs-5 w-75 about-topic-content">
                        <p className="my-3">O objetivo do projeto Ressignificar é proporcionar acesso a atendimentos psicológicos de
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
                    className="d-flex justify-content-between flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row py-3">
                    <div>
                        <h2 className="fs-2 about-topic">Como</h2>
                        <h2 className="fs-2 about-topic">o projeto</h2>
                        <h2 className="fs-2 about-topic">iniciou?</h2>
                    </div>
                    <div className="d-md-block fs-5 w-75 about-topic-content">
                        <p className="my-3">
                            A ideia do projeto iniciou-se devido à pandemia de COVID-19. Em contexto de pandemia, houve o aumento do
                            sofrimento psíquico na população. Com a necessidade do isolamento social, os medos e incertezas trazidos por
                            este momento, a rápida disseminação do vírus e o desemprego, se fez necessário maior cuidado com a saúde
                            mental, principalmente no grupo que já vinha sendo acometido pelo sofrimento psíquico. Porém, com a
                            minimização da pandemia o projeto continua crescendo e sendo conhecido por todo Brasil.
                        </p>
                    </div>
                </div>

                <div
                    className="d-flex justify-content-between flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row py-3">
                    <div>
                        <h2 className="fs-2 about-topic">Como</h2>
                        <h2 className="fs-2 about-topic">funciona?</h2>
                    </div>

                    <div className="d-md-block fs-5 w-75 about-topic-content">
                        <p className="my-3">O projeto inicialmente se dará por meio do preenchimento de um formulário, que será
                            disponibilizado nas redes sociais do projeto estando disponível para que o público possa preenchê-lo, nele
                            conterão dados de identificação, escolaridade, condições socioeconômica e valor disponível por sessão. Após o
                            preenchimento do formulário, um profissional do projeto entrará em contato no prazo de 72hrs.
                        </p>
                        <p className="my-3">O processo terapêutico a princípio será uma sessão semanal de 50min (1x na semana). A duração do
                            tratamento
                            psicoterápico varia consideravelmente dependendo da pessoa e da natureza das questões a serem trabalhadas. De
                            qualquer forma, saiba que, em hipótese alguma, você será instado a continuar no processo caso decida que é
                            hora de sair, ou caso eu perceba que não há mais benefícios a serem colhidos.
                        </p>
                        <p className="my-3">
                            Contamos com vários psicólogos, oferecemos atendimento online em todo Brasil e atendimento presencial em Campo
                            Mourão, Maringá e Terra Boa.
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="d-flex justify-content-between flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row my-5 mx-auto col-sm-12 col-md-11 col-lg-11 col-xl-10 col-xxl-8">
                <div className="py-4 px-3 d-flex flex-column col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-4 about-card">
                    <img className="rounded-circle align-self-center mb-3" width="189px" src={imgMayara} />
                    <p>Mayara de Sousa dos S. Machado CRP 08/28214</p>
                    <p>Idealizadora e coordenadora</p>
                    <p>Formada em psicologia desde 2018, atuando na clinica desde então. Fundou o Projeto Ressignificar por acreditar
                        no valor e na importância da psicologia.</p>
                </div>

                <div
                    className="py-4 px-3 my-5 my-sm-0 my-md-0 my-lg-0 my-xl-0 my-xxl-0 d-flex flex-column col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-4 about-card rounded-0">
                    <img className="rounded-circle align-self-center mb-3" width="189px" src={imgLilian} />
                    <p>Lilian de Carvalho Mailkut CRP 08/28674</p>
                    <p>Idealizadora e coordenadora</p>
                    <p>Formada em psicologia desde 2018, atuando na clinica desde então. Fundou o Projeto Ressignificar com o intuito
                        de levar a psicologia para todos, independente das condições socioeconômicas.</p>
                </div>

            </div>
        </>
    );
}