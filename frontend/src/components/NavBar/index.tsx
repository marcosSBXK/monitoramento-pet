import ImgVet from 'assets/img/imgvet.png';

function NavBar() {
    return (
        <header className="bg-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                    <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0">
                        <img src={ImgVet} alt="BichanosVet" width="200" />
                    </div>

                    <ul className="nav justify-content-center mb-md-0 text-dark">
                        <li><a href="/" className="isDisabled nav-link px-2">Home</a></li>
                        <li><a href="/" className="isDisabled nav-link px-2">Features</a></li>
                        <li><a href="/" className="isDisabled nav-link px-2">Pricing</a></li>
                        <li><a href="/" className="isDisabled nav-link px-2">FAQs</a></li>
                        <li><a href="/" className="isDisabled nav-link px-2">About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-dark me-2">Fazer Login</button>
                        <button type="button" className="btn btn-primary">Cadastre-se</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
