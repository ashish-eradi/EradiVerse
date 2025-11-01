import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About EradiVerse - Digital Solutions & Consulting</title>
                <meta name="description" content="Learn about EradiVerse, a full-spectrum digital solutions company offering technology services, business consulting, and creative solutions. We transform visions into digital reality." />
            </Helmet>
            <section className="py-20 bg-white dark:bg-gray-800 pt-32 bg-[#FFE6D4]" id="about">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <img alt="About Eradiverse"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                                src="/assets/abt2.png" />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About <span
                                className="text-primary">Eradiverse</span></h2>
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
        </>
    );
};

export default AboutPage;