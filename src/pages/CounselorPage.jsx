import React from "react";
import { motion } from "framer-motion";

const CounselorCard = ({ image, name, qualification, specialization }) => {
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
      <div className="mx-auto my-6 overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg w-60 h-96 hover:scale-105">
        {/* Counselor Image */}

        <img
          className="object-cover w-48 h-48 mx-auto rounded-xl "
          src={image}
          alt={`${name}'s Image`}
        />

        {/* Counselor Information */}
        <div className="px-6 py-4">
          {/* Counselor Name */}
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>

          {/* Counselor Qualification */}
          <p className="mb-2 text-sm text-gray-600">{qualification}</p>

          {/* Counselor Specialization */}

          <h3 className="mt-4 text-lg font-medium text-neutral-900">
            Specialization
          </h3>

          <p className="text-sm text-gray-600">{specialization}</p>
        </div>
      </div>
    </motion.div>
  );
};

const CounselorPage = () => {
  const text1 = " Meet Our Counselors".split(" ");

  const counselorData = [
    {
      name: "Rashi",
      image:
        "https://static.wixstatic.com/media/a75dd9_97156e5afde9424baffda7deeb1591ba~mv2.jpg",
      qualification: "M.A. Applied Psychology",
      specialization: "General, Couples",
    },
    {
      name: "Naincy",
      image:
        "https://static.wixstatic.com/media/8876f7_f234d181bdf94202a492cbec66e875f9~mv2.jpeg",
      qualification: "M.A. Clinical Psychology",
      specialization: "Trauma, Substance Abuse",
    },
    {
      name: "Sonali",
      image:
        "https://static.wixstatic.com/media/754c6f_9387718b5593434d80fd39869c58c29e~mv2.jpg",
      qualification:
        "Diploma in Guidance and Counseling - NCERT, MA Psychology",
      specialization: "Adolescent, Queer",
    },

    {
      name: "Muskan",
      image:
        "https://static.wixstatic.com/media/476584_49befeda825840079d240d548c3ad533~mv2.jpeg",
      qualification: "M.A. Mental Health (TISS Mumbai)",
      specialization: "Adolescent, Anxiety and Eating disturbances",
    },
    {
      name: "Manvi",
      image:
        "https://static.wixstatic.com/media/2e0f7d_68b72d471d3c4dcb852149f01b92e374~mv2.jpg",
      qualification: "M.A. Clinical Psychology",
      specialization: "Adolescent, Pediatrics",
    },
    {
      name: "Priyanka",
      image:
        "https://static.wixstatic.com/media/a03c30_86395bd592cd4e28994717a05901553c~mv2.jpg",
      qualification: "M.A. Clinical Psychology",
      specialization: "Pediatrics, Adolescent",
    },
    {
      name: "Charvi",
      image:
        "https://static.wixstatic.com/media/4a1bf9_86539abf44a546bc9b1d3066172775d2~mv2.jpg",
      qualification: "M.A. Clinical Psychology",
      specialization: "Couples, Trauma",
    },
    {
      name: "Rutvij",
      image:
        "https://static.wixstatic.com/media/590d84_275359005cce48abb679fccea49b86ee~mv2.jpeg",
      qualification: "M.A. Clinical Psychology",
      specialization: "Adolescent, Queer",
    },
    {
      name: "SHIVANGI",
      image:
        "https://static.wixstatic.com/media/1d2989_2231906183394d1da708b61410955b01~mv2.jpg",
      qualification: "M.A. Clinical Psychology",
      specialization: "Adolescent, Couples",
    },
    {
      name: "Megha",
      image:
        "https://static.wixstatic.com/media/dd4c18_85bf0cbda5a54c9dadc2c134a15fa222~mv2.jpg",
      qualification: "M.Phil. Psychiatric Social Work",
      specialization: "Adolescent, Family",
    },
    {
      name: "Sanya",
      image:
        "https://static.wixstatic.com/media/9edf3d_e6c514385bd94da19a8a3bbfde07749f~mv2.jpeg",
      qualification: "M.Sc. Psychology",
      specialization: "Adolescent",
    },
    {
      name: "Kashish",
      image:
        "https://static.wixstatic.com/media/54cd85_34ce5d47aaa14695979359232a324a88~mv2.jpeg",
      qualification: "M.A in Psychology",
      specialization: "Adolescent, Trauma",
    },
    {
      name: "Jasmine",
      image:
        "https://static.wixstatic.com/media/44a23e_7a489ab0342f47a781e16b8be7cb7c64~mv2.jpeg",
      qualification: "M.Sc. Counseling Psychology",
      specialization: "Substance Abuse, Adolescent",
    },
    {
      name: "Shruti",
      image:
        "https://static.wixstatic.com/media/762d71_d895b8875a4b4121802122e70866e7f5~mv2.jpeg",
      qualification: "M.A. Psychology",
      specialization: "Couples, Queer",
    },
    {
      name: "Shraddha",
      image:
        "https://static.wixstatic.com/media/94e4bd_3a5438a1b3cc4e2a814f551a96198aed~mv2.jpg",
      qualification: "M.A. Clinical Psychology",
      specialization: "Academics/Career, Workplace related issues",
    },
    {
      name: "Saloni",
      image:
        "https://static.wixstatic.com/media/be825b_ea59bdc9de434237b3f64b38f418959d~mv2.jpeg",
      qualification: "M.A. Clinical Psychology",
      specialization:
        "Work-related Stress, Crisis Intervention, Depression and Anxiety management",
    },
    {
      name: "Shrinidhi",
      image:
        "https://static.wixstatic.com/media/830f49_c0b45f4808c5447495650fbf55bfcd00~mv2.jpg",
      qualification: "M.A Psychology (Counselling)",
      specialization: "Mental Wellness, Positive Psychotherapy",
    },
    {
      name: "Lekshmy",
      image:
        "https://static.wixstatic.com/media/79f18b_6cd23f87ac6842eb9794b674963a46e0~mv2.jpg",
      qualification: "M.A. Pharmacy",
      specialization: "General",
    },
    {
      name: "Manjula",
      image:
        "https://static.wixstatic.com/media/846f11_0a3946fe64e04e7aadc111e95f5e5dd3~mv2.jpeg",
      qualification: "M.A. Psychological Counseling",
      specialization: "Adolescent, Trauma",
    },
    {
      name: "Shraddha",
      image:
        "https://static.wixstatic.com/media/88b0bb_b555ddd51cb943d99f3c36a3e77ccfb5~mv2.jpg",
      qualification: "M.A Clinical Psychology",
      specialization: "Social adjustment, Personality Development",
    },
    {
      name: "Prerna",
      image:
        "https://static.wixstatic.com/media/196f58_db49e1e007fd42e7ad90161b91be8917~mv2.jpeg",
      qualification:
        "M.A. Counselling Psychology with a diploma in counseling and guidance.",
      specialization: "Adolescent, Couples",
    },
    {
      name: "Utkarsh",
      image:
        "https://static.wixstatic.com/media/828bcd_ee21450898d04e6abf27d3ea3a9d0ec5~mv2.jpg",
      qualification: "M.A. Clinical Psychology",
      specialization: "Trauma, Occupational Concerns and Life Crisis",
    },
    {
      name: "Aditi",
      image:
        "https://static.wixstatic.com/media/cc026d_5fa31b28993946eba189bf899204e289~mv2.jpg",
      qualification: "M.A. Clinical Psychology",
      specialization: "Emotional Dysregulation, Crisis Management",
    },
    {
      name: "Kratika",
      image:
        "https://static.wixstatic.com/media/b9cf87_a498a8a52d8b4f6194ef94ad5cf88d49~mv2.jpeg",
      qualification: "M.A Counseling Psychology",
      specialization: "General",
    },
    {
      name: "Felicia",
      image:
        "https://static.wixstatic.com/media/073bf3_55978df918284ba8926660e804b870a8~mv2.jpg",
      qualification: "Master of Science in Counselling Psychology",
      specialization: "General",
    },
    {
      name: "Laksha",
      image:
        "https://static.wixstatic.com/media/e34c9f_f501b6f086a04d15a3fe079f02bd5fb0~mv2.png",
      qualification: "MA Clinical psychologist and REBT trained therapist",
      specialization: "Adolescent, General",
    },
    {
      name: "Isha",
      image:
        "https://static.wixstatic.com/media/6e5e1c_cf3d402f370d4d119492a4cf97bdcd32~mv2.jpeg",
      qualification:
        "M.A. Psychology and PG Diploma in Counselling and Family Therapy",
      specialization: "Trauma, Adolescent",
    },
    {
      name: "Jaanvi",
      image:
        "https://static.wixstatic.com/media/83f7b0_6a3fd34ef6624c3b80b1837f65e653d5~mv2.jpg",
      qualification: "M.A. Clinical Psychology",
      specialization: "Substance Abuse, Adolescent",
    },
    {
      name: "Vanitha",
      image:
        "https://static.wixstatic.com/media/202f49_2e9315812967430695bec591819be414~mv2.png",
      qualification: "M.A. Applied Psychology",
      specialization: "Pediatrics, Substance Abuse",
    },
    {
      name: "Aastha",
      image:
        "https://static.wixstatic.com/media/301072_1ff43699a71e433992a700799bc64b20~mv2.jpeg",
      qualification: "M.A. Psychology",
      specialization: "Pediatrics, Adolescent",
    },
    {
      name: "Namrata",
      image:
        "https://static.wixstatic.com/media/b4da20_b6a4696547064f8f960f686dbee0de42~mv2.jpg",
      qualification: "M.A. in Clinical Psychology",
      specialization: "Couples, Trauma",
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
