import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Nav.css"
function Nav() {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    const navigate = useNavigate();
    const handleAboutClick = () => {
        navigate('/About');
    };
    const handleSpinClick = () => {
        navigate('/SpinGame');
    };
    const handleHomeClick = () => {
        navigate('/');
    };
    const handleBlogsClick = () => {
        navigate('/AllBlogs');
    };
    const handleContactClick = () => {
        // navigate('/Contact');
    };
    const handleLoginClick = () => {
        navigate('/Login');
    };
    const handleEcommerceClick = () => {
        navigate('/Ecommerce');
    };
    const [open, setOpen] = useState(true);
    useEffect(() => {
        if (!open) {
            document.getElementById("close-btn").click()
        }
    }, [open])
    return (
        <div className="app">
            <div className="header-nav">
                <div id="logo1">
                    <a href="#top">
                        <img src="canyfixlogo.png" alt="Logo" />
                    </a>

                </div>


                <nav ref={navRef}>

                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleEcommerceClick();
                        setOpen(false);
                    }}>Ecommerce</a>

                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleHomeClick();
                        setOpen(false);
                    }}>Home</a>

                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleAboutClick();
                        setOpen(false);
                    }}>About</a>


                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleSpinClick();
                        setOpen(false);
                    }}>SpinGame</a>

                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleBlogsClick();
                        setOpen(false);
                    }}>Blogs</a>

                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleContactClick();
                        setOpen(false);
                    }}>Contact</a>
                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleLoginClick();
                        setOpen(false);
                    }}>Login</a>
                    <a
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>

                        <img style={{ display: "none" }} src="cross.png" id="close-btn" onClick={() => setOpen(true)} className="hamberimg" />
                    </a>
                </nav>
                <a className="nav-btn" onClick={showNavbar}>
                    <img src="menu.png" className="hamberimg" />
                </a>

            </div>
        </div>

    );
}

export default Nav;