import { mobile, time, plan, graph } from "../../index"
import { Users } from 'lucide-react';
import ContentBox from "./ContentBox";
import Carousel from "./Carousel";
import Marquee from "react-fast-marquee";
import GridItems from "./GridItems";
import "./Main3.css";

const Main3 = () => {
    return (
        <div id="benefits" className="flex flex-col min-h-svh w-full pt-20">
            <div className="flex justify-center">
                <span className="p-3 rounded-full font-quicksand font-semibold bg-neutral-900 border border-neutral-800 mx-auto text-nowrap">
                    ⭐ Our Benefits
                </span>
            </div>

            <div className="pt-20">
                <ContentBox headingCss="text-5xl font-semibold" contentCss="text-base w-1/2 px-16" heading={"Discover GymFluencer Benefits"} content={"Unlock your full potential with GymFluencer your personal fitness partner for progress and motivation"} />
            </div>

            <div className="px-24 py-20">
                <div className="grid grid-cols-3 gap-5">
                    <div className="border p-7 rounded-3xl border-neutral-800 hover:border-stone-700 transition-all duration-200 bg-stone-950">
                        <GridItems heading={"Effortless Workout Logging"} content={"Easily log your workouts and monitor your progress over time with our intuitive logging feature."} >
                            <Users size={30} />
                        </GridItems >
                    </div>
                    <div className="grid place-items-center row-span-2 overflow-hidden p-4">
                        <img src={mobile} id="mobile-img" />
                    </div>
                    <div className="border p-7 rounded-3xl border-neutral-800 hover:border-stone-700 transition-all duration-200 bg-stone-950">
                        <GridItems heading={"Personalized Workout Plans"} content={"AI-powered workout plans tailored to your fitness level, goals, and progress."} >
                            <Users size={30} />
                        </GridItems >
                    </div>
                    <div className="border p-7 rounded-3xl border-neutral-800 hover:border-stone-700 transition-all duration-200 bg-stone-950">
                        <GridItems heading={"Accurate Rep Counting"} content={"Count your reps accurately with our app, ensuring consistency and improved performance."} >
                            <Users size={30} />
                        </GridItems >
                    </div>
                    <div className="border p-7 rounded-3xl border-neutral-800 hover:border-stone-700 transition-all duration-300 bg-stone-950">
                        <GridItems heading={"Calorie Calculation & Personalized Diet Plans"} content={"Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness."} >
                            <Users size={30} />
                        </GridItems >
                    </div>
                </div>
            </div>

            <div className="bgimage px-20 py-32 overflow-hidden">
                <div className="grid grid-cols-2">
                    <div>
                        <div className="flex flex-col gap-10 pr-28">
                            <h1 className="text-customRed leading-10 text-4xl font-extrabold">{"YOUR PERSONALISED FITNESS HUB"}</h1>
                            <h1 className="font-quicksand font-medium">Personalized workout routines tailored to your goals and preferences</h1>
                            <h1 className="font-quicksand font-medium">Get expert guidance with virtual coaching sessions, available anytime, anywhere.</h1>
                            <h1 className="font-quicksand font-medium">Track your fitness journey with detailed analytics, goal setting, and achievements.</h1>
                        </div>
                    </div>

                    <div>
                        <Carousel>
                            <div className="inactive-scale">
                                <img src={graph} />
                            </div>
                            <div className="inactive-scale transition-all duration-500">
                                <img src={time} />
                            </div>
                            <div className="inactive-scale transition-all duration-500">
                                <img src={plan} />
                            </div>
                            <div className="inactive-scale transition-all duration-500">
                                <img src={graph} />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="">
                <Marquee autoFill={true} gradient={false} speed={80} pauseOnHover={true} className="p-2 bg-customRed uppercase font-semibold text-xs font-quicksand tracking-wide">
                    <div className="flex gap-2 px-1">
                        <div>workout routines</div>
                        <h1>·</h1>
                        <div>progress Tracking fitness Plans</div>
                        <h1>·</h1>
                    </div>
                </Marquee>
            </div>
        </div>
    )
};

export default Main3;
