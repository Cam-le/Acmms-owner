import { createBrowserRouter, Navigate, redirect } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { WorkersPage } from "./pages/WorkersPage";
import { TasksPage } from "./pages/TasksPage";
import { CropsPage } from "./pages/CropsPage";
import { FarmPage } from "./pages/FarmPage";
import { AdvisoryPage } from "./pages/AdvisoryPage";
import { SeasonsPage } from "./pages/SeasonsPage";
import { PlotsPage } from "./pages/PlotsPage";
import { AppLayout } from "./components/Layout";

// Loader to check authentication
function protectedLoader() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (!isAuthenticated) {
    return redirect("/login");
  }
  return null;
}

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: AppLayout,
    loader: protectedLoader,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        Component: DashboardPage,
      },
      {
        path: "farm",
        Component: FarmPage,
      },
      {
        path: "seasons",
        Component: SeasonsPage,
      },
      {
        path: "lands",
        Component: PlotsPage,
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
        path: "advisory",
        Component: AdvisoryPage,
      },
      {
        path: "*",
        Component: DashboardPage,
      },
    ],
  },
]);
