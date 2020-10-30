import React, { ReactNode } from "react";
import classnames from "classnames";

import "./style.scss";
import { Popover } from "antd";

export interface ITimePoint {
  title: string;
  subTitle: string;
  description: ReactNode;
  done: boolean;
  isLastOne?: boolean;
}

interface ITimelineProps {
  timePoints: ITimePoint[];
}

const TimePoint = (props: ITimePoint) => {
  return (
    <div className="time-point">
      <div className="content">
        <div
          className={classnames("circle", {
            done: props.done,
          })}
        />
        <Popover
          placement="top"
          content={<div className="desc">{props.description}</div>}
        >
          <div>
            <div className="title">{props.title}</div>
            <div className="sub-title">{props.subTitle}</div>
          </div>
        </Popover>
        <div className="line" />
        {props.isLastOne && <div className={classnames("circle-last")} />}
      </div>
    </div>
  );
};

export default function Timeline({ timePoints }: ITimelineProps) {
  return (
    <div className="time-line-root">
      {timePoints.map((point, idx) => (
        <TimePoint
          {...point}
          key={idx}
          isLastOne={idx === timePoints.length - 1}
        />
      ))}
    </div>
  );
}
