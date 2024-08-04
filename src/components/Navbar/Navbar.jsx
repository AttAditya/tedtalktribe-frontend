import "./Navbar.css";

import { useRef } from "react";
import logo from "../../assets/logo-transparent.png";
import { BsInstagram, BsLinkedin, BsMailbox } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
    let navbarMenu = useRef(null);
    let navbarBurger = useRef(null);

    let navCategories = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Events",
            url: "/events"
        },
        {
            name: "Articles",
            url: "/discover/articles"
        },
        {
            name: "Newsletters",
            url: "/newsletters"
        },
        {
            name: "Tribe",
            url: "/tribe"
        }
    ]

    let socials = [
        {
            tooltip: "Instagram",
            content: (<BsInstagram />),
            url: "https://instagram.com/tedtalktribe"
        },
        {
            tooltip: "LinkedIn",
            content: (<BsLinkedin />),
            url: "https://www.linkedin.com/company/sst-ted-talk-tribe/"
        },
        {
            tooltip: "Mail",
            content: (<BsMailbox />),
            url: "mailto:tedtalktribe.club@sst.scaler.com"
        }
    ]

    function expandNavbar() {
        navbarMenu.current.classList.toggle("is-active");
        navbarBurger.current.classList.toggle("is-active");
    }

    return (
        <nav className="navbar bg-primary h-20 p-4 px-6 flex justify-between align-middle fixed w-full top-0 gap-5" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="/" className="navbar-item min-w-32 flex align-middle justify-center bg-white p-2 px-4 rounded-xl">
                    <img src={logo} alt="Logo" height="100%" className="min-w-fit" />
                </a>

                <span ref={navbarBurger} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={expandNavbar}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </span>
            </div>

            <div ref={navbarMenu} className="navbar-menu w-full flex justify-between align-middle">
                <div className="navbar-start text-xl flex align-middle justify-center color-white font-semibold gap-5">
                    {
                        navCategories.map((category, index) => (
                            <Link key={category.name} className="navbar-item flex justify-center items-center" to={category.url}>
                                {category.name}
                            </Link>
                        ))
                    }
                </div>

                <div className="navbar-end text-3xl flex align-middle justify-center color-white font-semibold gap-5">
                    {
                        socials.map((social, index) => (
                            <a key={social.tooltip} className="navbar-item flex justify-center items-center" href={social.url} target="_blank" rel="noreferrer">
                                {social.content}
                            </a>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;