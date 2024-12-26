import ProductCard from "./components/ProductCard";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import Modal from "./components/UI/Modal";
import {
  categories,
  colors as colorsList,
  formInputsList,
  productList,
} from "./data";
import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { IProduct } from "./interfaces";
import { productValidation } from "./validations";
import ErrorMessage from "./components/ErrorMessage";
import CircleColors from "./components/CircleColors";
import { v4 as uuid } from "uuid";
import Select from "./components/Select";
import { TproductNames } from "./types";
import toast, { Renderable, Toaster } from "react-hot-toast";
import {
  ArrowPathIcon,
  SquaresPlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

const App = () => {
  const defaultProductObject = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: categories[0].name,
      imageURL: categories[0].imageURL,
    },
  };
  // ** states
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObject);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  // ** Handlers
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const openEditModal = () => setIsOpenEditModal(true);
  const closeEditModal = () => setIsOpenEditModal(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const notify = (description: string, icon: ReactNode) => {
    toast(description, {
      icon: icon as Renderable,
      duration: 3000,
      style: {
        background: "black",
        color: "white",
      },
    });
  };
  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColors },
      ...prev,
    ]);
    setProduct(defaultProductObject);
    setTempColors([]);
    close();
    notify(
      "Product has been added",
      <SquaresPlusIcon className="h-6 w-6 text-green-500" />,
    );
  };

  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = productToEdit;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    // make a copy of the products array to avoid bugs if you edit directly the original array
    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };
    setProducts(updatedProducts);

    setProductToEdit(defaultProductObject);
    setTempColors([]);
    closeEditModal();
    notify(
      "Product has been updated",
      <ArrowPathIcon className="h-6 w-6 text-green-500" />,
    );
  };

  const removeProductHandler = () => {
    const filtered = products.filter(
      (product) => product.id !== productToEdit.id,
    );
    setProducts(filtered);
    closeConfirmModal();
    notify(
      "Product has been removed",
      <TrashIcon className="h-6 w-6 text-red-500" />,
    );
  };
  const onCancel = () => {
    setProduct(defaultProductObject);
    close();
  };

  const closeConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  // ** Renders
  const renderProductList = () => {
    return (
      <>
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            setProductToEdit={setProductToEdit}
            openEditModal={openEditModal}
            index={index}
            setproductToEditIdx={setProductToEditIdx}
            setIsOpenConfirmModal={setIsOpenConfirmModal}
          />
        ))}
      </>
    );
  };
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col space-y-2">
      <label className="mb-[2px] text-sm font-medium text-gray-700">
        {input.label}
      </label>
      <Input
        type="text"
        value={product[input.name]}
        name={input.name}
        onChange={(e) => onChangeHandler(e)}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colorsList.map((color) => (
    <CircleColors
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          // delete color in second click
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));
  const renderProductToEditColors = colorsList.map((color) => (
    <CircleColors
      key={color}
      color={color}
      onClick={() => {
        if (productToEdit.colors.includes(color)) {
          setProductToEdit({
            ...productToEdit,
            colors: productToEdit.colors.filter((item) => item !== color),
          });
          return;
        }
        setProductToEdit({
          ...productToEdit,
          colors: [...productToEdit.colors, color],
        });
      }}
    />
  ));

  const renderProductEditwithMsgError = (
    id: string,
    label: string,
    name: TproductNames,
  ) => {
    return (
      <div className="flex flex-col space-y-2">
        <label
          htmlFor={id}
          className="mb-[2px] text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          type="text"
          value={productToEdit[name]}
          name={name}
          onChange={(e) => onChangeEditHandler(e)}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };
  return (
    <main className="container">
      <Button className="my-4 bg-indigo-700 hover:bg-indigo-800" onClick={open}>
        Add New Product
      </Button>
      <div className="grid grid-cols-1 gap-2 rounded-md md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList()}
      </div>

      {/*Add new product modal */}
      <Modal isOpen={isOpen} close={close} title="Add New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <Select
            selected={product.category}
            // value  is wrote direct becouse of using ready select component.
            setSelected={(value) => setProduct({ ...product, category: value })}
          />

          {/* sellected colors */}
          <div className="flex flex-wrap items-center gap-y-1 space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="rounded-md px-1 text-sm text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          {/* colors container */}
          <div className="flex flex-wrap items-center space-x-1">
            {renderProductColors}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-200 hover:bg-gray-400"
              textColor="black"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/*Edit product modal */}
      <Modal
        isOpen={isOpenEditModal}
        close={closeEditModal}
        title="Edit This Product"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditwithMsgError("title", "Product Title", "title")}
          {renderProductEditwithMsgError(
            "description",
            "Product description",
            "description",
          )}
          {renderProductEditwithMsgError(
            "imageURL",
            "Product Image URL",
            "imageURL",
          )}
          {renderProductEditwithMsgError("price", "Product Price", "price")}

          <Select
            selected={productToEdit.category}
            // value  is wrote direct becouse of using ready select component.
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />

          {/* sellected colors */}
          <div className="flex flex-wrap items-center gap-y-1 space-x-1">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                className="rounded-md px-1 text-sm text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          {/* colors container */}
          <div className="flex flex-wrap items-center space-x-1">
            {renderProductToEditColors}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Update
            </Button>
            <Button
              className="bg-gray-200 text-black hover:bg-gray-400"
              onClick={onCancel}
              textColor="black"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Confirm delete Modal */}
      <Modal
        isOpen={isOpenConfirmModal}
        close={() => setIsOpenConfirmModal(false)}
        title="Are you sure want to delete this product?"
      >
        <div className="flex items-center space-x-3">
          <Button
            className="bg-red-700 hover:bg-red-800"
            onClick={removeProductHandler}
          >
            Yes remove
          </Button>
          <Button
            className="bg-gray-200 text-black hover:bg-gray-400"
            textColor="black"
            onClick={() => setIsOpenConfirmModal(false)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
      <Toaster />
    </main>
  );
};

export default App;
