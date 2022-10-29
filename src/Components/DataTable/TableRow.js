import React, { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import CopyToClipboard from "react-copy-to-clipboard";
import metaMask from "../../images/metamask.svg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const TableRow = ({ data, index, dark, handleStarred, starred }) => {
  const { toasts } = useToasterStore();

  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts]);

  // const [copy, setCopy] = useState(false)

  const handleCopy = () => {
    toast.success("Copied Address: " + data.address, {
      duration: 2000,
      style: {
        boxShadow: "0px 0px 4px rgba(110, 99, 71, 0.1)",
        color: "#fff",
        backgroundColor: "#1f2937"
      },
    });
  };

  const isFound = starred?.find((item) => item.id === data.id);
  const handleRedirect = () => {
    if (data.detail) {
      window.location = data.detail;
    }
  };

  return (
    // <tr className={`hover ${data.detail && "cursor-pointer"} hoverss bg-[#212429]`} onClick={handleRedirect}>
    <tr className={`table-row group`} onClick={() => null}>
      <td className="sticky left-0 group-hover:bg-[#191919] transition">
        <div className="flex items-center justify-center cursor-pointer gap-1">
          <button onClick={() => handleStarred(data)}>
            {isFound ? <AiFillStar /> : <AiOutlineStar />}
          </button>
          {index + 1}
        </div>
      </td>
      <td className="group-hover:bg-[#191919] transition sticky left-14 min-w-[200px]">
        <div className="flex items-center gap-1">
          <img
            src={`./images/coins/${data?.coin?.icon}`}
            className="w-10 h-10"
            alt=""
          />
          <div className="ml-5 text-start">
            <h4 className="text-md mb-1">{data?.coin?.name}</h4>
            <div className="flex items-center gap-1.5">
              <a
                href={data?.buy}
                className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white px-2 border border-green-500 hover:border-transparent rounded text-[12px]"
              >
                BUY
              </a>
              <h5
                className={`text-[12px] px-2 bg-gray-900 text-gray-400 rounded py-0.5`}
              >
                {data?.coin?.shortName}
              </h5>
            </div>
          </div>
        </div>
      </td>
      <td className="group-hover:bg-[#191919] transition">${data?.price}</td>
      {data.durations.map((duration, i) => (
        <td key={i} className="group-hover:bg-[#191919] transition text-center">
          <span
            className={`px-3 py-2 rounded-lg font-bold ${
              parseFloat(duration) < 0
                  ? "text-red-600 bg-[#341d2a]"
                  : "bg-[#243335] text-green-400"
            }`}
          >
            {duration}%
          </span>
        </td>
      ))}
      <td className="group-hover:bg-[#191919] transition text-center min-w-[10rem]">
        <span
          className={`px-3 py-2 rounded-lg font-bold text-[#6888d2] bg-[#222e46]`}
        >
          ${data?.liquidity}
        </span>
      </td>
      <td className="group-hover:bg-[#191919] transition">${data?.marketCap}</td>
      <td className="group-hover:bg-[#191919] transition min-w-[14rem]">
        {data?.supply} {data?.coin?.shortName}
      </td>
      <td className="group-hover:bg-[#191919] transition">
        <div className="flex items-center w-20">
          <a href="##">
            <img width={18} src={metaMask} alt="metamask" />
          </a>
          <CopyToClipboard onCopy={handleCopy} text={data.address}>
            <svg
              className="mx-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              height="20"
              width="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              ></path>
            </svg>
          </CopyToClipboard>
          <Toaster />

          <button onClick={handleRedirect}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              height="20"
              width="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
