// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import AditiImage from "../assets/image/Counselor/Aditi.jpg";
import AsthaImage from "../assets/image/Counselor/Astha.jpeg";
import CharviImage from "../assets/image/Counselor/Charvi.jpg";
import FeliciaImage from "../assets/image/Counselor/Felicia.jpg";
import IshaImage from "../assets/image/Counselor/Isha.jpeg";
import JanviImage from "../assets/image/Counselor/Janvi.jpg";
import JasmineImage from "../assets/image/Counselor/Jasmine.jpeg";
import KartikaImage from "../assets/image/Counselor/Kartika.jpeg";
import KashishImage from "../assets/image/Counselor/Kashish.jpeg";
import LakshaImage from "../assets/image/Counselor/Laksha.png";
import LekshmyImage from "../assets/image/Counselor/Lekshmy.jpg";
import ManjulaImage from "../assets/image/Counselor/Manjula.jpeg";
import ManviSodhiImage from "../assets/image/Counselor/Manvi Sodhi.jpg";
import MeghaImage from "../assets/image/Counselor/Megha.jpg";
import MuskanTikooImage from "../assets/image/Counselor/Muskan Tikoo.jpeg";
import NaincyImage from "../assets/image/Counselor/Naincy.jpeg";
import NamrataImage from "../assets/image/Counselor/Namrata.jpg";
import PrernaImage from "../assets/image/Counselor/Prerna.jpeg";
import PriyankaSharmaImage from "../assets/image/Counselor/Priyanka Sharma.jpg";
import RashiImage from "../assets/image/Counselor/Rashi.jpg";
import RutvijImage from "../assets/image/Counselor/Rutvij.jpeg";
import SaloniImage from "../assets/image/Counselor/Saloni.jpeg";
import SanyaRanaImage from "../assets/image/Counselor/Sanya Rana.jpeg";
import ShivangiImage from "../assets/image/Counselor/Shivangi.jpg";
import ShraddhaSaxenaImage from "../assets/image/Counselor/Shraddha Saxena.jpg";
import ShraddhaImage from "../assets/image/Counselor/Shraddha.jpg";
import ShrinidhiImage from "../assets/image/Counselor/Shrinidhi.jpg";
import ShrutiImage from "../assets/image/Counselor/Shruti.jpeg";
import SonaliVermaImage from "../assets/image/Counselor/Sonali Verma.jpg";
import UtkarshImage from "../assets/image/Counselor/Utkarsh.jpg";
import VanithaImage from "../assets/image/Counselor/Vanitha.png";
import { NavLink } from "react-router-dom";

const counselorNames = [
  "Aditi",
  "Astha",
  "Charvi",
  "Felicia",
  "Isha",
  "Janvi",
  "Jasmine",
  "Kartika",
  "Kashish",
  "Laksha",
  "Lekshmy",
  "Manjula",
  "Manvi Sodhi",
  "Megha",
  "Muskan Tikoo",
  "Naincy",
  "Namrata",
  "Prerna",
  "Priyanka Sharma",
  "Rashi",
  "Rutvij",
  "Saloni",
  "Sanya Rana",
  "Shivangi",
  "Shraddha Saxena",
  "Shraddha",
  "Shrinidhi",
  "Shruti",
  "Sonali Verma",
  "Utkarsh",
  "Vanitha",
];

const counselorImages = [
  AditiImage,
  AsthaImage,
  CharviImage,
  FeliciaImage,
  IshaImage,
  JanviImage,
  JasmineImage,
  KartikaImage,
  KashishImage,
  LakshaImage,
  LekshmyImage,
  ManjulaImage,
  ManviSodhiImage,
  MeghaImage,
  MuskanTikooImage,
  NaincyImage,
  NamrataImage,
  PrernaImage,
  PriyankaSharmaImage,
  RashiImage,
  RutvijImage,
  SaloniImage,
  SanyaRanaImage,
  ShivangiImage,
  ShraddhaSaxenaImage,
  ShraddhaImage,
  ShrinidhiImage,
  ShrutiImage,
  SonaliVermaImage,
  UtkarshImage,
  VanithaImage,
];
const Carousal = () => {
  return (
    <div className="max-w-[95%] mt-20">
      <NavLink to={"/counselors"}>
        <div className="mb-12 font-sans text-4xl font-semibold text-center text-neutral-900 md:text-5xl">
          Meet Our Counselors
        </div>
      </NavLink>
      <Swiper
        className="mySwiper "
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        // pagination={{ clickable: true }}
      >
        {counselorImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              className="w-[100%] h-[10rem] rounded-3xl"
              alt={`Counselor ${counselorNames[index]}`} // Display counselor name instead of index
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;
