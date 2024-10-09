// frontend/src/store/chatSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Message interface
interface Message {
  text: string;
  sender: "user" | "ai";
}

// Define the ChatState interface
interface ChatState {
  messages: Message[];
  isLoading: boolean;
}

const initialState: ChatState = {
  messages: [],
  isLoading: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload); // Add new message to chat history
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload; // Update loading state
    },
  },
});

// Export the actions and reducer
export const { addMessage, setLoading } = chatSlice.actions;
export default chatSlice.reducer;
