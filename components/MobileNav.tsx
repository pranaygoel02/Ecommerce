"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import generateTitle from "@/utils/generateTitle";
import { BsArrowLeft, BsArrowRight, BsBack } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { push, pop, removeAll } from "@/redux/features/nav.slice";
import { NavState } from "@/Props/productProps";
import { AnyAction, Dispatch } from "redux";
import UserInfo from "./Auth/UserInfo";
import UserName from "./UserName";
import {usePathname} from "next/navigation";

interface Props {
  name: string;
  href?: string;
  subLinks?: Props[];
}

function MobileNav({ navLinks }: { navLinks: Props[] }) {

  const pathname = usePathname();

  useEffect(() => {
    closeNav();
  }, [pathname]);

  const [showNav, setShowNav] = useState(false);

  const navStack = useSelector((state: RootState) => state.nav_stack);
  const dispatch = useDispatch();

  function openNav() {
    setShowNav(true);
  }
  function closeNav() {
    setShowNav(false);
    dispatch(removeAll());
  }

  return (
    <>
      <button onClick={openNav}>
        <FiMenu className="text-xl" />
      </button>
      {showNav && (
        <div className="fixed inset-0 flex items-start text-white bg-black/50 backdrop-blur-sm z-50 max-h-screen max-w-screen">
          <nav className="bg-white shadow-2xl w-[80%] lg:max-w-[300px] h-screen overflow-auto relative">
            <UserName />
            {navLinks?.map((props) => (
              <NavLink
                key={props.name}
                props={props}
                activeLinkStack={navStack}
                dispatch={dispatch}
              />
            ))}
            <UserInfo />
          </nav>
          <button onClick={closeNav}>
            <RiCloseLine className="text-5xl" />
          </button>
        </div>
      )}
    </>
  );
}

function NavLink({
  props,
  activeLinkStack,
  dispatch,
}: {
  props: Props;
  activeLinkStack: NavState;
  dispatch: Dispatch<AnyAction>;
}) {
  const { name, href, subLinks } = props;

  const isActive = activeLinkStack.items.includes(name);

  const handleClick = () => {
    if (!href) {
      dispatch(push(name));
    }
  };

  return (
    <div
      className={`w-full p-2 text-primary hover:bg-primary hover:text-white border-b-[1px] border-gray-500`}
    >
      {href ? (
        <Link href={href} className="mobile__navlink">
          {generateTitle(name)}
        </Link>
      ) : (
        <div className="mobile__navlink cursor-pointer" onClick={handleClick}>
          {generateTitle(name)} <BsArrowRight />
        </div>
      )}

      {subLinks && isActive && (
        <>
          <ul className="absolute h-max min-h-full inset-0 z-10 bg-white text-primary w-full">
            <button
              className="sticky top-0 bg-primary w-full text-left p-4 inline-flex items-center gap-2 text-white"
              onClick={() => dispatch(pop())}
            >
              <BsArrowLeft /> Back
            </button>
            {subLinks.map((subLink) => (
              <li key={subLink.name}>
                <NavLink
                  props={subLink}
                  activeLinkStack={activeLinkStack}
                  dispatch={dispatch}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default MobileNav;
