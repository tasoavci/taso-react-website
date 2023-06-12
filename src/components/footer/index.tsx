import TASOAVCI from "@/assets/TASOAVCI.png";
import github from "@/assets/github.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-taso-20 py-10">
      <div className="mx-auto w-5/6">
        <img
          className="mx-auto h-[50px] w-[200px] select-none object-cover "
          src={TASOAVCI}
          alt="logo"
        />
        <h1 className="mt-5 flex cursor-default select-none items-center justify-center text-lg">
          Copyright © 2023 Tahsin Avcı
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -80 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mx-auto mb-5 mt-10 flex w-1/2 items-center justify-between sm:mb-10 md:mb-0 md:w-1/5"
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
    </footer>
  );
};

export default Footer;
