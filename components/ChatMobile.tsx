"use client";

import { useState } from "react";
import ChatPanel from "./ChatPanel";

type ChatMobileProps = {
  messages: any[];
  input: string;
  isThinking: boolean;
  setInput: (v: string) => void;
  onSend: () => void;
  onHint: () => void;
  onSteps: () => void;
};

export default function ChatMobile({
  messages,
  input,
  isThinking,
  setInput,
  onSend,
  onHint,
  onSteps,
}: ChatMobileProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 md:hidden z-30 flex items-center justify-center py-2.5 px-5 bg-black text-white rounded-full shadow-lg"
      >
        Ask JoJo
      </button>

      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-transform duration-500 ease-in-out ${
          isChatOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={() => setIsChatOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gray-100 rounded-t-2xl h-[80vh] shadow-xl transition-transform duration-500 ease-in-out ${
          isChatOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <section className="h-full flex flex-col px-6">
          <ChatPanel
            messages={messages}
            input={input}
            isThinking={isThinking}
            setInput={setInput}
            onSend={onSend}
            onHint={onHint}
            onSteps={onSteps}
          />
        </section>
      </div>
    </>
  );
}
