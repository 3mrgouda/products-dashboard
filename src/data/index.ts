import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Tesla Model S",
    price: "80000",
    description:
      "A sleek and powerful electric sedan offering exceptional performance and range.",
    imageURL:
      "https://th.bing.com/th/id/R.869dfe65c1df464d9c751f121b0ea0fb?rik=H8sYLC7afZ6nIQ&pid=ImgRaw&r=0",
    colors: ["#8B0000", "#2F4F4F", "#FF4500"],
    category: {
      name: "Electric",
      imageURL:
        "https://th.bing.com/th/id/R.869dfe65c1df464d9c751f121b0ea0fb?rik=H8sYLC7afZ6nIQ&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "Porsche 911",
    price: "120000",
    description:
      "An iconic sports car known for its dynamic performance and luxurious design.",
    colors: ["#8B0000", "#2F4F4F", "#FF4500"],
    imageURL:
      "https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2019/07/feature-luxury-sport-car.jpg",
    category: {
      name: "Sports",
      imageURL:
        "https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2019/07/feature-luxury-sport-car.jpg",
    },
  },
  {
    id: uuid(),
    title: "Ford Mustang",
    price: "60000",
    description:
      "A classic American muscle car with a rich history of speed and style.",
    imageURL:
      "https://th.bing.com/th/id/R.ddc06286562c6898c1485427eb1cccf1?rik=5UbP7Xj2zNCYWg&pid=ImgRaw&r=0",
    colors: ["#8B0000", "#2F4F4F", "#1E90FF"],
    category: {
      name: "Classic",
      imageURL:
        "https://th.bing.com/th/id/R.ddc06286562c6898c1485427eb1cccf1?rik=5UbP7Xj2zNCYWg&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "Audi e-tron",
    price: "75000",
    description:
      "A premium electric SUV that combines advanced technology with refined comfort.",
    colors: ["#8B0000", "#2F4F4F", "#FF4500"],
    imageURL:
      "https://th.bing.com/th/id/R.869dfe65c1df464d9c751f121b0ea0fb?rik=H8sYLC7afZ6nIQ&pid=ImgRaw&r=0",
    category: {
      name: "Electric",
      imageURL:
        "https://th.bing.com/th/id/R.869dfe65c1df464d9c751f121b0ea0fb?rik=H8sYLC7afZ6nIQ&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "Lamborghini Huracan",
    price: "200000",
    description:
      "A breathtaking supercar with jaw-dropping speed and unmatched design.",
    colors: ["#8B0000", "#2F4F4F", "#2E8B57"],
    imageURL:
      "https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2019/07/feature-luxury-sport-car.jpg",
    category: {
      name: "Sports",
      imageURL:
        "https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2019/07/feature-luxury-sport-car.jpg",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Corvette",
    price: "70000",
    description:
      "A modern classic offering a perfect balance of performance, style, and value.",
    colors: ["#8B0000", "#2F4F4F", "#2E8B57"],
    imageURL:
      "https://th.bing.com/th/id/R.ddc06286562c6898c1485427eb1cccf1?rik=5UbP7Xj2zNCYWg&pid=ImgRaw&r=0",
    category: {
      name: "Classic",
      imageURL:
        "https://th.bing.com/th/id/R.ddc06286562c6898c1485427eb1cccf1?rik=5UbP7Xj2zNCYWg&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "Rivian R1T",
    price: "70000",
    description:
      "An innovative electric truck built for off-road adventures and sustainable utility.",
    colors: ["#8B0000", "#2F4F4F", "#FF4500"],
    imageURL:
      "https://th.bing.com/th/id/R.869dfe65c1df464d9c751f121b0ea0fb?rik=H8sYLC7afZ6nIQ&pid=ImgRaw&r=0",
    category: {
      name: "Electric",
      imageURL:
        "https://th.bing.com/th/id/R.869dfe65c1df464d9c751f121b0ea0fb?rik=H8sYLC7afZ6nIQ&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "Ferrari SF90",
    price: "300000",
    description:
      "A hybrid supercar with cutting-edge technology and exhilarating performance.",
    colors: ["#8B0000", "#2F4F4F", "#FF4500"],
    imageURL:
      "https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2019/07/feature-luxury-sport-car.jpg",
    category: {
      name: "Sports",
      imageURL:
        "https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2019/07/feature-luxury-sport-car.jpg",
    },
  },
  {
    id: uuid(),
    title: "Dodge Charger",
    price: "55000",
    description:
      "A bold and powerful muscle car with an aggressive design and modern features.",
    colors: ["#8B0000", "#2F4F4F", "#1E90FF"],
    imageURL:
      "https://th.bing.com/th/id/R.ddc06286562c6898c1485427eb1cccf1?rik=5UbP7Xj2zNCYWg&pid=ImgRaw&r=0",
    category: {
      name: "Classic",
      imageURL:
        "https://th.bing.com/th/id/R.ddc06286562c6898c1485427eb1cccf1?rik=5UbP7Xj2zNCYWg&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "BMW i4",
    price: "70000",
    description:
      "A sophisticated electric sedan combining luxury and impressive performance.",
    colors: ["#8B0000", "#2F4F4F", "#2E8B57"],
    imageURL:
      "https://th.bing.com/th/id/R.869dfe65c1df464d9c751f121b0ea0fb?rik=H8sYLC7afZ6nIQ&pid=ImgRaw&r=0",
    category: {
      name: "Electric",
      imageURL:
        "https://th.bing.com/th/id/R.869dfe65c1df464d9c751f121b0ea0fb?rik=H8sYLC7afZ6nIQ&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "McLaren 720S",
    price: "280000",
    description:
      "A high-performance supercar delivering unparalleled speed and precision engineering.",
    colors: ["#8B0000", "#2F4F4F", "#1E90FF"],
    imageURL:
      "https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2019/07/feature-luxury-sport-car.jpg",
    category: {
      name: "Sports",
      imageURL:
        "https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2019/07/feature-luxury-sport-car.jpg",
    },
  },
  {
    id: uuid(),
    title: "Pontiac GTO",
    price: "50000",
    description:
      "A vintage muscle car that stands as a symbol of American automotive history.",
    colors: ["#8B0000", "#2F4F4F", "#1E90FF"],
    imageURL:
      "https://th.bing.com/th/id/R.ddc06286562c6898c1485427eb1cccf1?rik=5UbP7Xj2zNCYWg&pid=ImgRaw&r=0",
    category: {
      name: "Classic",
      imageURL:
        "https://th.bing.com/th/id/R.ddc06286562c6898c1485427eb1cccf1?rik=5UbP7Xj2zNCYWg&pid=ImgRaw&r=0",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "imageURL",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#8B0000",
  "#2F4F4F",
  "#FF4500",
  "#2E8B57",
  "#1E90FF",
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Electric",
    imageURL:
      "https://th.bing.com/th/id/R.869dfe65c1df464d9c751f121b0ea0fb?rik=H8sYLC7afZ6nIQ&pid=ImgRaw&r=0",
  },
  {
    id: uuid(),
    name: "Sports",
    imageURL:
      "https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2019/07/feature-luxury-sport-car.jpg",
  },
  {
    id: uuid(),
    name: "Classic",
    imageURL:
      "https://th.bing.com/th/id/R.ddc06286562c6898c1485427eb1cccf1?rik=5UbP7Xj2zNCYWg&pid=ImgRaw&r=0",
  },
];
