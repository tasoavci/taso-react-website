import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import reactLogo from "@/assets/react.png";
import python from "@/assets/python.png";
import javascript from "@/assets/javascript.png";
import typeScriptLogo from "@/assets/TypeScript.png";
import java from "@/assets/java.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const TechnologyStack = ({ setSelectedPage }: Props) => {
  return (
    <section id="technologystack" className="bg-taso-30">
      <motion.div
        className="mx-auto  w-2/3"
        onViewportEnter={() => setSelectedPage(SelectedPage.TechnologyStack)}
      >
        <div className=" py-32">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            className="cursor-default select-none text-center text-2xl font-bold text-taso-10 sm:text-3xl md:text-4xl"
          >
            THIS IS MY <span className="text-taso-40">TECHNOLOGY STACK</span> SO
            FAR:
          </motion.h1>
        </div>
        {/* TECH STACK */}
        <div className="md:py-10">
          <div className="items-center justify-between md:flex">
            {/* JavaScript */}
            <motion.div
              className="group relative mb-12 flex items-center justify-center md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -80 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                className=" h-[200px] w-[200px] select-none"
                src={javascript}
                alt="javascript"
              />
              <div className="absolute flex h-[200px] w-[200px] items-center justify-center bg-black opacity-0 transition duration-500 group-hover:opacity-60">
                <span className="cursor-default select-none text-center text-3xl text-white">
                  JavaScript
                </span>
              </div>
            </motion.div>
            {/* React */}
            <motion.div
              className=" group relative mb-12 flex items-center justify-center  md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -80 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                className="h-[200px] w-[200px] select-none"
                src={reactLogo}
                alt="react-logo"
              />
              <div className="absolute flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-full bg-black opacity-0 transition duration-500 group-hover:opacity-60">
                <span className="cursor-default select-none text-center text-3xl text-white">
                  React
                </span>
              </div>
            </motion.div>
            {/* TypeScript */}
            <motion.div
              className="group relative mb-12 flex items-center justify-center  md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -80 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                className=" h-[200px] w-[200px] select-none"
                src={typeScriptLogo}
                alt="TypeScript"
              />
              <div className="absolute flex h-[200px] w-[200px] items-center justify-center bg-black opacity-0 transition duration-500 group-hover:opacity-60">
                <span className="cursor-default select-none text-center text-3xl text-white">
                  TypeScript
                </span>
              </div>
            </motion.div>
          </div>
          {/* TECH STACK PY AND JAVA */}
          <div className="items-center justify-between md:mx-auto md:my-20 md:flex md:w-[65%]">
            <motion.div
              className="group relative mb-12 flex items-center justify-center md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -80 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                className=" h-[200px] w-[200px] select-none"
                src={java}
                alt="java"
              />
              <div className="absolute flex h-[200px] w-[200px] items-center justify-center rounded-full bg-black opacity-0 transition duration-500 group-hover:opacity-60">
                <span className="cursor-default select-none text-center text-3xl text-white">
                  Java
                </span>
              </div>
            </motion.div>

            <motion.div
              className="group relative mb-12 flex items-center justify-center md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -80 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                className=" h-[200px] w-[200px] select-none"
                src={python}
                alt="python"
              />
              <div className="absolute flex h-[200px] w-[200px] items-center justify-center rounded-full bg-black opacity-0 transition duration-500 group-hover:opacity-60">
                <span className="cursor-default select-none text-center text-3xl text-white">
                  Python
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechnologyStack;
