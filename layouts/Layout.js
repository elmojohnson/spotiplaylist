import useLayout from "@/hooks/useLayout";
import LayoutContext from "@/contexts/LayoutContext";

import Navbar from "./Navbar";
import Head from "next/head";

import { MdArrowUpward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  const layout = useLayout();

  return (
    <LayoutContext.Provider value={layout}>
      <Head>
        <title>Playlist Creator</title>
      </Head>
      <div>
        <Navbar />
        <main className="wrapper py-4">{children}</main>
        <AnimatePresence>
          {layout.showButton && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="btn bg-primary fixed md:bottom-4 bottom-6 md:right-4 right-6 shadow text-white text-xl"
              onClick={layout.handleScrollToTop}
            >
              <MdArrowUpward />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
