import { Typography } from "@material-tailwind/react";
export function StorageShipping(){
    return(
       <>
       <div className="p-5">
                <div className=" w-[50%] flex bg ">
                    <Typography className="text-3xl">Storage & Shipping</Typography>
                </div>
                <div className="w-10 flex h-1.5 bg-blue-500 rounded-full mt-4">
                </div>
                <div>
                    <Typography>Congratulations on receiving your first order! When it comes to shipping your products to customers, Flipkart understands the importance of fast and reliable delivery in secure packaging.</Typography>
                    <Typography className="text-2xl font-semibold pt-5">Seller Managed Shipping (SMS)</Typography>
                       <Typography className="pt-5"> Enjoy full control over the shipping process, from packaging to dispatch, as the responsibility lies with the seller.
                        Ensure that your products are well-packed and ready for dispatch when the Flipkart agent arrives at your location.
                        Leverage Flipkart's extensive logistics network for efficient and reliable delivery to customers.
                        Benefits of SMS:

                        Delivery to 19,000+ pin codes across India.
                        Real-time tracking of your product.
                        Customer returns support.
                        Logistics support from the community warehouse is available.</Typography>
                </div>
       </div>
       </>
    );
}
export default StorageShipping