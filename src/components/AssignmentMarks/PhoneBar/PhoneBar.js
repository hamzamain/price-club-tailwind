import axios from "axios";
import React, { useEffect, useState } from "react";
import PhoneChart from "../../PhoneChart/PhoneChart";

const PhoneBar = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const allPhone = data.data.data;
        console.log(allPhone);
        const phoneData = allPhone.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);
          const singlePhone = {
            name: phone.phone_name,
            price: price,
          };
          return singlePhone;
        });
        console.log(phoneData);
        setPhones(phoneData);
      });
  }, []);
  return (
    <div>
      <PhoneChart phone={phones}></PhoneChart>
    </div>
  );
};

export default PhoneBar;
