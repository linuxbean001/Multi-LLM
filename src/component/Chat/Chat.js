import React, { useState } from "react";
import "./Chat.css";
import Userprofile from "../Userprofile/Userprofile";
import Chatresponse from "../Chat/ChatResponse/Chatresponse";
import Chatrequest from "./Chatrequest/Chatrequest";
import logo from "../../assets/images/Logo.png";
import fileImg from "../../assets/images/File.png";

// New Screen Examples
const suggestMsg = [
  "This is a suggested message for this LLM",
  "This is a suggested message for this LLM",
  "This is a suggested message for this LLM",
];
const Chat = () => {
  const [chat, setChat] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [title, setTitle] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateClassName = (item, index) => {
    return `suggestMsg-${index}`;
  };

  // Input Box Change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      console.log("Submit form or perform action:", input);
      setInput("");
    }
  };

  // When Form gets submit
  const handleSend = async () => {
    setLoading(true);
    const payload = {
      input_prompt: input,
    };
    const apiKey = process.env.REACT_APP_GOOEY_API_KEY; // Replace with your actual API key
    try {
      const response = await fetch("https://api.gooey.ai/v2/SmartGPT/", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(response.status);
      }
      const result = await response.json();
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { role: "user", message: input },
        { role: "assistant", message: result.output.output_text[0] },
      ]);
      setInput("");
      console.log("resule is from API", result.output.output_text[0]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Without APIs
  const chatData = [
    {
      role: "User",
      message:
        "I am a blogger and need content for my new website. I have 3 sections each one is about how to handle SEO",
    },
  ];

  return (
    <div className=" h-screen w-screen flex bg-[#050509]">
      <div className="leftSection w-[22%] h-screen bg-[#000] text-white p-4">
        <div className="leftSectionInner h-[10%]">
          <div className="logo pb-10">
            <img src={logo} alt="logo" />
          </div>
          <button
            className="newChatBtn w-full h-[50px] rounded"
            onClick={() => {
              setChat([]);
              setTitle("");
            }}
          >
            + New Chat
          </button>
        </div>
        <div className="pt-14 preChatData h-[70%] overflow-scroll shadow-lg hide-scroll-bar mb-4">
          <div className="mt-6 ">
            {chatData.map((item, index) => (
              <>
                <p className="preDate pb-2">Previous 7 days</p>
                <div className="bg-[#2C2C2E] preChatDataInner py-2 text-center rounded  text-lg font-light mb-1 flex items-center px-2 cursor-pointer">
                  <span className="w-80 chatName text-left text-base">
                    New chat
                  </span>
                  <span className="w-10 dotIcon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon-md"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>
        <Userprofile />
      </div>

      {/* Right Side */}
      <div className="rightSection w-[78%] bg-[#1C1C1E]">
        {chatData?.length > 0 ? (
          <div className="rightInner h-[80%] overflow-scroll hide-scroll-bar pt-8 ">
            {chatData?.map((item, index) => (
              <>
                <Chatrequest item={item} />
                <Chatresponse />
              </>
            ))}
          </div>
        ) : (
          // Front Screen
          <div className="rightInner h-[80%] flex flex-col justify-center items-center text-white">
            <div className="mb-8">How can I help you today?</div>
            <div className="max-w-[900px] ">
              {suggestMsg.map((item, index) => (
                <div
                  className={`suggMsg text-base font-light mt-4 p-4 rounded-full cursor-pointer min-w-[400px] ${generateClassName(
                    item,
                    index
                  )}`}
                  onClick={() => setInput(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* For Input Tag */}
        <div className="searchSection h-[20%] bg-[#000]">
          <div className=" flex flex-col items-center justify-center w-full h-full text-white">
            <div className="rounded-lg w-[60%] bg-[#0C0C0D] flex justify-center relative">
              <span className=" absolute left-0 top-4 cursor-pointer">
                <img
                  className="cursor-pointer fileImg"
                  src={fileImg}
                  alt="fileImg"
                />
              </span>
              <textarea
                rows="1"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="searchBar w-full rounded-lg p-4 pl-8 pr-16 bg-slate-800 text-white"
                placeholder="Type a message..."
                style={{
                  minHeight: "38px",
                  overflow: "hidden",
                }}
              />
              <span
                className=" absolute right-4 cursor-pointer submitBtn"
                onClick={() => (input.trim() ? handleSend() : undefined)}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_43_7549)">
                    <rect
                      width="32"
                      height="32"
                      rx="8"
                      fill={input.trim() ? "#5E5CE6" : "#1C1C1E"}
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.2929 9.45964C15.6834 9.06912 16.3166 9.06912 16.7071 9.45964L21.7071 14.4596C22.0976 14.8502 22.0976 15.4833 21.7071 15.8739C21.3166 16.2644 20.6834 16.2644 20.2929 15.8739L17 12.581V21.8334C17 22.3857 16.5523 22.8334 16 22.8334C15.4477 22.8334 15 22.3857 15 21.8334V12.581L11.7071 15.8739C11.3166 16.2644 10.6834 16.2644 10.2929 15.8739C9.90237 15.4833 9.90237 14.8502 10.2929 14.4596L15.2929 9.45964Z"
                      fill={input.trim() ? "white" : "black"}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_43_7549">
                      <rect width="32" height="32" rx="8" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
