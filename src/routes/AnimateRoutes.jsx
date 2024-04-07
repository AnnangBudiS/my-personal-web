import { Routes, Route, useLocation } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { HomePage, AboutPage, MyProject, Contact } from "../pages";

import { motion, AnimatePresence } from "framer-motion";

const AnimateRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <motion.div
          className="fixed w-screen h-screen bg-gray-900 rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 left-0 bottom-0 uppercase right-0 font-bold text-white text-4xl md:text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {location.pathname.substring(1)}
        </motion.div>
        <motion.div
          className="fixed w-screen h-screen bg-gray-950  rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/my-projects" element={<MyProject />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
