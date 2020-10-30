import React from "react";
import { LinkButton, Timeline } from "../../components";
import { ITimePoint } from "../../components/Timeline";

const defaultTimePoints: ITimePoint[] = [
  {
    title: "作者在网页上直接使用 ES 模块",
    subTitle: "作者在网页上直接使用 ES 模块",
    description:
      "作者在网页上直接使用 ES 模块，不经过任何打包工具，谈了自己的使用感受。最大的好处就是，用户运行的代码跟原始代码是一致的，省去了编译步骤，使得调试非常容易。",
    done: true,
  },
  {
    title: "作者在网页上直接使用 ES 模块",
    subTitle: "作者在网页上直接使用 ES 模块",
    description:
      "作者在网页上直接使用 ES 模块，不经过任何打包工具，谈了自己的使用感受。最大的好处就是，用户运行的代码跟原始代码是一致的，省去了编译步骤，使得调试非常容易。",
    done: false,
  },
  {
    title: "作者在网页上直接使用 ES 模块",
    subTitle: "作者在网页上直接使用 ES 模块",
    description:
      "作者在网页上直接使用 ES 模块，不经过任何打包工具，谈了自己的使用感受。最大的好处就是，用户运行的代码跟原始代码是一致的，省去了编译步骤，使得调试非常容易。",
    done: false,
  },
];

export default function Page2() {
  return (
    <div
      style={{
        height: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Page2
      <LinkButton to="/page1">Page1</LinkButton>
      <Timeline timePoints={defaultTimePoints} />
    </div>
  );
}
