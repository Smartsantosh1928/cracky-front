import { Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { VscAccount } from "react-icons/vsc";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDocumentsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
export function Createaccount(){
    return(
        <div className="w-full"> 
                <div className=" w-[50%] flex ">
                    <Typography className="text-3xl">Create Account</Typography>
                </div>
                <div className="w-10 flex h-1.5 bg-blue-500 rounded-full mt-4">
                </div>
                <div className="w-50%"> 
                    <Typography className="w-[50%] font-normal pt-4">Creating your Flipkart seller account is a quick process, taking less than 10 minutes, and requires only 3 documents. Follow the checklist to ensure a seamless account creation experience. By having these documents ready, you can streamline the account creation process and get started on Flipkart as an online seller in no time.</Typography>
                    <Typography className="font-normal pt-4 text-gray-600">* for selling in all categories except for book</Typography>
                    <Typography className="font-normal text-gray-600">** for selling under books category</Typography>
                </div>
                <div className="w-[50%] flex justify-end items-end">
                    <img src="../public/img/logo.png" alt="" className="w-20 h-20 " />
                </div>
                <div className="w-[50%] h-52 border border-gray-400 rounded-2xl mt-5 p-8">
                    <Typography className="text-lg font-semibold">Don’t have a GSTIN?</Typography>
                    <Typography className="font-normal text-gray-600 mt-2">Follow the steps below to generate for your online business.</Typography>
                    <div className="flex gap-10">
                        <div className="flex">
                            <VscAccount  className="text-blue-500 h-20 w-12"/>
                            <Typography className="px-1 mt-5 w-40 h-12">Register / Login to www.gst.gov.in</Typography>
                        </div>
                        <div className="flex">
                            <IoDocumentTextOutline  className="text-blue-500 h-20 w-12"/>
                            <Typography className="px-1 mt-5 w-52 h-12 ">Fill in the GST Enrollment Application Form</Typography>
                        </div>
                        <div className="flex">
                            <IoDocumentsSharp  className="text-blue-500 h-20 w-12"/>
                            <Typography className="px-2 mt-5 w-40 h-12">Submit Enrollment Application</Typography>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] mt-5">
                <Typography >
                Flipkart offers a diverse range of over 3000+ categories where you can sell your products. These categories represent just a fraction of the wide variety available on Flipkart, providing ample opportunities for sellers to showcase their products to a large customer base. Here are some popular categories to consider for online selling:
                </Typography>
                <Card className=" border border-white h-80 ">
                    <Typography className="text-lg text-black font-semibold p-5">Popular categories to sell across India</Typography>
                    <div className="grid grid-cols-3 ml-8 p-2">
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                        <Link>sell online</Link>
                    </div>
                </Card>
            </div>
            <div className="w-[50%] h-96 mt-10 bg-blue-100 p-6">
            <div className=" w-[50%] flex ">
                    <Typography className="text-3xl">List Products</Typography>
                </div>
                <div className="w-10 flex h-1.5 bg-blue-500 rounded-full mt-4">
                </div>
                <Typography className="pt-5 w-[50%]">What is a listing? A listing refers to the process of registering your product on the Flipkart platform, making it visible to customers, and enabling them to view and purchase your product. It involves creating a detailed product page that includes essential information such as product title, description, images, pricing, and other relevant details. A well-crafted listing helps attract potential customers and facilitates the sale of your product on Flipkart.</Typography>
            </div>
        </div>
    );
}
export default Createaccount