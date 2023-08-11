import React from 'react';

function Home() {
    return (
        <div className='dark:!bg-gray-900 text-gray-600 dark:text-gray-400 '>
            <div id="carouselExampleAutoplaying"
                className="xl:h-[42rem] relative w-full carousel carousel-dark slide"
                data-bs-ride="carousel">
                <div className='h-full w-full absolute z-1'>
                    <span className='w-1/3 absolute left-0 h-full  bg-gradient-to-r from-white to-white/90 dark:from-gray-900 dark:to-gray-900/70'></span>
                    <span className='w-1/2 absolute left-1/3 h-full bg-gradient-to-r from-white/90 dark:from-gray-900/70'></span>
                </div>
                <div className="carousel-indicators">
                    <button type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="0"
                        className="mx-2 active !h-2 !w-2 rounded-[50%]"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="1"
                        className='mx-2 !h-2 !w-2 rounded-[50%]'
                        aria-label="Slide 2"></button>
                    <button type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="2"
                        className='mx-2 !h-2 !w-2 rounded-[50%]'
                        aria-label="Slide 3"></button>
                    <button type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="3"
                        className='mx-2 !h-2 !w-2 rounded-[50%]'
                        aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner h-full text-gray-900 dark:text-gray-200">
                    <div className="carousel-item active h-full">
                        <div className='h-full w-full absolute flex z-1'>
                            <p className='h1 w-2/3 lg:w-1/3 text-left my-auto ml-[13%] '>
                                Hi There,<br /> Welcome to my Website!!<br /> Well it is in progress...😅
                            </p>
                        </div>
                        <img src={require("../Photos/2pexels-andrea-piacquadio-845434.jpg")}
                            className="d-block object-cover "
                            alt="..." />
                    </div>
                    <div className="carousel-item h-full">
                        <div className='h-full w-full absolute flex z-1'>
                            <p className='h1 w-2/3 lg:w-1/3 text-left my-auto ml-[13%] '>
                                Hi There,<br /> Welcome to my Website!!<br /> Well it is in progress...😅
                            </p>
                        </div>
                        <img src={require("../Photos/2pexels-dids-1424537.jpg")}
                            className="d-block object-cover" alt="..." />
                    </div>
                    <div className="carousel-item h-full">
                        <div className='h-full w-full absolute flex z-1'>
                            <p className='h1 w-2/3 lg:w-1/3 text-left my-auto ml-[13%] '>
                                Hi There,<br /> Welcome to my Website!!<br /> Well it is in progress...😅
                            </p>
                        </div>
                        <img src={require("../Photos/2pexels-trinity-kubassek-445109.jpg")}

                            className="d-block object-cover"
                            alt="..." />
                    </div>
                    <div className="carousel-item h-full">
                        <div className='h-full w-full absolute flex z-1'>
                            <p className='h1 w-2/3 lg:w-1/3 text-left my-auto ml-[13%] '>
                                Hi There,<br /> Welcome to my Website!!<br /> Well it is in progress...😅
                            </p>
                        </div>
                        <img src={require("../Photos/2pexels-kai-pilger-996329.jpg")}
                            className="d-block object-cover"
                            alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="dark:filter-none carousel-control-prev-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="filter-none carousel-control-next-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <section className=" body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">

                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2 inline-flex flex-col justify-between ">
                                <img alt="gallery"
                                    className="w-[500px] object-cover object-center block"
                                    src={require("../Photos/zara.png")} />
                                <img alt="gallery"
                                    className="w-[500px] object-cover object-center block"
                                    src={require("../Photos/zara.png")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery"
                                    className="w-80  object-cover object-center block"
                                    src={require("../Photos/arrow.png")} />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src={require("../Photos/calvin_klein.png")} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src={require("../Photos/chanel.png")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src={require("../Photos/ray.ban.jpg")} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src={require("../Photos/h&m.png")} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200">
                            Master Cleanse Reliac Heirloom
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center justify-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 dark:border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9"
                                        cy="7"
                                        r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-gray-200">2.7K</h2>
                                <p className="leading-relaxed">Customers</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 dark:border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24">
                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-gray-200">1.3K</h2>
                                <p className="leading-relaxed">Brands</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 dark:border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-gray-200">46</h2>
                                <p className="leading-relaxed">Available Country</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 dark:text-gray-200 mb-12 text-center">Founder's words</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 dark:border-gray-800 bg-gray-100"
                                    src="https://dummyimage.com/302x302" />
                                <p className="leading-relaxed">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 dark:text-gray-200 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 dark:border-gray-800 bg-gray-100"
                                    src="https://dummyimage.com/305x305" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 dark:text-gray-200 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                <p className="text-gray-500">CEO</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 dark:border-gray-800 bg-gray-100"
                                    src="https://dummyimage.com/300x300" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 dark:text-gray-200 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                                <p className="text-gray-500">Senior Develeoper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Home