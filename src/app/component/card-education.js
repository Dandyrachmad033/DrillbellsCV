
import '../globals.css';
export default function Card_education() {
    return (
        <div className="m-2 flex-wrap flex justify-center">
            <div className="card text-primary-content m-3" style={{ background: "linear-gradient(to top, #FF0000, #FFFFFF)" }} data-aos="zoom-in" data-aos-duration="1000">
                <div className="card-body">
                    <div className="flex justify-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-white">
                                <img src="/images/logo-umm.png" />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex md:flex lg:flex sm:justify-center md: justify-center lg:justify-center sm: items-center md:items-center lg:items-center">
                        <h2 className=" text-xl text-white mr-3">University :
                        </h2>
                        <p className="font-mono font-normal text-white text-xl text-center">UNIVERSITAS MUHAMMADIYAH MALANG</p>
                    </div>

                    <div className="sm:flex md:flex lg:flex sm:justify-center md: justify-center lg:justify-center sm: items-center md:items-center lg:items-center">
                        <h2 className="text-xl text-white mr-3">Major :
                        </h2>
                        <p className="font-mono font-normal text-white text-xl text-center">INFORMATICS ENGINEERING</p>

                    </div>
                    <div className="sm:flex md:flex lg:flex sm:justify-center md: justify-center lg:justify-center sm: items-center md:items-center lg:items-center">
                        <h2 className="text-xl text-white mr-3">Time :
                        </h2>
                        <p className="font-mono font-normal text-white text-xl text-center"> (JUNE 2020 – JUNE 2024)</p>

                    </div>

                </div>

            </div>
            <div className="card text-primary-content m-3 " style={{ background: 'linear-gradient(to bottom, #4e4376, #2b5876)' }} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000" >
                <div className="card-body">
                    <div className="flex justify-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-white">
                                <img src="/images/logo-sma4.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex md:flex lg:flex sm:justify-center md: justify-center lg:justify-center sm: items-center md:items-center lg:items-center">
                        <h2 className=" text-xl text-white mr-3">School :
                        </h2>
                        <p className="font-mono font-normal text-white text-xl text-center">SMA NEGERI  4 BOJONEGORO</p>
                    </div>

                    <div className="sm:flex md:flex lg:flex sm:justify-center md: justify-center lg:justify-center sm: items-center md:items-center lg:items-center">
                        <h2 className="text-xl text-white mr-3">Major :
                        </h2>
                        <p className="font-mono font-normal text-white text-xl text-center"> IPA</p>

                    </div>
                    <div className="sm:flex md:flex lg:flex sm:justify-center md: justify-center lg:justify-center sm: items-center md:items-center lg:items-center">
                        <h2 className="text-xl text-white mr-3">Time :
                        </h2>
                        <p className="font-mono font-normal text-white text-xl text-center"> (APRIL 2017 – MEI 2020)</p>

                    </div>

                </div>

            </div>

        </div>
    );
}