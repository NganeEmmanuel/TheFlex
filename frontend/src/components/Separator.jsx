import React from "react";

export default function Separator({ className = "" }) {
  return (
    <hr className={`border-t border-gray-200 ${className}`} />
  );
}
