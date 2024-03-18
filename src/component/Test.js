import React from "react";
import "../component/Plan/Plan.css";
import { Link } from "react-router-dom";

const Test = () => {
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
          <div className="isolate mx-auto mt-2 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {/* Card-1 */}

            <div className=" bg-[#1C1C1E] ring-white/10 rounded-2xl p-8 xl:p-10">
              <div className="flex items-center flex-col justify-between gap-x-4 ">
                <h1
                  id="product1"
                  className="text-4xl text-center font-semibold leading-8 text-white"
                >
                  Sign in to your account
                </h1>
                <p className="my-6 text-base text-center leading-6 text-gray-300">
                  Welcome back! login with your credentials
                </p>
                <button class="w-full text-white bg-transparent flex items-center justify-center hover:bg-indigo-500 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent border border-[#94979E] border-opacity-50 rounded bg-[#1C1C1E] my-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2"
                  >
                    <g clip-path="url(#clip0_134_9179)">
                      <path
                        d="M19.4182 8.18188C19.5364 8.83643 19.6 9.51825 19.6 10.2273C19.6 13.2728 18.5091 15.8364 16.6182 17.5773L13.3864 15.0682C14.4455 14.3592 15.15 13.3001 15.3818 12.0501H10V8.18188H19.4182Z"
                        fill="white"
                      />
                      <path
                        d="M16.6182 17.5772C14.9637 19.1044 12.7 19.9999 10 19.9999C6.09093 19.9999 2.70911 17.759 1.06366 14.4908L4.40457 11.8999C5.19093 14.2635 7.39548 16.0226 10 16.0226C11.3455 16.0226 12.4909 15.6681 13.3864 15.0681L16.6182 17.5772Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.40455 11.8999C4.20455 11.2999 4.09091 10.659 4.09091 9.99994C4.09091 9.34085 4.20455 8.69994 4.40455 8.09994L1.06364 5.50903C0.386364 6.85903 0 8.38631 0 9.99994C0 11.6136 0.386364 13.1409 1.06364 14.4909L4.40455 11.8999Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 3.97727C11.4682 3.97727 12.7864 4.48182 13.8228 5.47273L16.6909 2.60455C14.9591 0.990909 12.6955 0 10 0C6.09093 0 2.70911 2.24091 1.06366 5.50909L4.40457 8.1C5.19093 5.73636 7.39548 3.97727 10 3.97727Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_134_9179">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="mx-1"> Sign in with Google </span>
                </button>
                <button class=" w-full text-white bg-transparent flex items-center justify-center hover:bg-indigo-500 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent  border border-[#94979E] border-opacity-50 rounded bg-[#1C1C1E]">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_134_7285)">
                      <path
                        d="M10.5 0C16.0229 0 20.5 4.47715 20.5 10C20.5 14.9912 16.8432 19.1283 12.0625 19.8785V12.8906H14.3926L14.8359 10H12.0625V8.125C12.0625 7.3334 12.45 6.5625 13.6922 6.5625H14.9531V4.10156C14.9531 4.10156 13.8084 3.90625 12.7146 3.90625C10.4305 3.90625 8.9375 5.29063 8.9375 7.79688V10H6.39844V12.8906H8.9375V19.8785C4.15684 19.1283 0.5 14.9912 0.5 10C0.5 4.47715 4.97715 0 10.5 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_134_7285">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="mx-2"> Sign in with Facebook </span>
                </button>

                <p className="my-6 text-base text-center leading-6 text-gray-300 ">
                Don't have an account? 
              
               
                <span className="text-sm text-[#5E5CE6] font-medium ml-3">
                    <Link to='/login'>
                        Sign Up
                    </Link>
                  
                </span>
                </p>
                <p className="text-right text-sm text-[#5E5CE6] text-lg font-medium mb-2">
                    
                  </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bottomImgs"></div> */}
      </div>
    </>
  );
};

export default Test;
