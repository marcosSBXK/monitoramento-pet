import React from 'react';
import 'assets/css/styles.css';

import ImgPetCondominio from 'assets/img/Espaço-Pet-no-condomínio.jpg'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { FiFile } from 'react-icons/fi'
import { BiBookContent, BiServer, BiEnvelope } from 'react-icons/bi'

function NavBar() {
    return (
        <>
            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src={ImgPetCondominio} alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">BichanoVet</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="/main" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="/main" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="/main" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="/main" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="/main" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav className="nav-menu">
                        <ul>
                            <li className="active"><a href="#hero"><AiOutlineHome /><span>Início</span></a></li>
                            <li><a href="#about"><BsPeople /><span>Sobre</span></a></li>
                            <li><a href="#resume"><FiFile /><span>Resumo</span></a></li>
                            <li><a href="#portfolio"><BiBookContent />Área do Cliente</a></li>
                            <li><a href="#services"><BiServer />Serviços</a></li>
                            <li><a href="#contact"><BiEnvelope />Contato</a></li>
                        </ul>
                    </nav>
                    <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
                </div>
            </header>
        </>
    );
}

export default NavBar;
