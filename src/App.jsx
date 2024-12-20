import "./App.css";
import { Navbar, Main1, Main2, Main3 } from "./components/index";

const App = () => {
  return (
    <div className="bg-neutral-950 font-orbitron">
      <nav className="flex justify-center sticky top-10 z-10 w-full">
        <Navbar />
      </nav>
      <div className="relative -top-20">
        <Main1 />
        <Main2 />
        <Main3 />
      </div>
    </div>
  );
};

export default App;
