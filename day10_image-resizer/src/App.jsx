import React, { useState } from "react";

const App = () => {
  const [originalImage, setOriginalImage] = useState("/sample.png");
  const [resizedImage, setResizedImage] = useState("/sample.png");
  const [form, setForm] = useState({
    width: "",
    height: "",
  });

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const showImage = (e) => {
    const input = e.target;
    const file = input.files[0];
    const url = URL.createObjectURL(file);
    setOriginalImage(url);
  };

  const resizeImage = (e) => {
    e.preventDefault();
    const image = new Image();
    image.src = originalImage;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const targetWidth = Number(form.width);
      const targetHeight = Number(form.height);
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(image, 0, 0, targetWidth, targetHeight);
      const imageString = canvas.toDataURL("image/png", 0.92);
      setResizedImage(imageString);
    };
  };

  return (
    <div className="bg-gray-200 min-h-screen py-12">
      <div className="mx-auto w-10/12 bg-white rounded-xl p-8 grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Image Resizer</h1>
          <div className="relative h-[500px] bg-slate-900 rounded-lg p-4">
            <img
              src={originalImage}
              className="rounded-lg object-contain w-full h-full cursor-pointer"
            />
            <input
              onChange={showImage}
              type="file"
              accept="image/*"
              className="absolute top-0 left-0 w-full h-full opacity-0 rounded-lg"
            />
          </div>
          <div>
            <form className="flex gap-4" onSubmit={resizeImage}>
              <input
                name="width"
                placeholder="width"
                className="border border-gray-300 p-2 rounded"
                required
                onChange={handleChange}
                disabled={originalImage === "/sample.png"}
                type="number"
              />
              <input
                name="height"
                placeholder="height"
                className="border border-gray-300 p-2 rounded"
                required
                onChange={handleChange}
                disabled={originalImage === "/sample.png"}
                type="number"
              />

              <button
                disabled={originalImage === "/sample.png"}
                className="bg-indigo-600 text-white font-medium py-2 px-8 rounded hover:bg-green-500 duration-300 hover:scale-105 transition-transform"
              >
                Resize
              </button>
            </form>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Result</h1>
          <div className="flex items-center justify-center overflow-auto h-[500px] bg-slate-900 rounded-lg p-4">
            <img
              src={resizedImage}
              className="rounded-lg cursor-pointer"
              style={{
                width: form.width,
                height: form.height,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
