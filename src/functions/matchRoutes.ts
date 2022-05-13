//library
import { Children } from "react";

//function
import compilePath from "./compilePath";

export default function matchRoutes(children: any, location: string) {
  const matches: any = [];

  Children.forEach(children, (route) => {
    const { regex } = compilePath(route.props.path);
    const match = location.match(regex);

    if (match) {
      matches.push({
        route: route.props.children,
      });
    }
  });

  return matches[0];
}
