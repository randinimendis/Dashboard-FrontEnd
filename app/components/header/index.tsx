import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./notification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { HamButton } from "./hamButton";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky flex top-0 z-10 w-full bg-white drop-shadow-md dark:bg-gray-600 dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-lg md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* ham button  */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="block p-1.5 lg:hidden"
          >
            <HamButton sidebarOpen={props.sidebarOpen} />
          </button>

          {/* logo  */}
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={100}
              height={100}
              src={"/logo.png"}
              alt="Logo"
              priority
            />
          </Link>
        </div>

        <div className="hidden sm:block">
          <h2 className="text-lg text-gray-800 dark:text-white">
            <span className="text-3xl text-cyan-600 pr-3">XANVIA</span> by
            viduzx
          </h2>
        </div>

        <div className="flex items-center gap-3 lg:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <DropdownNotification />
            <DropdownMessage />
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
