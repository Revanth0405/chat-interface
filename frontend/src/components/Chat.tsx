// frontend/src/components/Chat.tsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setLoading } from "../store/chatSlice";
import { RootState } from "../store/store";
import axios from "axios";

const Chat = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { messages, isLoading } = useSelector((state: RootState) => state.chat);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user's message to chat
    dispatch(addMessage({ text: input, sender: "user" }));

    // Set loading state to true
    dispatch(setLoading(true));

    setInput("");

    try {
      // Simulate AI "typing" delay
      setTimeout(async () => {
        // Send user's message to the backend API
        const response = await axios.post("http://localhost:5000/chat", { message: input });
        const aiMessage = response.data.response;

        // Add AI's response to chat
        dispatch(addMessage({ text: aiMessage, sender: "ai" }));

        // Stop loading state after response
        dispatch(setLoading(false));
      }, 2000); // 2 seconds delay for the "typing" effect
    } catch (error) {
      console.error("Error sending message", error);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex flex-col h-full p-4 border border-black bg-black">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block px-4 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
            >
              {msg.text}
            </span>
          </div>
        ))}

        {isLoading && (
          <div className="my-2 text-left">
            <span className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-black">
              <TypingBubble />
            </span>
          </div>
        )}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-400 p-2 rounded-l-lg"
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
          Send
        </button>
      </div>
    </div>
  );
};

const TypingBubble = () => {
  return (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-400"></div>
    </div>
  );
};

export default Chat;
