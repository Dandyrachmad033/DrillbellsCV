"use Client";
import { useState, useEffect } from 'react';

export default function Card_portofolio() {


    return (
        <div className="flex-wrap flex justify-center">
            <div className="sm:w-full md:w-1/2 lg:w-1/3">
                <div className="m-2 bg-black border border-white" style={{ maxHeight: "700px", borderRadius: "15px" }}>
                    <div className='m-1' style={{ borderRadius: "10px", overflow: "hidden" }}>
                        <div className="carousel w-full" style={{ height: "300px" }}>
                            <div id="item1" className="carousel-item w-full">
                                <img src="/images/umkm2.png" className="w-full" />
                            </div>
                            <div id="item2" className="carousel-item w-full">
                                <img src="/images/umkm3.png" className="w-full" />
                            </div>
                            <div id="item3" className="carousel-item w-full">
                                <img src="/images/umkm1.png" className="w-full" />
                            </div>
                            <div id="item4" className="carousel-item w-full">
                                <img src="/images/umkm4.png" className="w-full" />
                            </div>
                        </div>
                        <div className="flex justify-center w-full bg-black gap-2">
                            <a href="#item1" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200">1</a>
                            <a href="#item2" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="400">2</a>
                            <a href="#item3" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="600">3</a>
                            <a href="#item4" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="800">4</a>
                        </div>

                    </div>
                    <div className='p-3 w-full'>
                        <div className="card text-neutral-content bg-orange-600" data-aos="fade-right" data-aos-duration="1000">
                            <div className="card-body items-center text-center text-black">
                                <p>is an application provided specifically for UMKM who have the opportunity to promote the products being sold and make it easier for buyers to find locations based on the seller&apos;s address accurately which is controlled by a trusted admin</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="sm:w-full md:w-1/2 lg:w-1/3">
                <div className="m-2 bg-black border  border-white" style={{ maxHeight: "1500px", borderRadius: "15px" }}>
                    <div className='m-1' style={{ borderRadius: "10px", overflow: "hidden" }}>

                        <div className="carousel w-full" style={{ height: "300px" }}>
                            <div id="item5" className="carousel-item w-full">
                                <img src="/images/nondepo1.png" className="w-full" />
                            </div>
                            <div id="item6" className="carousel-item w-full">
                                <img src="/images/nondepo3.png" className="w-full" />
                            </div>
                            <div id="item7" className="carousel-item w-full">
                                <img src="/images/nondepo2.png" className="w-full" />
                            </div>
                            <div id="item8" className="carousel-item w-full">
                                <img src="/images/nondepo4.png" className="w-full" />
                            </div>
                        </div>
                        <div className="flex justify-center w-full bg-black gap-2">
                            <a href="#item5" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200">1</a>
                            <a href="#item6" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="400">2</a>
                            <a href="#item7" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="600">3</a>
                            <a href="#item8" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="800">4</a>
                        </div>
                    </div>
                    <div className=' p-3 w-full'>
                        <div className="card  bg-yellow-500 text-black" data-aos="fade-up" data-aos-duration="1000">
                            <div className="card-body items-center text-center">

                                <p>Web-based monitoring application developed to monitor ongoing order processes and completed orders, equipped with a dashboard to see developments in real-time and makes it easier for users to use because it can be used on different devices.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="sm:w-full md:w-1/2 lg:w-1/3">
                <div className="m-2 bg-black border  border-white" style={{ maxHeight: "1500px", borderRadius: "15px" }}>
                    <div className='m-1' style={{ borderRadius: "10px", overflow: "hidden" }}>

                        <div className="carousel w-full" style={{ height: "300px" }}>
                            <div id="item9" className="carousel-item w-full">
                                <img src="/images/meditasi4.png" className="w-full" />
                            </div>
                            <div id="item10" className="carousel-item w-full">
                                <img src="/images/meditasi3.png" className="w-full" />
                            </div>
                            <div id="item11" className="carousel-item w-full">
                                <img src="/images/meditasi2.png" className="w-full" />
                            </div>
                            <div id="item12" className="carousel-item w-full">
                                <img src="/images/meditasi1.png" className="w-full" />
                            </div>
                        </div>
                        <div className="flex justify-center w-full bg-black gap-2">
                            <a href="#item9" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200">1</a>
                            <a href="#item10" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="400">2</a>
                            <a href="#item11" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="600">3</a>
                            <a href="#item12" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="800">4</a>
                        </div>
                    </div>
                    <div className=' p-3 w-full'>
                        <div className="card  bg-emerald-600" data-aos="fade-up-left" data-aos-duration="1000">
                            <div className="card-body items-center text-center text-black">
                                <p>The meditation website is an application to help in controlling the mental and psychological aspects of employees so they stay awake, there are several features including consultations, reading comics, music meditation, podcasts, and others which will also be adjusted with criticism and suggestions so that they can help improve employee performance.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="sm:w-full md:w-1/2 lg:w-1/3">
                <div className="m-2 bg-black border border-white" style={{ maxheight: "1500px", borderRadius: "15px" }}>
                    <div className='m-1' style={{ borderRadius: "10px", overflow: "hidden" }}>

                        <div className="carousel w-full" style={{ height: "300px" }}>
                            <div id="item13" className="carousel-item w-full">
                                <img src="/images/mealapp3.png" className="w-full" />
                            </div>
                            <div id="item14" className="carousel-item w-full">
                                <img src="/images/mealapp1.png" className="w-full" />
                            </div>
                            <div id="item15" className="carousel-item w-full">
                                <img src="/images/mealapp2.png" className="w-full" />
                            </div>

                        </div>
                        <div className="flex justify-center w-full gap-2 bg-black">
                            <a href="#item13" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" >1</a>
                            <a href="#item14" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="400">2</a>
                            <a href="#item15" className="btn btn-xs" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="600">3</a>

                        </div>
                    </div>
                    <div className=' p-3 w-full'>
                        <div className="card bg-neutral text-neutral-content" data-aos="fade-up-right" data-aos-duration="1000">
                            <div className="card-body items-center text-center">
                                <p>The API application used to find references or recipes for cooking various dishes, is complete with videos and instructions provided, and is responsive on all devices</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}