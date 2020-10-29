import { RouteProps } from "react-router";
import { Page1, Page2 } from "../pages";

export default function routes(): RouteProps[] {
  return [
    {
      path: "/page1",
      component: Page1,
      exact: true,
    },
    {
      path: "/page2",
      component: Page2,
      exact: true,
    },
  ];
}
