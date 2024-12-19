import React from 'react';

const ProductDetails = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Men Solid Crew Neck Black Sweater</h2>
        <div className="text-green-500 font-medium">
          ₹1,738 <span className="line-through text-gray-500">₹3,699</span>
          <span className="ml-2 text-gray-500 font-normal">53% off</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <div className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
          3.8
        </div>
        <span className="text-gray-500">9 ratings and 2 reviews</span>
        <span className="text-blue-500">Assured</span>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">Size:</p>
        <div className="flex space-x-2 mt-2">
          <span className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">
            S
          </span>
          <span className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">
            M
          </span>
          <span className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">
            L
          </span>
          <span className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">
            XL
          </span>
          <span className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">
            XXL
          </span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">Available offers:</p>
        <ul className="list-disc pl-6 mt-2 text-sm">
          <li>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</li>
          <li>Bank Offer 10% off up to ₹750 on HDFC Bank Credit Card EMI on 3 months tenure, Min. Txn Value: ₹7,500 T&C</li>
          <li>Bank Offer 10% off up to ₹1,000 on HDFC Bank Credit Card EMI on 6 and 9 months tenure, Min Txn Value: ₹7,500 T&C</li>
          <li>Special Price Get extra 42% off (price inclusive of cashback/coupon) T&C</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;