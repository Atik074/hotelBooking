import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeModeToggle } from "../theme/ThemeModeToggle";
import Link from "next/link";

const components = [
  {
    title: "Recomanded Place",
    href: "/",
    // description:
    //   "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "About Us",
    href: "/",
  },
  {
    title: "Contact Us",
    href: "/",
  },
  {
    title: "Booking",
    href: "/bookings",
  },
  {
    title: "Signin",
    href: "/login",
  },
];

export function Navbar({sideMenu}) {
  return (
    <div className=" flex justify-center items-center px-6">
      <Link
        href="/"
        className="text-[28px]  font-bold italic text-start bg-slate-700 text-white p-2 rounded-2xl"
      >
        HotelHub
      </Link>

      <NavigationMenu className="mr-[40px]">
        <NavigationMenuList>
          <NavigationMenuItem>
            <ul>
              {components.map((component) => (
                <NavigationMenuLink
                  className="text-[20px] font-normal mr-6"
                  key={component.title}
                  href={component.href}
                >
                
                   {component.title !== "Signin" ? component.title : sideMenu && component.title}
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuItem>
        </NavigationMenuList>
        <ThemeModeToggle />
      </NavigationMenu>
    </div>
  );
}
