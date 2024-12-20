import { Menu } from "lucide-react";
import { DropDown, Logo } from "./index";

const Navbar = () => {
  return (
    <div className="border border-neutral-700 p-3 w-5/6 rounded-full backdrop-blur-3xl bg-neutral-900 bg-opacity-50 h-20">
      <div className="flex justify-between items-center h-full">
        <div className="pl-5">
          <Logo />
        </div>
        <div className="h-full">
          <ul className="flex justify-evenly items-center text-lg gap-6 h-full text-neutral-400">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li className="h-full">
              <DropDown />
            </li>
            <li><a href="#benefits">Benifits</a></li>
            <li>Blogs</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <div className="p-4 px-9 cursor-pointer bg-customRed text-lg rounded-full flex items-center text-center justify-center">
            Join us now
          </div>
          <Menu className="sm:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
