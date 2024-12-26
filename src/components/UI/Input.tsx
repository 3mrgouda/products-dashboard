import { InputHTMLAttributes } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="text-md rounded-md border-[1px] border-gray-300 p-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
      {...rest}
    />
  );
};

export default Input;
