import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
export function ListForm(){
    return(<>
    <div className="w-full h-full">
    <Card shadow={false} className="mt-5 flex justify-center items-center">
      <Typography variant="h4" color="blue-gray">
        Listing Page
      </Typography>

      <form className="mt-8  w-80 max-w-screen-lg sm:w-96">
       <div className="mt-10 flex flex-row gap-2">
       <Typography className="font-secondary text-xl text-black font-bold">CrackerName</Typography>
        <Input label="Cracker Name"></Input>
       </div>
       <div className="flex flex-row gap-5 mt-10">
       <Typography className="font-secondary text-xl text-black font-bold">CrackerPrice</Typography>
        <Input label="Cracker Price"></Input>
       </div>
       <div className="flex flex-row gap-5 mt-10">
       <Typography className="font-secondary text-xl text-black font-bold">CrackerDesc</Typography>
        <Input label="Cracker Description"></Input>
       </div>
       <div>
        <Button className="ml-40 mt-24">Submit</Button>
       </div>
      </form>
    </Card>
    </div>
    </>);
}
export default ListForm