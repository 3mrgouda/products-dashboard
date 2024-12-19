import ProductCard from "./components/ProductCard";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import Modal from "./components/UI/Modal";
import { colors, formInputsList, productList } from "./data";
import { ChangeEvent, FormEvent, useState } from "react";
import { IProduct } from "./interfaces";
import { productValidation } from "./validations";
import ErrorMessage from "./components/ErrorMessage";
import CircleColors from "./components/CircleColors";

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
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [tempColors, setTempColors] = useState<string[]>([]);

  // ** Handlers
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
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
    console.log("success");
  };

  const onCancel = () => {
    setProduct(defaultProductObject);
    close();
  };
  // ** Renders
  const renderProductList = () => {
    return (
      <>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
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

  const renderCircleColors = colors.map((color) => (
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

  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800 my-4" onClick={open}>
        Add New Product
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-md">
        {renderProductList()}
      </div>

      <Modal isOpen={isOpen} close={close} title="Add New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}

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
            {renderCircleColors}
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
    </main>
  );
};

export default App;
