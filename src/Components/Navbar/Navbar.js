import React from 'react';

import Logo from "../../images/Logo.png"

import Farm from "../../images/farm.png"


const Navbar = ({ dark, setDark, orderBy, setOrderBy }) => {
  return (
    <div
      className="navbar bg-base-100"
      data-theme={dark ? 'dark' : 'light'}
    >
      <div className="border-b-[1px] b-c w-full py-2 mx-[22px] flex justify-between flex-col md:flex-row">
        <div className="">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            {/* <img width="150px" src="../../images/logo.svg" alt="brand" /> */}
            <img className='logo-image' src={Logo} alt="brand" />
          </a>
        </div>

        <div className="">
          <div className="flex justify-end px-2">
            <div className="flex items-center flex-col md:flex-row gap-4 md:gap-0">
      
      {/* <div
      className="flex justify-center  p-5  mx-[30px]"
      data-theme={dark ? 'dark' : 'light'}
    > */}
      <a href="https://twitter.com/jointrustswap" target="_blank" rel="noreferrer" className='flex items-center'>
        <svg className="w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" fill="#1DA1F2"/></svg> 
      
      </a>
      <a href="https://t.me/jointrustswap" target="_blank" rel="noreferrer" className='flex items-center ml-3 mr-[1rem]'>
        <svg className="w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" fill="#0088CC"/></svg>
      </a>
    {/* </div> */}
              
             <a href="##" className="btn btn-sm btn-outline mx-5 t">
                Farm 
                <span className='ml-[1rem]'>
                  <img src={Farm} alt="" className='farmImg' />
                </span>
              </a>

              <a href="https://bridge.trustswap.finance" className="btn btn-sm btn-outline t">
                Bridge{' '}
                <i className="fa-solid fa-arrow-right-arrow-left ml-[1rem]"></i>
              </a>
              <a href="##" className="btn btn-sm btn-outline mx-5 t">
                List <i className="fa-solid fa-clipboard-list ml-[1rem]"></i>
              </a>
              <a href="https://swap.trustswap.finance" className="btn btn-sm btn-outline btn-success g">
                Swap
              </a>

              {/* <div className="dropdown dropdown-end ">
                <ul className="menu menu-horizontal p-0 mx-5">
                  <li>
                    <a href="##">
                      {orderBy}
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </a>
                    <ul className="p-2 bg-base-100 z-40">
                      <li onClick={() => setOrderBy('Order By Liquidity')}>
                        <a href="##">Order By Liquidity</a>
                      </li>
                      <li onClick={() => setOrderBy('Order By MarketCap')}>
                        <a href="##">Order By MarketCap</a>
                      </li>
                      <li onClick={() => setOrderBy('Order By Price')}>
                        <a href="##">Order By Price</a>
                      </li>
                      <li onClick={() => setOrderBy('Order By Supply')}>
                        <a href="##">Order By Supply</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div> */}
              
              <label className="swap swap-rotate ml-[1rem]">
                <input type="checkbox" onClick={() => setDark(!dark)} />
                <svg
                  className="swap-off fill-current w-[2.5rem] h-9 chnger"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  className="swap-on fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
