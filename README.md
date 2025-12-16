# Jojo Smart Tutor

A responsive web app built with **Next.js**, **React**, and **Tailwind CSS** that helps students practice math questions and provides hints/step-by-step guidance via a chat interface named JoJo.

## Features

- **Question Panel**

  - Displays math questions dynamically from JSON data
  - Supports **LaTeX formatting** with `better-react-mathjax`
  - Shows number in scientific notation (e.g., `0.00000000031 → 3.1 × 10⁻¹⁰`)

- **Interactive Chat (JoJo)**

  - Provides hints and step-by-step explanations
  - Supports user input and simple message responses
  - Mobile-friendly **bottom drawer chat** on small screens

- **Responsive Layout**

  - Desktop: side-by-side question panel and chat
  - Mobile: chat slides from bottom as a drawer

- **Dynamic Data**
  - Easy to add new questions

## Tech Stack

- Frontend: React 18, Next.js 13 (App Router)
- Styling: Tailwind CSS
- Math Rendering: `better-react-mathjax` (LaTeX support)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/obbylee/smart-tutor-ui.git
     cd smart-tutor-ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Assumptions

- Questions are currently loaded from a JSON object.

- LaTeX expressions are pre-defined per question (no smart parser required).

- Chat responses are mocked (mockAIResponses) and do not connect to a real AI.

- The app is designed for a single question display; multiple questions could be added as a JSON array.

- No answer validation or scoring is implemented yet.

## Connecting to a Real LLM

To wire this app to a real LLM (e.g., OpenAI GPT):

- Replace the mockAIResponses object with a fetch request to your API endpoint.

- The backend API can call the LLM with the user's question, and return `hints` or `steps`.

- Update the sendMessage or handleHintAction functions to use the API response instead of the mock data.

- Ensure proper error handling and rate limiting for -production use.

Example pseudo-code for hint API:

```ts
const response = await fetch("/api/ask-jojo", {
  method: "POST",
  body: JSON.stringify({ question: userInput }),
});
const data = await response.json();
addSupportMessage(data.hint);
```
