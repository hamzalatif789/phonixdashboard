import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Star } from "lucide-react";
import watch from "@/assets/images/1.png";
import iphone from "@/assets/images/2.png";
import macbook from "@/assets/images/3.png";
import laptop from "@/assets/images/4.png";
import earbuds from "@/assets/images/5.png";

// Review Data
const reviews = [
  {
    product: "Fitbit Sense Advanced Smartwatch",
    customer: "Richard Dawkins",
    rating: 5,
    review:
      "This Fitbit is fantastic! I was trying to be more active and needed some motivation, so I decided to switch to a new Fitbit.",
    status: "Approved",
    time: "2025-02-07T19:14:00",
    image: watch,
    category: "Smartwatches",
  },
  {
    product: "iPhone 13 Pro Max - Pacific Blue",
    customer: "Ashley Garrett",
    rating: 3,
    review:
      "The order was delivered ahead of schedule. Though it could use better packaging to avoid damage.",
    status: "Approved",
    time: "2025-02-07T19:10:00",
    image: iphone,
    category: "Phones",
  },
  {
    product: "Apple MacBook Pro 13 inch - M1",
    customer: "Woodrow Burton",
    rating: 4,
    review: "Once you go Mac, you don't go back. Long-lasting and reliable.",
    status: "Pending",
    time: "2025-02-07T19:05:00",
    image: macbook,
    category: "Laptops",
  },
  {
    product: 'Apple iMac 24" M1 8 Core',
    customer: "Eric McGee",
    rating: 5,
    review: "Perfect for design and development. Smooth user experience.",
    status: "Rejected",
    time: "2025-02-07T19:00:00",
    image: laptop,
    category: "Laptops",
  },
  {
    product: "Razer Kraken v3 x Wired Headset",
    customer: "Kim Carroll",
    rating: 4,
    review: "Great sound for the price. Comfortable for long use.",
    status: "Approved",
    time: "2025-02-07T18:45:00",
    image: earbuds,
    category: "Accessories",
  },
];

// Component to Render Star Ratings
function RatingStars({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={index < rating ? "text-yellow-500" : "text-gray-300"}
          size={16}
        />
      ))}
    </div>
  );
}

// Status Badge Component
function StatusBadge({ status }) {
  const statusStyles = {
    Approved: "bg-green-100 text-green-700 border-green-500",
    Pending: "bg-orange-100 text-orange-700 border-orange-500",
    Rejected: "bg-red-100 text-red-700 border-red-500",
  };

  return (
    <span
      className={`px-2 py-1 text-sm font-semibold border rounded-md ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

// Main Product Reviews Component
export default function ProductReviews() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All products");
  const [sortOption, setSortOption] = useState("Most Recent");

  const categories = [
    "All products",
    "Smartwatches",
    "Laptops",
    "Phones",
    "Accessories",
  ];
  const sortOptions = ["Most Recent", "Highest Rating", "Lowest Rating"];

  const filteredReviews = reviews
    .filter(
      (review) =>
        (selectedCategory === "All products" ||
          review.category === selectedCategory) &&
        (review.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.review.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === "Highest Rating") {
        return b.rating - a.rating;
      } else if (sortOption === "Lowest Rating") {
        return a.rating - b.rating;
      } else {
        return new Date(b.time) - new Date(a.time);
      }
    });

  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Latest Reviews</h2>
      <p className="text-gray-600 mb-4">Payment received across all channels</p>

      {/* Overall Rating Summary */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">
          Overall Rating: {averageRating} / 5
        </h3>
        <RatingStars rating={Math.round(averageRating)} />
      </div>

      {/* Search, Filter, and Sort */}
      <div className="flex justify-between mb-4">
        <Input
          type="text"
          placeholder="Search"
          className="w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border rounded-md p-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className="border rounded-md p-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Review</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredReviews.map((review, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center">
                  <img
                    src={review.image}
                    alt={review.product}
                    className="w-10 h-10 rounded mr-4"
                  />
                  {review.product}
                </div>
              </TableCell>
              <TableCell>{review.customer}</TableCell>
              <TableCell>
                <RatingStars rating={review.rating} />
              </TableCell>
              <TableCell className="truncate max-w-xs">
                {review.review}
              </TableCell>
              <TableCell>
                <StatusBadge status={review.status} />
              </TableCell>
              <TableCell className="text-gray-500">{review.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
