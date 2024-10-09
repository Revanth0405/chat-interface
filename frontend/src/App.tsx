// frontend/src/App.tsx

import React from 'react';
import Chat from './components/Chat';
import './App.css'

const App: React.FC = () => {
  return (
      <div>
      <div className="w-full max-w-md border border-gray-300 rounded-lg bg-white shadow-md">
        <Chat />
      </div>
    </div>
  );
};

export default App;
