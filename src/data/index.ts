import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea's Genesis is still in its infancy, having sold its first cars (as an independent marque) only in 2015.",
    imageURL:
      "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FFE631"],
    category: {
      name: "Cars",
      imageURL:
        "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "2023 Tesla Model S",
    description:
      "An all-electric luxury sedan, offering industry-leading range and incredible acceleration.",
    imageURL:
      "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    price: "900000",
    colors: ["#FFFFFF", "#000000", "#FF5733"],
    category: {
      name: "Electric Cars",
      imageURL:
        "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "2023 Toyota Supra GR",
    description:
      "A sports car combining modern performance with a classic design.",
    imageURL:
      "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    price: "700000",
    colors: ["#E91E63", "#3F51B5", "#FFC107"],
    category: {
      name: "Sports Cars",
      imageURL:
        "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "2022 Ford F-150",
    description: "A reliable and rugged truck, perfect for work and play.",
    imageURL:
      "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    price: "400000",
    colors: ["#008000", "#FFFFFF", "#FFD700"],
    category: {
      name: "Trucks",
      imageURL:
        "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "2023 Porsche 911 Carrera",
    description: "A high-performance icon with exceptional driving dynamics.",
    imageURL:
      "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    price: "1200000",
    colors: ["#FF0000", "#000000", "#FFFFFF"],
    category: {
      name: "Luxury Cars",
      imageURL:
        "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "2023 Honda Civic Type R",
    description:
      "A practical yet sporty hatchback with impressive handling and power.",
    imageURL:
      "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    price: "300000",
    colors: ["#FF4500", "#1E90FF", "#DAA520"],
    category: {
      name: "Compact Cars",
      imageURL:
        "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "2023 Audi e-tron",
    description:
      "An electric luxury SUV combining cutting-edge technology and performance.",
    imageURL:
      "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    price: "850000",
    colors: ["#007FFF", "#333333", "#FFFFFF"],
    category: {
      name: "Electric Cars",
      imageURL:
        "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "2022 BMW X5",
    description: "A premium SUV offering both comfort and sporty performance.",
    imageURL:
      "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    price: "750000",
    colors: ["#FFFFFF", "#00008B", "#FFD700"],
    category: {
      name: "SUVs",
      imageURL:
        "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "2023 Mercedes-Benz S-Class",
    description:
      "A luxurious sedan designed for the highest level of comfort and sophistication.",
    imageURL:
      "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    price: "1100000",
    colors: ["#8B0000", "#FFFFFF", "#2F4F4F"],
    category: {
      name: "Luxury Cars",
      imageURL:
        "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    },
  },
  {
    id: uuid(),
    title: "2023 Chevrolet Corvette Stingray",
    description:
      "A mid-engine sports car offering thrilling performance at an approachable price.",
    imageURL:
      "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
    price: "600000",
    colors: ["#FF4500", "#2E8B57", "#1E90FF"],
    category: {
      name: "Sports Cars",
      imageURL:
        "https://th.bing.com/th/id/R.4e7acec211a711b2669d91a771c0b4ca?rik=1ij3ke4tcnxHcQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Cars-Full-HD-Images-1080p.jpg&ehk=IN1J%2f8CvnnGiJh698L6AgrSF8jq83lL9DMc9lb6t3TA%3d&risl=&pid=ImgRaw&r=0",
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

export const categories: ICategory[]= [
  { 
    id: uuid(),
    name: "T-Shirts",
    imageURL:
      "https://th.bing.com/th/id/R.6c3ddd4f609acc5e3fff3e13255cfc15?rik=nMtuon3w6BIpiw&riu=http%3a%2f%2finikweb.com%2fwp-content%2fuploads%2f2015%2f02%2ft473kellygreen.jpg&ehk=ngEG5J4NY4mngHySwtGScfJOpm%2bFsWS9P0TPNj15Qww%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: uuid(),
    name: "Hoodies",
    imageURL:
      "https://th.bing.com/th/id/R.bc3c1690e4eb8fde44e8860cf9878fa4?rik=QrxRwoGzYGwcNw&riu=http%3a%2f%2fclipartix.com%2fwp-content%2fuploads%2f2016%2f05%2fShirt-shirt-clip-art-designs-free-clipart-images-clipartcow.png&ehk=hADKju7ApeMpde%2fqSOPRTcflBpR1tmwAmJSaP278zWw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: uuid(),
    name: "Stickers",
    imageURL:
      "https://th.bing.com/th/id/OIP.FdxnJ3bW7_kdKOtKEuPeswHaIE?rs=1&pid=ImgDetMain",
  },
];
