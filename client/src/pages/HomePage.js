
import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>EradiVerse - Home</title>
                <meta name="description" content="EradiVerse offers full-spectrum digital solutions, from web development and AI integration to brand strategy and HR services. Transform your vision into digital reality." />
            </Helmet>
            <main className="pt-24">
                <section 
                    className="relative py-20 md:py-32 bg-cover bg-center" 
                    style={{ backgroundImage: "url('/assets/herop.jpg')" }} // New background image
                >
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                                <span className="text-[#FFFCFB]">Transforming Vision </span><br></br>
                                <span className="text-[#FFFCFB]">into Digital Reality</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#FFFCFB] max-w-3xl mx-auto mb-10">
                                Full-spectrum digital solutions to navigate the digital landscape with confidence.<br></br>We don't just
                                build websites and apps—we build business growth.
                            </p>
                            <div className="flex justify-center items-center space-x-4">
                                <a className="bg-gray-200 font-semibold px-8 py-3 rounded-full hover:bg-[#7B542F] transition-all transform hover:scale-105 shadow-lg"
                                    href="#services">Our Services</a>
                                <a className="bg-gray-200 font-semibold px-8 py-3 rounded-full hover:bg-[#7B542F] transition-all transform hover:scale-105 shadow-lg"
                                    href="/our-capabilities">Our Capabilities</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-white dark:bg-gray-800" id="about">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                            <img 
                                    alt="Integrated digital solutions"
                                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                                    src="/assets/abt2.png" />
                            
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About <span
                                    className="text-primary">EradiVerse</span></h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Eradiverse is a full-spectrum digital solutions company offering technology services,
                                    business consulting, and creative solutions under one roof. From web development and AI
                                    integration to brand strategy and HR services, we help businesses navigate the digital
                                    landscape with confidence.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-8">
                                    Whether you're a startup looking to launch or an established business ready to scale, our
                                    diverse expertise transforms your vision into reality. We don't just build websites and
                                    apps—we build business growth.
                                </p>
                                <a className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105"
                                    href="/contact">Learn More</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-[#1A3D64]" id="services">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white ">Our Diverse Expertise</h2>
                            <p className="text-lg text-white mt-2">A one-stop shop for your digital needs.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div
                                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                                <div
                                    className="bg-primary/10 dark:bg-primary/20 text-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                    <span className="material-icons text-3xl">code</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Technology Services</h3>
                                <p className="text-gray-600 dark:text-gray-300">From custom web and mobile app development to AI and
                                    machine learning integration, we build robust and scalable tech solutions.</p>
                            </div>
                            <div
                                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                                <div
                                    className="bg-primary/10 dark:bg-primary/20 text-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                    <span className="material-icons text-3xl">business_center</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Business Consulting</h3>
                                <p className="text-gray-600 dark:text-gray-300">We provide strategic guidance, from market analysis
                                    and business planning to HR services and digital transformation roadmaps.</p>
                            </div>
                            <div
                                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                                <div
                                    className="bg-primary/10 dark:bg-primary/20 text-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                    <span className="material-icons text-3xl">palette</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Creative Solutions</h3>
                                <p className="text-gray-600 dark:text-gray-300">Our creative team excels in branding, UI/UX design,
                                    and digital marketing to make your brand stand out and connect with your audience.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
