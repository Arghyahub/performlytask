import React from "react";

import profileIcon from "../../assets/profileIcon.png";
import cameraIcon from "../../assets/camera.svg";
import { useSearchParams } from "react-router-dom";
import { cn } from "../../utils/cn";

const UserCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleTabChange(tab: string) {
    setSearchParams({ tab });
  }

  return (
    <div className="flex flex-col justify-between items-center gap-4 bg-foreground p-6 rounded-3xl w-[393px] h-[464px]">
      {/* Image div */}
      <div className="flex flex-col gap-6 p-4 w-full h-[226px]">
        <div className="relative w-[120px]">
          <img src={profileIcon} alt="Profile Icon" />
          <div className="-right-3 -bottom-2 absolute flex justify-center items-center bg-[#F0F0F0] rounded-full w-10 h-10">
            <img src={cameraIcon} alt="Camera Icon" />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full h-full leading-[30px]">
          <h1 className="font-[600] text-[20px]">John Smith</h1>
          <p className="text-[#737791] text-[16px]">Senior Product Manager</p>
        </div>
      </div>

      <div className="border-[#ECEEF1] border w-full"></div>

      {/* Options */}
      <div className="flex flex-col gap-2 py-4 w-full h-full">
        <button
          className={cn(
            "p-4 w-full h-[59px] text-[18px] text-[500] text-left",
            {
              "bg-[#F4F8FE] text-primary":
                searchParams.get("tab") === "personal" ||
                !searchParams.get("tab"),
            }
          )}
          onClick={() => handleTabChange("personal")}
        >
          Personal Information
        </button>
        <button
          className={cn(
            "p-4 w-full h-[59px] text-[18px] text-[500] text-left",
            {
              "bg-[#F4F8FE] text-primary":
                searchParams.get("tab") === "financial",
            }
          )}
          onClick={() => handleTabChange("financial")}
        >
          Financial Information
        </button>
      </div>
    </div>
  );
};

export default UserCard;
