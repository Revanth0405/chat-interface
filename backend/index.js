// backend/index.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const aiResponses = {
  greeting: "Hello! How can I help you today?",
  diamonds: "Diamonds are a girl's best friend! They are timeless and elegant.",
  gold: "Gold jewelry is classic and versatile. It never goes out of style.",
  silver: "Silver jewelry is a great choice for those who love a more understated look.",
  farewell: "Thank you for chatting! Have a great day!",
  unrecognized: "I'm not sure about that. Can you please specify?",
};

// Mock API endpoint
app.post('/chat', (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let response = aiResponses.unrecognized;

  if (userMessage.includes('hi') || userMessage.includes('hello')) {
    response = aiResponses.greeting;
  } else if (userMessage.includes('diamonds')) {
    response = aiResponses.diamonds;
  } else if (userMessage.includes('gold')) {
    response = aiResponses.gold;
  } else if (userMessage.includes('silver')) {
    response = aiResponses.silver;
  } else if (userMessage.includes('bye') || userMessage.includes('goodbye')) {
    response = aiResponses.farewell;
  }

  res.json({ response });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
