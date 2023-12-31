import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/components/home";
import MyProjects from "@/components/myProjects";
import TechnologyStack from "@/components/technologyStack";
import ContactMe from "@/components/contactMe";
import Footer from "@/components/footer";

const sections = [
  {
    component: Home,
  },
  {
    component: MyProjects,
  },
  {
    component: TechnologyStack,
  },
  {
    component: ContactMe,
  },
];

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-taso-30">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {sections.map((section) => (
        <section.component setSelectedPage={setSelectedPage} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
