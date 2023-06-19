import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import TASOAVCI from "@/assets/TASOAVCI.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-black/20 backdrop-blur drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full  py-6`}
      >
        <div className={`${flexBetween} mx-auto w-[90%] `}>
          {/* LOGO */}
          <div>
            <img
              className="h-[50px] w-[150px] cursor-default select-none object-cover"
              src={TASOAVCI}
              alt="logo"
            />
          </div>
          {/* LINKS AND CONTACT */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} basis-[80%]`}>
              {/* LINKS */}
              <div className={`${flexBetween} gap-16 text-lg `}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="My Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Technology Stack"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>

              {/* CONTACT */}
              <div className={`${flexBetween} `}>
                <ActionButton
                  setSelectedPage={setSelectedPage}
                  children="Contact Me"
                />
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-taso-10 p-3"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 font-bold text-white" />
            </button>
          )}
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0 },
          }}
          className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-taso-10 drop-shadow-xl
         "
        >
          <div className="flex items-center justify-end p-10">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className=" h-8 w-8 text-white"></XMarkIcon>
            </button>
          </div>
          <div className=" ml-[33%] flex flex-col gap-8">
            <Link
              classes="text-taso-30 text-xl"
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              classes=" text-taso-30 text-xl"
              page="My Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              classes=" text-taso-30 text-xl"
              page="Technology Stack"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              classes="text-taso-30 text-xl"
              page="Contact Me"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
