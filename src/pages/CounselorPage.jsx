import React from "react";
import { motion } from "framer-motion";

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

const CounselorCard = ({ image, name, qualification, specializations }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
          },
        },
        hidden: { opacity: 1, y: 50 },
      }}
    >
      <div className="mx-auto my-6 overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg bg-primary04 w-64 h-[30rem] hover:scale-105">
        {/* Counselor Image */}

        <img
          className="object-cover mx-auto mt-6 rounded-lg h-52 w-52 "
          src={image}
          alt={`${name}'s Image`}
        />

        {/* Counselor Information */}
        <div className="px-6 py-4">
          {/* Counselor Name */}
          <h2 className="text-2xl font-semibold text-white">{name}</h2>

          {/* Counselor Qualification */}
          <p className="mb-2 text-sm text-primary01">{qualification}</p>

          {/* Counselor Specialization */}

          <h3 className="mt-4 text-lg font-medium text-white">
            Specialization
          </h3>

          <div className="flex flex-wrap gap-2">
            {specializations.map((specialization, index) => (
              <p
                key={index}
                className="p-1 text-sm border rounded-md w-fit text-primary01"
              >
                {specialization}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CounselorPage = () => {
  const text1 = " Meet Our Counselors".split(" ");

  const counselorData = [
    // {
    //   name: "Rashi",
    //   image: RashiImage,
    //   qualification: "M.A. Applied Psychology",
    //   specializations: ["General", "Couples"],
    // },
    {
      name: "Naincy",
      image: NaincyImage,
      qualification: "M.A. Clinical Psychology",
      specializations: ["Trauma", "Substance Abuse"],
    },
    {
      name: "Sonali",
      image: SonaliVermaImage,
      qualification:
        "Diploma in Guidance and Counseling - NCERT, MA Psychology",
      specializations: ["Adolescent", "Queer"],
    },
    {
      name: "Muskan",
      image: MuskanTikooImage,
      qualification: "M.A. Mental Health (TISS Mumbai)",
      specializations: ["Adolescent", "Anxiety and Eating disturbances"],
    },
    {
      name: "Manvi",
      image: ManviSodhiImage,
      qualification: "M.A. Clinical Psychology",
      specializations: ["Adolescent", "Pediatrics"],
    },
    {
      name: "Priyanka",
      image: PriyankaSharmaImage,
      qualification: "M.A. Clinical Psychology",
      specializations: ["Pediatrics", "Adolescent"],
    },
    // {
    //   name: "Charvi",
    //   image: CharviImage,
    //   qualification: "M.A. Clinical Psychology",
    //   specializations: ["Couples", "Trauma"],
    // },
    {
      name: "Rutvij",
      image: RutvijImage,
      qualification: "M.A. Clinical Psychology",
      specializations: ["Adolescent", "Queer"],
    },
    {
      name: "Shivangi",
      image: ShivangiImage,
      qualification: "M.A. Clinical Psychology",
      specializations: ["Adolescent", "Couples"],
    },
    {
      name: "Megha",
      image: MeghaImage,
      qualification: "M.Phil. Psychiatric Social Work",
      specializations: ["Adolescent", "Family"],
    },
    {
      name: "Sanya",
      image: SanyaRanaImage,
      qualification: "M.Sc. Psychology",
      specializations: ["Adolescent"],
    },
    {
      name: "Kashish",
      image: KashishImage,
      qualification: "M.A in Psychology",
      specializations: ["Adolescent", "Trauma"],
    },
    {
      name: "Jasmine",
      image: JasmineImage,
      qualification: "M.Sc. Counseling Psychology",
      specializations: ["Substance Abuse", "Adolescent"],
    },
    {
      name: "Shruti",
      image: ShrutiImage,
      qualification: "M.A. Psychology",
      specializations: ["Couples", "Queer"],
    },
    {
      name: "Shraddha",
      image: ShraddhaSaxenaImage,
      qualification: "M.A. Clinical Psychology",
      specializations: ["Academics/Career", "Workplace related issues"],
    },
    {
      name: "Saloni",
      image: SaloniImage,
      qualification: "M.A. Clinical Psychology",
      specializations: [
        "Work-related Stress",
        "Crisis Intervention",
        "Depression and Anxiety management",
      ],
    },
    {
      name: "Shrinidhi",
      image: ShrinidhiImage,
      qualification: "M.A Psychology (Counselling)",
      specializations: ["Mental Wellness", "Positive Psychotherapy"],
    },
    {
      name: "Lekshmy",
      image: LekshmyImage,
      qualification: "M.A. Pharmacy",
      specializations: ["General"],
    },
    {
      name: "Manjula",
      image: ManjulaImage,
      qualification: "M.A. Psychological Counseling",
      specializations: ["Adolescent", "Trauma"],
    },
    {
      name: "Shraddha",
      image: ShraddhaImage,
      qualification: "M.A Clinical Psychology",
      specializations: ["Social adjustment", "Personality Development"],
    },
    {
      name: "Prerna",
      image: PrernaImage,
      qualification:
        "M.A. Counselling Psychology with a diploma in counseling and guidance.",
      specializations: ["Adolescent", "Couples"],
    },
    {
      name: "Utkarsh",
      image: UtkarshImage,
      qualification: "M.A. Clinical Psychology",
      specializations: ["Trauma", "Occupational Concerns and Life Crisis"],
    },
    {
      name: "Aditi",
      image: AditiImage,
      qualification: "M.A. Clinical Psychology",
      specializations: ["Emotional Dysregulation", "Crisis Management"],
    },
    {
      name: "Kratika",
      image: KartikaImage,
      qualification: "M.A Counseling Psychology",
      specializations: ["General"],
    },
    {
      name: "Felicia",
      image: FeliciaImage,
      qualification: "Master of Science in Counselling Psychology",
      specializations: ["General"],
    },
    {
      name: "Laksha",
      image: LakshaImage,
      qualification: "MA Clinical psychologist and REBT trained therapist",
      specializations: ["Adolescent", "General"],
    },
    {
      name: "Isha",
      image: IshaImage,
      qualification:
        "M.A. Psychology and PG Diploma in Counselling and Family Therapy",
      specializations: ["Trauma", "Adolescent"],
    },
    {
      name: "Jaanvi",
      image: JanviImage,
      qualification: "M.A. Clinical Psychology",
      specializations: ["Substance Abuse", "Adolescent"],
    },
    {
      name: "Vanitha",
      image: VanithaImage,
      qualification: "M.A. Applied Psychology",
      specializations: ["Pediatrics", "Substance Abuse"],
    },
    {
      name: "Aastha",
      image: AsthaImage,
      qualification: "M.A. Psychology",
      specializations: ["Pediatrics", "Adolescent"],
    },
    {
      name: "Namrata",
      image: NamrataImage,
      qualification: "M.A. in Clinical Psychology",
      specializations: ["Couples", "Trauma"],
    },
  ];

  const reversedCounselorData = counselorData.slice().reverse();

  return (
    <div className="container px-[5%] mx-auto">
      <div className="w-full mx-auto max-w-7xl">
        <div className="w-full max-w-5xl mt-8 md:mt-32">
          <div className="px-2 py-1 mb-4 border border-solid rounded-md border-neutral-900 max-w-fit">
            Counselors
          </div>
          <h1 className="md:text-6xl text-4xl font-sans font-semibold text-neutral-900 leading-[1.1] md:mb-6">
            {text1.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>
          <p className="mb-24">
            At Asmi's Mental Health wellness, our psychologists possess a unique
            blend of clinical expertise and genuine compassion. Our meticulous
            selection process ensures a team dedicated to your well-being in a
            safe and supportive environment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center max-w-6xl gap-4 mx-auto mb-32">
          {reversedCounselorData.map((counselor, index) => (
            <CounselorCard key={index} {...counselor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounselorPage;
