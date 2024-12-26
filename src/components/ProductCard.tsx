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
  setIsOpenConfirmModal: (isOpen: boolean) => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  index,
  setproductToEditIdx,
  setIsOpenConfirmModal,
}: IProps) => {
  const { title, description, imageURL, price, category } = product;

  // Renders
  const renderProductColors = () => {
    if (product.colors.length === 0) {
      return <span className="block h-5 text-gray-700">no colors yet</span>;
    }
    return product.colors.map((color) => (
      <CircleColors key={color} color={color} />
    ));
  };

  // Handlers
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setproductToEditIdx(index);
  };

  const onRemove = () => {
    setProductToEdit(product);
    setIsOpenConfirmModal(true);
  };
  return (
    <div className="mx-auto flex w-full flex-col rounded-md border p-2 md:mx-0">
      <Image
        imageURL={imageURL}
        alt="product-name"
        className="h-60 w-full rounded-md object-cover md:h-40"
      />
      <h4 className="mx-auto text-nowrap">{title}</h4>
      <p className="hidden text-sm text-gray-600 lg:block">
        {txtSlicer(description)}
      </p>

      <div className="flex flex-wrap items-center space-x-1">
        {renderProductColors()}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-base text-gray-500">
          ${price.replace(/\b\d{3}/g, "$&,")}
        </span>

        <div className="flex items-center space-x-2">
          <img
            src={category.imageURL}
            className="size-5 rounded-full object-cover"
            alt={category.name}
          />
          <span className="text-base text-gray-500">{category.name}</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between space-x-2">
        <Button
          className="bg-indigo-700 hover:bg-indigo-800"
          onClick={() => onEdit()}
        >
          EDIT
        </Button>

        <Button
          className="bg-red-700 hover:bg-red-800"
          onClick={() => onRemove()}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
