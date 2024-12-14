import { InputHTMLAttributes } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="border-[1px] border-gray-300 rounded-md 
      focus:outline-none p-2 text-md focus:border-indigo-500 focus:ring-indigo-500"
      {...rest}
    />
  );
};

export default Input;
