

function NavBar() {
    return (
        <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src="assets/img/Espaço-Pet-no-condomínio.jpg" alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">BichanoVet</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                <nav className="nav-menu">
                    <ul>
                        <li className="active"><a href="index.html"><i className="bx bx-home"></i> <span>Incio</span></a></li>
                        <li><a href="#about"><i className="bx bx-user"></i> <span>Sobre</span></a></li>
                        <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resumo</span></a></li>
                        <li><a href="#portfolio"><i className="bx bx-book-content"></i> Area do Cliente</a></li>
                        <li><a href="#services"><i className="bx bx-server"></i> Serviços</a></li>
                        <li><a href="#contact"><i className="bx bx-envelope"></i> Contato</a></li>

                    </ul>
                </nav>
                <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            </div>
        </header>
    );
}

export default NavBar;
