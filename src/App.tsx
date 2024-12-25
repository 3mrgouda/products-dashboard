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
import { ChangeEvent, FormEvent, useState } from "react";
import { IProduct } from "./interfaces";
import { productValidation } from "./validations";
import ErrorMessage from "./components/ErrorMessage";
import CircleColors from "./components/CircleColors";
import { v4 as uuid } from "uuid";
import Select from "./components/Select";
import { TproductNames } from "./types";

const App = () => {
  const defaultProductObject = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // ** state
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
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

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
  };

  const onCancel = () => {
    setProduct(defaultProductObject);
    close();
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
          />
        ))}
      </>
    );
  };
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700 mb-[2px]">
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
    name: TproductNames
  ) => {
    return (
      <div className="flex flex-col space-y-2">
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700 mb-[2px]"
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
      <Button className="bg-indigo-700 hover:bg-indigo-800 my-4" onClick={open}>
        Add New Product
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-md">
        {renderProductList()}
      </div>

      {/*Add new product modal */}
      <Modal isOpen={isOpen} close={close} title="Add New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}

          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

          {/* sellected colors */}
          <div className="flex flex-wrap items-center space-x-1 gap-y-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="rounded-md px-1 text-white text-sm"
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
            <Button className="bg-red-700 hover:bg-red-800 " onClick={onCancel}>
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
            "description"
          )}
          {renderProductEditwithMsgError(
            "imageURL",
            "Product Image URL",
            "imageURL"
          )}
          {renderProductEditwithMsgError("price", "Product Price", "price")}

          {/* sellected colors */}
          <div className="flex flex-wrap items-center space-x-1 gap-y-1">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                className="rounded-md px-1 text-white text-sm"
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
            <Button className="bg-red-700 hover:bg-red-800 " onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
