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
      name: "Categories",
      subLinks: categories.map((category: string) => ({
        name: category,
        href: `/category/${category}`,
      })),
    },
    {
      name: "Account",
      subLinks: [
        {
          name: "See Profile",
          href: "/account",
        },
        {
          name: "Your Cart",
          href: "/account/cart",
        },
        {
          name: "Your Wishlist",
          href: "/account/wishlist",
        },
        {
          name: "Your Addresses",
          href: "/account/address",
        },
        {
          name: "Your Orders",
          href: "/account/orders",
        }
      ]
    },
    {
      name: "Admin Panel",
      subLinks: [
        {
          name: "Add Product",
          href: "/admin/add-product",
        },
        {
          name: "Add Category",
          href: "/admin/add-category",
        },
        {
          name: "Add Subcategory",
          href: "/admin/add-subcategory",
        },
        {
          name: "Add Brand",
          href: "/admin/add-brand",
        },
        {
          name: "Add Coupon",
          href: "/admin/add-coupon",
        },
        {
          name: "Add Banner",
          href: "/admin/add-banner",
        },
        {
          name: "Add New Arrivals",
          href: "/admin/add-new-arrivals",
        },
        {
          name: "Add Trending",
          href: "/admin/add-trending",
        },
        {
          name: "Add Best Seller",
          href: "/admin/add-best-seller",
        },
        {
          name: "Add Featured",
          href: "/admin/add-featured",
        },
        {
          name: "Add Deal of the Day",
          href: "/admin/add-deal-of-the-day",
        },
        {
          name: "Add Top Rated",
          href: "/admin/add-top-rated",
        },
        {
          name: "Add Product Review",
          href: "/admin/add-product-review",
        },
        {
          name: "Add Product Rating",
          href: "/admin/add-product-rating",
        },
        {
          name: "Add Product Question",
          href: "/admin/add-product-question",
        },
        {
          name: "Add Product Answer",
          href: "/admin/add-product-answer",
        },
        {
          name: "Add Product Image",
          href: "/admin/add-product-image",
        },
        {
          name: "Add Product Video",
          href: "/admin/add-product-video",
        },
        {
          name: "Add Product Tag",
          href: "/admin/add-product-tag",
        },
        {
          name: "Add Product Color",
          href: "/admin/add-product-color",
        },
        {
          name: "Add Product Size",
          href: "/admin/add-product-size",
        },
      ],
      check: "admin",
    }
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
