"use client";
import '@/../../public/css/card.css'
export default function Card_framework({ imageSrc, Title, badges, toogle, link }) {
    return (
        <div className="card bg-base-100 shadow-xl" style={{ zIndex: "10" }}>
            <figure><img src={imageSrc} alt="Shoes" data-aos="zoom-in-up" data-aos-duration="1000" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center font-extralight" data-aos="flip-up" data-aos-duration="1100">
                    {Title}
                    <div className={`badge badge-outline ${badges} text-white`}>Advance</div>
                </h2>
                <div className="card-actions justify-between ml-5">
                    <div className='flex'>

                        <button className={`btn ${toogle} text-white p-2`} onClick={() => window.open(`${link}`, '_blank')}>
                            Learn
                            <div className="badge badge-neutral">&#10148;</div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}