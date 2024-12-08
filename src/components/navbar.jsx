import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import Iconify from "./ui/iconify";

const Navbar = () => {
  return (
    <div className="  flex justify-between px-16 py-5 bg-liteOrange">
      <div>
        <h1 className=" text-xl font-semibold ">E-Commers-Web</h1>
      </div>
      <div>
        <ul className=" flex gap-10">
          <li>
            <Link className=" text-base" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className=" text-base" href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className=" text-base" href={"/shop"}>
              Shop
            </Link>
          </li>
          <li>
            <Link className=" text-base" href={"/contact"}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className=" flex gap-5">
        <Iconify iconName={"proicons:person"} />
        <Iconify iconName={"mynaui:search"} />
        <Iconify iconName={"material-symbols:favorite-outline"} />
        <Iconify iconName={"iconoir:cart"} />
      </div>
    </div>
  );
};

export default Navbar;