import Image from "./UI/Image";
import Button from "./UI/Button";
import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils";
import CircleColors from "./CircleColors";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  index: number;
  setproductToEditIdx: (idx: number) => void;
}

const ProductCard = ({ product, setProductToEdit, openEditModal,index, setproductToEditIdx }: IProps) => {
  const { title, description, imageURL, colors, price } = product;

  // Renders
  const renderProductColors = colors.map((color) => (
    <CircleColors key={color} color={color} />
  ));

  // Handlers
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setproductToEditIdx(index);
  };
  return (
    <div className="w-full mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt="product-name"
        className="rounded-md w-full h-60 md:h-40 object-cover"
      />
      <h4 className=" text-nowrap mx-auto">
        {title}
      </h4>
      <p className="hidden lg:block text-gray-600 text-sm">
        {txtSlicer(description)}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-gray-800">${price}</span>

        <div className="flex flex-wrap items-center space-x-1">
          {renderProductColors}
        </div>
      </div>

      <div className="flex  items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700" onClick={() => onEdit()}>EDIT</Button>

        <Button className="bg-red-700">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
