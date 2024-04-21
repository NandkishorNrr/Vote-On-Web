import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dummyData, { generateRandomVotes } from "./dummyData";

export default function Home() {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomVotes());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const totalVotes = (party) => {
    let total = 0;
    for (let key in party) {
      total += party[key].votes;
    }
    return total;
  };

  return (
    <div id="root" className="app">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex justify-center">
            <div className="bg-orange-400 p-3 rounded-lg md:flex md:justify-between table-container">
              <div className="overflow-auto">
                <div className="overflow-y-auto max-h-[400px]">
                  <table className="w-full rounded-lgborder-collapse border border-gray-700">
                    <thead className="sticky top-0 bg-orange-200 rounded-lg">
                      <tr>
                        <th className="px-6 py-3 border border-gray-700">
                          S.No.
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          Locality
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="/images/BJP_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          BJP
                          <br />({totalVotes(data.map((item) => item.BJP))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="/images/INC_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          INC
                          <br />({totalVotes(data.map((item) => item.INC))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="/images/AAP_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          AAP
                          <br />({totalVotes(data.map((item) => item.AAP))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="/images/BSP_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          BSP
                          <br />({totalVotes(data.map((item) => item.BSP))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="/images/CPI_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          CPI
                          <br />({totalVotes(data.map((item) => item.CPI))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="/images/NPP_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          NPP
                          <br />({totalVotes(data.map((item) => item.NPP))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="/images/Total_Votes.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          Total Votes
                          <br />(
                          {data.reduce((acc, cur) => acc + totalVotes(cur), 0)})
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm font-medium text-gray-700">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm font-medium text-gray-700">
                            {item.locality}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.BJP.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.INC.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.AAP.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.BSP.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.CPI.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.NPP.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {totalVotes(item)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-600 sm:text-center">
              © 2024
              <a href="#" className="hover:underline">
                Nandkishornrr
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link to="#" className="text-gray-300 hover:text-gray-700">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link to="#" className="text-gray-300">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 1 2.413 1.4c.725.6 1.488 1.31 1.844 2.225.378.95.286 1.85-.15 2.637-.438.713-1.137 1.3-1.962 1.876-.75.487-1.588.993-2.619 1.569a22.985 22.985 0 0 0-1.962 1.62c-.512.533-.894 1.138-1.15 1.8a4.083 4.083 0 0 1-.387 1.487 4.27 4.27 0 0 1-1.288 1.162 3.742 3.742 0 0 1-1.763.438 4.49 4.49 0 0 1-1.512-.45 3.563 3.563 0 0 1-1.238-1.075 5.44 5.44 0 0 1-.712-1.637 12.6 12.6 0 0 1-.287-1.662c0-.488.062-.95.137-1.387a10.58 10.58 0 0 1 .575-1.738c.263-.575.55-1.137.8-1.7.412-.85.75-1.7.887-2.55a12.6 12.6 0 0 0 .125-1.862c-.05-.588-.175-1.138-.338-1.662-.1-.375-.25-.725-.375-1.075-.2-.525-.375-1-.325-1.45A5.37 5.37 0 0 1 11.3.556a4.272 4.272 0 0 1 1.662.113c.55.125 1.075.35 1.575.575.538.262 1.013.575 1.463.925.4.375.725.825.975 1.313.3.562.475 1.188.6 1.837.112.637.162 1.313.162 2.025 0 .675-.062 1.35-.162 2.013-.113.675-.325 1.325-.65 1.938-.225.562-.5 1.1-.85 1.612-.375.55-.812 1.075-1.287 1.575-.1.05-.25.15-.375.238a3.564 3.564 0 0 1-1.287.562 5.432 5.432 0 0 1-1.7-.275 4.478 4.478 0 0 1-1.475-.812 4.154 4.154 0 0 1-1.275-1.175c-.362-.525-.662-1.125-.85-1.762-.187-.637-.263-1.312-.263-2.025 0-.7.075-1.375.25-2.013.162-.65.425-1.3.75-1.925.312-.587.725-1.15 1.15-1.7.412-.512.875-1.013 1.362-1.463.45-.425.925-.812 1.438-1.138.475-.312.95-.6 1.438-.825.525-.25 1.013-.45 1.537-.588Z" />
                </svg>
                <span className="sr-only">Twitter profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
