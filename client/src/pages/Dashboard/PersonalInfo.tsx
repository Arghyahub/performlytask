import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_USER } from "../../graphql/query/query";
import { Loader } from "../../components";
import { GET_USER_TYPE } from "../../graphql/query/types";

import attachIcon from "../../assets/attechmentIcon.svg";
import BasicEditModal from "./BasicEditModal";

type modalElem =
  | "basic"
  | "contact"
  | "emergency"
  | "address"
  | "driving"
  | "military"
  | "";

interface modalType {
  type: modalElem;
  open: boolean;
}

const PersonalInfo = () => {
  const [modal, setModal] = useState<modalType>({ open: false, type: "" });

  const { data, loading, error } = useQuery<GET_USER_TYPE>(GET_USER, {
    variables: { userId: 1 },
  });

  function formatDate(date: string) {
    const d = new Date(date);
    return `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`;
  }

  function handleEdit(name: modalElem) {
    setModal({ open: true, type: name });
  }

  if (loading) return <Loader />;
  if (!data || error) return <div>Something went wrong</div>;

  return (
    <div className="flex flex-col gap-6 w-full h-full max-h-[calc(100vh-161px)] text-[#151D48] overflow-y-auto">
      {/* Basic Info */}
      <div className="flex flex-col gap-6 bg-foreground p-10 rounded-[20px] min-h-[548px]">
        <div className="flex flex-row justify-between h-9">
          <h1 className="font-[500] text-[20px]">Basic Information</h1>
          <button
            onClick={() => handleEdit("basic")}
            className="flex justify-center items-center border-[#0058A9] bg-secondary rounded-md w-[104px] h-[36px] text-white"
          >
            Edit
          </button>
        </div>
        <div className="flex flex-col gap-6 w-full h-full">
          <div className="flex flex-row gap-6">
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">National ID Number</p>
              <p className="font-[500] text-[16px]">
                {/* The id is bigger than the figma file thus I'm sliceing it for now */}
                {data?.user.nationalId.idNumber.slice(0, 20)}...
              </p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">
                National ID Expring Date
              </p>
              <p className="font-[500] text-[16px]">
                {formatDate(data?.user.nationalId.expiryDate)}
              </p>
            </div>
            <div className="flex flex-col justify-between md:w-[190px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Title</p>
              <p className="font-[500] text-[16px]">Mr.</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">First Name</p>
              <p className="font-[500] text-[16px]">{data.user.firstName}</p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Father Name</p>
              <p className="font-[500] text-[16px]">{data.user.fatherName}</p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Grand Father Name</p>
              <p className="font-[500] text-[16px]">
                {data?.user.grandfatherName}
              </p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Family Name</p>
              <p className="font-[500] text-[16px]">{data?.user.familyName}</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col justify-between md:w-[190px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">الأسم الأول</p>
              <p className="font-[500] text-[16px]">
                {data?.user.localizedName.firstName}
              </p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">اسم الأب</p>
              <p className="font-[500] text-[16px]">
                {data?.user.localizedName.fatherName}
              </p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">اسم الجد</p>
              <p className="font-[500] text-[16px]">
                {data?.user.localizedName.grandfatherName}
              </p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">اللقب / اسم العائلة</p>
              <p className="font-[500] text-[16px]">
                {data?.user.localizedName.familyName}{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Date of birth</p>
              <p className="font-[500] text-[16px]">01 / 04 / 1980</p>
            </div>
            <div className="flex flex-col justify-between md:w-[190px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Gender</p>
              <p className="font-[500] text-[16px]">Male</p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Nationality</p>
              <p className="font-[500] text-[16px]">
                {data?.user.nationalities[0]?.country.name}
              </p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">
                Additional Nationality
              </p>
              <p className="font-[500] text-[16px]">
                {data?.user.nationalities[1]?.country.name}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Passport No.</p>
              <p className="font-[500] text-[16px]">A135464</p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Passport Issue Date</p>
              <p className="font-[500] text-[16px]">01 / 04 /1980</p>
            </div>
            <div className="flex flex-col justify-between md:w-[190px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Passport Expiry Date</p>
              <p className="font-[500] text-[16px]">01 / 04 /1980</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Marital Status</p>
              <p className="font-[500] text-[16px]">
                {data.user.maritalStatus.name}
              </p>
            </div>
            <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
              <p className="text-[#737791] text-[12px]">Dependencies</p>
              <p className="font-[500] text-[16px]">{data.user.dependants}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-6 bg-foreground p-10 rounded-[20px] min-h-[196px]">
        <div className="flex flex-row justify-between">
          <h1 className="font-[500] text-[20px]">Contact Info</h1>
          <button
            onClick={() => handleEdit("contact")}
            className="flex justify-center items-center border-[#0058A9] bg-secondary rounded-md w-[104px] h-[36px] text-white"
          >
            Edit
          </button>
        </div>
        <div className="flex flex-row gap-6 w-full">
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">
              Personal Email
            </p>
            <p className="font-[500] text-[#151D48] text-[16px]">
              John.smith@gmail.com
            </p>
          </div>
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">Mobile</p>
            <p className="font-[500] text-[#151D48] text-[16px]">
              011223344556
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="flex flex-col gap-6 bg-foreground p-10 rounded-[20px] min-h-[196px]">
        <div className="flex flex-row justify-between">
          <h1 className="font-[500] text-[20px]">Emergency Contacts</h1>
          <button
            onClick={() => handleEdit("emergency")}
            className="flex justify-center items-center border-[#0058A9] bg-secondary rounded-md w-[104px] h-[36px] text-white"
          >
            Edit
          </button>
        </div>
        <div className="flex flex-row gap-6 w-full">
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">
              Emergency Contact Person Name
            </p>
            <p className="font-[500] text-[#151D48] text-[16px]">John John</p>
          </div>
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">
              Emergency Relation
            </p>
            <p className="font-[500] text-[#151D48] text-[16px]">Father</p>
          </div>
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">
              Emergency Phone
            </p>
            <p className="font-[500] text-[#151D48] text-[16px]">
              011224477885
            </p>
          </div>
        </div>
      </div>

      {/* Address Details */}
      <div className="flex flex-col gap-6 bg-foreground p-10 rounded-[20px] min-h-[260px]">
        <div className="flex flex-row justify-between">
          <h1 className="font-[500] text-[20px]">Address Details</h1>
          <button
            onClick={() => handleEdit("address")}
            className="flex justify-center items-center border-[#0058A9] bg-secondary rounded-md w-[104px] h-[36px] text-white"
          >
            Edit
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-6 w-full">
            <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
              <p className="font-[400] text-[#737791] text-[12px]">Country</p>
              <p className="font-[500] text-[#151D48] text-[16px]">Egypt</p>
            </div>
            <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
              <p className="font-[400] text-[#737791] text-[12px]">City</p>
              <p className="font-[500] text-[#151D48] text-[16px]">Cairo</p>
            </div>
            <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
              <p className="font-[400] text-[#737791] text-[12px]">
                Postal Code
              </p>
              <p className="font-[500] text-[#151D48] text-[16px]">11728</p>
            </div>
          </div>
          <div className="flex flex-row gap-6 w-full">
            <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
              <p className="font-[400] text-[#737791] text-[12px]">Building</p>
              <p className="font-[500] text-[#151D48] text-[16px]">7</p>
            </div>
            <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
              <p className="font-[400] text-[#737791] text-[12px]">Street</p>
              <p className="font-[500] text-[#151D48] text-[16px]">
                Street 127
              </p>
            </div>
            <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
              <p className="font-[400] text-[#737791] text-[12px]">Floor No.</p>
              <p className="font-[500] text-[#151D48] text-[16px]">7</p>
            </div>
            <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
              <p className="font-[400] text-[#737791] text-[12px]">
                Appointment
              </p>
              <p className="font-[500] text-[#151D48] text-[16px]">72</p>
            </div>
          </div>
        </div>
      </div>

      {/* Driving License Details */}
      <div className="flex flex-col gap-6 bg-foreground p-10 rounded-[20px] min-h-[196px]">
        <div className="flex flex-row justify-between">
          <h1 className="font-[500] text-[20px]">Driving License Details</h1>
          <button
            onClick={() => handleEdit("driving")}
            className="flex justify-center items-center border-[#0058A9] bg-secondary rounded-md w-[104px] h-[36px] text-white"
          >
            Edit
          </button>
        </div>
        <div className="flex flex-row gap-6 w-full">
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">
              Driving License
            </p>
            <p className="font-[500] text-[#151D48] text-[16px]">Yes</p>
          </div>
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">
              Driving License Type
            </p>
            <p className="font-[500] text-[#151D48] text-[16px]">C1E</p>
          </div>
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">
              Driving License expiry date
            </p>
            <p className="font-[500] text-[#151D48] text-[16px]">
              01 / 04 / 2025
            </p>
          </div>
        </div>
      </div>

      {/* Military status */}
      <div className="flex flex-col gap-6 bg-foreground p-10 rounded-[20px] min-h-[202px]">
        <div className="flex flex-row justify-between">
          <h1 className="font-[500] text-[20px]">Military Status</h1>
          <button
            onClick={() => handleEdit("military")}
            className="flex justify-center items-center border-[#0058A9] bg-secondary rounded-md w-[104px] h-[36px] text-white"
          >
            Edit
          </button>
        </div>
        <div className="flex flex-row gap-6 w-full">
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">
              Require Travel Permit
            </p>
            <p className="font-[500] text-[#151D48] text-[16px]">Yes</p>
          </div>
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">
              Military Status
            </p>
            <p className="font-[500] text-[#151D48] text-[16px]">Exempted</p>
          </div>
          <div className="flex-col gap-1 lg:w-[195px] xl:w-[248]">
            <p className="font-[400] text-[#737791] text-[12px]">Document</p>
            <button className="flex flex-row justify-center items-center gap-2 bg-[#ECECEC] px-2 py-1 rounded-[4px]">
              <img src={attachIcon} alt="icon" />
              <p className="text-[14px] text-[400]">filename1.docx</p>
            </button>
          </div>
        </div>
      </div>

      {modal.type === "basic" && (
        <BasicEditModal options={modal} setOptions={setModal} data={data} />
      )}
    </div>
  );
};

export default PersonalInfo;
