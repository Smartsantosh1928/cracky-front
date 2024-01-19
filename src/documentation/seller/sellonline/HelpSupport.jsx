import { Typography } from "@material-tailwind/react";

export function HelpSupport(){
    return(
        <div className="w-[50%] bg-white ">    
            <div>
                    <div className=" w-[50%] flex ">
                        <Typography className="text-3xl">Help & Support</Typography>
                    </div>
                        <div className="w-10 flex h-1.5 bg-blue-500 rounded-full mt-4">
                        </div>
                            <div className="flex">
                                <Typography className="pt-5 w-[50%]">What sets us apart is our exceptional Flipkart seller support assistance. We prioritise your needs and are committed to providing you with prompt assistance, whether you have questions, doubts, or require any kind of support for your business. Our dedicated team is here to help you every step of the way, ensuring that you have a smooth and successful selling experience on Flipkart. Feel free to reach out to us whenever you need assistance - we're always here to support you.</Typography>
                                <img src="../public/img/arul.png" alt="" className="ml-20 h-40 w-40 flex" />
                            </div>
                            
                </div>
        </div>
    );
}
export default HelpSupport