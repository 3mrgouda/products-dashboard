import Image from "./UI/Image";
import Button from "./UI/Button";
import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image imageURL={imageURL} alt="product-name" className="rounded-md" />

      <h4>{title}</h4>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center space-x-2 my-4">
        <span className="w-5 h-5 bg-indigo-700 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-700 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-orange-700 rounded-full cursor-pointer" />
      </div>

      <div className="flex justify-between items-center">
        <span>$500,000</span>
        <Image
          imageURL={imageURL}
          alt="product-name"
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>

      <div className="flex  items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700">EDIT</Button>

        <Button className="bg-red-700">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
