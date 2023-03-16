import React from 'react';

import "../App.css"
export default function Sidebaritem({ name, active, handleClick }) {
  return (
    <button 
      className={`sidebar-item ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      {name}
    </button>
  )
}