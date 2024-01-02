import { FaChevronRight } from "react-icons/fa";
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export function Footer(){
    return(
        <footer className="w-full bg-gray-900">
            <div className="w-full text-gray-200 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1">
                <div className="w-full">
                    <h4 className="text-gray-500 p-6 ">Useful Links</h4>
                        <ul className="text-white">
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />About Us</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Home</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Customer Care</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Privacy Policy</li>
                        </ul>
                </div>
                <div className="w-full">
                    <h4 className="text-gray-500 p-6">Useful Links</h4>
                        <ul className=" text-white">
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />About Us</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Home</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Customer Care</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Privacy Policy</li>
                        </ul>
                </div>
                <div className="w-full">
                    <h4 className="p-6 text-gray-500">Useful Links</h4>
                        <ul className="text-white">
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />About Us</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Home</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Customer Care</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Privacy Policy</li>
                        </ul>
                </div>
                <div className="w-full">
                    <h4 className="p-6 text-gray-500">Useful Links</h4>
                        <ul className="text-white">
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />About Us</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Home</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Customer Care</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Privacy Policy</li>
                        </ul>
                </div>
                <div className="w-full">
                    <h4 className="p-6 text-gray-500">Mail Us</h4>
                    <p className="text-xs text-gray-500">Ayya Nadar Janaki Ammal College,Sivakasi-626123</p>
                </div>
                <div className="w-full">
                    <img src="public/img/cart.png" className=" flex mt-14  h-36 w-30" />
                </div>
            </div>
            <div className=" w-full border-l">
                <hr className="border-gray-700" />
            </div>
            <div className="h-24 w-full">
                        <div className="mt-10 flex justify-end">
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
                                <FaInstagram className="text-white text-2xl" />
                                </a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
                                <FaXTwitter className="text-white text-2xl" />
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
                                <FaFacebook className="text-white text-2xl mr-20 mb-10" />
                                </a>
                    </div>
                    <div>
                    <p className="text-sm flex text-center justify-center text-gray-400">&copy; 2023 Cracky</p>      
                    </div>
            </div>
        </footer>
    );
}
export default Footer

