import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BgHome from "./assets/bghome.png";
import  Welcome  from "./components/Welcome";
import Tentang from "./components/Tentang";
import Dokumentasi from "./components/Dokumentasi";
import Profil from "./components/Profil";




function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      

    <div className="absolute top-0 -z-10 inset-0 h-[90%] lg:h-full w-full">
        <div className="absolute top-0 z-[-1] w-full h-full xl:h-[150vh]   bg-gradient-to-b from-neutral-900 to-[#1A5319]">
          <div
            className="absolute top-0 z-[-2] w-full h-screen xl:h-[150vh] bg-cover "
          style={{ backgroundImage: `url(${BgHome})` }}



          ></div>
        </div>
      </div>

      <div className="mx-auto">
        <Navbar />
        
        <Home />
        <Welcome />
        <Tentang />
        <Dokumentasi />
        <Profil />
       
        
      </div>
    </div>
  );
}

export default App;
