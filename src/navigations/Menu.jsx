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
      <div onClick={toggleOpen} className="cursor-pointer z-50">
        <IoMenu size={24} />
      </div>  

      {/* Sidebar */}
      <div className='absolute top-0 left-0 w-full z-40'>
        {isOpen && 
        <SideNav />
        }
      </div>
    </>
  );
};

export default Menu;
