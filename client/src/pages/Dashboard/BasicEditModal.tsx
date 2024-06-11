import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { GET_USER_TYPE } from "../../graphql/query/types";

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

interface Props {
  options: modalType;
  data: GET_USER_TYPE;
  setOptions: React.Dispatch<React.SetStateAction<modalType>>;
}

const schema = z.object({
  //   email: z.string().email({ message: "Invalid email address" }),
  //   password: z
  //     .string()
  //     .min(6, { message: "Password must be at least 6 characters long" }),
  NationalId: z.string(),
  NationalIdExpiryDate: z.string(),
  Title: z.string(),
  FirstName: z.string(),
  FatherName: z.string(),
  GrandFatherName: z.string(),
  FamilyName: z.string(),
  LocalizedFirstName: z.string(),
  LocalizedFatherName: z.string(),
  LocalizedGrandFatherName: z.string(),
  LocalizedFamilyName: z.string(),
  DateOfBirth: z.string(),
  Gender: z.string(),
  Nationality: z.string(),
  AdditionalNationality: z.string(),
  PassportNo: z.string(),
  PassportIssueDate: z.string(),
  PassportExpiryDate: z.string(),
  MaritalStatus: z.string(),
  Dependencies: z.number(),
});

const BasicEditModal = ({ options, setOptions, data }: Props) => {
  const handleClickOpen = () => {
    setOptions({ open: false, type: "" });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  function formatDate(date: string) {
    const d = new Date(date);
    return `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`;
  }

  const handleClose = () => {
    setOptions({ open: false, type: "" });
  };

  const onSubmit = (data: unknown) => {
    console.log(data);
    // We can all mutation to update data
    handleClose();
  };

  return !options.open ? (
    <></>
  ) : (
    <Dialog open={options.open} onClose={handleClose} maxWidth={"lg"}>
      {/* <DialogTitle>Edit Basic Information</DialogTitle> */}
      <DialogContent>
        <h1 className="mb-3 font-bold text-lg">Edit Basic Information</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register("email")} />
            {errors?.email && <p>{errors.email?.message as string}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" {...register("password")} />
            {errors?.password && <p>{errors.password?.message as string}</p>}
          </div> */}

          <div className="flex flex-col gap-6 w-full h-full">
            {/* row -1 */}
            <div className="flex flex-row gap-6">
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="NationalId"
                  className="text-[#737791] text-[12px]"
                >
                  National ID Number
                </label>
                <input
                  {...register("NationalId", { required: true })}
                  defaultValue={data?.user.nationalId.idNumber}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.NationalId && (
                  <p>{errors.NationalId?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="NationalIdExpiryDate"
                  className="text-[#737791] text-[12px]"
                >
                  National ID Expring Date
                </label>
                <input
                  {...register("NationalIdExpiryDate", { required: true })}
                  defaultValue={formatDate(data?.user.nationalId.expiryDate)}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.NationalIdExpiryDate && (
                  <p>{errors.NationalIdExpiryDate?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between md:w-[190px] xl:w-[248] h-12">
                <label htmlFor="Title" className="text-[#737791] text-[12px]">
                  Title
                </label>
                <input
                  {...register("Title", { required: true })}
                  defaultValue={"Mr"}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.Title && <p>{errors.Title?.message as string}</p>}
              </div>
            </div>

            {/* row-2 */}
            <div className="flex flex-row gap-6">
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="FirstName"
                  className="text-[#737791] text-[12px]"
                >
                  First Name
                </label>
                <input
                  {...register("FirstName", { required: true })}
                  defaultValue={data?.user.firstName}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.FirstName && (
                  <p>{errors.FirstName?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="FatherName"
                  className="text-[#737791] text-[12px]"
                >
                  First Name
                </label>
                <input
                  {...register("FatherName", { required: true })}
                  defaultValue={data?.user.fatherName}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.FatherName && (
                  <p>{errors.FatherName?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="GrandFatherName"
                  className="text-[#737791] text-[12px]"
                >
                  Grand Father Name
                </label>
                <input
                  {...register("GrandFatherName", { required: true })}
                  defaultValue={data?.user.grandfatherName}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.GrandFatherName && (
                  <p>{errors.GrandFatherName?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="FamilyName"
                  className="text-[#737791] text-[12px]"
                >
                  Family Name
                </label>
                <input
                  {...register("FamilyName", { required: true })}
                  defaultValue={data?.user.familyName}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.FamilyName && (
                  <p>{errors.FamilyName?.message as string}</p>
                )}
              </div>
            </div>

            {/* row-3 */}
            <div className="flex flex-row gap-6">
              <div className="flex flex-col justify-between md:w-[190px] xl:w-[248] h-12">
                <label
                  htmlFor="LocalizedFirstName"
                  className="text-[#737791] text-[12px]"
                >
                  الأسم الأول
                </label>
                <input
                  {...register("LocalizedFirstName", { required: true })}
                  defaultValue={data?.user.localizedName.firstName}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.LocalizedFirstName && (
                  <p>{errors.LocalizedFirstName?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="LocalizedFatherName"
                  className="text-[#737791] text-[12px]"
                >
                  اسم الأب
                </label>
                <input
                  {...register("LocalizedFatherName", { required: true })}
                  defaultValue={data?.user.localizedName.fatherName}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.LocalizedFatherName && (
                  <p>{errors.LocalizedFatherName?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="LocalizedGrandFatherName"
                  className="text-[#737791] text-[12px]"
                >
                  اسم الجد
                </label>
                <input
                  {...register("LocalizedGrandFatherName", { required: true })}
                  defaultValue={data?.user.localizedName.grandfatherName}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.LocalizedGrandFatherName && (
                  <p>{errors.LocalizedGrandFatherName?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="LocalizedFamilyName"
                  className="text-[#737791] text-[12px]"
                >
                  اللقب / اسم العائلة
                </label>
                <input
                  {...register("LocalizedFamilyName", { required: true })}
                  defaultValue={data?.user.localizedName.familyName}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.LocalizedFamilyName && (
                  <p>{errors.LocalizedFamilyName?.message as string}</p>
                )}
              </div>
            </div>

            {/* row-4 */}
            <div className="flex flex-row gap-6">
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="DateOfBirth"
                  className="text-[#737791] text-[12px]"
                >
                  Date of birth
                </label>
                <input
                  {...register("DateOfBirth", { required: true })}
                  defaultValue={"01 / 04 / 1980"}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.DateOfBirth && (
                  <p>{errors.DateOfBirth?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between md:w-[190px] xl:w-[248] h-12">
                <label htmlFor="Gender" className="text-[#737791] text-[12px]">
                  Date of birth
                </label>
                <input
                  {...register("Gender", { required: true })}
                  defaultValue={"Male"}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.Gender && <p>{errors.Gender?.message as string}</p>}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="Nationality"
                  className="text-[#737791] text-[12px]"
                >
                  Date of birth
                </label>
                <input
                  {...register("Nationality", { required: true })}
                  defaultValue={data?.user.nationalities[0]?.country.name}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.Nationality && (
                  <p>{errors.Nationality?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="AdditionalNationality"
                  className="text-[#737791] text-[12px]"
                >
                  Additional Nationality
                </label>
                <input
                  {...register("AdditionalNationality", { required: true })}
                  defaultValue={data?.user.nationalities[1]?.country.name}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.AdditionalNationality && (
                  <p>{errors.AdditionalNationality?.message as string}</p>
                )}
              </div>
            </div>
            {/* row-5 */}
            <div className="flex flex-row gap-6">
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="PassportNo"
                  className="text-[#737791] text-[12px]"
                >
                  Passport No.
                </label>
                <input
                  {...register("PassportNo", { required: true })}
                  defaultValue={"A135464"}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.PassportNo && (
                  <p>{errors.PassportNo?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="PassportIssueDate"
                  className="text-[#737791] text-[12px]"
                >
                  Passport Issue Date
                </label>
                <input
                  {...register("PassportIssueDate", { required: true })}
                  defaultValue={"01 / 04 /1980"}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.PassportIssueDate && (
                  <p>{errors.PassportIssueDate?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between md:w-[190px] xl:w-[248] h-12">
                <label
                  htmlFor="PassportExpiryDate"
                  className="text-[#737791] text-[12px]"
                >
                  Passport Expiry Date
                </label>
                <input
                  {...register("PassportExpiryDate", { required: true })}
                  defaultValue={"01 / 04 /1980"}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.PassportExpiryDate && (
                  <p>{errors.PassportExpiryDate?.message as string}</p>
                )}
              </div>
            </div>
            {/* Row-6 */}
            <div className="flex flex-row gap-6">
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="MaritalStatus"
                  className="text-[#737791] text-[12px]"
                >
                  Marital Status
                </label>
                <input
                  {...register("MaritalStatus", { required: true })}
                  defaultValue={data.user.maritalStatus.name}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.MaritalStatus && (
                  <p>{errors.MaritalStatus?.message as string}</p>
                )}
              </div>
              <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
                <label
                  htmlFor="Dependencies"
                  className="text-[#737791] text-[12px]"
                >
                  Dependencies
                </label>
                <input
                  type="number"
                  {...register("Dependencies", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  defaultValue={data.user.dependants}
                  className="border-2 px-2 py-1 rounded-md font-[500] text-[16px] outline-none"
                />
                {errors?.Dependencies && (
                  <p>{errors.Dependencies?.message as string}</p>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full">
              <button
                type="button"
                onClick={handleClose}
                className="bg-slate-300 ml-auto px-3 py-2 rounded-md font-semibold text-black"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-primary px-3 py-2 rounded-md font-semibold text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BasicEditModal;
