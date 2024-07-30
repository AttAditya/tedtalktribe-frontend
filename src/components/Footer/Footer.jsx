import { BsEnvelope, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import logo from "./../../assets/logo-transparent.png";
import "./Footer.css";

export function Footer() {
    return (
        <footer className="w-full bg-primary color-white p-10">
            <div className="grid grid-cols-5 gap-4 p-10">
                <div className="footer-column flex flex-col gap-2">
                    <a href="/" className="logo bg-white p-4 rounded-xl w-1/2">
                        <img src={logo} alt="The World Times" />
                    </a>

                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                        <div className="cclicense w-1/2">
                            <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" className="border-2 border-black rounded-lg" />
                        </div>
                    </a>
                    
                    <span>
                        <em><a href="/">theworldtimes.in</a> &copy; 2023</em>
                    </span>

                    <span>
                        All Rights Reserved, licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" className="italic whitespace-nowrap">CC 4.0 License</a>
                    </span>
                </div>

                <div></div>
                <div></div>

                <div className="footer-column">
                    <h3 className="text-2xl font-bold uppercase">
                        Contact Us
                    </h3>

                    <div className="py-4 flex flex-col gap-2">
                        <a href="https://www.instagram.com/theworldtimes.in/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <BsInstagram className="text-2xl" />
                            <span className="ml-2 font-semibold text-lg">
                                Instagram
                            </span>
                        </a>

                        <a href="https://twitter.com/worldtimes_in" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <BsTwitterX className="text-2xl" />
                            <span className="ml-2 font-semibold text-lg">
                                Twitter
                            </span>
                        </a>

                        <a href="https://www.facebook.com/people/The-World-Times/100093097914112/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <BsFacebook className="text-2xl" />
                            <span className="ml-2 font-semibold text-lg">
                                Facebook
                            </span>
                        </a>

                        <a href="mailto:info@theworldtimes.in" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <BsEnvelope className="text-2xl" />
                            <span className="ml-2 font-semibold text-lg">
                                E-Mail
                            </span>
                        </a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3 className="text-2xl font-bold uppercase">
                        Other Pages
                    </h3>

                    <div className="py-4 flex flex-col">
                        <a href="https://staff.theworldtimes.in/" className="text-lg">
                            Staff Page
                        </a>

                        <a href="/careers" className="text-lg">
                            Careers Page
                        </a>

                        <a href="/policy/ads" className="text-lg">
                            Advertise with us
                        </a>

                        <a href="/policy" className="text-lg">
                            TAC &amp; Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}