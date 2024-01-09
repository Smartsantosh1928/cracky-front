import { FaChevronRight, FaTwitter } from "react-icons/fa";
import {Link} from "react-router-dom";
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export function Footer(){
    return(
        <footer className="w-full">
            <div className="w-full text-gray-200 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1  bg-gray-900">
                <div className="w-full">
                    <h4 className="text-gray-500 p-6 cursor-pointer">Useful Links</h4>
                        <ul className="text-white">
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />About Us</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Home</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Customer Care</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Privacy Policy</li>
                        </ul>
                </div>
                <div className="w-full">
                    <h4 className="text-gray-500 p-6 cursor-pointer">Useful Links</h4>
                        <ul className=" text-white">
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />About Us</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Home</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Customer Care</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Privacy Policy</li>
                        </ul>
                </div>
                <div className="w-full">
                    <h4 className="p-6 text-gray-500">Useful Links</h4>
                        <ul className="text-white cursor-pointer">
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />About Us</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Home</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Customer Care</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Privacy Policy</li>
                        </ul>
                </div>
                <div className="w-full">
                    <h4 className="p-6 text-gray-500">Useful Links</h4>
                        <ul className="text-white cursor-pointer">
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />About Us</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Home</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Customer Care</li>
                            <li className="mb-5 flex text-center items-center ml-5 text-xs hover:text-yellow-800"><FaChevronRight />Privacy Policy</li>
                        </ul>
                </div>
                <div className="w-full">
                    <h4 className="p-6 text-gray-500">Mail Us</h4>
                    <p className="text-xs text-gray-500 cursor-default">Ayya Nadar Janaki Ammal College,Sivakasi-626123</p>
                </div>
                <div className="w-full">
                    <img src="public/img/cart.png" className=" flex mt-14  h-36 w-30" />
                </div>
            </div>
            <div className=" w-full border-l">
                <hr className="border-gray-7text-white 00" />
            </div>
            <div className="w-full flex">                       
                            <div className="px-10 h-10 w-3/4 bg-gray-900 flex flex-row gap-2">
                               <Link to={"/"} className="mt-3 text-lg text-white px-2"><FaFacebook /></Link>
                               <Link to={"/"} className="mt-3 text-lg text-white px-2"><FaInstagram /></Link>
                               <Link to={"/"} className="mt-3 text-lg text-white px-2"><FaXTwitter /></Link>
                            </div>
                       
                            <div className="h-10 w-1/4 bg-gray-900">
                                <p className="text-sm flex text-center justify-center text-gray-300 mt-2 cursor-default">&copy; 2023 Cracky</p>
                            </div>
                            
                    
            </div>
        </footer>
    );
}
export default Footer

