import bg_sambutan from "../assets/pti_bg_sambutan.png";
import teks_profil from "../assets/teks_profil.png";
import { YouTubeEmbed } from "react-social-media-embed";
import hiasan_logo_flip from "../assets/hiasan_logo_flip.png";
import logo_kabinet from "../assets/logo_kabinet.png";

const Profil = () => {
    return (
     <div
        className=" bg-center bg-cover -mt-10 h-full md:pb-20  "
        style={{ backgroundImage: `url(${bg_sambutan})` }}
      >
        <div className="pt-8 lg:pt-1">

         <img className="w-[250px]   lg:w-[600px] lg:h-[250px] mx-auto md:pt-4 lg:pt-20 md:w-[500px] md:h-[120px] lg:pb-10 xl:-mt-12"  src={teks_profil} alt="teks profil" />
        </div>
        <div className="w-[80%] h-[400px] xl:w-[80%] 2xl:w-[50%] mx-auto hidden md:flex justify-center items-center pt-20 xl:-mt-12 md:pb-60 md:pt-60">
          <YouTubeEmbed
            url="https://www.youtube.com/embed/9BsbSFBp3KA?si=OjW7ww_0lRZgFVHj"
            height={"400px"}
            width={"85%"}
            
            />
        </div>
{/* tampilan mobile */}
        <div className="w-[80%]  xl:w-[60%] 2xl:w-[50%] mx-auto md:hidden  justify-center items-center pt-5 pb-10">
          <YouTubeEmbed 
            url="https://www.youtube.com/embed/9BsbSFBp3KA?si=OjW7ww_0lRZgFVHj"
            height={"200px"}
            width={"100%"}
            
            />
        </div>

       <div>
       <img className="w-[250px] md:w-[500px] lg:w-[500px] mx-auto "  src={hiasan_logo_flip} alt="hiasan logo" />
       <img className="w-[200px] md:w-[380px] lg:w-[380px] mx-auto pb-10 "  src={logo_kabinet} alt="logo kabinet" />
       </div>
      </div>

    );

};
export default Profil;
