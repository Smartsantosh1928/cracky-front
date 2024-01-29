import { Typography, Card } from "@material-tailwind/react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDocumentsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa"; // Assuming you have a fire icon for crackers
import { VscAccount } from "react-icons/vsc";

export function Createaccount() {
  return (
    <div className="w-[100%] p-5">
      <div>
        <div className="flex">
          <Typography className="text-3xl font-semibold text-black/80">
            Create Cracker Shop Account
          </Typography>
        </div>
        <div className="w-10 flex h-1.5 bg-red-500 rounded-full mt-4"></div>
      </div>
      <div className="pt-2 justify-start items-start">
        <Typography className="font-normal pt-4">
          Join the booming cracker market by becoming a seller on our platform!
          Creating your Cracker Shop account is a quick process, taking less
          than 10 minutes, and requires only 3 documents. Follow the checklist
          to ensure a seamless account creation experience. By having these
          documents ready, you can start selling your crackers online in no
          time.
        </Typography>
        <Typography className="font-normal pt-4 text-gray-600">
          * For selling in all cracker categories
        </Typography>
      </div>
      <div className="h-52 border border-gray-400 rounded-2xl mt-5 p-8">
        <Typography className="text-lg font-semibold">
          Don’t have a License to Sell Crackers?
        </Typography>
        <Typography className="font-normal text-gray-600 mt-2">
          Follow the steps below to get your license for selling crackers
          online.
        </Typography>
        <div className="flex gap-16 pt-2">
          <div className="flex justify-center items-center">
            <VscAccount className="text-red-500 h-16 w-12" />
            <Typography className="px-1 w-52 h-12">
              Register/Login to https://www.serviceonline.gov.in/
            </Typography>
          </div>
          <div className="flex justify-center items-center">
            <IoDocumentTextOutline className="text-red-500 h-20 w-12" />
            <Typography className="px-1 w-52 h-12">
              Fill in the License Application Form
            </Typography>
          </div>
          <div className="flex justify-center items-center">
            <IoDocumentsSharp className="text-red-500 h-20 w-12" />
            <Typography className="px-1 w-40 h-12">
              Submit License Application
            </Typography>
          </div>
        </div>
      </div>
      <div className="p-5">
        <Typography>
          Showcase your crackers to a wide audience by selling them online!
          Explore the various cracker categories available for selling on our
          platform:
        </Typography>
        <Card className="shadow-lg shadow-[#a9c2d2] h-80 p-5">
          <Typography className="text-lg text-black font-semibold p-5">
            Popular Cracker Categories
          </Typography>
          <div className="grid grid-cols-3 ml-8 p-2">
            <Link>Diwali Crackers</Link>
            <Link>Fireworks Bundles</Link>
            <Link>Noiseless Crackers</Link>
            <Link>Sparklers</Link>
            <Link>Rockets</Link>
            <Link>Diwali Crackers</Link>
            <Link>Fireworks Bundles</Link>
            <Link>Noiseless Crackers</Link>
            <Link>Sparklers</Link>
            <Link>Rockets</Link>
            <Link>Diwali Crackers</Link>
            <Link>Fireworks Bundles</Link>
            <Link>Noiseless Crackers</Link>
            <Link>Sparklers</Link>
            <Link>Rockets</Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Createaccount;
