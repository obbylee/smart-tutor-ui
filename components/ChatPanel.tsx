"use client";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

type ChatPanelProps = {
  messages: { sender: "user" | "support"; text: string }[];
  isThinking: boolean;
  input: string;
  setInput: (v: string) => void;
  onSend: () => void;
  onHint: () => void;
  onSteps: () => void;
};

export default function ChatPanel({
  messages,
  isThinking,
  input,
  setInput,
  onSend,
  onHint,
  onSteps,
}: ChatPanelProps) {
  return (
    <>
      <div className="md:px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-900">ASK JOJO</h2>
        <p className="text-sm text-gray-500">
          Need help? Ask for hints or explanations.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((m, i) => (
          <ChatBubble key={i} {...m} />
        ))}

        {isThinking && (
          <div className="bg-white rounded-xl p-4 text-sm text-black">
            Jojo is thinking…
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex gap-2 text-black">
          <button
            onClick={onHint}
            className="text-xs rounded-full px-3 py-1 bg-white shadow-sm"
          >
            Give me a hint!
          </button>
          <button
            onClick={onSteps}
            className="text-xs rounded-full px-3 py-1 bg-white shadow-sm"
          >
            Reveal the steps
          </button>
        </div>

        <ChatInput
          value={input}
          onChange={setInput}
          onSend={onSend}
          disabled={!input.trim()}
        />
      </div>
    </>
  );
}
