import React, { useState } from "react";
import TableRow from "./TableRow";
import pomelo from "../../images/pomelo.png";

const DataTable = ({ dark, coinData, orderBy, setOrderBy }) => {
  const [stared, setStared] = useState([]);
  const handleStared = (data) => {
    const isStared = stared.find((item) => item.id === data.id);
    if (isStared) {
      const remainingData = stared.filter((item) => item.id !== data.id);
      setStared(remainingData);
    } else {
      setStared((previousValue) => [...previousValue, data]);
    }
  };

  return (
    // px-5
    <div
      className="md:px-[3rem] px-[0.5rem]"
      a
      href="https://t.me/jointrustswap"
    >
      <a href="https://pomelo.io/grants/trustswap">
        <div className="bg-[#FBF0DF] gap-10 flex items-center justify-center py-[8px] lg:w-max px-5 mt-[3rem] ml-auto mt-[4.25rem] rounded">
          <img className="w-[150px]" src={pomelo} alt="pomelo" />
          <span className="text-[#021a50] text-[20px]">
            Support us on Pomelo season 4!
          </span>
        </div>
      </a>
      <h3 className="text-3xl mb-5 mt-[-7.75rem] pl-[-0.57rem] Antelope">
        Antelope market capitalization
      </h3>

      <div className="dropdown dropdown-end mb-[2rem] brd">
        <ul className="menu menu-horizontal p-0 mx-5">
          <li>
            <a href="##" className="dropdown dd">
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
            <ul className="p-2 bg-base-100 z-40 ddm">
              <li onClick={() => setOrderBy("Order By Liquidity")}>
                <a href="##">Order By Liquidity</a>
              </li>
              <li onClick={() => setOrderBy("Order By MarketCap")}>
                <a href="##">Order By MarketCap</a>
              </li>
              <li onClick={() => setOrderBy("Order By Price")}>
                <a href="##">Order By Price</a>
              </li>
              <li onClick={() => setOrderBy("Order By Supply")}>
                <a href="##">Order By Supply</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="overflow-x-auto">
        {stared.length > 0 && (
          <table className="table w-full z-0">
            <thead>
              <tr>
                <th>#</th>
                <th className="sticky left-16">NAME</th>
                <th>PRICE</th>
                <th>1H</th>
                <th>24H</th>
                <th>7D</th>
                <th>LIQUIDITY</th>
                <th>MARKET CAP</th>
                <th>SUPPLY</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {orderBy === "Order By Liquidity" &&
                stared
                  ?.sort(
                    (a, b) =>
                      b.liquidity.replace(/,/g, "") -
                      a.liquidity.replace(/,/g, "")
                  )
                  ?.map((data, index) => (
                    <TableRow
                      data={data}
                      key={index}
                      index={index}
                      dark={dark}
                      handleStarred={handleStared}
                      stared={stared}
                    />
                  ))}

              {orderBy === "Order By MarketCap" &&
                stared
                  ?.sort(
                    (a, b) =>
                      b.marketCap.replace(/,/g, "") -
                      a.marketCap.replace(/,/g, "")
                  )
                  ?.map((data, index) => (
                    <TableRow
                      data={data}
                      key={index}
                      index={index}
                      dark={dark}
                      handleStarred={handleStared}
                      stared={stared}
                    />
                  ))}

              {orderBy === "Order By Price" &&
                stared
                  ?.sort((a, b) => b.price - a.price)
                  ?.map((data, index) => (
                    <TableRow
                      data={data}
                      key={index}
                      index={index}
                      dark={dark}
                      handleStarred={handleStared}
                      stared={stared}
                    />
                  ))}

              {orderBy === "Order By Supply" &&
                stared
                  ?.sort(
                    (a, b) =>
                      b.supply.replace(/,/g, "") - a.supply.replace(/,/g, "")
                  )
                  ?.map((data, index) => (
                    <TableRow
                      data={data}
                      key={index}
                      index={index}
                      dark={dark}
                      handleStarred={handleStared}
                      stared={stared}
                    />
                  ))}
            </tbody>
          </table>
        )}

        <table className="table w-full z-0">
          <thead>
            <tr>
              <th>#</th>
              <th className="sticky left-16">NAME</th>
              <th>PRICE</th>
              <th>1H</th>
              <th>24H</th>
              <th>7D</th>
              <th>LIQUIDITY</th>
              <th>MARKET CAP</th>
              <th>SUPPLY</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {orderBy === "Order By Liquidity" &&
              coinData
                ?.sort(
                  (a, b) =>
                    b.liquidity.replace(/,/g, "") -
                    a.liquidity.replace(/,/g, "")
                )
                ?.map((data, index) => (
                  <TableRow
                    data={data}
                    key={index}
                    index={index}
                    dark={dark}
                    handleStarred={handleStared}
                    stared={stared}
                  />
                ))}

            {orderBy === "Order By MarketCap" &&
              coinData
                ?.sort(
                  (a, b) =>
                    b.marketCap.replace(/,/g, "") -
                    a.marketCap.replace(/,/g, "")
                )
                ?.map((data, index) => (
                  <TableRow
                    data={data}
                    key={index}
                    index={index}
                    dark={dark}
                    handleStarred={handleStared}
                    stared={stared}
                  />
                ))}

            {orderBy === "Order By Price" &&
              coinData
                ?.sort((a, b) => b.price - a.price)
                ?.map((data, index) => (
                  <TableRow
                    data={data}
                    key={index}
                    index={index}
                    dark={dark}
                    handleStarred={handleStared}
                    stared={stared}
                  />
                ))}

            {orderBy === "Order By Supply" &&
              coinData
                ?.sort(
                  (a, b) =>
                    b.supply.replace(/,/g, "") - a.supply.replace(/,/g, "")
                )
                ?.map((data, index) => (
                  <TableRow
                    data={data}
                    key={index}
                    index={index}
                    dark={dark}
                    handleStarred={handleStared}
                    stared={stared}
                  />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
