import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("projects", [
    index("routes/projects.tsx"),
    route(":slug", "routes/projects-detail.tsx"),
  ]),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
