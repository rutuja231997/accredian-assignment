"use client";

import logo from "../../public/logo.jpg";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const nav_item = [
  { id: "1", name: "Home", link: "#home" },
  { id: "2", name: "Stats", link: "#stats" },
  { id: "3", name: "Clients", link: "#clients" },
  { id: "4", name: "Accredian Edge", link: "#accredianEdge" },
  { id: "5", name: "CAT", link: "#cat" },
  { id: "6", name: "How It Works", link: "#howItWorks" },
  { id: "7", name: "FAQs", link: "#faqs" },
  { id: "8", name: "Testimonials", link: "#testimonials" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-auto bg-white border border-gray-200">
      <div className="relative flex flex-row px-4 py-3 justify-between items-center">
        <div className="">
          <Image
            src={logo}
            alt="logo"
            height={100}
            width={150}
            className="w-full h-auto"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="">
          {/* desktop menu */}
          <ul className="hidden md:flex gap-8">
            {nav_item.map((item) => (
              <li key={item.id}>
                <a className="font-semibold text-base" href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* mobile menu buttons */}
          {!open ? (
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <HiMenuAlt3 size={30} />
            </button>
          ) : (
            <button className="md:hidden" onClick={() => setOpen(false)}>
              <RxCross1 size={30} />
            </button>
          )}
        </div>

        {open && (
          <div className="absolute right-4 top-full mt-2 z-50">
            <div className="rounded-xl bg-transparent border border-gray-200 w-40  h-auto p-4">
              <ul className="flex flex-col justify-between items-start gap-3">
                {nav_item.map((item) => (
                  <li className="font-semibold text-base" key={item.id}>
                    <a
                      onClick={() => setOpen(false)}
                      className="font-semibold text-base"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
