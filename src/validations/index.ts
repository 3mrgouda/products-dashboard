export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  )
    errors.title = "Title is required";
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  )
    errors.description = "Description is required";
  if (!product.imageURL.trim() || !validURL)
    errors.imageURL = "Image URL is required";
  if (!product.price.trim() || isNaN(Number(product.price)))
    errors.price = "Price is required";

  return errors;
};
