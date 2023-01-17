import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ name, href }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${
        router.pathname === href ? "text-primary" : "text-muted"
      } font-semibold`}
    >
      {name}
    </Link>
  );
};

export default NavItem;
