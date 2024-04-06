import { motion } from "framer-motion";

import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <motion.div
      initial={{ x: "-200vh" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      <Hero />
    </motion.div>
  );
};

export default HomePage;
