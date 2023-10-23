import React from "react";
import { Outlet } from "react-router-dom";
//{ children }: { children?: React.ReactNode }
export const GameLayout = () => {
  return (
    <main className="layout">
      <Outlet />
    </main>
  );
};
