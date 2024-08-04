import { BsEnvelope, BsInstagram, BsLinkedin } from "react-icons/bs";
import logo from "./../../assets/logo-transparent.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="w-full bg-primary color-white p-10">
            <div className="grid grid-cols-5 gap-4 p-10">
                <div className="footer-column flex flex-col gap-2">
                    <a href="/" className="logo bg-white p-4 rounded-xl w-1/2">
                        <img src={logo} alt="TED Talk Tribe" />
                    </a>

                    <p className="text-lg">
                        SST - TED Talk Tribe
                    </p>
                </div>

                <div></div>
                <div></div>

                <div className="footer-column">
                    <h3 className="text-2xl font-bold uppercase">
                        Contact Us
                    </h3>

                    <div className="py-4 flex flex-col gap-2">
                        <a href="https://instagram.com/tedtalktribe" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <BsInstagram className="text-2xl" />
                            <span className="ml-2 font-semibold text-lg">
                                Instagram
                            </span>
                        </a>

                        <a href="https://www.linkedin.com/company/sst-ted-talk-tribe/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <BsLinkedin className="text-2xl" />
                            <span className="ml-2 font-semibold text-lg">
                                LinkedIn
                            </span>
                        </a>

                        <a href="mailto:tedtalktribe.club@sst.scaler.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <BsEnvelope className="text-2xl" />
                            <span className="ml-2 font-semibold text-lg">
                                E-Mail
                            </span>
                        </a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3 className="text-2xl font-bold uppercase">
                        Quick Links
                    </h3>

                    <div className="py-4 flex flex-col">
                        <Link to="/" className="text-lg">
                            Home
                        </Link>

                        <Link to="/events" className="text-lg">
                            Events
                        </Link>

                        <Link to="/discover/articles" className="text-lg">
                            Articles
                        </Link>

                        <Link to="/newsletters" className="text-lg">
                            Newsletters
                        </Link>

                        <Link to="/tribe" className="text-lg">
                            Tribe
                        </Link>

                        <Link to="/dashboard" className="text-lg">
                            Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}