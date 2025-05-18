import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("all-users", "routes/admin/all-user.tsx"),
    route("trips/create", "routes/admin/create-trip.tsx"),
    route("trips", "routes/admin/trips.tsx"),
  ]),
  route("sign-in", "routes/root/sign-in.tsx"),
] satisfies RouteConfig;
