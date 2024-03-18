import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function CardForm({ onCardSubmit }) {
  const [crackerName, setCrackerName] = useState("");
  const [crackerPrice, setCrackerPrice] = useState("");
  const [crackerSellingPrice, setCrackerSp] = useState("");
  const [crackerDiscount, setCrackerDiscount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const cardData = {
      crackerName,
      crackerPrice,
      crackerSellingPrice,
      crackerDiscount
    };
    onCardSubmit(cardData);
    setCrackerName("");
    setCrackerPrice("");
    setCrackerSp("");
    setCrackerDiscount("");
  };

  return (
    <>
      <div className="w-full h-full">
        <Card shadow={false} className="mt-5 flex justify-center items-center">
          <Typography variant="h4" color="blue-gray">
            Fill Card Details
          </Typography>

          <form
            className="mt-8 max-w-screen-lg sm:w-96" 
            onSubmit={handleSubmit}
          >
            <div className="mt-10 flex flex-row gap-2">
              <Typography className="font-secondary text-xl text-black font-bold">
                Cracker Name
              </Typography>
              <Input
                label="Cracker Name"
                value={crackerName}
                onChange={(e) => setCrackerName(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-5 mt-10">
              <Typography className="font-secondary text-xl text-black font-bold">
                Actual Price
              </Typography>
              <Input
                label="Actual Price"
                value={crackerPrice}
                onChange={(e) => setCrackerPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-5 mt-10">
              <Typography className="font-secondary text-xl text-black font-bold">
                Selling Price
              </Typography>
              <Input
                label="Selling Price"
                value={crackerSellingPrice}
                onChange={(e) => setCrackerSp(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-5 mt-10">
              <Typography className="font-secondary text-xl text-black font-bold">
                Discount
              </Typography>
              <Input
                label="Discount"
                value={crackerDiscount}
                onChange={(e) => setCrackerDiscount(e.target.value)}
              />
            </div>

            <div>
              <Button className="ml-40 mt-24" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default CardForm;
