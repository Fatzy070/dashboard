import React from 'react';
import { IoIosNotifications , IoIosSettings } from "react-icons/io";
import { FaCircleUser , FaUserPlus} from "react-icons/fa6";
import Menu from './Menu';

const Nav = ({ title , name }) => {
    return (
        <>
            <section className='justify-between md:flex flex-row-reverse  lg:hidden '>
                
            <div className='flex items-center justify-between md:gap-7'>
                <div class="form-group">
                    <input type="text" placeholder=" " required />
                    <label>Type here</label>
                </div>

               <div className='flex text-gray-600 gap-1.5 md:gap-2 items-center'> 
                <Menu />
                <FaCircleUser size={15} />
                <IoIosSettings size={20}/>
                <IoIosNotifications size={20} />
               </div>
            </div>
           <div className='capitalize mt-3 md:mt-0'>
                 <div className='flex gap-2 text-[15px]'>
                 <p className="text-gray-500">{title}</p>
                 <p className="text-gray-700">/ {name}</p>
            </div>
            <h1 className=' font-semibold'>{name}</h1>
               </div>
                    
            </section>
        </>
    );
};

export default Nav;