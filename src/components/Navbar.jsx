import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { SIDEBAR_DATA } from "../data/data";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full z-[1] navbar bg-base-100 lg:px-52">
      <div className="navbar-start">
        <NavLink to="/" className="text-xl font-bold">
          ABS/<span className="text-emerald-400">Dev</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {SIDEBAR_DATA.map((item) => (
            <li key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-xl"
          href="https://github.com/AnnangBudiS"
          target="_blank"
        >
          <FaGithub />
        </motion.a>
      </div>
    </div>
  );
};

export default Navbar;
