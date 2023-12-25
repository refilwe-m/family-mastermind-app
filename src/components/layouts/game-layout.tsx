import { Outlet } from "react-router-dom";
//{ children }: { children?: React.ReactNode }
export const GameLayout = () => {
  return (
    <main className="layout bg-[#182527] text-white">
      <Outlet />
    </main>
  );
};
