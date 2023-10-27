import Link from "next/link";
import {RiArrowDropDownLine} from 'react-icons/ri'

interface Props {
    name: string;
    href?: string;
    subLinks?: { name: string; href: string }[];
}

function NavLink({
  name,
  href,
  subLinks,
}: Props) {
  return (
    <div className="relative group inline-flex items-center px-2 capitalize">
      {href ? <Link href={href}>{name}</Link> : <p>{name}</p>}
      {subLinks && 
      <>
      <RiArrowDropDownLine className="text-xl"/>
      <div className="absolute text-black top-6 left-[50%] translate-x-[-50%] transition-all shadow-md rounded-md max-h-[500px] overflow-auto hidden group-hover:block">
        <div className="flex flex-col items-start bg-white">
          {subLinks?.map((props: Props) => (
            <NavLink {...props} />
          ))}
        </div>
      </div>
      </>
      }
    </div>
  );
}

export default NavLink;
