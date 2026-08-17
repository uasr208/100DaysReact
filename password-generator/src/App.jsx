import { ArrowRight, Cannabis, Copy } from "lucide-react";
import React, { useState } from "react";
import "animate.css";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const pattern =
    "_qZ9!mX7#vP2*kL4$wB8@rT5&yN3%cX1(zM6)pQ9[fH4]vW$7mK3!vP9*xL2#qZ8&wB4@rT6%yN1_cX5(zM9)pH3[fW7]vQ";
  const [password, setPassword] = useState("");
  const generatePassword = (e) => {
    e.preventDefault();
    let p = " ";
    const len = e.target[0].value;
    const patternLength = pattern.length - 1;
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * patternLength);
      p = p + pattern[randomIndex];
    }
    setPassword(p);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    toast.success("password copied !");
  };

  return (
    <div className="h-screen bg-gradient-to-tr from-slate-900 via-rose-900 to-slate-900 flex justify-center items-center">
      <div className="flex flex-col items-center gap-3 animate__animated animate__bounceIn animate__faster  p-16 w-lg bg-white rounded-xl bg-gradient-to-r from-slate-700 via-rose-700 to-slate-700 border border-white/20 shadow-xl ">
        <Cannabis className="text-white w-12 h-12" />
        <h1 className="text-4xl font-bold text-white">
          Generate Strong Password{" "}
        </h1>
        <form className="w-full mt-6" onSubmit={generatePassword}>
          <input
            placeholder="Enter password length"
            type="number"
            className="w-full focus:outline-white text-white bg-black/10 p-3 rounded-lg border border-white/20"
          />
          <button className="bg-green-400 font-medium text-white rounded-lg hover:scale-105 duration-300 flex items-center py-3 w-full justify-center mt-5">
            <ArrowRight /> Generate
          </button>
        </form>
        {password !== "" && (
          <div className="p-3 rounded-lg bg-black/20 text-white w-full flex items-center justify-between mt-4">
            <p>{password}</p>
            <Copy
              className="w-4 h-4 hover:scale-115 duration-300"
              onClick={copyPassword}
            />
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
