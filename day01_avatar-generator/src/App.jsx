import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import { toast, ToastContainer } from "react-toastify";

const data = [
  {
    label: "Illustration",
    value: "illustration",
    url: "https://api.dicebear.com/7.x/avataaars/svg?seed=",
  },
  {
    label: "Cartoon",
    value: "cartoon",
    url: "https://api.dicebear.com/7.x/adventurer/svg?seed=",
  },
  {
    label: "Sketchy",
    value: "sketchy",
    url: "https://api.dicebear.com/7.x/croodles/svg?seed=",
  },
  {
    label: "Robots",
    value: "robots",
    url: "https://api.dicebear.com/7.x/bottts/svg?seed=",
  },
  {
    label: "Art",
    value: "art",
    url: "https://api.dicebear.com/7.x/pixel-art/svg?seed=",
  },
  {
    label: "Male",
    value: "male",
    url: "https://randomuser.me/api/portraits/men",
  },
  {
    label: "Female",
    value: "female",
    url: "https://randomuser.me/api/portraits/women",
  },
];
const App = () => {
  const [src, setSrc] = useState(null);
  const [option, setOption] = useState("male");

  const generateNum = () => {
    const r = Math.floor(Math.random() * 99) + 1;
    return r;
  };

  const generate = () => {
    const obj = data.find((item) => item.value === option);
    const url = obj.url;
    if (option === "male" || option === "female") {
      const imageurl = `${url}/${generateNum()}.jpg`;
      setSrc(imageurl);
    } else {
      const uniqueValue = Date.now();
      const imageurl = `${url}${uniqueValue}`;
      setSrc(imageurl);
    }
  };

  const onOptionChange = (e) => {
    const value = e.target.value;
    setOption(value);
  };

  const download = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `${Date.now()}.jpg`;
    a.click();
    a.remove();
  };

  const copy = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("Image Url copied", { position: "top-center" });
  };

  useEffect(() => {
    generate();
  }, [option]);
  return (
    <div className="overflow-hidden animate__animated animate__fadeIn min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white">
      <div className=" animate__animated animate__bounceIn gap-6 flex flex-col items-center w-full max-w-md rounded-2xl shadow-xl backdrop-blur-xl border border-slate-700 p-10">
        <img
          src={src || "/avtar.png"}
          className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"
        />
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide">Avatar Generator</h1>
          <p className="text-slate-300">
            Generate unlimited avatar for your website
          </p>
        </div>

        <div className="w-full space-y-4">
          <select
            value={option}
            onChange={onOptionChange}
            className="bg-slate-900/60 w-full p-3 rounded-xl"
          >
            {data.map((item, index) => (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            ))}
          </select>
          <div className="bg-slate-900/60 w-full p-3 rounded-xl">{src}</div>
        </div>
        <div className="flex w-full gap-4">
          <button
            onClick={generate}
            className=" flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rounded-lg py-2 hover:scale-105 transition-transform"
          >
            <i className="ri-arrow-right-up-line mr-1"></i>
            Change
          </button>

          <button
            onClick={() => download(src)}
            className=" flex-1 bg-gradient-to-r from-green-500 to-cyan-600 font-medium rounded-lg py-2 hover:scale-105 transition-transform"
          >
            <i className="ri-download-line mr-1"></i>
            Download
          </button>

          <button
            onClick={() => copy(src)}
            className=" flex-1 bg-gradient-to-r from-orange-500 to-amber-600 font-medium rounded-lg py-2 hover:scale-105 transition-transform"
          >
            <i className="ri-file-copy-line mr-1"></i>
            Copy
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
