import { Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function ReceivePayments(){
    return(
    <div className="p-10 w-[80%]">
     <Card className="h-92 bg-[#cadbe6] flex">
     <div className="flex">
       <img src="/img/pay.webp" alt="" className="" />  
                <div className="pt-5">
                        <Typography className=" text-black text-3xl">Receive Payments</Typography>
                    <div className="w-10 h-1.5 bg-blue-500 rounded-full mt-4"> </div>
                    <Typography className="`text-md p-5 leading-8`">With a customer base of over 45 crore+ on Flipkart, you can expect orders from customers across India. To ensure your convenience, Flipkart ensures timely payments directly into your registered bank account, which you provided during the Flipkart account creation process. You can receive your payments as fast as 7 days* from the date of dispatch, enabling you to manage your cash flow efficiently and focus on growing your business.</Typography>
            </div>
         </div>    
    
    </Card>
    </div>
    );
}
export default ReceivePayments