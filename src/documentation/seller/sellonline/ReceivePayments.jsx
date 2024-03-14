import { Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function ReceivePayments(){
    return(
    <div className="p-5 w-full">
     <Card className="h-92 bg-[#def2ff] flex">
     <div className="flex">
       <img src="/img/pay.webp" alt="" className="" />  
                <div className="pt-5">
                        <Typography className=" text-black text-3xl font-secondary font-semibold">Receive Payments</Typography>
                    <div className="w-10 h-1.5 bg-red-500 rounded-full mt-4"> </div>
                    <Typography className="text-md p-5 leading-7 font-secondary">With a customer base of over 45 crore+ on Flipkart, you can expect orders from customers across India. To ensure your convenience, Flipkart ensures timely payments directly into your registered bank account, which you provided during the Flipkart account creation process. You can receive your payments as fast as 7 days* from the date of dispatch, enabling you to manage your cash flow efficiently and focus on growing your business.</Typography>
            </div>
         </div>    
    
    </Card>
    </div>
    );
}
export default ReceivePayments