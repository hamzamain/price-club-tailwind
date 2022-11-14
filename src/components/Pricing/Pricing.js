import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "free",
      price: 0,
      features: [
        "Awsome feature",
        "Extra feature",
        "unnessecary feature",
        "will never use feature",
        "hudai feature",
        "ajaira feature",
        "no feature",
      ],
    },
    {
      id: 2,
      name: "midium",
      price: 9.99,
      features: [
        "All free feature",
        "Extra feature",
        "unnessecary feature",
        "will never use feature",
        "hudai feature",
        "ajaira feature",
        "no feature",
      ],
    },
    {
      id: 3,
      name: "primum",
      price: 19.99,
      features: [
        "Extra primum feature",
        "Extra feature",
        "unnessecary feature",
        "will never use feature",
        "hudai feature",
        "ajaira feature",
        "no feature",
      ],
    },
  ];
  return (
    <div>
      <h2 className="font-bold text-5xl  bg-indigo-300 p-4 text-white my-4">
        Best deal in the city
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {pricingOptions.map((option) => (
          <PricingOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
