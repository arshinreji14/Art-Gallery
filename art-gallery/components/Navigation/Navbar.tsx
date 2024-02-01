"use client";
import Image from "next/image";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
export default function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handileDropdownClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const [isSearchVisible, setSearchVisible] = useState(false);
  const handileSearchClick = () => {
    console.log("clicked");

    setSearchVisible(!isSearchVisible);
  };
   
  const handileDropdownClose = () => {
    console.log("clicked");

    setSearchVisible(false);
  };
  
  return (
    <main className="">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/icon/ArtLogo.png"
              className=""
              alt="Art Gallery"
              width={50}
              height={50}
            />
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Art Gallery
            </h1>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <MdSearch size={25} onClick={handileSearchClick} />
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MdSearch size={25} />
                <span className="sr-only">Search icon</span>
              </div>
              <div className="flex">
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                ></input>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <MdSearch size={25} />
                  <span className="sr-only">Search</span>
                </button>
                <Link href={"/cart"}>
                  <Image
                    src="/icon/shopping.png"
                    className="ml-8"
                    alt="cart"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>
            <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open main menu</span>
              <HiOutlineMenuAlt3 size={100} onClick={handileDropdownClick} />
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <HiOutlineMenuAlt3 />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              ></input>
            </div>

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/gallery"
                  className="block py-2 px-3 text-white rounded md:bg-transparent -700 md:p-0 hover:text-blue-600"
                  aria-current="page"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/artistinfo"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Artist info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isSearchVisible && (
        <form className="flex items-center mt-2">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ..."
              required
            ></input>
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <MdSearch />
            <span className="sr-only">Search</span>
          </button>
        </form>
      )}
      {isDropdownVisible && (
        <div className="z-10 absolute right-3 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
              onClick={handileDropdownClose}
                href="/gallery"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/shop" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="artistinfo"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Artist info
              </Link>
            </li>
            <li>
              <Link
                href="cart"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
}
