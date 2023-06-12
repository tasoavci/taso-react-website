import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import EvoGym from "@/assets/EvoGym.png";
import SpaceShooter from "@/assets/SpaceShooterGame.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const MyProjects = ({ setSelectedPage }: Props) => {
  return (
    <section id="myprojects" className="mx-auto min-h-full w-full py-32 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.MyProjects)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto mb-16 flex w-5/6 items-center justify-center"
        >
          <h1 className="cursor-default select-none text-center text-xl font-bold text-taso-10 sm:text-3xl md:text-4xl">
            HERE ARE SOME OF <span className="text-taso-40">MY PROJECTS:</span>
          </h1>
        </motion.div>
        <div className="mt-10">
          <motion.div
            className="relative mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="absolute z-20 flex h-[100%] w-[100%] flex-col items-center justify-center overflow-hidden whitespace-normal rounded-xl bg-black object-cover p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-75 md:p-0">
              <p className=" cursor-default select-none pt-5 text-taso-30 md:pb-10 md:pt-0 md:text-4xl">
                EvoGym Responsive Website
              </p>
              <p className="mb:py-0 cursor-default select-none py-5 text-center text-sm md:text-base">
                You will love this fully responsive website I made with react,
                typescript and tailwindcss!
              </p>
              <a
                target="_blank"
                href="https://github.com/tasoavci/gym-react-typescript-tailwindcss"
              >
                <button className="mb-5 cursor-pointer select-none rounded-xl bg-taso-10 px-6 py-3 text-white transition duration-500 hover:bg-taso-40 md:mb-0 md:mt-5 ">
                  You can check the source codes here!
                </button>
              </a>
            </div>
            <img
              className="mx-auto w-[100%] select-none rounded-xl "
              src={EvoGym}
              alt="evogym"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative m-16 mx-auto flex w-5/6 items-center justify-center "
          >
            <div className="absolute z-20 flex h-full flex-col items-center justify-center overflow-hidden whitespace-normal rounded-xl bg-black object-cover p-10 text-center text-white opacity-0 transition duration-500 hover:opacity-75 md:w-1/2 md:p-0">
              <p className="text- cursor-default select-none pt-5 text-taso-30 md:pb-10 md:pt-0 md:text-4xl">
                Space Shooter Game
              </p>
              <p className="mb:py-0 cursor-default select-none py-5 text-center text-sm md:text-base">
                Space Shooter Game developed by me with PyGame library of Python
              </p>

              <a
                target="_blank"
                href="https://github.com/tasoavci/SpaceShooterGame"
              >
                <button className="mb-5 cursor-pointer select-none rounded-xl bg-taso-10 px-6 py-3 text-white transition duration-500 hover:bg-taso-40 md:mb-0 md:mt-5">
                  You can check the source codes here!
                </button>
              </a>
            </div>
            <img
              className="mx-auto select-none rounded-xl object-cover md:h-1/2 md:w-1/2"
              src={SpaceShooter}
              alt="space-shooter"
            />
          </motion.div>
        </div>
        <div className="mx-auto my-10 w-2/3 md:w-5/6">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            className="cursor-default select-none text-center text-xl font-bold text-taso-10 md:text-3xl"
          >
            Also this website has been made by me using{" "}
            <span className="text-taso-40">
              react,typescript and tailwindcss.
            </span>
          </motion.h1>
          <div className="mx-auto mt-16 w-5/6">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: 80 },
                visible: { opacity: 1, x: 0 },
              }}
              className="cursor-default select-none text-center text-xl font-bold text-taso-10 md:text-3xl"
            >
              You can check my{" "}
              <span className=" object-cover text-taso-40 underline underline-offset-4 transition duration-500 hover:opacity-50 md:underline-offset-8">
                <a target="_blank" href="https://github.com/tasoavci">
                  GitHub
                </a>
              </span>{" "}
              account for more of my projects
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MyProjects;
