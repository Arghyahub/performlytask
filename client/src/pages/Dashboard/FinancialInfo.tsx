import React from "react";

const FinancialInfo = () => {
  return (
    <div className="flex flex-col justify-between gap-6 border-[#F8F9FA] bg-foreground p-10 border rounded-[20px] w-full h-[188px]">
      <div className="flex flex-row justify-between">
        <h1 className="font-[500] text-[20px]">Bank Information</h1>
        <button className="flex justify-center items-center border-[#0058A9] bg-secondary rounded-md w-[104px] h-[36px] text-white">
          Edit
        </button>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col justify-between lg:w-[195px] xl:w-[248] h-12">
          <p className="text-[#737791] text-[12px]">Bank Name</p>
          <p className="font-[500] text-[16px]">CIB</p>
        </div>
        <div className="flex flex-col justify-between md:w-[190px] xl:w-[248] h-12">
          <p className="text-[#737791] text-[12px]">IBAN</p>
          <p className="font-[500] text-[16px]">12346546413216446</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialInfo;
