import Button from "../../Partials/Button";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="px-10 md:px-14 lg:px-28 py-20 bg-black text-white">
      <div className="flex flex-col md:flex-row md:gap-0 gap-16 justify-between">
        <div className="">
          <h1 className="text-4xl font-bold">
            Let’s turn your
            <br />
            <span className="text-zinc-400">idea into reality</span>
          </h1>

          <div className="mt-4">
            <Button text="Contact Us" invert />
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <IoLocationOutline className="-mt-1 w-10 h-10" />
            <p>
              DNR Residency, 645, Rd Number 35,
              <br />
              Survey of India Colony,
              <br />
              Madhapur Hyderabad,
              <br />
              Telangana 500081
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <IoMailUnreadOutline className="-mt-1 w-10 h-10" />
            <p>bluepintaleclients@gmail.com</p>
          </div>

          <div className="flex gap-4 mt-10">
            <Link to={"/"}>
              <FaInstagram className="size-8" />
            </Link>
            <Link to={"/"}>
              <FaLinkedin className="size-8" />
            </Link>
            <Link to={"/"}>
              <FaYoutube className="size-8" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-20 text-sm">
        <div className="flex flex-col md:flex-row gap-1 md:gap-4">
          <Link to={"/"}>Privacy Policy</Link>
          <Link to={"/"}>Terms & Conditions</Link>
        </div>
        <div className="mt-10 md:mt-0">
          Copyrights 2025. All rights reserved.
        </div>
      </div>
    </div>
  );
}
