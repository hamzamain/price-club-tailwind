import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center mb-1">
      <p>
        <CheckCircleIcon className="h-6" />
      </p>
      <p className="ml-2">{feature}</p>
    </div>
  );
};

export default Feature;
