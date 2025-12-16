"use client";

import { MathJax } from "better-react-mathjax";

type QuestionCardProps = {
  number: string;
  latexForm: string;
  condition: string;
};

export default function QuestionCard({
  number,
  latexForm,
  condition,
}: QuestionCardProps) {
  return (
    <div className="mt-6 rounded-xl border p-5 space-y-4">
      <p className="text-gray-900 text-base">
        <span className="font-medium mr-1">1.</span>
        Convert the number{" "}
        <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded">
          {number}
        </span>{" "}
        to the form:
      </p>

      <div className="text-black text-lg">
        <MathJax inline>{latexForm}</MathJax>
      </div>

      <p className="text-gray-900 text-sm">
        where <MathJax inline>{condition}</MathJax> and <em>n</em> is an
        integer.
      </p>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Your Answer</label>

        <input
          type="text"
          placeholder="e.g. 3.1 × 10⁻¹⁰"
          className="w-full rounded-lg border border-gray-200 text-black px-4 py-2 focus:outline-none focus:ring-none placeholder:text-gray-500"
        />

        <button className="mt-10 px-6 py-2.5 rounded-md bg-black hover:bg-gray-500">
          Submit Answer
        </button>
      </div>
    </div>
  );
}
