import React from "react";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/");
      }}
      className="btn btn-outline-secondary"
    >
      back
    </button>
  );
}

export default Button;
