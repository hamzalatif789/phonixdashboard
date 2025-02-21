import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  Mail,
  Calendar,
  ChevronDown,
  ChevronRight,
  Briefcase,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  {
    title: "Home",
    icon: <Home size={20} />,
    to: "/",
    subItems: [
      { title: "E-commerce", to: "/ecommerce" },
      { title: "Project Management", to: "/project-management" },
      { title: "CRM", to: "/crm" },
      { title: "Travel Agency", to: "/travel-agency" },
      { title: "Social Feed", to: "/social-feed" },
    ],
  },
  {
    title: "Apps",
    icon: <Mail size={20} />,
    subItems: [
      {
        title: "E-commerce",
        subItems: [
          {
            title: "Admin",
            subItems: [
              { title: "Add Product", to: "/ecommerce/admin/AddProduct" },
              { title: "Products", to: "/ecommerce/admin/Products" },
              { title: "Customers", to: "/ecommerce/admin/Customers" },
              {
                title: "Customer Details",
                to: "/ecommerce/admin/CustomerDetails",
              },
              { title: "Orders", to: "/ecommerce/admin/Orders" },
              { title: "Order Details", to: "/ecommerce/admin/OrderDetails" },
              { title: "Refund", to: "/ecommerce/admin/Refund" },
            ],
          },
          {
            title: "Customer",
            subItems: [
              { title: "Homepage", to: "/ecommerce/customer/Homepage" },
              {
                title: "Product Details",
                to: "/ecommerce/customer/ProductDetails",
              },
              {
                title: "Products Filter",
                to: "/ecommerce/customer/ProductsFilter",
              },
              { title: "Cart", to: "/ecommerce/customer/Cart" },
              { title: "Checkout", to: "/ecommerce/customer/Checkout" },
              {
                title: "Shipping Info",
                to: "/ecommerce/customer/ShippingInfo",
              },
              { title: "Profile", to: "/ecommerce/customer/Profile" },
              {
                title: "Favourite Stores",
                to: "/ecommerce/customer/FavouriteStores",
              },
              { title: "Wishlist", to: "/ecommerce/customer/Wishlist" },
              {
                title: "Order Tracking",
                to: "/ecommerce/customer/OrderTracking",
              },
              { title: "Invoice", to: "/ecommerce/customer/Invoice" },
            ],
          },
        ],
      },
      {
        title: "CRM",
        subItems: [
          { title: "Analytics", to: "/crm/Analytics" },
          { title: "Deals", to: "/crm/Deals" },
          { title: "Deal Details", to: "/crm/DealDetails" },
          { title: "Leads", to: "/crm/Leads" },
          { title: "Lead Details", to: "/crm/LeadDetails" },
          { title: "Reports", to: "/crm/Reports" },
          { title: "Report Details", to: "/crm/ReportDetails" },
          { title: "Add Contact", to: "/crm/AddContact" },
        ],
      },
    ],
  },
  {
    title: "Pages",
    icon: <Calendar size={20} />,
    subItems: [
      {
        title: "Starter",
        to: "/starter",
      },
      {
        title: "FAQ",
        subItems: [
          { title: "FAQ Accordion", to: "/faq/accordion" },
          { title: "FAQ Tab", to: "/faq/tab" },
        ],
      },
      {
        title: "Landing",
        subItems: [
          { title: "Default", to: "/landing/default" },
          { title: "Alternate", to: "/landing/alternate" },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r shadow-md dark:border-gray-700 flex flex-col">
      {/* Fixed Header Section */}
      <div className="flex-shrink-0 p-4">
        <div className="flex items-center gap-3 p-2">
          <Briefcase className="h-6 w-6 text-gray-700 dark:text-white" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Acme Inc
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Enterprise</p>
          </div>
        </div>
      </div>

      {/* Scrollable Navigation Menu */}
      <nav className="flex-1 overflow-y-auto px-4">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </nav>

      {/* Profile Section */}
      <div className="border-t pt-4 flex items-center gap-3 p-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            shadcn
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            m@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasSubItems = item.subItems && item.subItems.length > 0;

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
        onClick={hasSubItems ? toggleSubMenu : null}
      >
        <div className="flex items-center gap-3">
          {item.icon}
          {item.to ? (
            <Link to={item.to} className="flex-1 text-gray-900 dark:text-white">
              {item.title}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-white">{item.title}</span>
          )}
        </div>
        {hasSubItems && (
          <span className="text-gray-500 dark:text-gray-400">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </div>
      {hasSubItems && isOpen && (
        <div className="ml-4">
          {item.subItems.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
