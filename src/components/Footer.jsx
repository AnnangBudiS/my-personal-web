import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  function handleLinked() {
    window.location.href = "https://www.linkedin.com/in/annangbudis/";
  }

  return (
    <footer className="footer items-center p-4 bg-base-100 container mx-auto z-[1]">
      <aside className="items-center grid-flow-col text-gray-500">
        Copyright © 2024 - Annang Budi S
      </aside>
      <ul className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-gray-400 text-2xl">
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
