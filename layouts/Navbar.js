import { useContext } from "react";
import LayoutContext from "@/contexts/LayoutContext";

import Menu from "@/components/nav/Menu";
import NavItem from "@/components/items/NavItem";

import { MdOutlineMenu, MdClose } from "react-icons/md";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const layout = useContext(LayoutContext);

  return (
    <div className="navbar">
      <div className="wrapper flex items-center justify-between relative">
        <h1 className="nav_title">Playlist Creator</h1>
        <div className="md:flex hidden items-center space-x-5">
          {layout.navItems.map((item, i) => {
            return <NavItem key={i} name={item.name} href={item.href} />;
          })}
        </div>
        <button
          className="md:hidden block text-2xl text-blue-300 hover:text-white"
          onClick={layout.toggleOpen}
        >
          {layout.isOpen ? <MdClose /> : <MdOutlineMenu />}
        </button>
      </div>
      <AnimatePresence>{layout.isOpen && <Menu />}</AnimatePresence>
    </div>
  );
};

export default Navbar;
