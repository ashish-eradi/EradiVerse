
import React from 'react';

const OurCapabilitiesPage = () => {
    return (
        <main className="pt-24">
            <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex min-w-72 flex-col gap-3">
                            <p className="dark:text-white text-black tracking-light text-[32px] font-bold leading-tight">Our
                                Capabilities</p>
                            <p className="text-grey text-sm font-normal leading-normal">
                                At Eradiverse, we offer a comprehensive suite of digital and business solutions tailored to
                                meet the unique needs of each client. Our capabilities span across
                                various domains, ensuring we can deliver innovative and effective solutions.
                            </p>
                        </div>
                    </div>
                    <h2 className="dark:text-white text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                        Services</h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="Code" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Custom Software Development</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    We build bespoke software solutions that align perfectly with your business goals,
                                    ensuring efficiency and scalability.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="DeviceMobile" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Mobile App Development</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    Our mobile app development team creates engaging and user-friendly applications for both
                                    iOS and Android platforms.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="Cloud" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Cloud Solutions</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    We leverage cloud technologies to provide secure, scalable, and cost-effective solutions
                                    tailored to your business needs.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="Database" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Data Management</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    We offer comprehensive data management services, including data warehousing, analytics,
                                    and visualization, to help you make informed decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="Briefcase" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Business Consulting</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    We provide strategic consulting services to help businesses optimize their operations,
                                    improve efficiency, and achieve their strategic objectives.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="PresentationChart" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Brand Strategy</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    Our brand strategy services help businesses define and strengthen their brand identity,
                                    ensuring a consistent and compelling brand message.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="Users" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">HR Services</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    We offer HR services, including talent acquisition, employee development, and HR process
                                    optimization, to help businesses build and manage high-performing
                                    teams.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="dark:text-white text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                        Our Process</h2>
                    <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                        <div className="flex flex-col items-center gap-1 pt-3">
                            <div className="dark:text-white text-black" data-icon="MagnifyingGlass" data-size="24px"
                                data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="w-[1.5px] bg-[#325567] h-2 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col py-3">
                            <p className="dark:text-white text-black text-base font-medium leading-normal">Discovery &amp; Planning
                            </p>
                            <p className="text-[#92b7c9] text-base font-normal leading-normal">We start by understanding your
                                business objectives and challenges to create a tailored plan.</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-[1.5px] bg-[#325567] h-2"></div>
                            <div className="dark:text-white text-black" data-icon="PencilLine" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="w-[1.5px] bg-[#325567] h-2 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col py-3">
                            <p className="dark:text-white text-black text-base font-medium leading-normal">Design &amp; Prototyping
                            </p>
                            <p className="text-[#92b7c9] text-base font-normal leading-normal">
                                Our design team creates intuitive and visually appealing prototypes to ensure the solution
                                meets your expectations.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-[1.5px] bg-[#325567] h-2"></div>
                            <div className="dark:text-white text-black" data-icon="Code" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="w-[1.5px] bg-[#325567] h-2 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col py-3">
                            <p className="dark:text-white text-black text-base font-medium leading-normal">Development &amp; Testing
                            </p>
                            <p className="text-[#92b7c9] text-base font-normal leading-normal">Our development team builds and
                                rigorously tests the solution to ensure quality and reliability.</p>
                        </div>
                        <div className="flex flex-col items-center gap-1 pb-3">
                            <div className="w-[1.5px] bg-[#325567] h-2"></div>
                            <div className="dark:text-white text-black" data-icon="RocketLaunch" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.65,76.65,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col py-3">
                            <p className="dark:text-white text-black text-base font-medium leading-normal">Deployment &amp; Support
                            </p>
                            <p className="text-[#92b7c9] text-base font-normal leading-normal">
                                We deploy the solution and provide ongoing support and maintenance to ensure its continued
                                success.
                            </p>
                        </div>
                    </div>
                    <h2 className="dark:text-white text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                        Technology Stack</h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="Code" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Programming Languages</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    We utilize a variety of programming languages, including Python, Java, and JavaScript,
                                    to build robust and scalable applications.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="Database" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Databases</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    Our expertise includes working with databases such as PostgreSQL, MySQL, and MongoDB to
                                    ensure efficient data management.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="Cloud" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Cloud Platforms</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    We leverage leading cloud platforms like AWS, Azure, and GCP to provide scalable and
                                    secure cloud solutions.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#325567] bg-[#192b33] p-4 flex-col">
                            <div className="text-white" data-icon="Database" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Backend Frameworks</h2>
                                <p className="text-[#92b7c9] text-sm font-normal leading-normal">
                                    We use frameworks like Django, Spring Boot, and Node.js to build efficient and
                                    maintainable backend systems.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="dark:text-white text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                        Team Expertise</h2>
                    <p className="dark:text-white text-black text-base font-normal leading-normal pb-3 pt-1 px-4">
                        Our team comprises experienced professionals with diverse backgrounds in software development,
                        design, business consulting, and project management. We are committed
                        to delivering high-quality solutions and exceeding client expectations.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default OurCapabilitiesPage;
