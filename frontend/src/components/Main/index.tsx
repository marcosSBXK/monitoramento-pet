import React from 'react';
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import gatinho from 'assets/img/gatinho.jpg'
import NavBar from 'components/NavBar'
import dog_5 from 'assets/img/dog_5.jpg'
import dog_1 from 'assets/img/dog_1.jpg'
import dog_6 from 'assets/img/dog_6.jpg'
import portfolio_1 from 'assets/img/portfolio/portfolio-1.jpg'
import portfolio_2 from 'assets/img/portfolio/portfolio-2.jpg'
import portfolio_3 from 'assets/img/portfolio/portfolio-3.jpg'
import portfolio_4 from 'assets/img/portfolio/portfolio-4.jpg'
import portfolio_5 from 'assets/img/portfolio/portfolio-5.jpg'
import portfolio_6 from 'assets/img/portfolio/portfolio-6.jpg'
import portfolio_7 from 'assets/img/portfolio/portfolio-7.jpg'
import portfolio_8 from 'assets/img/portfolio/portfolio-8.jpg'
import portfolio_9 from 'assets/img/portfolio/portfolio-9.jpg'
import testimonials_1 from 'assets/img/testimonials/testimonials-1.jpeg'
import testimonials_2 from 'assets/img/testimonials/testimonials-2.jpeg'
import testimonials_3 from 'assets/img/testimonials/testimonials-3.jpeg'
import testimonials_4 from 'assets/img/testimonials/testimonials-4.jpeg'
import testimonials_5 from 'assets/img/testimonials/testimonials-5.jpeg'

import 'assets/css/styles.css';

import { MdOutlineComputer } from 'react-icons/md'
import { BsFillBarChartFill } from 'react-icons/bs'
import { GiEarthAmerica } from 'react-icons/gi'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from 'components/Footer'

function Main() {
    return (
        <>
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

            <NavBar />
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>BichanoVet</h1>
                    <p> RESPEITAR OS ANIMAIS ?? UMA OBRIGA????O, AM??-LOS ?? UM PRIVIL??GIO <span className="typed" data-typed-items="AM??-LOS ?? UM PRIVIL??GIO"></span></p>
                </div>
            </section>
            <main id="main">
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>SOBRE MONITORAMENTO PET</h2>
                            <p>O Monitoramento Pet ?? uma esp??cie de linha do tempo dos pets. O usu??rio que tiver esse sistema 
                            ter?? um hist??rico do seu animal de estima????o, desde seu nascimento at?? a velhice, ajudando veterin??rios 
                            e pet shops a trabalhar com seu animal de estima????o de forma personalizada, sabendo qual ra????o ou 
                            alimenta????o natural que o animal come, quais s??o as vacinas tomadas e alertar imuniza????es atrasadas, 
                            hist??ricos de doen??as preexistentes ou que tenham obtido ao longo da vida.</p>

                        </div>

                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={gatinho} className="img-fluid" alt=""></img>
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Principal objetivo</h3>
                                <p>Tudo ?? pensado nesse aplicativo para que seu pet viva de forma saud??vel, 
                                tenha qualidade de vida e seus tutores, veterin??rios e funcion??rios de pet shop tenham melhor 
                                orienta????o com rela????o a esse animal de estima????o.</p>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="facts" className="facts">
                    <div className="container">

                        <div className="section-title">
                            <h2>Fatores</h2>
                            <p>O BichanoVet oferece tecnologia, produtividade, resultados para o mercado veterin??rio. Estamos 
                            codificando um sistema para m??dicos veterin??rios e profissionais que trabalham com animais, com 
                            objetivo de agregar na sa??de dos pets e trazer facilidade no dia-a-dia do seu tutor.</p>
                        </div>

                        <div className="row no-gutters">

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                                <div className="count-box">
                                    <i className="icofont-simple-smile"></i>
                                    <span data-toggle="counter-up">232</span>
                                    <p><strong>Cliente satisfeitos</strong> com a excel??ncia no atendimento</p>
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
                                    <p><strong>Suporte</strong> realizados sobre as d??vidas em manusear o sistema</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                                <div className="count-box">
                                    <i className="icofont-users-alt-5"></i>
                                    <span data-toggle="counter-up">15</span>
                                    <p><strong>Clientes</strong> que utilizam o servi??o</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="resume" className="resume">
                    <div className="container">

                        <div className="section-title">
                            <h2>Resumo</h2>
                            <p>Concentre seu tempo no caso cl??nico e deixe o gerenciamento das informa????es por conta do BichanoVet. 
                            Cadastre tutor e seu animal, comece um atendimento, inclua resultados de exames, marque um retorno.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-up">
                                <h3 className="resume-title">Gest??o</h3>
                                <div className="resume-item pb-0">
                                    <h4>Acess??vel</h4>
                                    <p><em>"Com nosso sistema, o gerenciemento de seus clientes, dos dados e das informa????es ser?? de facil acesso e ??gil."</em></p>

                                    <img src={dog_5} className="img-fluid" alt=""></img>
                                </div>

                                <h3 className="resume-title">Estrat??gia</h3>
                                <div className="resume-item">
                                    <h4>Conquista & Confian??a</h4>

                                    <p>"O plano ?? aprimorar a gest??o dos dados e usar conte??do de qualidade para conquistar a confian??a de seus clientes."</p>
                                    <img src={dog_1} className="img-fluid" alt=""></img>
                                </div>
                                <div className="resume-item">
                                    <h4>Conte??do Relevante </h4>

                                    <p>O BichanoVet ?? um portal de conte??do para os clientes que buscam estar antenados sobre veterin??ria e profissionais da 
                                    ??rea que buscam se aprimorar. Os assuntos s??o diversos como, alimenta????o, moda entre outros.</p>
                                    <img src={dog_6} className="img-fluid" alt=""></img>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="resume-title">Principais Funcionalidades</h3>
                                <div className="resume-item">
                                    <h4>Atendimento Cl??nico</h4>

                                    <ul>
                                        <li>Cadastro completo da ficha de atendimento;</li>
                                        <li>Tratamento; </li>
                                        <li>Imuniza????es;</li>
                                        <li>Exames laboratoriais</li>
                                        <li>Atendimento de Urg??ncia. </li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Vacinas</h4>

                                    <ul>
                                        <li>Registre as imuniza????es;</li>
                                        <li>Marque retornos personalizados para cada situa????o.</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Tratamentos</h4>

                                    <ul>
                                        <li>Selecionar um medicamento no tratamento ou prescri????o para o pet.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio" className="portfolio section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>??rea do Cliente</h2>
                            <p>Aqui, o cliente cadastrado pode inserir dados pertinentes a sua mascote. Nome, idade, peso, uma foto bem 
                            caprichada dele e tamb??m pode receber atualiza????es sobre a vacina????o ou alimenta????o mais adequada a ela. S??o 
                            informa????es que far??o seu bichano ter mais qualidade de vida.</p>
                        </div>

                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">Dados Pet</li>
                                    <li data-filter=".filter-web">Novidades</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src={portfolio_1} className="img-fluid" alt=""></img>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src={portfolio_2} className="img-fluid" alt=""></img>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src={portfolio_3} className="img-fluid" alt=""></img>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src={portfolio_4} className="img-fluid" alt=""></img>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src={portfolio_5} className="img-fluid" alt=""></img>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src={portfolio_6} className="img-fluid" alt=""></img>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src={portfolio_7} className="img-fluid" alt=""></img>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src={portfolio_8} className="img-fluid" alt=""></img>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src={portfolio_9} className="img-fluid" alt=""></img>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="services">
                    <div className="container">
                        <div className="section-title">
                            <h2>Servi??os</h2>
                            <p>Prezamos muito pela qualidade de vida e sa??de do seu pet e atrav??s da linha do tempo, desde a sua ado????o ou nascimento, 
                            podemos monitorar toda a rotina facilitando a troca de todas as informa????es poss??veis em rela????o a ele, onde donos, tutores, 
                            m??dicos veterin??rios e petshops ter??o acesso.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                                <div className="icon"> <MdOutlineComputer /></div>
                                <h4 className="title"><a> LINHA DO TEMPO - CUIDADOS COM O PET</a></h4>
                                <p className="description">Prezamos muito pela qualidade de vida e sa??de do seu pet e atrav??s da linha do tempo, desde a 
                                sua ado????o ou nascimento, podemos monitorar toda a rotina facilitando a troca de todas as informa????es poss??veis em rela????o 
                                a ele, onde donos, tutores, m??dicos veterin??rios e PetShops ter??o acesso. </p>
                            </div>

                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"> <BsFillBarChartFill /></div>
                                <h4 className="title"><a>RELAT??RIO DE DADOS E CUIDADOS SEMANAIS - CONTROLE</a></h4>
                                <p className="description">Este sistema ser?? gerenciado por um pet shop e ser?? desenvolvido semanalmente, relat??rios sobre 
                                cuidados ao pet, hor??rios de passeios, alimenta????o adequada, alerta para aplica????es de vacinas, poss??veis surtos de doen??as 
                                e cuidados em geral.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><GiEarthAmerica /></div>
                                <h4 className="title"><a>MODA PET - BEM ESTAR DO BICHANO</a></h4>
                                <p className="description">O sistema tamb??m dar?? dicas sobre moda, cuidados em rela????o ao clima, se tem necessidade de 
                                utilizar roupinhas e at?? mesmo cal??ados, como meias e etc.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials" className="testimonials section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Quem Somos</h2>
                            <p>Somos um grupo de alunos fatecanos, que trabalhamos comprometidos com o aprimoramento de nossas compet??ncias, 
                            para elaborar esse sistema.</p>
                        </div>

                        <div className="container">
                            <div className="col-lg-30">
                                <OwlCarousel className='' >

                                    <div className="testimonial-item" data-aos="fade-up">
                                        <p>
                                            <i className="bxs-quote-alt-left"></i>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, 
                                            ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src={testimonials_1} className="testimonial-img" alt=""></img>
                                        <h3>Matheus Andrade Farkas</h3>
                                        <h4>Ceo &amp; Fundador </h4>
                                    </div>

                                    <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
                                        <p>
                                            <i className="bxs-quote-alt-left"></i>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum 
                                            velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i className="bxs-quote-alt-right"></i>
                                        </p>
                                        <img src={testimonials_2} className="testimonial-img" alt=""></img>
                                        <h3>Sadraque Correa Bezerra</h3>
                                        <h4>Desenvolvedor de Software & Estudante</h4>
                                    </div>

                                    <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
                                        <p>
                                            <i className="bxs-quote-alt-left"></i>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor 
                                            labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <i className="bxs-quote-alt-right"></i>
                                        </p>
                                        <img src={testimonials_3} className="testimonial-img" alt=""></img>
                                        <h3>Wilton Almeida Oliveira</h3>
                                        <h4>Ceo &amp; Fundador</h4>
                                    </div>

                                    <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
                                        <p>
                                            <i className="bxs-quote-alt-left"></i>
                                            <i>"Bichano Vet"</i> foi uma forma de ajudar tanto tutores quanto veterin??rios e donos de <i>petshops</i> 
                                            a darem qualidade de vida a todos os tipos de animais de estima????o. ?? um servi??o feito para que donos d??em 
                                            o m??ximo de informa????o aos m??dicos e donos de lojas de animais sobre a rotina de seus bichanos e, ao mesmo 
                                            tempo, quem cuida da sa??de das mascotes pode trazer informa????es adicionais que resultem em uma vida mais 
                                            saud??vel ao animalzinho.
                                            <i className="bxs-quote-alt-right"></i>
                                        </p>
                                        <img src={testimonials_4} className="testimonial-img" alt=""></img>
                                        <h3>Marcos Vin??cius da Silva</h3>
                                        <h4>Desenvolvedor de Software & Estudante</h4>
                                    </div>

                                    <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
                                        <p>
                                            <i className="bxs-quote-alt-left"></i>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa 
                                            labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                            <i className="bxs-quote-alt-right"></i>
                                        </p>
                                        <img src={testimonials_5} className="testimonial-img" alt=""></img>
                                        <h3>Karen Ellen da Silva</h3>
                                        <h4>Designer & Estudante</h4>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Contato</h2>
                            <p>Tire suas d??vidas, fa??a sugest??es, elogios, cr??ticas ao "BichanoVet". Sua participa????o ?? imprescind??vel para que 
                                possamos aprimorar o que estamos fazendo com bastante carinho e aten????o em favor dos <i>pets</i> e de seus tutores.</p>
                        </div>

                        <div className="row" data-aos="fade-in">
                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Nome: </label>
                                            <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" 
                                                data-msg="Por favor, digite ao menos 4 caracteres" />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">E-mail: </label>
                                            <input type="email" className="form-control" name="email" id="email" data-rule="email" 
                                                data-msg="Por favor, digite um email v??lido" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Assunto: </label>
                                        <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" 
                                            data-msg="Por favor, digite ao menos 8 caracteres de assunto" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Mensagem: </label>
                                        <textarea className="form-control" name="message" data-rule="required" 
                                            data-msg="Por favor, escreva algo para n??s!"></textarea>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="loading">Carregando... </div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Sua mensagem foi enviada com sucesso. Obrigado!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Enviar</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}

export default Main;
