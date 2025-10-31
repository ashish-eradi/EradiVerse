
import React from 'react';

const ServicesPage = () => {
    return (
        <main className="pt-24">
               <section className="relative py-20 md:py-32 bg-cover bg-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/svr.png')" }}>
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            <span className="text-gray-900 text-white">Our </span>
                            <span className="gradient-text text-white">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 text-white max-w-2xl mx-auto mb-10">
                            We offer a comprehensive suite of services to power your business growth. From initial concept to
                            final execution, we are your dedicated partners in the digital world.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white dark:bg-gray-800" id="technology-services">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <span className="material-icons text-primary text-5xl mb-4">code</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Technology Services</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Our technology services form the backbone of modern digital businesses. We specialize in
                                creating robust, scalable, and secure solutions tailored to your specific needs.
                            </p>
                            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>Custom Web &amp; Mobile App
                                    Development</li>
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>AI &amp; Machine Learning
                                    Integration</li>
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>E-commerce Solutions &amp;
                                    Platforms</li>
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>Cloud Infrastructure &amp;
                                    DevOps</li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2">
                            <img alt="Technology services illustration" className="rounded-lg shadow-lg"
                                src="/assets/abt6.jpg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-background-light dark:bg-background-dark" id="business-consulting">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                        <div className="lg:w-1/2">
                            <span className="material-icons text-primary text-5xl mb-4">business_center</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Business Consulting</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Beyond technology, we provide strategic insights to help you navigate the complexities of the
                                market. Our consulting services are designed to optimize your operations and drive
                                sustainable growth.
                            </p>
                            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>Market Analysis &amp;
                                    Business Planning</li>
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>Digital Transformation
                                    Roadmaps</li>
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>HR Services &amp; Talent
                                    Acquisition</li>
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>Agile &amp; Project
                                    Management</li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2">
                            <img alt="Business consulting illustration" className="rounded-lg shadow-lg"
                                src="/assets/abt5.jpg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white dark:bg-gray-800" id="creative-solutions">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <span className="material-icons text-primary text-5xl mb-4">palette</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Creative Solutions</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Great design is about creating memorable experiences. Our creative team combines artistry
                                with user-centric design to build brands that resonate with audiences and inspire action.
                            </p>
                            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>Branding &amp; Identity
                                    Design</li>
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>UI/UX Design for Web and
                                    Mobile</li>
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>Digital Marketing &amp; SEO
                                    Strategy</li>
                                <li className="flex items-start"><span
                                    className="material-icons text-primary mr-3">check_circle</span>Content Creation &amp;
                                    Copywriting</li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2">
                            <img alt="Creative solutions illustration" className="rounded-lg shadow-lg"
                                src="/assets/abt7.jpg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-primary/5 dark:bg-primary/10" id="cta">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to build your growth?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        Let's discuss how our diverse expertise can transform your vision into reality.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default ServicesPage;
