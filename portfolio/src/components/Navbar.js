import { useState } from 'react';
import resume from '../assets/documents/Resume.pdf';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar navbar-dark bg-dark py-4 sticky-top">
            <div className="container-fluid">
                <div className='mx-auto'>
                    <a className="navbar-brand">
                        Dylan Ledermann's Portfolio
                    </a>
                </div>
                <div className="dropdown" >
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='d-none d-xl-block'>
                        <ul className={`dropdown-menu dropdown-menu-right ${dropdownOpen ? 'show' : ''} bg-dark border-0`} style={{ position: 'absolute', top: '110%', right: -15 }} aria-labelledby="menuDropdown">
                            <li>
                                <a className="nav-item w-100 btn btn-dark" href='../Maze'>
                                    Maze
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="nav-item w-100 btn btn-dark" href={resume}>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`d-xl-none collapse navbar-collapse ${dropdownOpen ? 'show' : ''} pt-4`} id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                            <li>
                                <a className="nav-item w-100 btn btn-dark rounded-pill border-light" href='../Maze'>
                                    Maze
                                </a>
                            </li>
                            <li className='py-1'>
                                <a className="nav-item w-100 btn btn-dark rounded-pill border-light" href={resume}>
                                    Resume
                                </a>
                            </li>
                        </ul>
                        </div>
            </div>
        </nav>
    );
};

export default Navbar;
