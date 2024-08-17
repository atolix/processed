"use client";

import { useEffect } from "react";
import tocbot from "tocbot";

export const TableOfContents = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: "#markdown-content",
      headingSelector: "h2, h3, h4",
      headingsOffset: 50,
      scrollSmoothOffset: -80,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <nav>
      <h2 className="font-semibold pb-3">Contents</h2>
      <div className="toc text-sm"></div>
    </nav>
  )
};
