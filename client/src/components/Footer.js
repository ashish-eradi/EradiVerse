
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-black text-white" id="contact">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link className="flex items-center space-x-2 mb-4" to="/">
                            <img alt="Eradiverse Logo" className="h-8 w-auto" src="/assets/EradiVerse logo.png?v=2" />
                            <span className="text-xl font-bold">EradiVerse</span>
                        </Link>
                        <p className="text-gray-400">Building business growth through digital innovation.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul>
                            <li className="mb-2"><Link className="text-gray-400 hover:text-white" to="/about">About Us</Link></li>
                            <li className="mb-2"><Link className="text-gray-400 hover:text-white" to="/services">Services</Link>
                            </li>
                            <li className="mb-2"><Link className="text-gray-400 hover:text-white"
                                to="/our-capabilities">Our Capabilities</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <p className="text-gray-400 mb-2">contact@eradiverse.com</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <button className="text-gray-400 hover:text-white focus:outline-none" aria-label="Facebook"><svg aria-hidden="true" className="w-6 h-6"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M13.6 3.1C12.7 3 11.8 3 10.9 3 7.6 3 4.8 5.7 4.8 9c0 1.8.8 3.5 2 4.7V17c0 .6.4 1 1 1h2.2c.6 0 1-.4 1-1v-2.8c1.2-.8 2-2.2 2-3.7 0-3.3-2.7-6-6-6zM12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.347V12h2.347V9.35c0-2.328 1.423-3.597 3.57-3.597.69 0 1.383.123 2.048.275v2.138h-1.21c-1.148 0-1.373.543-1.373 1.343V12h2.564l-.426 2.756h-2.138v6.987C20.343 21.128 24 16.991 24 12 24 6.477 19.523 2 12 2z"></path>
                            </svg></button>
                            <a //this is for the linkdin here we replaced button with achor tag hyper link 
                            
                                href="https://www.linkedin.com/company/eradiverse/"
                                target="_blank"
                                rel="noopener noreferrer"       
                                className="text-gray-400 hover:text-white focus:outline-none"
                                aria-label="LinkedIn Profile"   
                            >
                            <svg aria-hidden="true" className="w-6 h-6"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.366-4-3.53-4 0v5.604h-3v-11h3v1.765c1.395-2.529 7-2.73 7 2.408v6.827z"></path>                            </svg> </a>
                        <button className="text-gray-400 hover:text-white focus:outline-none" aria-label="GitHub"><svg aria-hidden="true" className="w-6 h-6"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path clip-rule="evenodd"
                                d="M12 2C6.477 2 2 6.477 2 12.013c0 4.418 2.865 8.169 6.839 9.492.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.013C22 6.477 17.523 2 12 2z"
                                fill-rule="evenodd"></path>
                        </svg></button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>© 2025 Eradiverse. All rights reserved.</p>
            </div>
        </div>
        </footer >
    );
};

export default Footer;
