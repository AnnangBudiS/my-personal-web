import { motion } from "framer-motion";
import AtroposJs from "../components/test/AtroposJs";
import { MY_PROJECT } from "../data/data";

const MyProject = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex pt-20 lg:pt-0 flex-col min-h-screen items-center justify-center">
        <div className="mb-12 lg:mb-20">
          <h2 className="text-center text-4xl lg:text-6xl font-bold">
            Show Case
          </h2>
          <p className="text-xl font-bold mt-4">
            Presentation of the project I made
          </p>
        </div>
        <section className="flex items-center justify-center gap-5 flex-wrap">
          {MY_PROJECT.map((item) => (
            <AtroposJs
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </section>
      </div>
    </motion.div>
  );
};

export default MyProject;
