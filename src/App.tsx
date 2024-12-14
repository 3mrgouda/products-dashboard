import ProductCard from "./components/ProductCard";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";
import { productList } from "./data";
import { useState } from "react";

const App = () => {

  // ** state
      const [isOpen, setIsOpen] = useState(false);

    // ** Handlers
    function open() {
      setIsOpen(true);
    }

    function close() {
      setIsOpen(false);
    }

  // ** Renders
  const renderProductList = () => {
    return (
      <>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </>
    );
  }
  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800 my-4" onClick={open}>Add New Product</Button>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-md">
      {renderProductList()}
    </div>
    <Modal isOpen={isOpen} close={close} title="Add New Product" >
      <div className="flex items-center space-x-3">
      <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
      <Button className="bg-red-700 hover:bg-red-800">Cancel</Button>
      </div>
    </Modal>
    </main>
  );
};

export default App;
