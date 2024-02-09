"use client";
import '@/../../public/css/card.css'
import '@/../../public/css/home.css'


export default function Card() {
    return (
        <div className="card lg:card-side bg-black shadow-xl overflow-hidden">
            <div className='md:justify-center md:flex md:pt-2 flex justify-center p-2 lg:p-0' >
                <figure className='resize-images border-double border-4 border-white' style={{ borderRadius: "15px" }}><img className='' src="/images/profile.png" alt="Album" style={{ width: "400px", height: "100%", objectFit: "cover", borderRadius: "15px" }} /></figure>
            </div>
            <div className="card-body bg-black">
                <h2 className="card-title font-serif text-style-name">Dandy Rachmad Ramadhan (FullStack Developer, Sofware Engineer)</h2>
                <p className='font-serif'>As a software programmer, web developer, and full-stack developer, I have broad skills and deep experience in developing
                    innovative software and web applications. I am a passionate individual and highly passionate about the world of software
                    development, with a primary focus on creating efficient and reliable solutions for client and user needs. With experience
                    involving complex and diverse projects, I have successfully faced various challenges in software development. My technical
                    expertise includes software architecture design, object-oriented programming, database management, and efficient
                    implementation of algorithms. I have also contributed in optimizing application performance and improving user experience
                    through the integration of advanced technologies.
                </p>

                <h2 className="card-title font-serif text-style-skill">Skill</h2>
                <div className='p-2 pt-0 row-flex'>
                    <div className="badge badge-outline badge-primary m-2 font-mono" data-aos="zoom-in" data-aos-duration="200">PHP</div>
                    <div className="badge badge-outline text-yellow-400 m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="200">Javascript</div>
                    <div className="badge badge-outline text-cyan-400  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="400">Dart</div>
                    <div className="badge badge-outline text-sky-400 m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="600">Flutter</div>
                    <div className="badge badge-outline text-blue-600  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="800" >React JS</div>
                    <div className="badge badge-outline text-orange-500  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="1000" >JAVA</div>
                    <div className="badge badge-outline text-teal-400  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="1200">Tailwind CSS</div>
                    <div className="badge badge-outline  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="1400" >CLI</div>
                    <div className="badge badge-outline text-purple-400  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="1600"  >Team Leader</div>
                    <div className="badge badge-outline text-pink-400  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="1800" >Public Speaking</div>
                    <div className="badge badge-outline text-rose-500  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="2000"  >Problem Solver</div>
                    <div className="badge badge-outline text-fuchsia-400  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="2200" >Time Management</div>
                    <div className="badge badge-outline badge-warning m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="2400" >Python</div>
                    <div className="badge badge-outline text-violet-400  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="2600" >HTML</div>
                    <div className="badge badge-outline text-indigo-600  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="2800" >CSS</div>
                    <div className="badge badge-outline text-red-400  m-2 font-mono" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="3000" >Project Management</div>

                </div>

            </div>
        </div>
    );
}