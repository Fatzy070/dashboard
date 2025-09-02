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
      <div onClick={toggleOpen} className="cursor-pointer ">
        <IoMenu size={24} />
      </div>  

      {/* Sidebar */}
       <div 
      className="fixed inset-0 z-40 " 
      onClick={toggleOpen}
    ></div>
      <div className='absolute  top-0 left-0 w-[70%] border z-40'
      onClick={(e) => e.stopPropagation()}
      >
        {isOpen && 
        <SideNav />
        }
      </div>
    </>
  );
};

export default Menu;
