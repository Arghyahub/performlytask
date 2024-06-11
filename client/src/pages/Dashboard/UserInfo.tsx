import React from "react";
import { useSearchParams } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import FinancialInfo from "./FinancialInfo";

const UserInfo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      {searchParams.get("tab") === "personal" || !searchParams.get("tab") ? (
        <PersonalInfo />
      ) : (
        <FinancialInfo />
      )}
    </>
  );
};

export default UserInfo;
