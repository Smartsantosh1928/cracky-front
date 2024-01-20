import { Typography } from "@material-tailwind/react";
import { PiLightbulbLight } from "react-icons/pi";
export function ListProducts(){
    return(
        <div className=" w-[80%] bg-[#eaf7ff] p-5">    
            <div>
                    <div className="flex">
                        <Typography className="text-3xl">List Products</Typography>
                    </div>
                        <div className="w-10 flex h-1.5 bg-blue-500 rounded-full mt-4">
                        </div>
                            <div className="flex">
                                <Typography className="pt-5 ">What sets us apart is our exceptional Flipkart seller support assistance. We prioritise your needs and are committed to providing you with prompt assistance, whether you have questions, doubts, or require any kind of support for your business. Our dedicated team is here to help you every step of the way, ensuring that you have a smooth and successful selling experience on Flipkart. Feel free to reach out to us whenever you need assistance - we're always here to support you.</Typography>
                                <img src="/img/listpro.webp" alt="" className="ml-20 h-72 w-96 flex" />
                            </div>
                            <div className="flex p-2">
                            <PiLightbulbLight className="text-yellow-800 h-6 w-20"/>
                            <Typography className="flex">Did you know that providing precise and comprehensive information about your product, along with clear and captivating images, can increase its visibility on our platform by up to 15%.</Typography>
                            </div>
                </div>
        </div>
    );
}
export default ListProducts