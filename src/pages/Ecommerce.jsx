import React from "react";
import { Star, Pause, X } from "lucide-react";
import SalesChart from "@/components/SalesChart";
import Coupan from "@/components/Coupan";
import Payingnopaying from "@/components/Payingnopaying";
import TotalOrdersChart from "@/components/TotalOrdersChart";
import CustomersChart from "@/components/CustomersChart";
import ProductReviews from "@/components/Productreview";
import RevenueMap from "@/components/RevenueMap";
import Revenuetable from "@/components/Revenuetable";
import Projection from "@/components/projection";
const Ecommerce = () => {
  return (
    <>
      {/* Header */}
      <div className="p-6  rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">E-commerce Dashboard</h1>
        <p className="text-gray-500">
          Here’s what’s going on in your business right now.
        </p>
      </div>

      {/* Status Cards */}
      <div className="mt-6 flex flex-wrap gap-6">
        {/* New Orders */}
        <div className="flex items-center gap-2 bg-green-100 p-4 rounded-lg flex-1 min-w-[200px]">
          <span className="bg-green-500  p-2 rounded-full">
            <Star size={18} />
          </span>
          <div>
            <h2 className="text-lg font-semibold">57 new orders</h2>
            <p className="text-gray-500 text-sm">Awaiting processing</p>
          </div>
        </div>

        {/* Orders on Hold */}
        <div className="flex items-center gap-2 bg-yellow-100 p-4 rounded-lg flex-1 min-w-[200px]">
          <span className="bg-yellow-500 text-white p-2 rounded-full">
            <Pause size={18} />
          </span>
          <div>
            <h2 className="text-lg font-semibold">5 orders</h2>
            <p className="text-gray-500 text-sm">On hold</p>
          </div>
        </div>

        {/* Out of Stock */}
        <div className="flex items-center gap-2 bg-red-100 p-4 rounded-lg flex-1 min-w-[200px]">
          <span className="bg-red-500 text-white p-2 rounded-full">
            <X size={18} />
          </span>
          <div>
            <h2 className="text-lg font-semibold">15 products</h2>
            <p className="text-gray-500 text-sm">Out of stock</p>
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="p-6 mt-6   ">
        <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
        <SalesChart />
      </div>

      {/* Four Charts */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className=" p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Orders</h2>
          <TotalOrdersChart />
        </div>
        <div className=" p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">New Customers</h2>
          <CustomersChart />
        </div>
        <div className=" p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Top Coupons</h2>
          <Coupan />
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Paying vs Non-Paying Customers
          </h2>
          <Payingnopaying />
        </div>
      </div>

      {/* Product Reviews */}
      <div className="p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Product Reviews</h2>
        <ProductReviews />
      </div>

      {/* Revenue Insights */}
      <div className="p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Top Regions by Revenue</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueMap />
          <Revenuetable />
        </div>
      </div>

      {/* Projections */}
      <div className="p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Sales Projections</h2>
        <Projection />
      </div>
    </>
  );
};

export default Ecommerce;