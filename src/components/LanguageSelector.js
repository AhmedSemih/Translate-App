import React from 'react';

function LanguageSelector({languages}) {
  return (
      <select className="langSelector">
          <option value="tr">Turkish</option>
          <option value="en">English</option>
      </select>
  )
}

export default LanguageSelector;