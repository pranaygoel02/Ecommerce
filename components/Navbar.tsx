import axios from "axios";
import Link from "next/link";
import CartIcon from "./CartIcon";
import WishlistIcon from "./WishlistIcon";
import Search from "./Search";
import UserInfo from "./Auth/UserInfo";
import MobileNav from "./MobileNav";

async function Navbar() {
  const { data: categories } = await axios.get(
    "https://dummyjson.com/products/categories"
  );

  const navLinks = [
    {
      name: "Categories 1",
      subLinks: categories.map((category: string) => ({
        name: category,
        href: `/category/${category}`,
      })),
    },
    {
      name: "Account 1",
      href: "/account",
    },
    {
      name: "About 1",
      subLinks: [
        {
          name: "Categories 2",
          subLinks: categories.map((category: string) => ({
            name: category,
            href: `/category/${category}`,
          })),
        },
        {
          name: "Account 2",
          href: "/account",
        },
        {
          name: "About 2",
          subLinks: [
            {
              name: "Categories 3",
              subLinks: categories.map((category: string) => ({
                name: category,
                href: `/category/${category}`,
              })),
            },
            {
              name: "Account 3",
              href: "/account",
            },
            {
              name: "About 3",
              href: "/about",
            },
          ],
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-10 bg-white p-4 text-sm font-medium">
      <div className="nav-container max-w-[98%] lg:max-w-[90%] mx-auto gap-2 lg:gap-4">
        <Search />
        <MobileNav navLinks={navLinks} />
        <Link href="/" className="text-xl font-bold">
          Store
        </Link>
        <div className="order-2 space-x-4">
          <CartIcon />
          <WishlistIcon />
        </div>
        <span className="hidden lg:block order-3">
          <UserInfo />
        </span>
      </div>
    </header>
  );
}

export default Navbar;
