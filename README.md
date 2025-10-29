# Chatbot-for-L-Oreal

This is a small demo project that uses the OpenAI API from client-side JavaScript.

## Local API key (development)

This project expects an OpenAI API key to be available at runtime. For local development, create a file named `api_key.js` in the project root and put your key there like:

```js
// api_key.js (local, ignored)
window.OPENAI_API_KEY = "sk-REPLACE_WITH_YOUR_KEY";
```

`api_key.js` is listed in `.gitignore` so it won't be committed. Important: embedding API keys in client-side code is insecure for production — use a server-side proxy for real deployments.
# Chatbot-for-L-Oreal