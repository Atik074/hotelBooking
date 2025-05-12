import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeModeToggle } from "../theme/ThemeModeToggle";
import Link from "next/link";
import { auth } from "@/auth";
import LogOut from "../auth/LogOut";

export async function Navbar({ sideMenu }) {
  const session = await auth();

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
            <ul className="text-[20px] font-normal">
              <NavigationMenuLink asChild>
                <Link href="/Recomanded Place">Recomanded Place</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/contact">Contact Us</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/about">About Us</Link>
              </NavigationMenuLink>
              <NavigationMenuLink  asChild>
                <Link href="/bookings">Booking</Link>
              </NavigationMenuLink>

             

              {session?.user ? (
                <>
                  <span className="text-[17px] px-2 hover:transition-all hover:underline hover:text-amber-600">{session.user?.name}  </span> |
                  <LogOut />
                </>
              ) : (
                <>
                 <NavigationMenuLink className="mr-7" asChild>
                <Link   href="/login">Signin</Link>
              </NavigationMenuLink>
                </>
              )}
            </ul>
          </NavigationMenuItem>
        </NavigationMenuList>
        <ThemeModeToggle />
      </NavigationMenu>
    </div>
  );
}
