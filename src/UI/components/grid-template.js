import React from "react";

export function GridTemplate({ children, mobileCols = 1, desktopCols = 3 }) {
  return (
    <div className="flex justify-center">
      <div
        className={`grid w-full grid-cols-${mobileCols} md:grid-cols-${desktopCols} w-full`}
      >
        {children}
      </div>
    </div>
  );
}
