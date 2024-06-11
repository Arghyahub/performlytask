import { useState } from "react";
import { cn } from "../utils/cn";

import logo from "../assets/logo.svg";
import DashboardIcon from "../assets/dashboardIcon.svg";
import ResearchIcon from "../assets/researchIcon.svg";
import CreditCardIcon from "../assets/creditCardIcon.svg";
import TeamsIcon from "../assets/teamsIcon.svg";
import BoxIcon from "../assets/boxIcon.svg";
import { Link } from "react-router-dom";

interface Props {
  page: string;
}

const linkObj = [
  { name: "Dashboard", link: "/", icon: DashboardIcon },
  { name: "Research", link: "/research", icon: ResearchIcon },
  { name: "CreditCard", link: "/credit-card", icon: CreditCardIcon },
  { name: "Teams", link: "/teams", icon: TeamsIcon },
  { name: "Box", link: "/box", icon: BoxIcon },
];

const Sidebar = ({ page }: Props) => {
  const [options, setOptions] = useState(linkObj);

  return (
    <div className="flex flex-col gap-10 border-[#E7EAEE] px-[30px] py-10 border-r-[1px] rounded-r-[4px] w-[108px] h-full">
      <img src={logo} alt="Logo" className="w-[45px] h-[45px]" />
      <div className="flex flex-col items-center gap-6">
        {options.map((option, index) => (
          <Link
            to={option.link}
            key={index}
            className={cn(
              "w-[48px] h-[48px] rounded-2xl flex flex-row justify-center items-center cursor-pointer",
              {
                "bg-primary  text-white":
                  page.toLowerCase() === option.name.toLowerCase(),
              }
            )}
          >
            <img src={option.icon} alt="link icon" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
