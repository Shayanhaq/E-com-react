import React from 'react';
import { FaShoppingCart, FaGift, FaMobileAlt, FaTshirt, FaLaptop, FaGamepad } from 'react-icons/fa'; // Using react-icons for ease

const Category = ({ name, icon }) => {
  return (
    <div className="box flex flex-col items-center justify-center text-center">
      <div className="text-xl">{icon}</div>
      <span className="block text-xs mt-1">{name}</span>
    </div>
  );
};

const CategoryList = () => {
  const categories = [
    { name: 'Shopping', icon: <FaShoppingCart /> },
    { name: 'Gifts', icon: <FaGift /> },
    { name: 'Mobiles', icon: <FaMobileAlt /> },
    { name: 'Clothing', icon: <FaTshirt /> },
    { name: 'Electronics', icon: <FaLaptop /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 m-4 sm:m-8">
      {categories.map((category, index) => (
        <Category key={index} name={category.name} icon={category.icon} />
      ))}
    </div>
  );
};

export default CategoryList;
