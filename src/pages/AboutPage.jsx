import { motion } from "framer-motion";
import { SKILL_TREE } from "../data/data";

import profileImage from "../assets/profile.png";
import harisenin from "../assets/harisenin.jpg";
import reactsertificate from "../assets/react-sertifikat.jpg";
import webSertificate from "../assets/web-dev-sertifikat.jpg";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ x: "-200vh" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col justify-center md:flex-row md:gap-32 lg:gap-48 py-24">
        <div>
          {/* Biography */}
          <section>
            <h2 className="text-2xl font-bold mb-2">
              🎨Hay, Welcome to my Portfolio!🎨
            </h2>
            <ul className="p-5 ">
              <li className="max-w-md mb-20">
                <p>
                  Hello! I'm Annang Budi S, or commonly known as Annang. I am a
                  Computer Technology student majoring in D3 from the University
                  of Digital Technology Indonesia who is currently on leave.
                  Nevertheless, I remain active and enthusiastic about
                  self-development. In addition to working full-time at the
                  Attorney General's Office of the Republic of Indonesia, I also
                  explore the world of web development as a Freelance Front End
                  Developer.
                </p>
              </li>
              <li className="max-w-md mb-20">
                <p className="text-xl font-bold mb-2">
                  🌟 Exploring the Digital World:
                </p>
                <p className="pl-8">
                  From the city of Yogyakarta, I bring enthusiasm and creativity
                  to create engaging web experiences. I have skills in ReactJs
                  and experience in taking Web Developer courses as well as the
                  Harisenin bootcamp, which have helped me grow in the field of
                  web development.
                </p>
              </li>
              <li className="max-w-md mb-20">
                <p className="text-xl font-bold mb-2">
                  💼 Balancing Between Two Worlds:
                </p>
                <p className="pl-8">
                  As someone with responsibilities at the Attorney General's
                  Office, I have learned the importance of balancing between my
                  main job and personal interests. Being a Freelance Front End
                  Developer allows me to express my creativity in the digital
                  world while still focusing on my duties at the Attorney
                  General's Office.
                </p>
              </li>
              <li className="max-w-md mb-20">
                <p className="text-xl font-bold mb-2">🚀 Explore Together:</p>
                <p className="pl-8">
                  With a spirit of adventure and courage, I approach every web
                  development project as a challenge to be overcome. I strive to
                  create web experiences that are not only functional but also
                  inspiring and captivating for users.
                </p>
              </li>
              <li className="max-w-md mb-20">
                <p>
                  Thank you for visiting my portfolio! Let's explore the digital
                  world together and create captivating works. Let's embark on a
                  new adventure together ! 🚀
                </p>
              </li>
            </ul>
          </section>
          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Skills</h2>
            <ul className="grid grid-cols-3 gap-5 max-w-md p-5">
              {SKILL_TREE.map((item) => (
                <motion.li
                  key={item.title}
                  className="btn btn-outline"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.title}
                </motion.li>
              ))}
            </ul>
          </section>
          {/* Certificate */}
          <section>
            <h2 className="text-2xl font-bold mb-2">Certificate</h2>
            <ul className="flex gap-5">
              <li className="w-52">
                <img src={harisenin} alt="harisenin" />
              </li>
              <li className="w-52">
                <img src={reactsertificate} alt="react-js" />
              </li>
              <li className="w-52">
                <img src={webSertificate} alt="web-development" />
              </li>
            </ul>
          </section>
        </div>
        <div className="h-screen sticky top-24">
          <img
            src={profileImage}
            alt="about"
            className="max-w-md object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
