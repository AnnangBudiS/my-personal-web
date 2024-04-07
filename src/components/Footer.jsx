import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="footer items-center p-5 lg:p-10 bg-base-100 container mx-auto z-[1]">
      <aside className="items-center grid-flow-col text-gray-500">
        Copyright © 2024 - Annang Budi S
      </aside>
      <ul className="grid-flow-col space-x-5 md:place-self-center md:justify-self-end text-gray-400 text-2xl">
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="https://www.instagram.com/annangbudi/" target="_blank">
            <FaInstagram />
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="https://www.linkedin.com/in/annangbudis/" target="_blank">
            <FaLinkedinIn />
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="https://www.facebook.com/xannangx" target="_blank">
            <FaFacebook />
          </a>
        </motion.li>
      </ul>
    </footer>
  );
};

export default Footer;
