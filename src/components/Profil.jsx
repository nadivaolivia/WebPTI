import bg_sambutan from "../assets/pti_bg_sambutan.png";
import teks_profil from "../assets/teks_profil.png";
import { YouTubeEmbed } from "react-social-media-embed";

const Profil = () => {
    return (
     <div
        className=" bg-center bg-cover"
        style={{ backgroundImage: `url(${bg_sambutan})` }}
      >
        <div className="pt-8 lg:pt-1">

         <img className="w-[250px]   lg:w-[600px] lg:h-[250px] mx-auto md:pt-4 lg:pt-20 md:w-[500px] md:h-[120px] lg:pb-10"  src={teks_profil} alt="teks profil" />
        </div>
        <div className="w-[80%] h-[400px] xl:w-[60%] 2xl:w-[50%] mx-auto hidden md:flex justify-center items-center">
          <YouTubeEmbed
            url="https://www.youtube.com/embed/9BsbSFBp3KA?si=OjW7ww_0lRZgFVHj"
            height={"400px"}
            width={"85%"}
            
            />
        </div>
      </div>

    );

};
export default Profil;
