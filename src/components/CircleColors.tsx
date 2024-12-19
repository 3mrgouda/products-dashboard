import { HTMLAttributes } from "react";
interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}
const CircleColors = ({ color = "black", ...rest }: IProps) => {
  return (
    //using inline style because of tailwind running in build time while react running in run time
    <span
      className={`block w-5 h-5  rounded-full cursor-pointer`}
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default CircleColors;
