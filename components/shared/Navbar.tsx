import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/Button";

const Navbar = () => {
  return (
    <header className="h-20 w-full border-b border-gray flex items-center bg-white">
      <div className="wrapper grid grid-cols-3 gap-20 items-center justify-between">
        {/* LEFT NAV */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="" className="link-item">
                link 1
              </Link>
            </li>
            <li>
              <Link href="" className="link-item">
                link 2
              </Link>
            </li>
            <li>
              <Link href="" className="link-item">
                link 3
              </Link>
            </li>
          </ul>
        </nav>
        {/* MID NAV */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link href="/" className="lowercase text-3xl font-bold text-pink">
                Mimosa
              </Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav>
          <ul className="flex gap-5 justify-end items-center">
            <li>
              <Link href="" className="link-item">
                link 4
              </Link>
            </li>
            <li>
              <Link href="" className="link-item">
                link 5
              </Link>
            </li>
            <li>
              <Link
                href="/user/sign-in"
                className={buttonVariants({ variant: "ocean" })}
              >
                sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
