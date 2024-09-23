import React from "react";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

const H1: React.FC<H1Props> = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>;
};

export default H1;
