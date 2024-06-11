import { useState } from "react";
import NavigationBreadCrumbs from "./NavigationBreadcrumbs";

import BellIcon from "../assets/bell.svg";
import MessageIcon from "../assets/messageSvg.svg";
import SettingsIcon from "../assets/settingsSvg.svg";
import ProfileIcon from "../assets/profileIcon.png";

const locationDummy = [
  { link: "/", name: "Dashboard" },
  { link: "/", name: "HR manage" },
  { link: "/", name: "Employees" },
  { link: "/", name: "John Smith Profile" },
];

const Navbar = () => {
  const [location, setLocation] = useState(locationDummy);
  return (
    <div className="flex flex-row justify-between items-center bg-background px-10 py-6 h-[113px]">
      {/* Name */}
      <div className="flex flex-col justify-between h-[65px]">
        <h1 className="font-[600] text-[26px]">John Smith Profile</h1>
        <NavigationBreadCrumbs location={location} />
      </div>
      {/* Options */}
      <div className="flex flex-row gap-[30px] h-10">
        <button>
          <img src={BellIcon} alt="notification icon" />
        </button>
        <button>
          <img src={MessageIcon} alt="message icon" />
        </button>
        <button>
          <img src={SettingsIcon} alt="settings icon" />
        </button>
        <button>
          <img src={ProfileIcon} alt="profile icon" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
