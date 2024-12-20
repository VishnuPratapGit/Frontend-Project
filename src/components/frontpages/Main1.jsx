import React from "react";
import "./Main1.css";
const Main1 = () => {
  return (
    <div className="min-h-svh flex items-center heroimage">
      <div className="flex flex-col items-center px-36 gap-4">
        <h1 className="text-center text-[85px] leading-[100px] scale-animation font-[900] text-customRed">
          Track Your Fitness Journey
        </h1>
        <h1 className="text-center font-quicksand text-base leading-7 scale-animation tracking-wider px-48">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with ease.
        </h1>
      </div>
    </div>
  );
};

export default Main1;
