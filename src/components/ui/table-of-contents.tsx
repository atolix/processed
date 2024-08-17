"use client";

import { useEffect } from "react";
import tocbot from "tocbot";

export const TableOfContents = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: "#markdown-content",
      headingSelector: "h1, h2, h3, h4",
      headingsOffset: 50,
      scrollSmoothOffset: -80,
    });

    return () => tocbot.destroy();
  }, []);

  return <nav className="toc">Table of Contents</nav>;
};
