type ChatBubbleProps = {
  sender: "user" | "support";
  text: string;
};

export default function ChatBubble({ sender, text }: ChatBubbleProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`max-w-[80%] rounded-xl p-4 text-sm shadow-sm ${
        isUser ? "ml-auto bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      {text.split("\n").map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}
