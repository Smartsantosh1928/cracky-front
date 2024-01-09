import React from "react";
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadDropZone from "@rpldy/upload-drop-zone";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

export function FileUpload()
{
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = () => {
    setIsDragging(false);
  };
  return(<>
    <Button onClick={handleOpen} variant="gradient">
        File Upload
      </Button>
    <Dialog
        open={open}
        handler={handleOpen}
        size="xl"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>File Upload</DialogHeader>
        <DialogBody className={`flex h-full ${isDragging ? 'bg-yellow-100' : ''}`}>
          <div className="w-1/2 flex flex-col justify-center items-center p-5">
            <Uploady destination={{ url: 'https://my-server/upload' }}>
              <div className="border border-blue-900 bg-blue-900 text-black text-md font-bold rounded-full  p-3 flex justify-center items-center">
                <FaCloudUploadAlt className="text-lg" />
                <UploadButton />
              </div>
              <UploadDropZone
                onDragOverClassName="drag-over"
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                grouped
                maxGroupSize={3}
                className=" mt-5 w-full h-full flex flex-col justify-center items-center bg-gray-300 border border-dashed border-black"
              >
                <span className="p-16">Drag & Drop File(s) Here</span>
              </UploadDropZone>
            </Uploady>
          </div>
          <div className="w-1/2 flex flex-col bg-red-500">
            
          </div>
        </DialogBody>

        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
  </>);
}
export default FileUpload
