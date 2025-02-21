import React from "react";
import TravelAgencyDashboard from "@/components/travelone";
import VisitorsAndHolidays from "@/components/traveltwo";
import GrossProfitAndBookings from "@/components/travelthree";
import FlightsTable from "@/components/travelfour";

function TravelAgency() {
  
  return (
    <>
      <div>
        <TravelAgencyDashboard/>
      </div>
      <div>
        <VisitorsAndHolidays/>
      </div>
      <div>
        <GrossProfitAndBookings/>
      </div>
      <div className="p-6">
      <h2 className="text-2xl font-bold">Flight Status</h2>
      <FlightsTable/>
    </div>
    </>
  );
}

export default TravelAgency;
