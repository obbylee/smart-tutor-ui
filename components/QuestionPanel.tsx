"use client";

import QuestionCard from "./QuestionCard";

type QuestionPanelProps = {
  question: {
    number: string;
    latexForm: string;
    condition: string;
  };
};

export default function QuestionPanel({ question }: QuestionPanelProps) {
  return (
    <section className="md:w-3/5 w-full min-h-screen bg-white p-6">
      <div className="border-b px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900">Questions</h1>
        <p className="mt-1 text-sm text-gray-500">Answer the questions below</p>
      </div>

      <div className="flex-1 overflow-y-auto md:px-6 py-4">
        <QuestionCard {...question} />
      </div>
    </section>
  );
}
