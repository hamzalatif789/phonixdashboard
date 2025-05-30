import CRMDashboard from "@/components/CRMFirst";
import AdClicksChart from "@/components/CRMfive";
import UsersLeadsChart from "@/components/CRMfour";
import Dashboard from "@/components/CRMseven";
import DealForecast from "@/components/CRMsix";
import ContactsBySource from "@/components/CRMthree";
import ContactsCreatedChart from "@/components/CRMtwo";
import React from "react";

function CRM() {
  return (
    <>
      <div className="px-[10px] pt-4 ">
        <div>
          <CRMDashboard />
        </div>
        <div className="pt-[50px]">
          <ContactsCreatedChart />
        </div>
        <div className="pt-5">
          <ContactsBySource />
        </div>
        <div className="pt-5">
          <UsersLeadsChart />
        </div>
        <div className="pt-5">
          <AdClicksChart />
        </div>
        <div className="pt-5">
          <DealForecast />
        </div>
        <div className="pt-5">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default CRM;
