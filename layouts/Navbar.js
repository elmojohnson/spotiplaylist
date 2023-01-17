import { useContext } from "react";
import LayoutContext from "@/contexts/LayoutContext";

import Menu from "@/components/nav/Menu";
import NavItem from "@/components/items/NavItem";

import { MdOutlineMenu, MdClose } from "react-icons/md";
import { BsSpotify } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const layout = useContext(LayoutContext);

  return (
    <div className="navbar">
      <div className="wrapper flex items-center justify-between relative">
        <div className="flex items-center space-x-2">
          <BsSpotify className="text-primary text-2xl" />
          <h1 className="nav_title">Playlist Creator</h1>
        </div>
        <div className="md:flex hidden items-center space-x-5">
          {layout.navItems.map((item, i) => {
            return <NavItem key={i} name={item.name} href={item.href} />;
          })}
        </div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          className="md:hidden block text-2xl text-muted"
          onClick={layout.toggleOpen}
        >
          {layout.isOpen ? <MdClose /> : <MdOutlineMenu />}
        </motion.button>
      </div>
      <AnimatePresence>{layout.isOpen && <Menu />}</AnimatePresence>
    </div>
  );
};

export default Navbar;
