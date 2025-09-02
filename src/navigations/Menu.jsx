import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import SideNav from '../layout/SideNav';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Button */}
      <div onClick={toggleOpen} className="cursor-pointer">
        <IoMenu size={24} />
      </div>

      {/* Sidebar & Backdrop */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30 bg-black/70 bg-opacity-40"
            onClick={toggleOpen}
          ></div>

          {/* Sidebar */}
          <div
            className="absolute top-0 left-0 w-[70%] h-full bg-white shadow-lg z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <SideNav />
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
