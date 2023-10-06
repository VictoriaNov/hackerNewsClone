import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function RedirectToTopStories({
  redirectPath = "news/top",
  isAllowed,
  children,
}) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children || <Outlet />;
}
