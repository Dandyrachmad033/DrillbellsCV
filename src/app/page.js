"use client";
import 'aos/dist/aos.css';
import AOS from 'aos';

import "./../../public/css/home.css";
import Navbar from "./component/navbar";
import Card from "./component/card";
import Card_framework from "./component/card-framework";
import React, { useRef, useEffect } from 'react';
import Card_experience from "./component/card-experience";
import Card_portofolio from "./component/card-portofolio";
import Card_education from "./component/card-education";


export default function Home() {
  const aboutRef = useRef(null);
  const framework = useRef(null);
  const experience = useRef(null);
  const portofolio = useRef(null);
  const education = useRef(null);

  useEffect(() => {
    AOS.init({
      // Opsi konfigurasi AOS di sini, jika diperlukan
    });
  }, []);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToFramework = () => {
    if (framework.current) {
      framework.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToExperience = () => {
    if (experience.current) {
      experience.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToPortofolio = () => {
    if (portofolio.current) {
      portofolio.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToEducation = () => {
    if (education.current) {
      education.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container-full">
      <Navbar scrollToabout={scrollToAbout} scrollToframework={scrollToFramework} scrollToExperience={scrollToExperience} scrollToPortofolio={scrollToPortofolio} scrollToEducation={scrollToEducation} />

      <div id="About" ref={aboutRef} className="p-5 bg-black" style={{ paddingTop: "100px" }}>
        <Card />
      </div>


      <div className="p-10" ref={framework}>

      </div>
      <div className="justify-center flex bg-black text-white font-mono text-2xl">Skills Framework</div>
      <div className="flex flex-wrap ">
        <div className="p-5 sm:w-full md:w-1/2 lg:w-1/4 bg-black">
          <div className="p-2 bg-black radius-card border border-white" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <Card_framework imageSrc="/images/laravel-images.png" Title="Laravel" badges='bg-red-500' toogle='hover:bg-red-600' link='https://laravel.com/' />
          </div>
        </div>
        <div className="p-5 sm:w-full md:w-1/2 lg:w-1/4 bg-black">
          <div className="p-2 bg-black radius-card border border-white" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <Card_framework imageSrc="/images/codeigniter-images.png" Title="Codeigniter" badges='bg-orange-500' toogle='hover:bg-orange-600' link='https://www.codeigniter.com/' />
          </div>

        </div>
        <div className="p-5 sm:w-full md:w-1/2 lg:w-1/4 bg-black">
          <div className="p-2 bg-black radius-card border border-white" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <Card_framework imageSrc="/images/flutter-images.png" Title="Flutter" badges='bg-sky-600' toogle='hover:bg-cyan-600' link='https://flutter.dev/' />
          </div>

        </div>
        <div className="p-5 sm:w-full md:w-1/2 lg:w-1/4 bg-black">
          <div className="p-2 bg-black  radius-card border border-white" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <Card_framework imageSrc="/images/react-images.png" Title="NextJS" badges='bg-neutral-500' toogle='hover:bg-neutral-600' link='https://nextjs.org/' />
          </div>

        </div>
      </div>
      <div className="p-10" ref={experience}>

      </div>
      <div className="justify-center flex bg-black text-white font-mono text-2xl">Experience</div>
      <div className="p-5 bg-black">
        <Card_experience />
      </div>

      <div className="p-10" ref={portofolio} >

      </div>
      <div className="justify-center flex bg-black text-white font-mono text-2xl">Project</div>
      <div className="p-2 bg-black">
        <Card_portofolio />
      </div>

      <div className="p-10" ref={education} >

      </div>
      <div className="justify-center flex bg-black text-white font-mono text-2xl mb-12">Education</div>
      <div className="p-2 bg-black justify-center flex">
        <div className=''></div>
        <Card_education />
      </div>

    </div>
  );
}
