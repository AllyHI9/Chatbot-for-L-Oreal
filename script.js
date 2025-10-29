// script.js

const apiKey = (typeof window !== 'undefined' && window.OPENAI_API_KEY) ? window.OPENAI_API_KEY : null;

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(role, text) {
  const message = document.createElement('div');
  message.className = role;
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const userText = userInput.value.trim();
  if (!userText) return;

  addMessage('user', userText);
  userInput.value = '';

  if (!apiKey) {
    addMessage('bot', 'API key missing. Please add it in api_key.js.');
    return;
  }

  const messages = [
    { role: 'system', content: 'You are a chatbot tasked with helping users discover and understand L’Oréal’s extensive range of products—makeup, skincare, haircare, and fragrances—as well as provide personalized routines and recommendations. If a user’s question is unrelated to L’Oréal, say "Please ask about L’Oréal."' },
    { role: 'user', content: userText }
  ];

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ model: 'gpt-4o-mini', messages })
    });

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || 'Sorry, I could not process that request.';

    addMessage('bot', botReply);
  } catch (error) {
    console.error(error);
    addMessage('bot', 'An error occurred while connecting to the API.');
  }
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});





















// Load the OpenAI API key from an external file `api_key.js` that sets
// `window.OPENAI_API_KEY`. Keep your real key out of version control.
// Note: embedding a secret in client-side JS is inherently insecure for production.
//const apiKey = (typeof window !== 'undefined' && window.OPENAI_API_KEY) ? window.OPENAI_API_KEY : null;

//async function main() {
 // if (!apiKey) {
    //console.error('OpenAI API key not found. Create a file named `api_key.js` in the project root that sets `window.OPENAI_API_KEY = "sk-..."` and ensure it is listed in `.gitignore`.');
    //return;
 // }
  // Send a POST request to the OpenAI API
  //const response = await fetch('https://api.openai.com/v1/chat/completions', {
   // method: 'POST', // We are POST-ing data to the API
   // headers: {
   //   'Content-Type': 'application/json', // Set the content type to JSON
   //   'Authorization': `Bearer ${apiKey}` // Include the API key for authorization
 //   },
    // Send model details and system message
    //body: JSON.stringify({
    //  model: 'gpt-4o',
    //  messages: [{ role: 'system', content: 'You are a chatbot tasked with helping users discover and understand LOréals extensive range of products—makeup, skincare, haircare, and fragrances—as well as provide personalized routines and recommendations. If a users question is unrelated to LOréals say Please ask about LOréal' }]
   // })
 // });
  // Parse and store the response data
 // const result = await response.json();
  // Log result to the console
 // console.log(result);
//};

// Call the main function
