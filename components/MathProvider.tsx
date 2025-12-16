"use client";

import React from "react";
import { MathJaxContext } from "better-react-mathjax";

const config = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

export default function MathProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MathJaxContext config={config}>{children}</MathJaxContext>;
}
