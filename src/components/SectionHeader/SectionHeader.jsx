import React from "react";
import "./SectionHeader.css";

export default function SectionHeader({ title, buttonLabel, onButtonClick }) {
  return (
    <div className="section-header">
      <h2 className="section-header__title">{title}</h2>
      <button 
        className="section-header__btn" 
        
      >
        {buttonLabel}
      </button>
    </div>
  );
}
