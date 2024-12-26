import { HTMLAttributes } from "react";
interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}
const CircleColors = ({ color = "black", ...rest }: IProps) => {
  return (
    //using inline style because of tailwind running in build time while react running in run time
    <span
      className={`block h-5 w-5 cursor-pointer rounded-full`}
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default CircleColors;
