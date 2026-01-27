"use client";

import { useEffect } from "react";

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error("An error occurred in the component.");
  }, []);

  return (
    <div>
      <p>Error Component</p>
    </div>
  );
};
