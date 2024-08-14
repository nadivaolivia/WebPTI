import bg_sambutan_baru from "../assets/pti_bg_sambutan.png";
import bg_sambutan from "../assets/bg_sambutan.png";
import teks_sambutan from "../assets/teks_sambutan.png";
import mas_j from "../assets/foto_mas_j.png";
import mb_husna from "../assets/foto_mb_husna.png";
import tag_jabatan from "../assets/tag_jabatan.png";
import { useState } from "react";

const Welcome = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className=" bg-center bg-cover -mt-[55px]"
        style={{ backgroundImage: `url(${bg_sambutan_baru})` }}
      >
        <div className="py-[50px]">
          <img
            className="w-[300px] md:w-[600px] lg:w-[700px] mx-auto "
            src={teks_sambutan}
            alt="teks_sambutan"
          />
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              className="w-[180px] mx-auto"
              src={mas_j}
              alt="foto kahim HMP PTI"
            />
            <div className="flex flex-col items-center">
              <button className="w-[300px] py-1 mx-auto bg-[#1a7431] rounded-[15px] text-white text-[21px]">
                Muhammad Zaini R
              </button>
              <img
                className="h-[10] mx-auto -mt-3"
                src={tag_jabatan}
                alt="tag_jabatan"
              />
              <p className="text-white text-[18px] -mt-10">Kahim</p>
            </div>
          </div>

          <div className="mt-[3rem] md:mt-2 lg:order-4 ">
            <img
              className="w-[180px] mx-auto"
              src={mb_husna}
              alt="foto wakahim HMP PTI"
            />
            <div className="flex flex-col items-center">
              <button className="w-[300px] py-1 mx-auto bg-[#1a7431] rounded-[15px] text-white text-[21px]">
                Husna Lathifunisa A
              </button>
              <img
                className="h-[10] mx-auto -mt-3"
                src={tag_jabatan}
                alt="tag_jabatan"
              />
              <p className="text-white text-[18px] -mt-10">wakahim</p>
            </div>
          </div>
          <div className="mt-[2rem] px-9 col-span-2">
            <p className="text-black font-bold text-justify  ">
              Assalamualaikum Wr Wb. Shalom, Om Swastyasty, Namo Buddhaya, Salam
              Kebajikan Bagi Kita Semua
            </p>
            <br />
            <p
              className={`text-black text-justify ${
                open ? null : "line-clamp-[10]"
              }`}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              est assumenda minima quaerat. Exercitationem nobis rem amet facere
              quam! Dignissimos alias unde quod nam sit tempora debitis
              accusamus expedita ullam atque. Blanditiis quasi explicabo cum
              voluptatibus, soluta sunt pariatur nobis quam tempora quae rerum
              provident vitae quia! In, nisi? Vitae et quisquam dolor sint a,
              exercitationem modi at officia eveniet, voluptatibus tempore nisi
              aperiam maxime illo eos fugiSt omnis mollitia sit reiciendis
              perferendis magni dignissimos. Quia totam debitis nostrum
              accusamus quibusdam maiores corrupti suscipit, magnam, molestias
              earum iusto velit alias pariatur odio reprehenderit aspernatur
              eveniet blanditiis ad sed perspiciatis nihil.
            </p>
            <button onClick={() => setOpen(!open)} className="text-blue-500 ">
              {open ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
            </button>

            <p className="text-black font-bold mt-[1rem]">HMP PTI UNESA 2024</p>

            <p className="text-green-800 text-[20px] lg:text-[26px]  font-bold text-center mt-[2rem] pb-[2rem] lg:pb-[10rem] md:pb-[9rem]">
              #SatukanGagasCiptakanKarya
            </p>
          </div>
         


        </div>
      </div>
    </>
  );
};

export default Welcome;
