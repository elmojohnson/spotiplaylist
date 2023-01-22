import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useLayout = () => {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const handleScrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Create",
      href: "/playlists/create",
    },
    {
      name: "Account",
      href: "/account",
    },
  ];
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  // Check if logged in
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push("/account/login");
    }
  }, []);

  // Scroll to top
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  });

  return { navItems, isOpen, toggleOpen, showButton, handleScrollToTop };
};

export default useLayout;
