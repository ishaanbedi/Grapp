import Navbar from "./Navbar";
import Image from "next/image";
export default function Hero() {
    return (
        <>
            <div>

                <Navbar />
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <Image alt="Hero Image" src="/images/hero.svg" className="max-w-sm rounded-lg shadow-2xl" height={1500} width={1500} />
                        <div>
                            <h1 className="lg:text-5xl text-3xl mr-12 font-bold text-white">Enter your email, we will send you a link to download <span className="text-indigo-300"> grapp!</span></h1>
                            <div className="btn-wrapper">
                                <input type="text" placeholder="hi@example.xyz" className="input input-bordered bg-white pl-4 lg:w-full sm:w-full mt-12 max-w-xs rounded-none rounded-l-lg	" />
                                <button className="bg-[#6979FC] hover:bg-[#4e5fe0] active:bg-[#394bd5] btn text-white rounded-none rounded-r-lg ">Get link</button>
                            </div>
                            <div className="cta-buttons mt-12">
                                <span className="appstore-btn">
                                    <button className="btn gap-2 bg-[#D9D9D9] hover:bg-[#b6b6b6] text-black">
                                        <Image src={'/images/appstore.svg'} alt="App Store" height={20} width={20} />
                                        App Store
                                    </button>
                                </span>
                                <span className="playstore-btn lg:px-6 px-4">
                                    <button className=" btn gap-2 bg-[#D9D9D9] hover:bg-[#b6b6b6] text-black">
                                        <Image src={'/images/playstore.svg'} alt="App Store" height={20} width={20} />
                                        Play Store
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}