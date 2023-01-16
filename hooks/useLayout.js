import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useLayout = () => {
  const router = useRouter();

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
      router.push("/account/login")
    }
  }, []);

  return { navItems, isOpen, toggleOpen };
};

export default useLayout;
