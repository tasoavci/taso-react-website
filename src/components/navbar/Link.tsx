import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  classes?: string;
};

const Link = ({ classes, page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      onClick={() => setSelectedPage(lowerCasePage)}
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage ? "underline underline-offset-8 " : ""
      } ${classes} cursor-pointer select-none transition duration-500 hover:scale-90 hover:text-gray-400`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
