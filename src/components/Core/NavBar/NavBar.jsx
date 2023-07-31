import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Cart from 'components/Cart/Cart';

function NavBar() {
  return (
    <>
      <div className="max-w-[1450px] mx-auto ">
        <div className="">  
          <div className=" bg-[white] border-b-2    flex justify-evenly  items-center h-[60px] sticky top-0 z-10">
            <div className="w-[28%]  md:hidden">
              <Link to={'/'}>
                <p className="text-[25px] text-[grey] font-[600]">E-commerce</p>
              </Link>
            </div>
            <div className="w-[28%] md:w-[50%] flex justify-center">
              <ul className="flex gap-[20px] text-[18px]   ">
                <Link to={'/'}>
                  <li className="text-[grey] text-[20px]">Главная</li>
                </Link>
              </ul>
            </div>

            <div className="w-[28%] md:w-[49%] flex justify-center gap-x-4 text-center">
              <Cart className="text-[grey] text-[20px]" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default NavBar;
