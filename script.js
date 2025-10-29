// Load the OpenAI API key from an external file `api_key.js` that sets
// `window.OPENAI_API_KEY`. Keep your real key out of version control.
// Note: embedding a secret in client-side JS is inherently insecure for production.
const apiKey = (typeof window !== 'undefined' && window.OPENAI_API_KEY) ? window.OPENAI_API_KEY : null;

async function main() {
  if (!apiKey) {
    console.error('OpenAI API key not found. Create a file named `api_key.js` in the project root that sets `window.OPENAI_API_KEY = "sk-..."` and ensure it is listed in `.gitignore`.');
    return;
  }
  // Send a POST request to the OpenAI API
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST', // We are POST-ing data to the API
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
      'Authorization': `Bearer ${apiKey}` // Include the API key for authorization
    },
    // Send model details and system message
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'system', content: 'You are a chatbot tasked with helping users discover and understand LOréals extensive range of products—makeup, skincare, haircare, and fragrances—as well as provide personalized routines and recommendations. If a users question is unrelated to LOréals say Please ask about LOréal' }]
    })
  });
  // Parse and store the response data
  const result = await response.json();
  // Log result to the console
  console.log(result);
};

// Call the main function
