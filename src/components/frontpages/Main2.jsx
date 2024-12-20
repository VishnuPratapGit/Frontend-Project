import { CirclePlay } from "lucide-react";
import "./Main2.css";
import { useState } from "react";
import analyze from "../../assets/analyze.png";
import challange from "../../assets/challange.png";
import connect from "../../assets/connect.png";
import track from "../../assets/track.png";
import train from "../../assets/train.png";

const NumberRecordContainer = ({ data, content }) => {
  return (
    <div className="h-30 border-r border-neutral-800 text-center font-quicksand w-full flex flex-col items-center justify-center px-5">
      <h1 className="text-5xl font-bold pb-5 font-sans">{data}+</h1>
      <h1 className="text-neutral-400 leading-7 text-base px-5">{content}</h1>
    </div>
  );
};

const ImgContainer = ({ src, title, forwardLink }) => {
  return (
    <div className="grid relative place-items-center w-full">
      <a href={forwardLink} className="overflow-hidden">
        <img
          src={src}
          className="hover:scale-105 transition-all duration-300 bg-blend-multiply"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
          {title}
        </div>
      </a>
    </div>
  );
};

const Main2 = () => {
  const [hide, setHide] = useState(true);

  return (
    <section className="flex items-center flex-col gap-10 w-full">
      <div className="flex flex-col items-center px-52 gap-4 py-10">
        <h1 className="text-center text-7xl px-10 scroll-animation leading-[80px] font-extrabold text-customRed">
          YOUR FITNESS. OUR MISSION.
        </h1>
        <h1 className="text-center scroll-animation font-quicksand post-card text-xl leading-8 tracking-wide">
          At GymFluencer, our mission is simple: to provide the tools and
          support you need to reach your fitness goals. We combine innovative
          technology with personalized guidance to make fitness easier, more
          accessible, and more motivating. Join us as we help you transform your
          fitness journey, one workout at a time.
        </h1>
      </div>

      <div className="grid grid-cols-3 w-[90%] py-5">
        <NumberRecordContainer data={"463k"} content={"Workouts logged and progress tracked every month"} />
        <NumberRecordContainer data={"163k"} content={"Fitness enthusiasts connected through our platform"} />
        <NumberRecordContainer data={"83k"} content={"Countries where GymFluencer is making an impact"} />
      </div>

      <div className="container-3d flex justify-center w-full">
        <div className="relative flex justify-center shadow-sm shadow-neutral-800 items-center rotatex rounded-2xl tilt-animation overflow-hidden hover:bg-opacity-60 transition-colors bg-neutral-900 bg-opacity-35 duration-300 video-image">
          <div onClick={() => setHide(false)} className="absolute">
            <CirclePlay
              strokeWidth={0.5}
              size={60}
              className="rounded-full shadow-box opacity-40"
            />
          </div>
          <iframe
            src="https://www.youtube.com/embed/pznrAWMhahA"
            allowFullScreen
            className={`${hide ? "opacity-0 scale-0" : "opacity-100 scale-100"
              } h-full w-full transition-all duration-300`}
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col items-center px-52 gap-4 py-10">
        <h1 className="text-center text-4xl px-10 leading-10 font-extrabold text-customRed">
          OUR SERVICES
        </h1>
        <h1 className="text-center font-quicksand text-xl text-white leading-8 tracking-wide px-36">
          GymFluencer offers 5 essential services to help you achieve your
          fitness goals with ease and flexibility.
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 w-full place-items-center">
        <ImgContainer src={track} title={"TRACK"} forwardLink={"#benefits"} />
        <ImgContainer src={analyze} title={"ANALYZE"} forwardLink={"./#benefits"} />
        <ImgContainer src={train} title={"TRAIN"} forwardLink={"./#benefits"} />
        <ImgContainer src={connect} title={"CONNECT"} forwardLink={"./#benefits"} />
        <ImgContainer src={challange} title={"CHALLENGE"} forwardLink={"./#benefits"} />
      </div>
    </section>
  );
};

export default Main2;
