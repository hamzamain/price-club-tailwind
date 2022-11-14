import React, { useState } from "react";
import Route from "../Route/Route";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contacts", path: "/contacts" },
    { id: 5, name: "About", path: "/about" },
  ];
  return (
    <nav className="bg-purple-200">
      <div onClick={() => setOpen(!open)} className=" h-20 w-20 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={`bg-purple-200 w-full md:flex justify-center absolute md:static duration-500 ease-out  ${
          open ? "top-6" : "top-[-200px]"
        }`}
      >
        {routes.map((route) => (
          <Route key={route.id} route={route}></Route>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
