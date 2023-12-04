import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Hamburger from "./components/hamburger";

const Header = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      return setNavbar(true);
    } else if (window.scrollY > 70) {
      return setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  console.log(isExpanded);
  return (
    <div
      className={`fixed w-full flex flex-row flex-wrap justify-between mb-14 z-50 px-16 gap-4 p-3 ${
        navbar ? "bg-transparent" : "bg-black/50"
      }  transition-all duration-500 ease-in-out`}
    >
      <Banner text={"MyWish"} />
      <Hamburger onClick={() => setIsExpanded(!isExpanded)} />
      <Navbar open={isExpanded} />
    </div>
  );
};

export default Header;
