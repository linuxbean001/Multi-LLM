import React from "react";
import "./Plan.css";

const Plan = () => {
  return (
    <>
      <div
        className=" py-5 bg-[#000]  md:h-screen flex flex-col justify-center items-center planBoxMain" 
        id="pricing"
      >
        <div
          className="mx-auto  max-w-4xl
          flex flex-col justify-center items-center"
        >
          <p className="text-left text-gray-300 mr-auto">Pick a plan</p>
          <div className="isolate mx-auto mt-2 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Card-1 */}

            <div className=" bg-[#1C1C1E] ring-white/10 rounded-2xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id="product1"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Free Trial
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Discover AI: Start with ChatGPT 3.5 and Explore Basic Model
                Comparisons
              </p>
              <p className="mt-6 flex items-first-baseline gap-x-1 text-lg text-3xl text-[#94979E] dollar">
                {" "}
                $
                <span className="text-4xl font-bold tracking-tight text-5xl text-white">
                  0
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300"></span>
              </p>
              <a
                href="/order"
                aria-describedby="product1"
                className="bg-black text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Start 7 day trial
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3 plan_list">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="11.5"
                      stroke="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.2571 7.9096C17.5832 8.23569 17.5832 8.76439 17.2571 9.09047L10.8405 15.5071C10.5144 15.8332 9.98567 15.8332 9.65958 15.5071L6.74292 12.5905C6.41683 12.2644 6.41683 11.7357 6.74292 11.4096C7.06901 11.0835 7.5977 11.0835 7.92379 11.4096L10.25 13.7358L16.0763 7.9096C16.4023 7.58352 16.931 7.58352 17.2571 7.9096Z"
                      fill="white"
                    />
                  </svg>
                  25 Messages
                </li>
                <li className="flex gap-x-3 plan_list">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="11.5"
                      stroke="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.2571 7.9096C17.5832 8.23569 17.5832 8.76439 17.2571 9.09047L10.8405 15.5071C10.5144 15.8332 9.98567 15.8332 9.65958 15.5071L6.74292 12.5905C6.41683 12.2644 6.41683 11.7357 6.74292 11.4096C7.06901 11.0835 7.5977 11.0835 7.92379 11.4096L10.25 13.7358L16.0763 7.9096C16.4023 7.58352 16.931 7.58352 17.2571 7.9096Z"
                      fill="white"
                    />
                  </svg>
                  Compare up to 2 LLMs
                </li>
                <li className="flex gap-x-3 plan_list">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="11.5"
                      stroke="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.2571 7.9096C17.5832 8.23569 17.5832 8.76439 17.2571 9.09047L10.8405 15.5071C10.5144 15.8332 9.98567 15.8332 9.65958 15.5071L6.74292 12.5905C6.41683 12.2644 6.41683 11.7357 6.74292 11.4096C7.06901 11.0835 7.5977 11.0835 7.92379 11.4096L10.25 13.7358L16.0763 7.9096C16.4023 7.58352 16.931 7.58352 17.2571 7.9096Z"
                      fill="white"
                    />
                  </svg>
                  ChatGPT 3.5 and basic models
                </li>
              </ul>
            </div>

            {/* Card-2 */}
            <div className="bg-[#1C1C1E]  ring-2 ring-indigo-500 rounded-2xl p-8 xl:p-10">
              <div className="flex items-baseline justify-between gap-x-4">
                <h2
                  id="product2"
                  className="text-lg font-semibold leading-8 text-white"
                >
                 Standard
                </h2>
                <p className="rounded-full most_popular_txt px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                  Most popular
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Discover AI: Start with ChatGPT 3.5 and Explore Basic Model
                Comparisons
              </p>
              <p className="mt-6 flex items-first-baseline gap-x-1 text-lg text-3xl text-[#94979E] dollar ">
                {" "}
                $
                <span className="text-5xl font-bold tracking-tight text-3xl text-white">
                  39
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300"></span>
              </p>
              <a
                href="/order"
                aria-describedby="product2"
                className=" getStarted text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get Started
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3 plan_list">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="11.5"
                      stroke="#5E5CE6"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.2571 7.9096C17.5831 8.23569 17.5831 8.76439 17.2571 9.09047L10.8404 15.5071C10.5143 15.8332 9.98561 15.8332 9.65952 15.5071L6.74286 12.5905C6.41677 12.2644 6.41677 11.7357 6.74286 11.4096C7.06894 11.0835 7.59764 11.0835 7.92373 11.4096L10.25 13.7358L16.0762 7.9096C16.4023 7.58352 16.931 7.58352 17.2571 7.9096Z"
                      fill="#5E5CE6"
                    />
                  </svg>
                  Unlimited Messages
                </li>
                <li className="flex gap-x-3 plan_list">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="11.5"
                      stroke="#5E5CE6"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.2571 7.9096C17.5831 8.23569 17.5831 8.76439 17.2571 9.09047L10.8404 15.5071C10.5143 15.8332 9.98561 15.8332 9.65952 15.5071L6.74286 12.5905C6.41677 12.2644 6.41677 11.7357 6.74286 11.4096C7.06894 11.0835 7.59764 11.0835 7.92373 11.4096L10.25 13.7358L16.0762 7.9096C16.4023 7.58352 16.931 7.58352 17.2571 7.9096Z"
                      fill="#5E5CE6"
                    />
                  </svg>
                  Compare up to 3 LLMs
                </li>
                <li className="flex gap-x-3 plan_list">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="11.5"
                      stroke="#5E5CE6"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.2571 7.9096C17.5831 8.23569 17.5831 8.76439 17.2571 9.09047L10.8404 15.5071C10.5143 15.8332 9.98561 15.8332 9.65952 15.5071L6.74286 12.5905C6.41677 12.2644 6.41677 11.7357 6.74286 11.4096C7.06894 11.0835 7.59764 11.0835 7.92373 11.4096L10.25 13.7358L16.0762 7.9096C16.4023 7.58352 16.931 7.58352 17.2571 7.9096Z"
                      fill="#5E5CE6"
                    />
                  </svg>
                  ChatGPT 4 and latest models
                </li>
                <li className="flex gap-x-3 plan_list">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="11.5"
                      stroke="#5E5CE6"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.2571 7.9096C17.5831 8.23569 17.5831 8.76439 17.2571 9.09047L10.8404 15.5071C10.5143 15.8332 9.98561 15.8332 9.65952 15.5071L6.74286 12.5905C6.41677 12.2644 6.41677 11.7357 6.74286 11.4096C7.06894 11.0835 7.59764 11.0835 7.92373 11.4096L10.25 13.7358L16.0762 7.9096C16.4023 7.58352 16.931 7.58352 17.2571 7.9096Z"
                      fill="#5E5CE6"
                    />
                  </svg>
                  Access to beta features
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="bottomImgs"></div> */}

      </div>
    </>
  );
};

export default Plan;
