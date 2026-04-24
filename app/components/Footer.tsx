"use client";

import React from "react";
import * as Icons from "react-icons/fa";
import Image from "next/image";

export type SocialLink = {
  name: string;
  icon: string;
  url: string;
};

export type FooterLink = {
  label: string;
  url: string;
};

export type FooterData = {
  logo: {
    image: string;
    title: string;
    subtitle: string;
  };
  socialLinks: SocialLink[];
  links: FooterLink[];
  contact: {
    email: string;
    address: string;
  };
  cta: {
    buttonText: string;
    subText: string;
  };
  copyright: string;
};

export type FooterProps = {
  data: FooterData;
};

const Footer: React.FC<FooterProps> = ({ data }) => {
  const { logo, socialLinks, links, contact, cta, copyright } = data;

  return (
    <footer className="bg-[#f5f5f5] text-gray-800 px-6 md:px-12 py-10">
      {/* 🔹 Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Logo + Social */}
        <div>
          <Image
            src={logo.image}
            alt={logo.title}
            className="h-8 object-contain"
            width={100}
            height={40}
            style={{ width: "100%", height: "auto" }}
          />
          <p className="text-sm text-gray-500 mt-1">{logo.subtitle}</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {socialLinks.map((item, index) => {
              const Icon = Icons[item.icon as keyof typeof Icons];
              return (
                <a
                  key={index}
                  href={item.url}
                  aria-label={item.name}
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="md:text-right">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
            {cta.buttonText}
          </button>
          <p className="text-sm mt-2 text-gray-600">{cta.subText}</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* 🔹 Middle Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Accredian</h3>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>

          <p className="text-gray-700">
            Email us:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-600 hover:underline"
            >
              {contact.email}
            </a>
          </p>

          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Office Address: {contact.address}
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* 🔹 Bottom */}
      <p className="text-center text-sm text-gray-600">{copyright}</p>
    </footer>
  );
};

export default Footer;
