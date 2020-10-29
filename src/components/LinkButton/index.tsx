import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

interface ILinkButtonProps {
  children: ReactNode;
  to: string;
}

export default function LinkButton({ children, to }: ILinkButtonProps) {
  return (
    <Link to={to}>
      <button className="button-root">{children}</button>
    </Link>
  );
}
