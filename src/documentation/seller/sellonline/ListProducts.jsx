import { Typography } from "@material-tailwind/react";
import { FaRegLightbulb } from "react-icons/fa6";
export function ListProducts(){
    return(
        <div className="w-screen h-screen bg-white ">    
            <div>
                    <div className=" w-[50%] flex ">
                        <Typography className="text-3xl">Help & Support</Typography>
                    </div>
                        <div className="w-10 flex h-1.5 bg-blue-500 rounded-full mt-4">
                        </div>
                            <div className="flex">
                                <Typography className="pt-5 w-[50%]">What is a listing? A listing refers to the process of registering your product on the Flipkart platform, making it visible to customers, and enabling them to view and purchase your product. It involves creating a detailed product page that includes essential information such as product title, description, images, pricing, and other relevant details. A well-crafted listing helps attract potential customers and facilitates the sale of your product on Flipkart.</Typography>
                                <img src="../public/img/arul.png" alt="" className="ml-20 h-40 w-40 flex" />
                            </div>
                                <div className="flex">
                                    <FaRegLightbulb className="mt-5 h-5 w-5 text-yellow-800" />
                                    <Typography className="text-sm text-gray-600 mt-5 ml-2">Did you know that providing precise and comprehensive information about your product, along with clear and captivating images, can increase its visibility on our platform by up to 15%.</Typography>
                                </div>
                </div>
        </div>
    );
}
export default ListProducts