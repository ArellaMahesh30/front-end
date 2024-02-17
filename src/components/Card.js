import React from 'react';

const Card = ({ className, children }) => (
  <div className={`bg-white p-4 rounded-md shadow-md ${className}`}>
    {children}
  </div>
);

export default Card;
