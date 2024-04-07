import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaUserInjured, FaDiagramProject, FaEnvelope } from "react-icons/fa6";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen(true);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden fixed bottom-24 right-5">
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={isOpen ? handleCloseMenu : handleOpenMenu}
          className="btn bg-gray-800 rounded-full"
        >
          {isOpen ? <IoCloseSharp /> : <RiMenu5Fill />}
        </motion.button>

        {isOpen && (
          <ul className="relative">
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="btn rounded-full absolute bottom-16 right-5 "
            >
              <Link to="/about">
                <FaUserInjured />
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="btn rounded-full absolute bottom-0 right-16"
            >
              <Link to="/my-projects">
                <FaDiagramProject />
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="btn rounded-full absolute top-4 right-5"
            >
              <Link to="/contact">
                <FaEnvelope />
              </Link>
            </motion.li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
