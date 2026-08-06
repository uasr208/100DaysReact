import { ArrowRight, Bird } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const menus = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Courses",
      link: "/courses",
    },
    {
      label: "Tutorials",
      link: "/tutorials",
    },
    {
      label: "Contct us",
      link: "/contact-us",
    },
  ];
  return (
    <div>
      <nav className="border-b border-b-slate-100 z-20 p-8 bg-white flex items-center justify-around sticky top-0 left-0">
        <div className=" flex items-center gap-3">
          <div className="bg-linear-to-r from-sky-500 to-indigo-500 w-11 h-11 rounded-full flex items-center justify-center">
            <Bird className="text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-blue-500">Birdling</h1>
            <p className="text-sky-500 font-medium text-xs">
              Making learning easier
            </p>
          </div>
        </div>
        <div className="flex items-center gap-12">
          {menus.map((item, index) => (
            <Link
              to={item.link}
              className="text-black/60 font-medium hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <Link
            to="/login"
            className="text-black/60 font-medium hover:text-black"
          >
            Login
          </Link>
          <Link
            to="/singup"
            className="flex items-center gap-2 font-medium bg-linear-to-r from-sky-500 to-indigo-500 text-white px-8 py-2.5 rounded-lg hover:scale-105 transition duration-300 active:scale-80"
          >
            <ArrowRight className="w-4 h-4" />
            Sign up
          </Link>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
      <footer className="h-[500px] bg-linear-to-r from-blue-500 to-indigo-500 rounded-t-[100px] p-24">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h1 className="text-xl font-bold text-white">Birdling</h1>
            <p className="text-white/75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              tempore quidem modi tenetur blanditiis eveniet et recusandae alias
              iusto sed reiciendis maiores, sunt illo nihil temporibus laborum,
              porro numquam voluptatibus.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Tutorials</h1>
            <p className="text-white/75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              tempore quidem modi tenetur blanditiis eveniet et recusandae alias
              iusto sed reiciendis maiores, sunt illo nihil temporibus laborum,
              porro numquam voluptatibus.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Contact us</h1>
            <p className="text-white/75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              tempore quidem modi tenetur blanditiis eveniet et recusandae alias
              iusto sed reiciendis maiores, sunt illo nihil temporibus laborum,
              porro numquam voluptatibus.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Courses</h1>
            <p className="text-white/75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              tempore quidem modi tenetur blanditiis eveniet et recusandae alias
              iusto sed reiciendis maiores, sunt illo nihil temporibus laborum,
              porro numquam voluptatibus.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
