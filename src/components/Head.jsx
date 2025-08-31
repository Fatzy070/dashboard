import React from 'react';
import { IoIosNotifications , IoIosSettings } from "react-icons/io";
import { FaCircleUser , FaUserPlus} from "react-icons/fa6";
import Nav from '../navigations/Nav';

const Head = ({ title , name }) => {
    return (
        <>
            <section className='lg:flex hidden h-[50px] py-5 items-center justify-between'>
               <div>
                 <div className='flex gap-2 text-[15px] capitalize'>
                 <p className="text-gray-500">{title}</p>
                 <p className="text-gray-700">/ {name}</p>
            </div>
            <h1 className='font-semibold'>{name}</h1>
               </div>
            <div className='flex items-center gap-7'>
                <div class="form-group">
                    <input type="text" placeholder=" " required />
                    <label>Type here</label>
                </div>

               <div className='flex text-gray-500 gap-3 items-center'>
                 <span className='flex gap-1.5 text-[14px] font-bold items-center uppercase'>
                    <FaCircleUser size={15} />
                    <p >sign in</p>
                </span>
                <IoIosSettings size={20}/>
                <IoIosNotifications size={20} />
               </div>
            </div>
            </section>
           
        </>
    );
};

export default Head;