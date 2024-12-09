import { BsPersonExclamation } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartDropDown from "@/components/CartDropDown"

export default function Navbar() {
  return (
    <header className="shadow-sm w-full mx-auto px-4 sm:px-6 text-xl fixed bg-transparent md:px-16 lg:px-32">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link 
          href="/" 
          className="transform transition-transform duration-300 hover:scale-105"
        >
          <Image 
            src={"/logo.png"} 
            alt="Logo" 
            width={50} 
            height={50}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="flex items-center gap-12">
          <nav className="hidden md:flex gap-x-12 justify-center">
            {["Home", "Shop", "About", "Contact"].map((item, index) => (
              <Link 
                key={index}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="text-gray-800 hover:text-black relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {[
            { Icon: BsPersonExclamation, href: "/myaccount" },
            { Icon: FiSearch, href: "/" },
            { Icon: IoMdHeartEmpty, href: "/shop" },
            { Icon: IoCartOutline, href: "/cart", isCart: true }
          ].map(({ Icon, href, isCart }, index) => (
            isCart ? (
              <Sheet key={index}>
                <SheetTrigger>
                  <div className="text-gray-800 hover:text-black transform transition-transform duration-300 hover:scale-110 active:scale-95">
                    <Icon size={20} />
                  </div>
                </SheetTrigger>
                <SheetContent className="p-4">
                  <CartDropDown/>
                </SheetContent>
              </Sheet>
            ) : (
              <Link 
                key={index}
                href={href} 
                className="text-gray-800 hover:text-black transform transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                <Icon size={20} />
              </Link>
            )
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="transform transition-transform duration-300 hover:scale-110 active:scale-95">
              <RxHamburgerMenu size={20} />
            </SheetTrigger>

            <SheetContent className="p-4">
              {/* Mobile Icons */}
              <div className="mt-6 flex items-center justify-around">
                {[
                  { Icon: BsPersonExclamation, href: "/myaccount" },
                  { Icon: FiSearch, href: "/" },
                  { Icon: IoMdHeartEmpty, href: "/shop" },
                  { Icon: IoCartOutline, href: "/cart" }
                ].map(({ Icon, href }, index) => (
                  <Link 
                    key={index}
                    href={href} 
                    className="text-gray-800 hover:text-black transform transition-transform duration-300 hover:scale-110 active:scale-95"
                  >
                    <Icon size={24} />
                  </Link>
                ))}
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-8 text-lg mt-12 p-5">
                {["Home", "Shop", "About", "Contact"].map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-lg font-medium text-gray-900 block relative group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}