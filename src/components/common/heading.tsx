import { FC, ReactNode } from "react";
type HeadingProps = {
  children: ReactNode;
  isMain?: boolean;
};
export const Heading: FC<HeadingProps> = ({ children, isMain = false }) => {
  const colors = [
    "text-red-400",
    "text-orange-400",
    "text-yellow-400",
    "text-green-400",
    "text-blue-400",
    "text-purple-400",
  ];
  const rainbow =
    children?.toString() &&
    children
      .toString()
      .split("")
      .map((char, i) => {
        return (
          <span key={i} className={colors[i % colors.length]}>
            {char}
          </span>
        );
      });

  const normal =
    children?.toString() &&
    children
      .toString()
      .split("")
      .map((char, i) => (
        <span key={i} className={`${i < 4 ? "text-green-400" : "text-white"}`}>
          {char}
        </span>
      ));

  return (
    <h1 className="font-bold text-6xl text-white italic uppercase">
      {isMain ? rainbow : normal}
    </h1>
  );
};
