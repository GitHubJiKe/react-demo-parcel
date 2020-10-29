import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ILinkButtonProps {
  children: ReactNode;
  to: string;
}

export default function LinkButton({
  children,
  to,
  ...btnProps
}: ILinkButtonProps & ButtonProps) {
  return (
    <Link to={to}>
      <Button {...btnProps}>{children}</Button>
    </Link>
  );
}
