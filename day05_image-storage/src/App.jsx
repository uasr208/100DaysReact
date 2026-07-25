import React from "react";
import "animate.css";
import { Download, Trash2, Upload } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { useImageStore } from "./zustand/useimageStore";

const FIVE_MB = 5 * 1024 * 1024;

const App = () => {
  const { images, setImage, deleteImages } = useImageStore();
  const chooseFile = (e) => {
    const input = e.target;
    const file = input.files[0];
    if (!file.type.startsWith("image/"))
      return toast.error("Please select an image file", {
        position: "top-center",
      });
    if (file.size > FIVE_MB)
      return toast.error(
        "Please upload an image file with size less than 5 mb.",
        {
          position: "top-center",
        },
      );
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImage({
        id: Date.now(),
        name: file.name,
        size: file.size,
        binary: fileReader.result,
        createdAt: new Date(),
      });
      toast.success("New Image Added", { position: "top-center" });
    };
  };

  const downloadImage = (item) => {
    const a = document.createElement("a");
    a.href = item.binary;
    a.download = item.name;
    a.click();
    a.remove();
  };

  return (
    <div className="bg-gray-100 min-h-screen lg:px-0 px-8">
      <div className="lg:w-9/12 mx-auto py-10 space-y-8">
        <h1 className="text-4xl font-bold text-center">Image Storage</h1>
        <button className="w-full relative  hover:scale-110 transition-transform durastion-300 hover:shadow-lg lg:w-8/12 mx-auto border-2 border-dashed border-white flex flex-col items-center gap-3 text-white py-10 bg-[linear-gradient(245deg,_#00c6ff,_#0072ff,_hsl(264.9,_72.83261113674185%,_40.88552538148386%))] rounded-xl">
          <Upload className="w-16 h-16" />
          <h1 className="text-xl font-medium">Click Me To Add An Image</h1>
          <input
            onChange={chooseFile}
            type="file"
            className="absolute top-0 left-0 opacity-0 w-full h-full rounded-xl cursor-pointer"
          />
        </button>
        <div className="grid lg:grid-cols-4 gap-8">
          {images.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={item.binary}
                className="hover:scale-110 transition-transform duration-300 hover:shadow:lg w-full h-[150px] object-cover rounded-t-xl"
              />
              <div className="bg-white p-3 rounded-b-xl">
                <h1 className="font-semibold">{item.name}</h1>
                <p className="text-gray-500">
                  {(item.size / 1024 / 1024).toFixed(1)}Mb
                </p>
                <div className="mt-3 flex gap-3">
                  <button
                    onClick={() => downloadImage(item)}
                    className="w-8 h-8 bg-green-400 rounded flex items-center justify-center text-white hover:bg-cyan-500 hover:scale-105 transition-transform duration-300"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteImages(item.id)}
                    className="w-8 h-8 bg-rose-400 rounded flex items-center justify-center text-white hover:bg-pink-500 hover:scale-105 transition-transform duration-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
