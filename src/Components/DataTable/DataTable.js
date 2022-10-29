import React, { useState } from "react";
import TableRow from "./TableRow";
import pomelo from "../../images/pomelo.png";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const DataTable = ({ dark, coinData, orderBy, setOrderBy }) => {
  const [starred, setStarred] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const handleStarred = (data) => {
    const isStarred = starred.find((item) => item.id === data.id);
    if (isStarred) {
      const remainingData = starred.filter((item) => item.id !== data.id);
      setStarred(remainingData);
    } else {
      setStarred((previousValue) => [...previousValue, data]);
    }
  };

  const initialOrder = "asc";

  const initialSort = [
    {
      name: "Name",
    },
    {
      name: "Price",
    },
    {
      name: "1H",
    },
    {
      name: "24H",
    },
    {
      name: "7D",
    },
    {
      name: "Liquidity",
    },
    {
      name: "Market Cap",
    },
    {
      name: "Supply",
    },
  ];

  const [selected, setSelected] = useState(orderBy);
  const [order, setOrder] = useState(initialOrder);
  const [sort, setSort] = useState(initialSort);

  const handleSort = (itemName) => {
    if (order === "asc") setOrder("desc");
    else setOrder("asc");
    setOrderBy(itemName);
  };

  const handleSelected = (itemName) => {
    setSelected(itemName);
    setOrder("asc");
    setOrderBy(itemName);
  };

  const handleDropdown = (order) => {
    setDropdown(false);
    handleSelected(order);
  };

  const SortedTableHead = () => (
    <thead className="">
      <tr className="w-full">
        <th className="text-center hidden sm:table-cell sm:sticky sm:left-0">
          #
        </th>
        {sort.map((item, i) => {
          return (
            <th
              key={i}
              onClick={() =>
                selected === item.name
                  ? handleSort(item.name)
                  : handleSelected(item.name)
              }
              className={`${
                item.name === "Name" && "sticky left-0 sm:left-16"
              } ${
                ["1H", "24H", "7D", "Liquidity"].includes(item.name)
                  ? "text-center"
                  : "text-left"
              }`}
            >
              {item.name}
              {selected === item.name ? (
                order === "asc" ? (
                  <HiChevronDown className="inline mx-1 mb-1" />
                ) : (
                  <HiChevronUp className="inline mx-1 mb-1" />
                )
              ) : (
                <></>
              )}
            </th>
          );
        })}
        <th>&nbsp;</th>
      </tr>
    </thead>
  );

  const sortBy = {
    Name: {
      asc: (a, b) =>
        b.coin.name < a.coin.name ? 1 : b.coin.name > a.coin.name ? -1 : 0,
      desc: (b, a) =>
        b.coin.name < a.coin.name ? 1 : b.coin.name > a.coin.name ? -1 : 0,
    },
    Price: {
      asc: (a, b) => b.price - a.price,
      desc: (b, a) => b.price - a.price,
    },
    "1H": {
      asc: (a, b) => b.durations[0] - a.durations[0],
      desc: (b, a) => b.durations[0] - a.durations[0],
    },
    "24H": {
      asc: (a, b) => b.durations[1] - a.durations[1],
      desc: (b, a) => b.durations[1] - a.durations[1],
    },
    "7D": {
      asc: (a, b) => b.durations[2] - a.durations[2],
      desc: (b, a) => b.durations[2] - a.durations[2],
    },
    Liquidity: {
      asc: (a, b) =>
        b.liquidity.replace(/,/g, "") - a.liquidity.replace(/,/g, ""),
      desc: (b, a) =>
        b.liquidity.replace(/,/g, "") - a.liquidity.replace(/,/g, ""),
    },
    "Market Cap": {
      asc: (a, b) =>
        b.marketCap.replace(/,/g, "") - a.marketCap.replace(/,/g, ""),
      desc: (b, a) =>
        b.marketCap.replace(/,/g, "") - a.marketCap.replace(/,/g, ""),
    },
    Supply: {
      asc: (a, b) => b.supply.replace(/,/g, "") - a.supply.replace(/,/g, ""),
      desc: (b, a) => b.supply.replace(/,/g, "") - a.supply.replace(/,/g, ""),
    },
  };

  const SortedTableBody = ({ data }) => (
    <tbody>
      {data?.sort(sortBy[orderBy][order])?.map((data, index) => (
        <TableRow
          data={data}
          key={index}
          index={index}
          dark={dark}
          handleStarred={handleStarred}
          starred={starred}
        />
      ))}
    </tbody>
  );

  return (
    // px-5
    <div className="px-6 md:px-20" href="https://t.me/jointrustswap">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 py-6">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h3
            className={`text-4xl lg:text-5xl font-bold leading-[3rem] capitalize text-white text-center lg:text-left`}
          >
            Antelope market capitalization
          </h3>
          {dropdown && (
            <div
              className="dropdown-overlay"
              onClick={() => setDropdown(false)}
            ></div>
          )}
          <div className="dropdown">
            <button onClick={() => setDropdown(true)} className="dropdown-btn">
              Order by {orderBy}
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </button>
            {dropdown && (
              <>
                <ul className="dropdown-list">
                  <li onClick={() => handleDropdown("Liquidity")}>
                    Order by Liquidity
                  </li>
                  <li onClick={() => handleDropdown("Name")}>Order by Name</li>
                  <li onClick={() => handleDropdown("1H")}>Order by 1 Hour</li>
                  <li onClick={() => handleDropdown("24H")}>
                    Order by 24 Hours
                  </li>
                  <li onClick={() => handleDropdown("7D")}>Order by 7 Days</li>
                  <li onClick={() => handleDropdown("Market Cap")}>
                    Order by Market Cap
                  </li>
                  <li onClick={() => handleDropdown("Price")}>
                    Order by Price
                  </li>
                  <li onClick={() => handleDropdown("Supply")}>
                    Order by Supply
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <a href="https://pomelo.io/grants/trustswap">
          <div className="bg-[#FBF0DF] justify-between sm:gap-10 flex flex-col sm:flex-row items-center py-6 rounded px-6">
            <img className="w-[150px]" src={pomelo} alt="pomelo" />
            <span className="text-[#021a50] text-[20px] text-center">
              Support us on Pomelo season 4!
            </span>
          </div>
        </a>
      </div>

      <div className="overflow-x-auto rounded-xl mb-6">
        {starred.length > 0 && (
          <table className="table w-full z-0 overflow-x-auto">
            <SortedTableHead />
            <SortedTableBody data={starred} />
            {/* <tbody>
              {orderBy === "Liquidity" &&
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
                      starred={starred}
                    />
                  ))}

              {orderBy === "MarketCap" &&
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
                      starred={starred}
                    />
                  ))}

              {orderBy === "Price" &&
                starred
                  ?.sort((a, b) => b.price - a.price)
                  ?.map((data, index) => (
                    <TableRow
                      data={data}
                      key={index}
                      index={index}
                      dark={dark}
                      handleStarred={handleStarred}
                      starred={starred}
                    />
                  ))}

              {orderBy === "Supply" &&
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
                      starred={starred}
                    />
                  ))}
            </tbody> */}
          </table>
        )}
      </div>
      <div className="overflow-x-auto rounded-xl">
        <table className="table w-full z-0">
          <SortedTableHead />
          <SortedTableBody data={coinData} />
        </table>
      </div>
    </div>
  );
};

export default DataTable;
