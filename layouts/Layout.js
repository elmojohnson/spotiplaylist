import useLayout from "@/hooks/useLayout";
import LayoutContext from "@/contexts/LayoutContext";

import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  const layout = useLayout();

  return (
    <LayoutContext.Provider value={layout}>
      <Head><title>Playlist Creator</title></Head>
      <div>
        <Navbar />
        <main className="wrapper py-4">{children}</main>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
