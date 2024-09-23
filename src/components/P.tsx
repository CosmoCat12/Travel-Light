import React from "react";

type PProps = {
  children: React.ReactNode;
  className?: string;
};

const P: React.FC<PProps> = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export default P;
