import { useState, useEffect } from 'react'
import {
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Typography,
    Button,
} from "@material-tailwind/react";
import {useDropzone} from 'react-dropzone';
import { IoIosCloseCircleOutline } from "react-icons/io";
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

export function FileUpload({ handleOpen, dialogOpen, multiple }) {

  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    noClick: true,
    noKeyboard: true
  });
  
  const [ crop, setCrop ] = useState({ aspect: 1 / 1, width: 100, height: 100, unit: '%' })
  const [ photos, setPhotos ] = useState([]);
  const [ selectedPhoto, setSelectedPhoto ] = useState(null)
  const [ croppedPhotos, setCroppedPhotos ] = useState([])
  const [ croppedImage, setCroppedImage ] = useState(null)

  useEffect(() => {
    setPhotos(acceptedFiles)
  },[acceptedFiles])

  useEffect(() => {
    setSelectedPhoto(photos[0])
  },[photos])

  const handleFileChange = (index) => {
    setSelectedPhoto(photos[index])
  };

  const handleRemove = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  const onCropComplete = async (crop, pixelCrop) => {
    try {
      const image = await loadImage(selectedPhoto);
      const canvas = document.createElement('canvas');
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(
        image,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob((blob) => {
        setCroppedImage(URL.createObjectURL(blob));
      }, 'image/jpeg');
    } catch (error) {
      console.error('Error processing cropped image:', error);
    }
  };

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = (err) => reject(err);
      image.src = URL.createObjectURL(src);
    });
  };

  return (
    <>
    <Dialog open={dialogOpen} handler={handleOpen} size='xxl'>
        <DialogHeader className='flex justify-between'>
            <Typography color="blue-gray" variant='h4' >
                Upload Files Here
            </Typography>
            <IoIosCloseCircleOutline className='cursor-pointer' onClick={handleOpen} />
        </DialogHeader>
        <DialogBody className='w-full h-full grid grid-cols-1 md:grid-cols-2'>
          <div className='w-full h-full'  {...getRootProps({className: 'dropzone'})} >
            <div className='w-full h-full flex justify-center flex-col items-center  border border-dashed border-gray-600' >
              <input {...getInputProps()} multiple={multiple} />
              <p>Drag & drop your pictures here</p>
              <Button color='blue' onClick={open}>Browse Files</Button>
            </div>
          </div>
          <div className='w-full px-10'>
            <div className='w-full'>
              <span className='text-sm font-secondary text-blue-500' >Selected Files</span>
              <div className='grid grid-cols-6 mt-3'>
                {photos.map((photo, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Uploaded ${index + 1}`}
                      className='w-10 h-10 object-cover cursor-pointer'
                      onClick={() => handleFileChange(index)}
                    />
                    <IoIosCloseCircleOutline className='w-6 h-6 cursor-pointer absolute text-red-400 -top-4 right-11' onClick={() => handleRemove(index)}/>
                  </div>
                ))}
              </div>
            </div>
            <span className='text-sm font-secondary text-blue-500' >Crop your Image</span>
            <div className='flex justify-center items-center'>
              <div className='w-[55%]'>
                {selectedPhoto && (
                  <>
                  <ReactCrop
                    onComplete={onCropComplete}
                    crop={crop}
                    onChange={(newCrop) => setCrop(newCrop)}
                  >
                    <img
                      src={URL.createObjectURL(selectedPhoto)}
                      alt="Selected"
                      />
                  </ReactCrop>
                  {croppedImage && (
                    <img
                      src={croppedImage}
                      alt="Cropped"
                      className="mt-3 w-full h-auto object-cover"
                    />
                  )}
                  </>
                )}
              </div>
            </div>
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
    </>
  )
}

export default FileUpload