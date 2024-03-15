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
  const [crackerDesc, setCrackerDesc] = useState("");
  const [crackerQuantity, setCrackerQuantity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const cardData = {
      crackerName,
      crackerPrice,
      crackerDesc,
      crackerQuantity
    };
    onCardSubmit(cardData);
    setCrackerName("");
    setCrackerPrice("");
    setCrackerDesc("");
    setCrackerQuantity("");
  };

  return (
    <>
      <div className="w-full h-full">
        <Card shadow={false} className="mt-5 flex justify-center items-center">
          <Typography variant="h4" color="blue-gray">
            Fill Card Details
          </Typography>

          <form
            className="mt-8 w-80 max-w-screen-lg sm:w-96"
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
                Cracker Price
              </Typography>
              <Input
                label="Cracker Price"
                value={crackerPrice}
                onChange={(e) => setCrackerPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-5 mt-10">
              <Typography className="font-secondary text-xl text-black font-bold">
                Cracker Description
              </Typography>
              <Input
                label="Cracker Description"
                value={crackerDesc}
                onChange={(e) => setCrackerDesc(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-5 mt-10">
              <Typography className="font-secondary text-xl text-black font-bold">
                Cracker Quantity
              </Typography>
              <Input
                label="Quantity"
                type="number"
                min={1}
                max={1000}
                value={crackerQuantity}
                onChange={(e) => setCrackerQuantity(e.target.value)}
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
