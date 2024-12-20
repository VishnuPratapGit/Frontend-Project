import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DropDown = () => {
  const [hovered, setHoverd] = useState(false);

  return (
    <div
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
      className="relative flex h-full"
    >
      <div className="flex items-center gap-2">
        <h1>Our Services</h1>
        <ChevronDown size={15} />
      </div>

      <div
        className={`${
          hovered ? "block" : "hidden"
        } absolute bg-neutral-900 rounded-xl border dark:border-neutral-700 p-4 px-5 top-12 -translate-x-4`}
      >
        <h1 className="text-nowrap p-1 text-neutral-400 hover:text-neutral-200 transition-all duration-500">
          Workout Plan
        </h1>
        <h1 className="text-nowrap p-1 text-neutral-400 hover:text-neutral-200 transition-all duration-500">
          Diet Plan
        </h1>
      </div>
    </div>
  );
};

export default DropDown;
