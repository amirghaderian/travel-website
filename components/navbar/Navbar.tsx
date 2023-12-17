import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "..";

const Navbar = () => {
  return (
    <nav
      className=" flexBetween max-container
  padding-container relative z-30 py-5"
    >
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}></Image>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold "
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="login"
          icon="user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        className="inline-block cursor-pointer lg:hidden"
        src="/menu.svg"
        width={32}
        height={32}
        alt={""}
      />
    </nav>
  );
};

export default Navbar;
