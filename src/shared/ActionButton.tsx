import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="cursor-pointer select-none rounded-xl bg-taso-10 px-6 py-3 text-lg text-taso-30 transition duration-500 hover:bg-taso-20 hover:text-taso-10"
      onClick={() => setSelectedPage(SelectedPage.ContactMe)}
      href={`#${SelectedPage.ContactMe}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
