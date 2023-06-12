import { SelectedPage } from "@/shared/types";
import SOFTWAREENGINEERING from "@/assets/SOFTWARE ENGINEERING.png";
import taso from "@/assets/taso3.jpeg";
import instagram from "@/assets/instagram.png";
import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      className="gap-16 bg-taso-30 pb-10 pt-20   md:pb-0 md:pt-10"
      id="home"
    >
      {/* IMAGES */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className=" items-center justify-between md:flex  md:w-full"
      >
        <div className=" flex flex-col md:mx-auto md:w-5/6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-center"
          >
            <img
              className="mt-24 h-[200px] w-[200px] select-none rounded-full object-cover drop-shadow-xl md:h-[250px] md:w-[250px]"
              src={taso}
              alt="tasoavci"
            />
          </motion.div>
          <div className=" mt-20 flex  flex-col justify-center ">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 },
              }}
              className="cursor-default select-none text-center text-5xl font-bold"
            >
              HELLO!
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="mx-auto mt-5 w-5/6 cursor-default select-none text-center text-2xl">
                I am
                <span className="text-2xl font-bold text-black"> Tahsin.</span>
              </h3>
              <p className="mx-auto mt-8 w-5/6 cursor-default select-none text-center text-lg">
                I am a 3rd year software engineering student at{" "}
                <span className="text-xl font-bold text-black">
                  Manisa Celal Bayar University.
                </span>{" "}
                I am improving myself in the field of software engineering. You
                can scroll down for more information!
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mx-auto my-10 flex w-1/2 items-center justify-between"
            >
              <a
                className="cursor-pointer select-none"
                target="_blank"
                href="https://github.com/tasoavci"
              >
                <img
                  className="h-10 w-10 object-cover transition duration-500 hover:scale-90 hover:opacity-50"
                  src={github}
                  alt="github"
                />
              </a>
              <a
                className="cursor-pointer select-none"
                target="_blank"
                href="https://www.instagram.com/tasoavci35/"
              >
                <img
                  className="h-10 w-10 object-cover transition duration-500 hover:scale-90 hover:opacity-50"
                  src={instagram}
                  alt="instagram"
                />
              </a>
              <a
                className="cursor-pointer select-none"
                target="_blank"
                href="https://www.linkedin.com/in/tahsin-avc%C4%B1-763b2b258/"
              >
                <img
                  className="h-10 w-10 object-cover transition duration-500 hover:scale-90 hover:opacity-50"
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mx-auto flex items-center justify-center md:w-[65%]"
        >
          <img
            className=" h-[400px] w-[400px] select-none object-cover md:h-[700px] md:w-[700px] "
            src={SOFTWAREENGINEERING}
            alt="software-engineering"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
