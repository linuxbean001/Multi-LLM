import React from "react";
import logo from "../../assets/images/Logo.png";
import imgIcon from "../../assets/images/Icon wrapper.png";
import "./Login.css";
import { useFormik } from "formik";
import { SignInSchema } from "../validationSchema";

const Login = () => {
  // Formik
  const formInitialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: SignInSchema,
    onSubmit: (values, action) => {},
  });
  return (
    <>
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-0 ">
        {/* Left */}
        <div className="h-screen bg-[#000] topImg">
          <div className="content flex flex-col h-screen justify-between content p-5">
            <div className="topContent">
              <div className="logo ">
                <img src={logo} alt="logo" />

                <div className="loginHeading mt-10 text-white">
                  <h1>
                    Compare multiple LLMs <br /> all in one place
                  </h1>
                </div>
              </div>
            </div>

            <div className="text-white mb-5 bottmContents">
              <h2>Why should you join us?</h2>
              <div className="bottomInner mt-5">
                <div className="flex commanContent w-full pb-3">
                  <div className="imgIcon w-20 pr-1">
                    <img src={imgIcon} alt="imgIcon" />
                  </div>
                  <div className="content w-90">
                    <p>
                      <span className="font-bold">Compare AI Easily: </span>Find
                      and compare top AI models all in one place—making it
                      simple to choose the best for you
                    </p>
                  </div>
                </div>
                <div className="flex commanContent w-full pb-3">
                  <div className="imgIcon w-20 pr-1">
                    <img src={imgIcon} alt="imgIcon" />
                  </div>
                  <div className="content w-90">
                    <p>
                      <span className="font-bold">See Results Together: </span>
                      Send one prompt, get and compare answers side by side—fast
                      and straightforward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bottomImg"></div>
        </div>

        {/* Right */}
        <div className="h-screen  bg-[#0C0C0D] p-5 flex items-center">
          <div className="w-full mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
              <form
                onSubmit={formik.handleSubmit}
                action="#"
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
              >
                <p className="text-left text-sm text-[#E0E3E6] text-lg font-medium">
                  Email
                </p>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      className="text-white bg-[#1C1C1E] w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="name@example.com"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>

                    {formik.errors.email && formik.touched.email ? (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {" "}
                        {formik.errors.email}{" "}
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="text-left text-sm text-[#E0E3E6] text-lg font-medium">
                  Password
                </p>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      className="text-white bg-[#1C1C1E] w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="••••••••••"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>

                    {formik.errors.password && formik.touched.password ? (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {" "}
                        {formik.errors.password}{" "}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Remember Me Button */}
                <div className="flex justify-between items-center">
                  <div class="flex items-center">
                    <input type="checkbox" id="rememberMe" class="mr-2" />
                    <label
                      for="rememberMe"
                      class="text-[#E0E3E6] text-lg font-medium text-[0.875rem]"
                    >
                      Remember me
                    </label>
                  </div>

                  <p className="text-right text-sm text-[#5E5CE6] text-lg font-medium mb-2">
                    Forgot Password
                  </p>
                </div>

                <button
                  type="submit"
                  className="signIn_btn block w-full rounded-lg px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>

                <div class="flex items-center">
                  <div class="flex-grow border-b border-[#1B1E25]"></div>
                  <button className="text-[#94979E] bg-gray-[#1B1E25] p-1">
                    Or
                  </button>
                  <div class="flex-grow border-b border-[#1B1E25]"></div>
                </div>

                {/* Google Button */}

                <div className="flex space-x-4">
                  
                <button class=" w-full text-white bg-transparent flex items-center justify-center hover:bg-indigo-500 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent  border border-[#94979E] border-opacity-50 rounded bg-[#1C1C1E] text-sm">
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
                  <span className="mx-2"> Sign in with Google </span>
                </button>
                <button class=" w-full text-white bg-transparent flex items-center justify-center hover:bg-indigo-500 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent  border border-[#94979E] border-opacity-50 rounded bg-[#1C1C1E] text-sm">
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
