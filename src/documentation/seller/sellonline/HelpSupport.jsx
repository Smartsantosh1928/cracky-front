import { Typography } from "@material-tailwind/react";

export function HelpSupport(){
    return(
        <div className=" w-full  p-4 rounded-xl">    
            <div>
                <div>
                    <Typography className="text-3xl font-secondary font-semibold">Seller Support</Typography>
                </div>
                <div className="w-10 flex h-1.5 bg-red-500 rounded-full mt-4"></div>
                <div className="flex">
                    <Typography className="pt-5 font-secondary">Welcome to Cracky! We're thrilled to have you onboard as a seller in our vibrant community dedicated to bringing the joy of fireworks and crackers to enthusiasts worldwide. At [Your Website Name], we understand the importance of providing robust support to our sellers, ensuring a seamless and rewarding selling experience.</Typography>
                    <img src="../public/img/arul.png" alt="" className="ml-20 h-40 w-40" />
                </div>    
                <Typography  className="text-3xl font-secondary font-semibold">Dedicated Support Team</Typography>
                <Typography className="pt-5 font-secondary">Our dedicated support team is here to assist you at every step of your journey as a seller on our platform. Whether you have questions about product listings, order management, or need technical assistance, our knowledgeable support representatives are just a click away. Feel free to reach out to us via email, phone, or live chat for prompt and personalized assistance.</Typography>       
                <Typography  className="text-3xl font-secondary font-semibold">Comprehensive Resources</Typography>
                <Typography className="pt-5 font-secondary">To empower you with the tools and knowledge needed to succeed, we offer a comprehensive set of resources designed specifically for our sellers. Explore our seller dashboard, where you can manage your inventory, track orders, and analyze sales performance in real-time. Additionally, take advantage of our seller guides, tutorials, and FAQs to enhance your understanding of our platform and optimize your selling strategies.</Typography>       
            </div>
        </div>
    );
}
export default HelpSupport