import React, { useState } from "react";
import TableRow from "./TableRow";
import pomelo from "../../images/pomelo.png";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const DataTable = ({ dark, coinData, orderBy, setOrderBy }) => {
  const [starred, setStarred] = useState([]);
  const handleStarred = (data) => {
    const isStarred = starred.find((item) => item.id === data.id);
    if (isStarred) {
      const remainingData = starred.filter((item) => item.id !== data.id);
      setStarred(remainingData);
    } else {
      setStarred((previousValue) => [...previousValue, data]);
    }
  };
  const [sort, setSort] = useState([
    {
      name: "NAME",
      isAsc: true,
    },
    {
      name: "PRICE",
      isAsc: true,
    },
    {
      name: "1H",
      isAsc: true,
    },
    {
      name: "24H",
      isAsc: true,
    },
    {
      name: "7D",
      isAsc: true,
    },
    {
      name: "LIQUIDITY",
      isAsc: true,
    },
    {
      name: "MARKET CAP",
      isAsc: true,
    },
    {
      name: "SUPPLY",
      isAsc: true,
    },
  ]);

  const TableHead = () => (
    <thead className="">
      <tr className="w-full">
        <th className="text-center">#</th>
        {sort.map((item, i) => {
          return (
            <th
              key={i}
              onClick={() =>
                setSort((sort) =>
                  sort.map((sortItem, i) =>
                    sortItem.name === item.name
                      ? { ...sortItem, isAsc: !sortItem.isAsc }
                      : sortItem
                  )
                )
              }
              className={`${item.name === "NAME" && "sticky left-14"} ${["1H", "24H", "7D", "LIQUIDITY"].includes(item.name) && "text-center"}`}
            >
              {item.name}
              {item.isAsc ? (
                <HiChevronDown className="inline mx-1 mb-1" />
              ) : (
                <HiChevronUp className="inline mx-1 mb-1" />
              )}
            </th>
          );
        })}
        <th>&nbsp;</th>
      </tr>
    </thead>
  );

  return (
    // px-5
    <div className="px-6 md:px-20" href="https://t.me/jointrustswap">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 py-6">
        <div className="space-y-4">
          <h3
            className={`text-4xl lg:text-5xl font-bold leading-[3rem] capitalize text-white ${
              dark ? "" : ""
            }`}
          >
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
                <ul className="p-2 bg-[#212429] z-40 ddm">
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
        </div>
        <a href="https://pomelo.io/grants/trustswap">
          <div className="bg-[#FBF0DF] gap-10 flex items-center justify-center py-[8px] rounded px-6">
            <img className="w-[150px]" src={pomelo} alt="pomelo" />
            <span className="text-[#021a50] text-[20px]">
              Support us on Pomelo season 4!
            </span>
          </div>
        </a>
      </div>

      <div className="overflow-x-auto">
        {starred.length > 0 && (
          <table className="table w-full z-0 mb-6">
            <TableHead />
            <tbody>
              {orderBy === "Order By Liquidity" &&
                starred
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
                      handleStarred={handleStarred}
                      stared={starred}
                    />
                  ))}

              {orderBy === "Order By MarketCap" &&
                starred
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
                      handleStarred={handleStarred}
                      stared={starred}
                    />
                  ))}

              {orderBy === "Order By Price" &&
                starred
                  ?.sort((a, b) => b.price - a.price)
                  ?.map((data, index) => (
                    <TableRow
                      data={data}
                      key={index}
                      index={index}
                      dark={dark}
                      handleStarred={handleStarred}
                      stared={starred}
                    />
                  ))}

              {orderBy === "Order By Supply" &&
                starred
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
                      handleStarred={handleStarred}
                      stared={starred}
                    />
                  ))}
            </tbody>
          </table>
        )}

        <table className="table w-full z-0">
          <TableHead />
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
                    handleStarred={handleStarred}
                    stared={starred}
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
                    handleStarred={handleStarred}
                    stared={starred}
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
                    handleStarred={handleStarred}
                    stared={starred}
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
                    handleStarred={handleStarred}
                    stared={starred}
                  />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
