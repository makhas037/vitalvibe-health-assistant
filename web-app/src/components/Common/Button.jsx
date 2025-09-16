import React from "react";

export default function Button({ label, onClick }) {
  return (
    <button style={{ padding: "8px 16px", margin: "5px", cursor: "pointer" }} onClick={onClick}>
      {label}
    </button>
  );
}
