function Footer() {
    return (
        <footer className="footer mt-auto bg-light">
            <div className="container">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="isDisabled nav-link px-2 text-dark">Home</a></li>
                    <li className="nav-item"><a href="/" className="isDisabled nav-link px-2 text-dark">Features</a></li>
                    <li className="nav-item"><a href="/" className="isDisabled nav-link px-2 text-dark">Pricing</a></li>
                    <li className="nav-item"><a href="/" className="isDisabled nav-link px-2 text-dark">FAQs</a></li>
                    <li className="nav-item"><a href="/" className="isDisabled nav-link px-2 text-dark">About</a></li>
                </ul>
                <p className="text-center text-dark">&copy; 2021 Company, Inc</p>
            </div>
        </footer>
    );
}

export default Footer;
