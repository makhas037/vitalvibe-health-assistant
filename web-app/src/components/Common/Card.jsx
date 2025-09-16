import React from "react";

export default function Card({ title, children }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "6px", margin: "10px 0" }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
