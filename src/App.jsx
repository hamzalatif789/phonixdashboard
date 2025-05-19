import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "@/pages/Home";
import Calendar from "@/pages/Calendar";
import AddContact from "@/pages/AddContact";
import AddProduct from "@/pages/AddProduct";
import ProjectManagement from "@/pages/ProjectManagement";
import Analytics from "@/pages/Analytics";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import CRM from "@/pages/CRM";
import Customer from "@/pages/Customer";
import CustomerDetails from "@/pages/CustomerDetails";
import Customers from "@/pages/Customers";
import DealDetails from "@/pages/DealDetails";
import Deals from "@/pages/Deals";
import Ecommerce from "@/pages/Ecommerce";
import FavouriteStores from "@/pages/FavouriteStores";
import Homepage from "@/pages/Homepage";
import Inbox from "@/pages/Inbox";
import Invoice from "@/pages/Invoice";
import LeadDetails from "@/pages/LeadDetails";
import Leads from "@/pages/Leads";
import OrderDetails from "@/pages/OrderDetails";
import Orders from "@/pages/Orders";
import OrderTracking from "@/pages/OrderTracking";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import ProductsFilter from "@/pages/ProductsFilter";
import Profile from "@/pages/Profile";
import Refund from "@/pages/Refund";
import ReportDetails from "@/pages/ReportDetails";
import Reports from "@/pages/Reports";
import Search from "@/pages/Search";
import Settings from "@/pages/Setting";
import ShippingInfo from "@/pages/ShippingInfo";
import SocialFeed from "@/pages/SocialFeed";
import TravelAgency from "@/pages/TravelAgency";
import Wishlist from "@/pages/Wishlist";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Header Component with Dark Mode Toggle */}
        <Header toggleDarkMode={toggleDarkMode} />

        <div className="flex mt-[60px]">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              {/* Redirect "/" to "/ecommerce" */}
              <Route path="/" element={<Navigate to="/ecommerce" />} />


              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/ecommerce/admin/Customers" element={<Customer />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/search" element={<Search />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/project-management"
                element={<ProjectManagement />}
              />
              <Route path="/crm" element={<CRM />} />
              <Route path="/travel-agency" element={<TravelAgency />} />
              <Route path="/social-feed" element={<SocialFeed />} />

              {/* E-commerce Admin Pages */}
              <Route
                path="/ecommerce/admin/AddProduct"
                element={<AddProduct />}
              />
              <Route path="/ecommerce/admin/Products" element={<Products />} />
              <Route
                path="/ecommerce/admin/Customers"
                element={<Customers />}
              />
              <Route
                path="/ecommerce/admin/CustomerDetails"
                element={<CustomerDetails />}
              />
              <Route path="/ecommerce/admin/Orders" element={<Orders />} />
              <Route
                path="/ecommerce/admin/OrderDetails"
                element={<OrderDetails />}
              />
              <Route path="/ecommerce/admin/Refund" element={<Refund />} />

              {/* E-commerce Customer Pages */}
              <Route
                path="/ecommerce/customer/Homepage"
                element={<Homepage />}
              />
              <Route
                path="/ecommerce/customer/ProductDetails"
                element={<ProductDetails />}
              />
              <Route
                path="/ecommerce/customer/ProductsFilter"
                element={<ProductsFilter />}
              />
              <Route path="/ecommerce/customer/Cart" element={<Cart />} />
              <Route
                path="/ecommerce/customer/Checkout"
                element={<Checkout />}
              />
              <Route
                path="/ecommerce/customer/ShippingInfo"
                element={<ShippingInfo />}
              />
              <Route path="/ecommerce/customer/Profile" element={<Profile />} />
              <Route
                path="/ecommerce/customer/FavouriteStores"
                element={<FavouriteStores />}
              />
              <Route
                path="/ecommerce/customer/Wishlist"
                element={<Wishlist />}
              />
              <Route
                path="/ecommerce/customer/OrderTracking"
                element={<OrderTracking />}
              />
              <Route path="/ecommerce/customer/Invoice" element={<Invoice />} />

              {/* CRM Pages */}
              <Route path="/crm/Analytics" element={<Analytics />} />
              <Route path="/crm/Deals" element={<Deals />} />
              <Route path="/crm/DealDetails" element={<DealDetails />} />
              <Route path="/crm/Leads" element={<Leads />} />
              <Route path="/crm/LeadDetails" element={<LeadDetails />} />
              <Route path="/crm/Reports" element={<Reports />} />
              <Route path="/crm/ReportDetails" element={<ReportDetails />} />
              <Route path="/crm/AddContact" element={<AddContact />} />
            </Routes>
          </div>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
