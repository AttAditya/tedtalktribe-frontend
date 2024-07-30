import { BsEnvelope, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import logo from "./../../assets/logo-transparent.png";
import "./Footer.css";

export function Footer() {
    return (
    //     <footer id="footer" class="footer p-0 m-0 has-background-white-bis" style="z-index: 100;">
	// 	<div class="container is-fullhd p-4" style="z-index: 100;">
	// 		<div class="columns p-4">
	// 			<div class="column">
	// 				<div class="content">
	// 					<img src="/res/logo-transparent.png" alt="The World Times" width="128px" height="128px">
	// 					<br><br>
	// 					<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"></a>
	// 					<br>
	// 					Copyrights <a href="/">theworldtimes.in</a> (c) 2023 - All Rights Reserved, licensed under
	// 					<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
	// 						CC 4.0 License
	// 					</a>
	// 				</div>
	// 			</div>
	// 			<div class="divider is-vertical is-black"></div>
	// 			<div class="column">
	// 				<div class="content">
	// 					<h3 class="title">CONTACT US</h3>
	// 					<div class="mb-2">
	// 						<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/theworldtimes.in/">
	// 							<i class="fa-brands fa-instagram fa-xl"></i>
	// 							<span class="ml-2 has-text-weight-semibold">
	// 								Instagram
	// 							</span>
	// 						</a>
	// 					</div>
	// 					<div class="mb-2">
	// 						<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/worldtimes_in">
	// 							<i class="fa-brands fa-twitter fa-xl"></i>
	// 							<span class="ml-2 has-text-weight-semibold">
	// 								Twitter
	// 							</span>
	// 						</a>
	// 					</div>
	// 					<div class="mb-2">
	// 						<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/people/The-World-Times/100093097914112/">
	// 							<i class="fa-brands fa-facebook fa-xl"></i>
	// 							<span class="ml-2 has-text-weight-semibold">
	// 								Facebook
	// 							</span>
	// 						</a>
	// 					</div>
	// 					<div class="mb-2">
	// 						<a target="_blank" rel="noopener noreferrer" href="mailto:info@theworldtimes.in">
	// 							<i class="fa-solid fa-envelope fa-xl"></i>
	// 							<span class="ml-2 has-text-weight-semibold">
	// 								E-Mail
	// 							</span>
	// 						</a>
	// 					</div>
	// 				</div>
	// 			</div>
	// 			<div class="divider is-vertical is-black"></div>
	// 			<div class="column">
	// 				<div class="content">
	// 					<h3 class="title">QUICK LINKS</h3>
	// 					<a href="/dash">Dashboard</a><br>
	// 					<a href="/policy/ads">Advertise with us</a><br>
	// 					<a href="/policy">TAC &amp; Privacy Policy</a><br>
	// 					<!--a href="/credits">Credits</a><br-->
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </footer>
        <footer className="w-full bg-primary color-white p-10">
            <div className="container grid grid-cols-3 gap-4">
                <div className="footer-column p-4 w-1/2 flex flex-col gap-2">
                    <a href="/" className="logo bg-white p-2 rounded-xl w-1/2">
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
                        All Rights Reserved, licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" className="italic">CC 4.0 License</a>
                    </span>
                </div>

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
                        Quick Links
                    </h3>

                    <div className="py-4 flex flex-col">
                        <a href="/dash" className="text-lg">
                            Dashboard
                        </a>

                        <a href="/careers" className="text-lg">
                            Careers
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