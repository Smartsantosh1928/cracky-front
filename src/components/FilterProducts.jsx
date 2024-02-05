import { Card, Typography } from "@material-tailwind/react";

export function FilterProducts(){
 return(
  <div className="flex">
    <div className="flex w-[20%]  h-screen">
      <Card className="h-screen mt-5 w-80 ml-4 bg-blue-gray-300">
        <Typography className="text-lg font-secondary text-brown-900 font-bold p-2 flex justify-center items-center">Product List</Typography>
      </Card>
    </div>
    <div className="flex w-[80%]  h-screen bg-gray-500">

    </div>
  </div>
 );
}
export default FilterProducts