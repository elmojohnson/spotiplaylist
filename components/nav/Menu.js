import { useContext } from "react";
import LayoutContext from "@/contexts/LayoutContext";

import NavItem from "../items/NavItem";
import { motion } from "framer-motion";

const Menu = () => {
  const layout = useContext(LayoutContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white absolute top-12 left-0 w-full py-4 md:hidden block shadow-lg"
    >
      <div className="flex flex-col space-y-4 wrapper">
        {layout.navItems.map((item, i) => {
          return <NavItem key={i} name={item.name} href={item.href} />;
        })}
      </div>
    </motion.div>
  );
};

export default Menu;
