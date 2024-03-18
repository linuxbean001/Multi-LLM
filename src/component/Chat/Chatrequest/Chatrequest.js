import React, { useState } from "react";
import "./Chatrequest.css";
import Avatar from "../../../assets/images/Avatar.png";

const Chatrequest = ({ item }) => {

  return (
    <div>
      <div
        className={` w-[60%] mx-auto p-6 text-white flex pb-0 ${
          item.role === "assistant" && "bg-slate-900 rounded"
        }`}
      >
        <span className="block w-30 mr-1 p-2 text-white rounded-full h-full">
          {item.role === "user" ? (
            <img
              className="chatUserImg w-full h-full object-cover rounded"
              src={Avatar}
              alt="Avatar"
            />
          ) : (
            <img
              className="chatUserImg w-full h-full object-cover rounded"
              src={Avatar}
              alt="Avatar"
            />
          )}
        </span>
        <div className="w-70 block chatUserName">{item.role}</div>
      </div>
      <div className="UserQuery w-[60%] mx-auto px-8 text-white">
        <div className="chatUserQuery">{item.message}</div>
      </div>
    </div>
  );
};

export default Chatrequest;
