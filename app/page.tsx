"use client";

import { useState } from "react";
import QuestionPanel from "@/components/QuestionPanel";
import ChatPanel from "@/components/ChatPanel";
import ChatMobile from "@/components/ChatMobile";

type ChatMessage = {
  sender: "user" | "support";
  text: string;
};

type MockAIResponse = {
  hint: string;
  steps: string;
};

const mockAIResponses: MockAIResponse = {
  hint: "Count how many times you need to move the decimal point to the right to get 3.1.",
  steps:
    "1. Identify the first non-zero digit (3).\n" +
    "2. Place the decimal after it: 3.1.\n" +
    "3. Count the moves from original position to the new position.\n" +
    "4. Since you moved right 10 times, the power is negative (-10).",
};

export default function Home() {
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "support",
      text: "👋 Hi! I’m Jojo. I can help you understand this question step by step.",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsThinking(true);

    // Fake API response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "support",
          text: `Support: Received "${userMessage.text}"`,
        },
      ]);

      setIsThinking(false);
    }, 1200);
  };

  const handleHintAction = (type: "hint" | "steps") => {
    setIsThinking(true);

    setTimeout(() => {
      addSupportMessage(mockAIResponses[type]);
      setIsThinking(false);
    }, 800);
  };

  const addSupportMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "support",
        text,
      },
    ]);
  };

  const question = {
    number: "0.00000000031",
    latexForm: "$a \\times 10^{n}$",
    condition: "$1 \\le a < 10$",
  };

  return (
    <div className="container mx-auto">
      <main className="relative min-h-screen flex flex-col md:flex-row">
        <QuestionPanel question={question} />

        <section className="hidden w-2/5 md:flex flex-col bg-gray-100 p-6">
          <ChatPanel
            messages={messages}
            input={input}
            isThinking={isThinking}
            setInput={setInput}
            onSend={sendMessage}
            onHint={() => handleHintAction("hint")}
            onSteps={() => handleHintAction("steps")}
          />
        </section>

        <ChatMobile
          messages={messages}
          input={input}
          isThinking={isThinking}
          setInput={setInput}
          onSend={sendMessage}
          onHint={() => handleHintAction("hint")}
          onSteps={() => handleHintAction("steps")}
        />
      </main>
    </div>
  );
}
