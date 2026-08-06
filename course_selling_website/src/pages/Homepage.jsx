import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import {
  ArrowRight,
  Bell,
  Copy,
  Home,
  LayoutDashboard,
  Play,
  Settings2,
} from "lucide-react";

const courses = [
  {
    image: "./t1.webp",
    name: "Level 1 Course",
    price: 3000,
  },
  {
    image: "./t2.webp",
    name: "Level 2 Course",
    price: 4000,
  },
  {
    image: "./t3.webp",
    name: "Level 3 Course",
    price: 5000,
  },
  {
    image: "./t4.webp",
    name: "Level 4 Course",
    price: 6000,
  },
  {
    image: "./t5.webp",
    name: "Level 5 Course",
    price: 7000,
  },
  {
    image: "./t6.webp",
    name: "Level 6 Course",
    price: 8000,
  },
  {
    image: "./t7.webp",
    name: "Level 7 Course",
    price: 9000,
  },
  {
    image: "./t8.webp",
    name: "Level 8 Course",
    price: 10000,
  },
];

const faq = [
  {
    title: "How to purchase a course",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla",
  },
  {
    title: "How to Try a course first",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla",
  },
  {
    title: "How to get refund for a course",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla",
  },
  {
    title: "How to join waitlist for a course",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla",
  },
];

const featured = [
  {
    bgColor: "bg-rose-500",
    icon: <Home />,
    title: "Homepage",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla",
  },
  {
    bgColor: "bg-indigo-500",
    icon: <Settings2 />,
    title: "Setting",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla",
  },
  {
    bgColor: "bg-amber-500",
    icon: <Copy />,
    title: "Copied",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla",
  },
  {
    bgColor: "bg-green-500",
    icon: <LayoutDashboard />,
    title: "Layout and design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla",
  },
  {
    bgColor: "bg-violet-500",
    icon: <Bell />,
    title: "Notifications",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla",
  },
  {
    bgColor: "bg-blue-500",
    icon: <Play />,
    title: "Players",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla",
  },
];

const Homepage = () => {
  const [activeIndex, setactiveIndex] = useState(null);
  return (
    <div>
      <div className="h-[500px] animate__animated animate__fadeIn">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="h-full">
              <div className="w-10/12 mx-auto h-full grid grid-cols-2 gap-8">
                <div className="flex flex-col justify-center h-full">
                  <h1 className="text-7xl font-bold">
                    React Course for Beginners
                  </h1>
                  <p className="text-3xl text-black/80 font-semibold mt-5">
                    Learn to design a website
                  </p>
                  <p className="mt-3 text-black/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae neque labore vero laboriosam inventore earum
                    minima voluptates reiciendis, quibusdam quam quas aut
                    quidem, necessitatibus fugit deserunt doloremque quis.
                    Fugiat, nulla?
                  </p>
                  <div className="flex gap-5 mt-8">
                    <button className="bg-rose-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow-lg">
                      Watch videos
                    </button>
                    <button className="bg-violet-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow-lg flex items-center gap-1">
                      <ArrowRight className="w-4 h-4" />
                      Learn More
                    </button>
                  </div>
                </div>
                <div>
                  <img src="./s1.avif" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <div className="w-10/12 mx-auto h-full grid grid-cols-2 gap-8">
                <div className="flex flex-col justify-center h-full">
                  <h1 className="text-7xl font-bold">
                    Node Course for Beginners
                  </h1>
                  <p className="text-3xl text-black/80 font-semibold mt-5">
                    Learn to design a website
                  </p>
                  <p className="mt-3 text-black/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae neque labore vero laboriosam inventore earum
                    minima voluptates reiciendis, quibusdam quam quas aut
                    quidem, necessitatibus fugit deserunt doloremque quis.
                    Fugiat, nulla?
                  </p>
                  <div className="flex gap-5 mt-8">
                    <button className="bg-rose-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow-lg">
                      Watch videos
                    </button>
                    <button className="bg-violet-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow-lg flex items-center gap-1">
                      <ArrowRight className="w-4 h-4" />
                      Learn More
                    </button>
                  </div>
                </div>
                <div>
                  <img src="./s2.jpg" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <div className="w-10/12 mx-auto h-full grid grid-cols-2 gap-8">
                <div className="flex flex-col justify-center h-full">
                  <h1 className="text-7xl font-bold">
                    Mern Course for Beginners
                  </h1>
                  <p className="text-3xl text-black/80 font-semibold mt-5">
                    Learn to design a website
                  </p>
                  <p className="mt-3 text-black/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae neque labore vero laboriosam inventore earum
                    minima voluptates reiciendis, quibusdam quam quas aut
                    quidem, necessitatibus fugit deserunt doloremque quis.
                    Fugiat, nulla?
                  </p>
                  <div className="flex gap-5 mt-8">
                    <button className="bg-rose-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow-lg">
                      Watch videos
                    </button>
                    <button className="bg-violet-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow-lg flex items-center gap-1">
                      <ArrowRight className="w-4 h-4" />
                      Learn More
                    </button>
                  </div>
                </div>
                <div>
                  <img src="./s3.avif" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="px-24 py-20 bg-gray-100">
        <div className="text-center w-10/12 mx-auto">
          <h1 className="text-5xl font-bold">New Course</h1>
          <p className="text-base text-black/70 mt-3">
            Choose a course as per your need or industry demands Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Blanditiis est
            recusandae libero nam officia quam quo voluptates reprehenderit.
            Iste ab debitis quam quos vero quo maxime eligendi distinctio
            deserunt fugit.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-16">
          {courses.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <img
                src={item.image}
                className="w-full h-[180px] object-cover rounded-t-lg"
              />
              <div className="px-6 py-3">
                <h1 className="text-lg font-medium">{item.name}</h1>
                <p className="text-black/80">₹{item.price}</p>
                <button className="bg-linear-to-r from-orange-500 to-pink-500 hover:scale-110 duration-300 transition text-white w-full py-2.5 rounded font-medium mt-4">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-24 py-20 bg-white">
        <div className="text-center w-10/12 mx-auto">
          <h1 className="text-5xl font-bold">FAQ</h1>
          <p className="text-base text-black/70 mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nulla
            alias similique adipisci placeat? Numquam at nostrum commodi sequi
            minus debitis quis accusamus temporibus odit cum. Quam quas laborum
            quo.
          </p>
        </div>
        <div className="w-10/12 mt-16 mx-auto space-y-8">
          {faq.map((item, index) => (
            <div
              key={index}
              className="border bg-white border-gray-300 rounded-lg flex flex-col shadow"
            >
              <button
                onClick={() =>
                  setactiveIndex(setactiveIndex === index ? null : index)
                }
                className="rounded-t-lg bg-linear-to-r from-sky-500 to-indigo-500 text-left p-5 font-medium text-white text-lg"
              >
                {item.title}
              </button>
              <div
                className=" text-gray-600 rounded-b-lg"
                style={{
                  height: activeIndex === index ? "auto" : 0,
                  padding: activeIndex === index ? "20" : 0,
                  overflow: "hidden",
                  transition: "300ms",
                }}
              >
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-24 py-20 bg-gray-100">
        <div className="text-center w-10/12 mx-auto">
          <h1 className="text-5xl font-bold">Featured Section</h1>
          <p className="text-base text-black/70 mt-3">
            Choose a course as per your need or industry demands Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Blanditiis est
            recusandae libero nam officia quam quo voluptates reprehenderit.
            Iste ab debitis quam quos vero quo maxime eligendi distinctio
            deserunt fugit.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-16">
          {featured.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-lg shadow-lg hover:scale-110 transition duration-300`}
            >
              <div className="px-6 py-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white">
                  {" "}
                  {item.icon}
                </div>
                <h1 className="text-xl font-semibold mt-3 mb-2 text-white">
                  {item.title}
                </h1>
                <p className="text-white text-center">
                  {item.description.slice(0, 80)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
