import React from 'react';

const Button = ({ className, children }) => (
  <button className={`py-2 px-4 rounded-md ${className}`}>{children}</button>
);

export default Button;
