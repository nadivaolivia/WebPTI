import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Home from "./components/home";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="fixed -z-10 top-0 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-b from-neutral-900 to-green-900"></div>
      </div>

      <div className="mx-auto">
        <Navbar />
        <Welcome />
        <Home />
        
      </div>
    </div>
  );
}

export default App;
