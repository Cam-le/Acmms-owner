import { createBrowserRouter, Navigate } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { WorkersPage } from "./pages/WorkersPage";
import { TasksPage } from "./pages/TasksPage";
import { CropsPage } from "./pages/CropsPage";
import { FarmPage } from "./pages/FarmPage";
import { AppLayout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "dashboard",
        Component: DashboardPage,
      },
      {
        path: "farm",
        Component: FarmPage,
      },
      {
        path: "workers",
        Component: WorkersPage,
      },
      {
        path: "tasks",
        Component: TasksPage,
      },
      {
        path: "crops",
        Component: CropsPage,
      },
      {
        path: "*",
        Component: DashboardPage,
      },
    ],
  },
]);
