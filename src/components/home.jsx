import Gedung from "../assets/gedungTi.png";
import Pembatas from "../assets/pembatas.png";
const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center pt-20">
            <div className="flex items-center flex-col lg:items-start">
            <h1 className="text-white text-[20px] md:text-[40px] lg:text-[60px]">Welcome To</h1>
            <div className=" text-[40px] font-bold flex flex-col items-center md:text-[50px] text-white  lg:text-[80px] lg:items-start">
                <span>HMP PTI</span>
                <span className="lg:-mt-10">UNESA 2024</span>
            </div>
            </div>
           
            <img className="w-[300px] md:w-[600px] lg:w-[700px]" src={Gedung} alt="" />
        </div>
        <div className=" mt-[16px] w-full  md:mt-16 lg:mt-10">
        <img className="lg:h-[200px] w-full h-[180px]" src={Pembatas} alt="" />

        </div>
       
        
        </> 
    );
};
export default Home;