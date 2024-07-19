import Navbar from "./components/Navbar";
import Home from "./components/home";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="fixed -z-10 top-0 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-r from-teal-400 to-gray-800"></div>
      </div>

      <div className="mx-auto">
        <Navbar />
        <Home />
        <Welcome />
      </div>
    </div>
  );
}

export default App;
