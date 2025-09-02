import React from 'react';
import Info from '../Data/Info';
import { NavLink } from 'react-router-dom';
const SideNav = () => {
        const { material , dashboard , sign , auth } = Info
    return (
        <>
     <div className='border h-screen w-[100%] md:w-[50%] lg:w-[285px] lg:h-[97dvh] lg:rounded-[15px] bg-[rgba(23,32,46,255)] text-white overflow-y-auto'>

                <h1 className='py-7 text-[14px] md:text-[1rem] text-center font-semibold capitalize'>{material}</h1>
                <hr className='text-gray-400'/>
                <section className='mx-5'>
                    <div className='pt-4'>
                    {dashboard.map((item , index) => {
                         const Icon = item.icon;
                            const isHome = item.name === "dashboard"; // 👈 check if na dashboard

                      return (
                           <NavLink 
                           to={item.link}
                          key={index} 
                      className={`flex mt-1 items-center text-[14px] md:text-[1rem] gap-3 py-4 px-3 capitalize font-semibold rounded-md cursor-pointer 
                           ${isHome ? "bg-blue-500 text-white" : "page"}`
                         }
                         > 
                       <Icon size={19} />
                          <p>{item.name}</p>
                 </NavLink>
                )
              })}
                </div>
                <div>
                    <h1 className='px-3 md:text-[1rem] uppercase font-bold pt-5.5 pb-3'>{auth}</h1>
                </div>
                <div>
                {sign.map((item) => {
                        const Icon = item.icon
                    return (
                        <NavLink
                        to={item.link}
                        key={item} className='flex rounded-md capitalize font-semibold gap-3 py-4 px-3 page items-center'> 
                        <Icon size={19}/>
                        <p>{item.name}</p>
                        </NavLink>
                    )
                })}
                </div>
                </section>
            </div>
        </>
    );
};

export default SideNav;