import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [notification, setNotification] = useState(null);



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/forms/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setNotification({ type: 'success', message: 'Form submitted successfully' });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setNotification({ type: 'error', message: 'Something went wrong' });
            }
        } catch (error) {
            console.error(error);
            setNotification({ type: 'error', message: 'Something went wrong' });
        }
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    return (
        <>
            <Helmet>
                <title>Contact EradiVerse - Get in Touch</title>
                <meta name="description" content="Contact EradiVerse for inquiries, project discussions, or support. We're here to help you with your digital transformation needs." />
            </Helmet>
            <main className="pt-24">
                <div className="px-40 flex flex-1 justify-center py-5 bg-[#003161]">
                    <div className="layout-content-container flex flex-col items-center max-w-[560px] flex-1">
                        <div className="flex flex-wrap justify-center gap-3 p-4 text-center">
                            <div className="flex min-w-72 flex-col gap-3">
                                <p className="text-white tracking-light text-[32px] font-bold leading-tight">Contact Us
                                </p>
                                <p className="text-white text-sm font-normal leading-normal">We're here to help. Reach out to us
                                    for any inquiries or to discuss your project needs.</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="w-full">


                            <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-white text-base font-medium leading-normal pb-2">Your Name</p>
                                    <input placeholder="Enter your name"
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg white:text-white text-black focus:outline-0 focus:ring-0 border border-[#325567] bg-[#18551] focus:border-[#325567] h-14 placeholder:text-[#92b7c9] p-[15px] text-base font-normal leading-normal"
                                        name="name" value={formData.name} onChange={handleChange} />
                                </label>
                            </div>
                            <div className="flex w-full flex-wrap items-end gap-4 px-4 py-.3">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-white text-base font-medium leading-normal pb-2">Your Email</p>
                                    <input placeholder="Enter your email"
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg dark:text-white text-black focus:outline-0 focus:ring-0 border border-[#325567] bg-[#18551] focus:border-[#325567] h-14 placeholder:text-[#92b7c9] p-[15px] text-base font-normal leading-normal"
                                        name="email" value={formData.email} onChange={handleChange} />
                                </label>
                            </div>
                            <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-white text-base font-medium leading-normal pb-2">Subject</p>
                                    <input placeholder="Enter the subject"
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg dark:text-white text-black focus:outline-0 focus:ring-0 border border-[#325567] bg-[#18551] focus:border-[#325567] h-14 placeholder:text-[#92b7c9] p-[15px] text-base font-normal leading-normal"
                                        name="subject" value={formData.subject} onChange={handleChange} />
                                </label>
                            </div>
                            <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-white text-base font-medium leading-normal pb-2">Message</p>
                                    <textarea placeholder="Enter your message"
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg dark:text-white text-black focus:outline-0 focus:ring-0 border border-[#325567] bg-[#18551] focus:border-[#325567] min-h-36 placeholder:text-[#92b7c9] p-[15px] text-base font-normal leading-normal"
                                        name="message" value={formData.message} onChange={handleChange}></textarea>
                                </label>
                            </div>
                            <div className="flex px-4 py-3 justify-center">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1193d4] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Send Message</span>
                                </button>
                            </div>
                            {notification && (
                                <div className={`p-4 mb-4 text-sm rounded-lg ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {notification.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};
export default ContactPage;