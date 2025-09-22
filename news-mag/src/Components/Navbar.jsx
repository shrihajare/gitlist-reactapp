const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:5173/#"><span className="badge bg-light text-dark fs-4">NewsUS&Ind</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:5173/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.abplive.com/">ABP NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.tv9marathi.com/live-tv">TV9 Marathi News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
