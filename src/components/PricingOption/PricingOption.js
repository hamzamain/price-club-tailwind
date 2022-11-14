import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Feature from "../Feature/Feature";

const PricingOption = ({ option }) => {
  const { id, name, price, features } = option;

  return (
    <div className=" bg-indigo-300 hover:bg-blue-500 hover:text-white rounded-lg p-10 m-4">
      <p>
        <span className="text-6xl font-bold text-white ">{price}</span>
        <span className="text-2xl text-gray-200 font-medium">/mon</span>
      </p>
      <p className="text-3xl mt-4"> {name}</p>
      <div>
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
