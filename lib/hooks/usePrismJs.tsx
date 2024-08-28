"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.min.css";

export default function usePrismJs() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
}
