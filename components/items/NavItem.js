import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ name, href }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`uppercase ${
        router.pathname === href ? "text-white" : "text-blue-300"
      } font-semibold`}
    >
      {name}
    </Link>
  );
};

export default NavItem;
