import React from "react";

const Route = ({ route }) => {
  const { name, path } = route;
  return (
    <div>
      <li className="font-semibold mr-12">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

export default Route;
