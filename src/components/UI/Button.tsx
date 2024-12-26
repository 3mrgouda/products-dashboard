import { ReactNode, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  textColor?: string;
}
const Button = ({ children, className, textColor, ...rest }: IProps) => {
  return (
    <button
      className={`${className} w-full rounded-md p-1`}
      style={{ color: textColor || "white" }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
