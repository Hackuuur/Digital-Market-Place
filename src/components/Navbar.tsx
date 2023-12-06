import React from "react";
import { Wrapper } from "./Wrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "@/components/NavItems";
import { buttonVariants } from "./ui/button";
import { Ghost } from "lucide-react";

const Navbar = () => {
  const user = null;

  return (
    <div className="z-50 top-0 sticky bg-white inset-x-0 h-16">
      <header className="relative bg-white">
        <Wrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
                  {user ? null : (
                    <Link
                      href={"/sign-in"}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign In
                    </Link>
                  )}
                  {/* {user ? null : (
                    <span className="h-6 w-px bg-gray-300" aria-hidden="true" />
                  )} */}
                  {user ? <p></p> : <Link href="/sign-up" className={buttonVariants({variant:'ghost'})} >Create Account</Link>}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Navbar;
