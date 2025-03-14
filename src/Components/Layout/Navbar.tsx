import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Our Expertise", path: "/" },
    { name: "Our Story", path: "/" },
    { name: "Careers", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socials = [
    {
      name: <FaInstagram className="w-5 h-5" />,
      path: "https://www.instagram.com",
    },
    {
      name: <FaFacebookF className="w-5 h-5" />,
      path: "https://www.facebook.com",
    },
    {
      name: <IoLocationSharp className="w-6 h-6" />,
      path: "https://www.google.com",
    },
  ];

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <nav className="z-50 fixed w-full py-10 px-6 lg:px-12 flex items-center justify-between backdrop-blur-sm bg-white/20">
      <div className="relative -left-[10px] w-40 h-8">
        <img
          src="/BluePintaleLogo.png"
          className="w-full h-full"
          alt="IMG_Logo"
        />
      </div>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => alert("hatt kutte")}
        className="md:hidden"
      >
        {isHovered ? (
          <FaBarsStaggered className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        <div className="flex gap-2 md:gap-5 lg:gap-8 text-[10px] md:text-[14px] lg:text-[16px] font-semibold">
          {links.map((link, index) => (
            <Link to={link.path} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          {socials.map((social, index) => {
            return (
              <a href={social.path} key={index} target="_blank">
                {social.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
