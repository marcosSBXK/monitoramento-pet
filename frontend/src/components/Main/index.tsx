import gatinho from 'assets/img/gatinho.jpg'

function Main() {
    return (
        <><section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>BichanoVet</h1>
                <p> RESPEITAR OS ANIMAIS É UMA OBRIGAÇÃO, <span className="typed" data-typed-items="AMÁ-LOS É UM PRIVILÉGIO"></span></p>
            </div>
        </section>


            <main id="main">
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>SOBRE MONITORAMENTO PET</h2>
                            <p>O Monitoramento Pet é uma espécie de linha do tempo dos pets. O usuário que tiver esse sistema terá um histórico do seu animal de estimação, desde seu nascimento até a velhice e ajudando veterinários e pet shops a trabalhar com seu animal de estimação de forma personalizada, sabendo qual ração ou alimentação natural que o animal come, quais são as vacinas tomadas e alerta a imunizações atrasadas, históricos de doenças preexistentes ou que tenham obtido ao longo da vida.</p>

                        </div>

                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={gatinho} className="img-fluid" alt=""></img>
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Principal objetivo</h3>

                                <p>Tudo é pensado nesse aplicativo para que seu pet viva de forma saudável, tenha qualidade de vida e seus tutores, veterinários e funcionários de pet shop tenham melhor orientação com relação a esse animal de estimação.</p>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="facts" className="facts">
                    <div className="container">

                        <div className="section-title">
                            <h2>Fatores</h2>
                            <p>O BichanoVet oferece tecnologia, produtividade, resultados para o mercado veterinário. Estamos codificando um sistema para médicos veterinários e profissionais que trabalham com animais, com objetivo de agragar na saude dos pets e trazer facilidade no dia-a-dia do seu tutor.</p>
                        </div>

                        <div className="row no-gutters">

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                                <div className="count-box">
                                    <i className="icofont-simple-smile"></i>
                                    <span data-toggle="counter-up">232</span>
                                    <p><strong>Cliente satisfeitos</strong> com a excelencia no atendimento</p>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="count-box">
                                    <i className="icofont-document-folder"></i>
                                    <span data-toggle="counter-up">521</span>
                                    <p><strong>Retorno sobre os exames</strong> dos pets</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div className="count-box">
                                    <i className="icofont-live-support"></i>
                                    <span data-toggle="counter-up">1,463</span>
                                    <p><strong>Suporte</strong> realizados sobre as duvidas em manusear o sistema</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                                <div className="count-box">
                                    <i className="icofont-users-alt-5"></i>
                                    <span data-toggle="counter-up">15</span>
                                    <p><strong>Clientes</strong> que utilizam do serviço</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main></>
    );
}

export default Main;
