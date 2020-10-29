import React, { CSSProperties, ReactNode } from "react";
import classnames from "classnames";

import "./style.scss";

interface IHeaderProps {
  title?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Header({
  title,
  children,
  className,
  style,
}: IHeaderProps) {
  return (
    <h1 className={classnames("title-root", className)} style={style}>
      {title || children}
    </h1>
  );
}
