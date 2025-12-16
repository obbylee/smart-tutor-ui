"use client";

type ChatInputProps = {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  disabled: boolean;
};

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
}: ChatInputProps) {
  return (
    <div className="bg-white rounded-md px-4 py-3">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask Jojo..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm text-black"
        />
        <button
          onClick={onSend}
          disabled={disabled}
          className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
