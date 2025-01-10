"use client";

import Link from "next/link";
import { jostFont } from "../util/font";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <header className="relative pb-[4.5rem] md:pb-0 z-50">
      <div className="flex backdrop-blur-md fixed md:relative w-full bg-white/30 border-b-2 md:border-none justify-between 2xl:justify-center xl:space-x-10 2xl:space-x-72 items-center lg:px-16 xl:px-28 px-7 sm:px-10 py-6 md:py-14">
        <div>
          <Link href="/" aria-label="selhono">
            <svg
              aria-label="Homepage"
              className="lg:w-[14.1875rem] w-[6rem]"
              width=""
              height=""
              viewBox="0 0 227 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4167 41.6667V22.6167L6.38543 25.7208L5.12918 24.0708L25 8.85417L44.8708 24.0708L43.6146 25.7083L39.5834 22.6167V41.6667H10.4167ZM16.6667 30.7708C16.2361 30.7708 15.8611 30.6111 15.5417 30.2917C15.2222 29.9722 15.0625 29.5972 15.0625 29.1667C15.0625 28.7361 15.2222 28.3611 15.5417 28.0417C15.8611 27.7222 16.2361 27.5625 16.6667 27.5625C17.0972 27.5625 17.4722 27.7222 17.7917 28.0417C18.1111 28.3611 18.2709 28.7361 18.2709 29.1667C18.2709 29.5972 18.1111 29.9722 17.7917 30.2917C17.4722 30.6111 17.0972 30.7708 16.6667 30.7708ZM25 30.7708C24.5695 30.7708 24.1945 30.6111 23.875 30.2917C23.5556 29.9722 23.3958 29.5972 23.3958 29.1667C23.3958 28.7361 23.5556 28.3611 23.875 28.0417C24.1945 27.7222 24.5695 27.5625 25 27.5625C25.4306 27.5625 25.8056 27.7222 26.125 28.0417C26.4445 28.3611 26.6042 28.7361 26.6042 29.1667C26.6042 29.5972 26.4445 29.9722 26.125 30.2917C25.8056 30.6111 25.4306 30.7708 25 30.7708ZM33.3333 30.7708C32.9028 30.7708 32.5278 30.6111 32.2083 30.2917C31.8889 29.9722 31.7292 29.5972 31.7292 29.1667C31.7292 28.7361 31.8889 28.3611 32.2083 28.0417C32.5278 27.7222 32.9028 27.5625 33.3333 27.5625C33.7639 27.5625 34.1389 27.7222 34.4584 28.0417C34.7778 28.3611 34.9375 28.7361 34.9375 29.1667C34.9375 29.5972 34.7778 29.9722 34.4584 30.2917C34.1389 30.6111 33.7639 30.7708 33.3333 30.7708Z"
                fill="#CDA274"
              />
              <path
                d="M66.48 39.72C65.0133 39.72 63.52 39.5333 62 39.16C60.48 38.8133 59.2133 38.3467 58.2 37.76L58.4 32.32H58.8L60.04 34.92C60.4133 35.6667 60.8133 36.3333 61.24 36.92C61.6667 37.48 62.2533 37.92 63 38.24C63.5333 38.5067 64.04 38.6933 64.52 38.8C65.0267 38.88 65.5867 38.92 66.2 38.92C67.8267 38.92 69.1067 38.48 70.04 37.6C71 36.72 71.48 35.5867 71.48 34.2C71.48 32.8933 71.16 31.88 70.52 31.16C69.88 30.4133 68.8533 29.6933 67.44 29L65.8 28.28C63.5067 27.2667 61.7067 26.1067 60.4 24.8C59.12 23.4667 58.48 21.7067 58.48 19.52C58.48 17.9467 58.88 16.5867 59.68 15.44C60.5067 14.2933 61.64 13.4133 63.08 12.8C64.5467 12.1867 66.2533 11.88 68.2 11.88C69.6133 11.88 70.9467 12.0667 72.2 12.44C73.48 12.8133 74.5867 13.32 75.52 13.96L75.28 18.76H74.88L73.24 15.76C72.7867 14.8267 72.3333 14.1733 71.88 13.8C71.4267 13.4 70.9067 13.12 70.32 12.96C69.9733 12.8533 69.6533 12.7867 69.36 12.76C69.0667 12.7067 68.6933 12.68 68.24 12.68C66.88 12.68 65.7333 13.08 64.8 13.88C63.8667 14.6533 63.4 15.7067 63.4 17.04C63.4 18.4 63.76 19.4933 64.48 20.32C65.2 21.12 66.2533 21.84 67.64 22.48L69.48 23.28C72.04 24.4 73.88 25.6 75 26.88C76.12 28.1333 76.68 29.76 76.68 31.76C76.68 34.1067 75.7867 36.0267 74 37.52C72.24 38.9867 69.7333 39.72 66.48 39.72ZM78.5831 39V38.6L79.5031 38.24C79.9565 38.0533 80.2631 37.8133 80.4231 37.52C80.6098 37.2 80.7031 36.7733 80.7031 36.24V15.36C80.7031 14.8267 80.6231 14.4133 80.4631 14.12C80.3298 13.8 80.0098 13.5467 79.5031 13.36L78.5831 13V12.6H97.7431L97.9831 18.76H97.5831L95.8631 15C95.6231 14.52 95.3698 14.1333 95.1031 13.84C94.8365 13.5467 94.4365 13.4 93.9031 13.4H86.7031V24.96H90.9831C91.5165 24.96 91.9165 24.8267 92.1831 24.56C92.4765 24.2667 92.7298 23.88 92.9431 23.4L93.7431 21.8H94.1431V29H93.7431L92.9431 27.32C92.7031 26.84 92.4498 26.4667 92.1831 26.2C91.9165 25.9067 91.5165 25.76 90.9831 25.76H86.7031V38.2H94.7831C95.3165 38.2 95.7298 38.0667 96.0231 37.8C96.3165 37.5067 96.5565 37.1067 96.7431 36.6L98.3831 32.84H98.7831L98.5431 39H78.5831ZM100.771 39V38.6L101.611 38.28C102.171 38.0667 102.517 37.8133 102.651 37.52C102.811 37.2 102.891 36.7733 102.891 36.24V15.36C102.891 14.8267 102.811 14.4 102.651 14.08C102.491 13.76 102.144 13.5067 101.611 13.32L100.771 13V12.6H110.971V13L110.251 13.32C109.744 13.5067 109.397 13.7733 109.211 14.12C109.024 14.44 108.931 14.8667 108.931 15.4V38.2H115.091C116.077 38.2 116.797 37.96 117.251 37.48C117.731 37 118.184 36.3067 118.611 35.4L120.171 32.04H120.571L120.211 39H100.771ZM122.021 39V38.6L122.821 38.28C123.354 38.0933 123.701 37.84 123.861 37.52C124.047 37.2 124.141 36.7867 124.141 36.28V15.36C124.141 14.8267 124.047 14.4 123.861 14.08C123.701 13.76 123.354 13.5067 122.821 13.32L122.021 13V12.6H132.181V13L131.501 13.28C130.994 13.4667 130.647 13.72 130.461 14.04C130.274 14.3333 130.181 14.7467 130.181 15.28V25H139.741V15.28C139.741 14.7467 139.647 14.3333 139.461 14.04C139.301 13.72 138.954 13.4667 138.421 13.28L137.701 13V12.6H147.901V13L147.101 13.32C146.594 13.5067 146.247 13.76 146.061 14.08C145.874 14.4 145.781 14.8267 145.781 15.36V36.28C145.781 36.7867 145.874 37.2 146.061 37.52C146.247 37.84 146.594 38.0933 147.101 38.28L147.901 38.6V39H137.701V38.6L138.421 38.36C138.954 38.1467 139.301 37.8933 139.461 37.6C139.647 37.28 139.741 36.8533 139.741 36.32V25.8H130.181V36.32C130.181 37.3067 130.621 37.9867 131.501 38.36L132.181 38.6V39H122.021ZM161.533 39.72C159.906 39.72 158.333 39.4267 156.813 38.84C155.319 38.2533 153.973 37.3867 152.773 36.24C151.599 35.0667 150.666 33.6133 149.973 31.88C149.279 30.1467 148.933 28.12 148.933 25.8C148.933 23.5067 149.279 21.4933 149.973 19.76C150.666 18.0267 151.613 16.5867 152.813 15.44C154.013 14.2667 155.359 13.3867 156.853 12.8C158.373 12.1867 159.933 11.88 161.533 11.88C163.159 11.88 164.719 12.1733 166.213 12.76C167.733 13.32 169.079 14.1867 170.253 15.36C171.453 16.5067 172.399 17.96 173.093 19.72C173.786 21.4533 174.133 23.48 174.133 25.8C174.133 28.0667 173.786 30.08 173.093 31.84C172.399 33.5733 171.453 35.0267 170.253 36.2C169.079 37.3467 167.733 38.2267 166.213 38.84C164.719 39.4267 163.159 39.72 161.533 39.72ZM161.533 38.88C162.999 38.88 164.186 38.4933 165.093 37.72C165.999 36.92 166.653 35.5733 167.053 33.68C167.479 31.76 167.693 29.1333 167.693 25.8C167.693 22.44 167.479 19.8133 167.053 17.92C166.653 16 165.999 14.6533 165.093 13.88C164.186 13.08 162.999 12.68 161.533 12.68C160.093 12.68 158.919 13.08 158.013 13.88C157.106 14.6533 156.439 16 156.013 17.92C155.613 19.8133 155.413 22.44 155.413 25.8C155.413 29.1333 155.613 31.76 156.013 33.68C156.439 35.5733 157.106 36.92 158.013 37.72C158.919 38.4933 160.093 38.88 161.533 38.88ZM175.548 39V38.6L176.868 38.2C177.348 38.0667 177.695 37.8133 177.908 37.44C178.122 37.04 178.228 36.5733 178.228 36.04V16.8C177.935 16.16 177.695 15.68 177.508 15.36C177.348 15.04 177.162 14.7733 176.948 14.56C176.735 14.32 176.442 14.0267 176.068 13.68L175.388 13V12.6H182.468L195.748 30.72V15.64C195.748 15.1067 195.655 14.6267 195.468 14.2C195.308 13.7733 194.962 13.4933 194.428 13.36L193.108 13V12.6H198.828V13L197.748 13.36C197.268 13.52 196.975 13.8 196.868 14.2C196.762 14.6 196.708 15.0667 196.708 15.6V39.12H194.468L179.188 18.12V36.04C179.188 36.5733 179.268 37.0267 179.428 37.4C179.588 37.7733 179.922 38.04 180.428 38.2L181.628 38.6V39H175.548ZM212.9 39.72C211.273 39.72 209.7 39.4267 208.18 38.84C206.687 38.2533 205.34 37.3867 204.14 36.24C202.967 35.0667 202.033 33.6133 201.34 31.88C200.647 30.1467 200.3 28.12 200.3 25.8C200.3 23.5067 200.647 21.4933 201.34 19.76C202.033 18.0267 202.98 16.5867 204.18 15.44C205.38 14.2667 206.727 13.3867 208.22 12.8C209.74 12.1867 211.3 11.88 212.9 11.88C214.527 11.88 216.087 12.1733 217.58 12.76C219.1 13.32 220.447 14.1867 221.62 15.36C222.82 16.5067 223.767 17.96 224.46 19.72C225.153 21.4533 225.5 23.48 225.5 25.8C225.5 28.0667 225.153 30.08 224.46 31.84C223.767 33.5733 222.82 35.0267 221.62 36.2C220.447 37.3467 219.1 38.2267 217.58 38.84C216.087 39.4267 214.527 39.72 212.9 39.72ZM212.9 38.88C214.367 38.88 215.553 38.4933 216.46 37.72C217.367 36.92 218.02 35.5733 218.42 33.68C218.847 31.76 219.06 29.1333 219.06 25.8C219.06 22.44 218.847 19.8133 218.42 17.92C218.02 16 217.367 14.6533 216.46 13.88C215.553 13.08 214.367 12.68 212.9 12.68C211.46 12.68 210.287 13.08 209.38 13.88C208.473 14.6533 207.807 16 207.38 17.92C206.98 19.8133 206.78 22.44 206.78 25.8C206.78 29.1333 206.98 31.76 207.38 33.68C207.807 35.5733 208.473 36.92 209.38 37.72C210.287 38.4933 211.46 38.88 212.9 38.88Z"
                fill="#292F36"
              />
            </svg>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav
          aria-label="desktop-navigation"
          className={`${jostFont.className} md:flex lg:text-[1.25rem] items-center font-medium md:space-x-7 xl:space-x-10 hidden`}
        >
          <Link href="/">
            <motion.h1
              className={`${
                currentPage === "/" ? "text-[#C76904]" : "text-[#292F36]"
              }`}
              whileHover={{
                color: "#C76904",
              }}
            >
              Home
            </motion.h1>
          </Link>
          <Link href="/about">
            <motion.h1
              className={`${
                currentPage === "/about" ? "text-[#C76904]" : "text-[#292F36]"
              }`}
              whileHover={{
                color: "#C76904",
              }}
            >
              About
            </motion.h1>
          </Link>
          <Link href="/services">
            <motion.h1
              className={`${
                currentPage === "/services"
                  ? "text-[#C76904]"
                  : "text-[#292F36]"
              }`}
              whileHover={{
                color: "#C76904",
              }}
            >
              Services
            </motion.h1>
          </Link>
          <Link href="/project">
            <motion.h1
              whileHover={{
                color: "#C76904",
              }}
              className={`${
                currentPage === "/project" ? "text-[#C76904]" : "text-[#292F36]"
              }`}
            >
              Project
            </motion.h1>
          </Link>
          <Link href="/blog">
            <motion.h1
              whileHover={{
                color: "#C76904",
              }}
              className={`${
                currentPage === "/blog" ? "text-[#C76904]" : "text-[#292F36]"
              }`}
            >
              Blog
            </motion.h1>
          </Link>
          <Link href="/contact">
            <motion.h1
              whileHover={{
                color: "#C76904",
              }}
              className={`${
                currentPage === "/contact" ? "text-[#C76904]" : "text-[#292F36]"
              }`}
            >
              Contact
            </motion.h1>
          </Link>
          <Link href="/team">
            <motion.h1
              whileHover={{
                color: "#C76904",
              }}
              className={`${
                currentPage === "/team" ? "text-[#C76904]" : "text-[#292F36]"
              }`}
            >
              Team
            </motion.h1>
          </Link>
          <svg
            className="cursor-pointer"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                className="stroke-[#C76904]"
                d="M16.6843 16.6844L22 22M19.3756 10.1874C19.3756 15.2616 15.2622 19.3749 10.1881 19.3749C5.11399 19.3749 1.00061 15.2616 1.00061 10.1874C1.00061 5.11332 5.11399 0.999939 10.1881 0.999939C15.2622 0.999939 19.3756 5.11332 19.3756 10.1874Z"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </nav>

        {/* mobile navtools */}
        <motion.button
          aria-label="navbar"
          aria-controls="mobile-navigation"
          onClick={handleNav}
          className="md:hidden"
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaBarsStaggered size={20} />
        </motion.button>

        {/* mobile navigation */}
        <motion.nav
          id="mobile-navigation"
          aria-label="mobile-navigation"
          initial={{ x: "-100%" }}
          animate={{ x: open ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`${jostFont.className} flex flex-col items-center text-[1rem] bg-white z-10 w-[75vw] border-r top-0 h-[100vh] fixed left-0 font-medium space-y-7 md:hidden`}
        >
          <ul className="flex flex-col items-center space-y-12 p-28">
            <li onClick={handleNav}>
              <Link href="/">
                <motion.h1
                  className={`${
                    currentPage === "/" ? "text-[#C76904]" : "text-[#292F36]"
                  }`}
                  whileHover={{
                    color: "#C76904",
                  }}
                >
                  Home
                </motion.h1>
              </Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/about">
                <motion.h1
                  className={`${
                    currentPage === "/about"
                      ? "text-[#C76904]"
                      : "text-[#292F36]"
                  }`}
                  whileHover={{
                    color: "#C76904",
                  }}
                >
                  About
                </motion.h1>
              </Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/services">
                <motion.h1
                  className={`${
                    currentPage === "/services"
                      ? "text-[#C76904]"
                      : "text-[#292F36]"
                  }`}
                  whileHover={{
                    color: "#C76904",
                  }}
                >
                  Services
                </motion.h1>
              </Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/project">
                <motion.h1
                  whileHover={{
                    color: "#C76904",
                  }}
                  className={`${
                    currentPage === "/project"
                      ? "text-[#C76904]"
                      : "text-[#292F36]"
                  }`}
                >
                  Project
                </motion.h1>
              </Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/blog">
                <motion.h1
                  whileHover={{
                    color: "#C76904",
                  }}
                  className={`${
                    currentPage === "/blog"
                      ? "text-[#C76904]"
                      : "text-[#292F36]"
                  }`}
                >
                  Blog
                </motion.h1>
              </Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/contact">
                <motion.h1
                  whileHover={{
                    color: "#C76904",
                  }}
                  className={`${
                    currentPage === "/contact"
                      ? "text-[#C76904]"
                      : "text-[#292F36]"
                  }`}
                >
                  Contact
                </motion.h1>
              </Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/team">
                <motion.h1
                  whileHover={{
                    color: "#C76904",
                  }}
                  className={`${
                    currentPage === "/team"
                      ? "text-[#C76904]"
                      : "text-[#292F36]"
                  }`}
                >
                  Team
                </motion.h1>
              </Link>
            </li>
            <li onClick={handleNav}>
              <svg
                aria-hidden="true"
                className="cursor-pointer"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    className="stroke-[#C76904]"
                    d="M16.6843 16.6844L22 22M19.3756 10.1874C19.3756 15.2616 15.2622 19.3749 10.1881 19.3749C5.11399 19.3749 1.00061 15.2616 1.00061 10.1874C1.00061 5.11332 5.11399 0.999939 10.1881 0.999939C15.2622 0.999939 19.3756 5.11332 19.3756 10.1874Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};
export default Navbar;
