import pembatas_batik from "../assets/pembatas_batik.svg";
import bg_sambutan_baru from "../assets/pti_bg_sambutan.png";
import teks_tentang from "../assets/teks_tentang.png";
import logo_teks from "../assets/logo_teks.png";
import pembatas from "../assets/pembatas.png";

const tentang = () => {

    return (
        <>
 

    <div className=" w-full h-full bg-center bg-no-repeat bg-cover -mt-[50px] pt-[60px]  " style={{ backgroundImage: `url(${bg_sambutan_baru})` }}>
        <div>

    <img className="absolute mx-auto -mt-[30px] md:-mt-[118px]  lg:-mt-[150px] " src={pembatas_batik} alt="pembatas" />
        </div>
    
            <img className="w-[300px]  lg:w-[700px] mx-auto pt-8 md:pt-4 lg:pt-20 md:w-[600px] lg:pb-10"  src={teks_tentang} alt="teks tentang" />
            <div className="lg:grid lg:grid-cols-2">
                <div className="order-2">

            <img className="w-[300px] md:w-[600px] lg:w-[700px] mx-auto pt-3 lg:-mt-12 " src={logo_teks} alt="logo HMP PTI" />
                </div>
            
                <div>
                <p className="text-black font-bold mt-[1rem] text-justify text-lg px-9 pb-3 lg:text-[32px] lg:pb-7">Pengertian HMP PTI UNESA</p>
            <p className="text-black text-center text-[10px] text-justify px-9 text-base pb-6 lg:text-[28px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus placeat deleniti! A nisi soluta provident neque vel suscipit itaque, vitae fugiat. Obcaecati, architecto! Corporis optio possimus fugit consequatur alias quisquam, labore mollitia maiores officia voluptatum beatae, qui molestiae quis totam atque necessitatibus voluptate quae illum odit eius quibusdam! Commodi, magni nobis! Cumque delectus error fuga asperiores porro voluptatibus eveniet reiciendis quam provident harum vero temporibus similique possimus culpa recusandae dolorem, tempora saepe vel dignissimos modi inventore eligendi atque repudiandae sapiente? Unde possimus voluptatum debitis reiciendis exercitationem eos enim, assumenda soluta optio, qui autem deserunt? Enim quos quod corrupti aliquid.</p>

            <button className=" px-5 py-1 ml-8 mx-auto hover:bg-[#1a7431] rounded-[15px] text-black text-[18px] ring-1 ring-[#1a7431] hover:text-white hover:fill-white mb-20">Lihat Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 24 24" style={{display: 'inline'}}>
  <path d="M17.2928932,13 L7.5,13 C7.22385763,13 7,12.7761424 7,12.5 C7,12.2238576 7.22385763,12 7.5,12 L17.2928932,12 L14.1464466,8.85355339 C13.9511845,8.65829124 13.9511845,8.34170876 14.1464466,8.14644661 C14.3417088,7.95118446 14.6582912,7.95118446 14.8535534,8.14644661 L18.8535534,12.1464466 C19.0488155,12.3417088 19.0488155,12.6582912 18.8535534,12.8535534 L14.8535534,16.8535534 C14.6582912,17.0488155 14.3417088,17.0488155 14.1464466,16.8535534 C13.9511845,16.6582912 13.9511845,16.3417088 14.1464466,16.1464466 L17.2928932,13 Z"/>
</svg>
 </button>
                </div>
            </div>
            
         
        
    
        
         
    </div>
 
            <div className=" -mt-[50px] w-full  md:-mt-12 lg:-mt-16  ">
        <img className="lg:h-[200px] w-full h-[180px]" src={pembatas} alt="" />
            
        </div>
        </>
    )
}

export default tentang;