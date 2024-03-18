import React from "react";
import "./Userprofile.css";
import Avatar from "../../assets/images/Avatar.png";

const Userprofile = () => {
  return (
    <>
      <div className="userProfile overflow-scroll shadow-lg hide-scroll-bar h-[20%]">
        <div className="profileContent py-3 text-center rounded mt-8 text-lg font-light flex items-center cursor-pointer">
          <div className="mr-2 userImg w-30">
            <img
              className="w-full h-full object-cover rounded"
              src={Avatar}
              alt="Avatar"
            />
          </div>
          <div className="w-70">
            <span className="userName block">Orla Flores</span>
            <span className="userEmail block">orlaflores@riddleui.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;
