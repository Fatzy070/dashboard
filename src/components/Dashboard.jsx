import React from 'react';
import Head from './Head';
import Nav from '../navigations/Nav';
import Info from '../Data/Info';
import VisitorsChart from './VisitorsChart';
const Dashboard = () => {
    const { home } = Info
    return (
        <>
            <Head title="Dashboard" name="Home" />
            <Nav title="Dashboard" name="Home" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14'>
                {home.map((item) => {
                    const Icon =item.icon
                    return (
                        <div key={item} className='bg-white shadow-2xl rounded-[10px]  relative h-[140px]'> 
                           <div 
  className={`border h-[60px] left-[12px] top-[-15px] w-[65px] flex justify-center items-center rounded-[10px] absolute text-white 
  ${item.id === 1 ? "bg-blue-500" : item.id === 2 ? "bg-green-500" : item.id === 3 ? "bg-red-500" : "bg-yellow-500"}`}>
  <Icon size={30}/>
</div>

                            <div className='pt-4 '>
                                <div className='px-4 pb-6 text-end capitalize'>
                                    <p className='text-gray-700 text-[14px]'>{item.name}</p>
                                <span className='text-2xl font-semibold'>{item.money}</span>
                                </div>
                                <hr className='text-gray-400' />
                              <p className='px-4 pt-2'>
                                <span className='font-semibold text-[rgba(44,188,97,255)]'>{item.percent}</span> <span>{item.text}</span>
                            </p>  
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="bg-white p-4 mt-6 rounded-2xl shadow">
        <VisitorsChart />
      </div>
        </>
    );
};

export default Dashboard;