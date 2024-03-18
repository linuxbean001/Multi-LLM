import React from "react";
import "./Chatresponse.css";
import Vector from "../../../assets/images/Vector.png";
import copyIcon from "../../../assets/images/copyIcon.png";
import regenerateIcon from "../../../assets/images/regenerateIcon.png";

const Chatresponse = () => {
  return (
    <>
      <div className="w-[60%] mx-auto p-6 text-white flex pb-0">
        <span className="block w-30 mr-1 p-2 text-white rounded-full h-full">
          <img
            className="chatUserImg w-full h-full object-cover rounded"
            src={Vector}
            alt="Vector"
          />
        </span>
        <div className="w-70 block chatUserName chatAIName">
          Chatgbt
          <span className="reshours pl-2">5h ago</span>
        </div>
      </div>
      <div className="UserQuery w-[60%] mx-auto px-8 text-white">
        <div className="chatUserQuery resChatQuery">
          Great! Here are some ideas for each section of your website dedicated
          to handling SEO:
        </div>
        <span className="icons flex pt-1.5">
          <img src={copyIcon} alt="copyIcon" />
          <img src={regenerateIcon} alt="regenerateIcon" />
        </span>
      </div>
    </>
  );
};

export default Chatresponse;
