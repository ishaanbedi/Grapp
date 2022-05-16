import Navbar from "../components/Navbar";
import Head from "next/head";
export default function Support() {
    return (
        <>
            <Head>
                <title>grapp - Support</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <div className="py-12 bg-[#1b1f24] lg:h-screen sm:h-full ">
                <div className="w-full flex items-center justify-center">
                    <div className="absolute top-40 bg-gray-700 drop-shadow-2xl	 rounded py-12 lg:px-28 px-8">
                        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-white">Contact Us</p>
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-white">Name</label>
                                <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-white-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-white">Email Address</label>
                                <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-white-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                            </div>
                        </div>

                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none text-white">Message</label>
                                <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-white-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                            </div>
                        </div>
                        <p className="text-xs leading-3 text-white-600 mt-4">Someone from our support team will get back to you soon.</p>
                        <div className="flex items-center justify-center w-full">
                            <button className="btn mt-6 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


