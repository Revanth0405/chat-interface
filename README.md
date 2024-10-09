# Chat Interface Project

This project is a responsive chat interface built with React, Redux, and TypeScript, using a Node.js mock API for AI responses.

## Project Setup Instructions

### Prerequisites
- Make sure to install the dependencies of **Node.js** by **npm install**.

### 1. Clone the Repository
   First, clone the repository from GitHub and navigate into the project folder:
   ```bash
   git clone https://github.com/Revanth0405/chat-interface.git
   cd repository-name
  ```
## How to Run the Project

Follow the steps below to run both the client and the server:
1. Firstly install the dependencies by performing **npm init**.
2. Then open a terminal with a directory path frontend and start the react server by performing **npm start**.
3. Now open another terminal with the directory path backend and start the backend server by performing **node index.js**
4. Now open the browser and you see a message box and test the output.

## Explanation of my approach and Challenges faced

### Explanation of My Approach

### 1. Project Structure and Design
   - **Modular Structure**: I split the project into two main parts: `client` for the front-end (React, Redux, TypeScript) and `server` for the back-end (Node.js mock API). This separation ensures a clean structure and makes each part easier to manage and maintain.
   - **Front-End (React + Redux + TypeScript)**: 
     - Used **TypeScript** for type safety, which helps catch errors during development and ensures better code quality.
     - Created a **Redux store** to manage the state of chat messages between the user and the AI. This makes the data flow predictable and easy to debug.
     - Designed a **responsive chat interface** using **Tailwind CSS**, providing a clean and mobile-friendly user experience.
     - **Axios** is used for making asynchronous API calls to the server, simulating interactions between the user and AI.
   - **Back-End (Node.js Mock API)**: 
     - Built a simple API using **Express** to simulate AI responses. The server processes user messages and returns predefined responses based on the input.
     - Used **CORS** middleware to enable communication between the client (running on `localhost:3000`) and the server (running on `localhost:5000`).

### 2. State Management with Redux
   - **Redux Setup**: Implemented a Redux slice to handle chat messages, making it easy to manage the chat history as the user interacts with the interface.
   - **Dispatching Actions**: Created actions to add user messages and AI responses, keeping the chat history updated.
   - **Redux Toolkit**: Leveraged **@reduxjs/toolkit** for a cleaner setup, which simplifies the boilerplate typically involved in Redux and allows better code organization.

### 3. Responsive UI with Tailwind CSS
   - Focused on making the **chat interface responsive** using Tailwind’s utility classes, ensuring a seamless experience across different screen sizes.
   - Designed chat bubbles and input elements to adapt well on mobile and desktop devices, ensuring that the chat looks good and is easy to use on any platform.

## Challenges Faced

### 1. Setting Up TypeScript with Redux
   - **Type Definitions**: One challenge was correctly typing the Redux store, especially when handling the state of the chat messages. Understanding how to use `PayloadAction` and ensuring that all types were properly defined took some time.
   - **Action and State Types**: Defining custom types for messages and Redux actions required extra effort but ultimately improved the robustness of the application.

### 2. CORS Issues During Development
   - Initially faced **CORS issues** when the client tried to communicate with the server running on a different port. This was resolved by enabling CORS in the Express server setup. Although it’s a common problem, it required a bit of troubleshooting and learning about cross-origin requests.

### 3. Making the UI Responsive
   - Creating a **smooth and responsive UI** using Tailwind CSS was a new learning experience. I had to adjust various elements to ensure that they displayed well on both large screens and mobile devices, such as chat bubble alignment and input positioning.

### 4. Managing Asynchronous API Requests
   - Handling **asynchronous requests** with Axios and ensuring that Redux actions were dispatched at the right times posed a challenge initially. It required careful handling of the async actions to maintain a smooth flow of chat messages between the user and the AI.

### 5. Predefined Responses Logic
   - Implementing the logic for **predefined AI responses** in a way that felt natural and conversational involved thinking through different user inputs and mapping them to appropriate responses. Ensuring the fallback response for unrecognized inputs added complexity to the response logic.
