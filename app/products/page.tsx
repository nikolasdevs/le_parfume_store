// import Image from "next/image";

// // Define TypeScript interfaces for the product and API response
// interface Product {
//   id: number;
//   photos: { url: string }[];
//   name: string;
//   current_price: string;
//   price: string;
// }

// interface ApiResponse {
//   items: Product[];
// }

// const Page = async () => {
//   const getProducts = async (): Promise<ApiResponse> => {
//     const res = await fetch(
//       "https://api.timbu.cloud/products?organization_id=f43a511a3a374211b32ac69dbd6a12b9&Appid=PKXG4ZMTNIZ0A2X&Apikey=9be7b7a250fc4526909e3dad4839e0fc20240712134329744164"
//     );
//     return res.json();
//   };
// const renderPrice = (price: { [key: string]: number | string }) => {
//   // Assuming the price object has currency keys like { NGN: 1000 }
//   const currency = Object.keys(price)[0]; // Get the first currency key
//   return `${currency} ${price[currency]}`;
// };

//   const data = await getProducts();
//   console.log(`product.photos[0]?.url`);

//   return (
//     <div className="text-neutral-200 container m-auto">
//       <h1>Products</h1>
//       <ul className="flex flex-wrap w-full mt-8 gap-6">
//         {data?.items.map((product: Product) => (
//           <li key={product.id}>
//             <Image
//               src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
//               alt={product.name}
//               width={250}
//               height={200}
//               className="object-cover"
//             />

//             <h2>{product.name}</h2>
//             <p>{product.current_price}</p>

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Page;

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { GetServerSideProps } from "next";

// // Define TypeScript interfaces for the product and API response
// interface Product {
//   id: number;
//   product_image: { url: string }[] | [];
//   name: string;
//   description: string;
//   price: { [key: string]: number | string }; // Update this to match the actual structure
// }

// interface ApiResponse {
//   items: Product[];
//   total: number;
//   per_page: number;
//   current_page: number;
// }

// const IMAGE_BASE_URL = "https://api.timbu.cloud/images/"; // Update this with your actual image base URL

// const getFullImageUrl = (relativeUrl: string) => {
//   if (relativeUrl.startsWith("http://") || relativeUrl.startsWith("https://")) {
//     return relativeUrl;
//   }
//   return `${IMAGE_BASE_URL}${
//     relativeUrl.startsWith("/") ? relativeUrl : `/${relativeUrl}`
//   }`;
// };

// const getProducts = async (page: number = 1): Promise<ApiResponse> => {
//   const res = await fetch(
//     `https://api.timbu.cloud/products?organization_id=f43a511a3a374211b32ac69dbd6a12b9&Appid=PKXG4ZMTNIZ0A2X&Apikey=9be7b7a250fc4526909e3dad4839e0fc20240712134329744164&page=${page}`
//   );

//   if (!res.ok) {
//     throw new Error(`Failed to fetch products: ${res.statusText}`);
//   }

//   const data = await res.json();

//   if (!data || !data.items || typeof data.current_page !== "number") {
//     throw new Error("Invalid API response");
//   }

//   return data;
// };

// interface PageProps {
//   data: ApiResponse;
// }

// const Page = ({ data }: PageProps) => {
//   const [currentPage, setCurrentPage] = useState(data.current_page);
//   const [products, setProducts] = useState(data.items);

//   const handlePageChange = async (page: number) => {
//     try {
//       const newData = await getProducts(page);
//       setProducts(newData.items);
//       setCurrentPage(newData.current_page);
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   };

//   const renderPrice = (price: { [key: string]: number | string }) => {
//     // Assuming the price object has currency keys like { NGN: 1000 }
//     const currency = Object.keys(price)[0]; // Get the first currency key
//     return `${currency} ${price[currency]}`;
//   };

//   return (
//     <div className="text-neutral-200 container m-auto">
//       <h1>Products</h1>
//       <ul className="flex flex-wrap w-full mt-8 gap-6">
//         {products.map((product: Product) => (
//           <li key={product.id}>
//             {product.product_image && product.product_image.length > 0 ? (
//               <Image
//                 src={getFullImageUrl(product.product_image[0].url)} // Assuming the first image is the default one
//                 alt={product.name}
//                 width={200}
//                 height={200}
//                 className="object-cover"
//               />
//             ) : (
//               <p>No image available</p>
//             )}
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>{renderPrice(product.price)}</p>
//           </li>
//         ))}
//       </ul>
//       <div className="pagination">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>Page {currentPage}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={products.length < data.per_page}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const page = context.query.page
//     ? parseInt(context.query.page as string, 10)
//     : 1;

//   try {
//     const data = await getProducts(page);
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     return {
//       props: {
//         data: {
//           items: [],
//           total: 0,
//           per_page: 10,
//           current_page: 1,
//         },
//       },
//     };
//   }
// };

// export default Page;
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Product = {
  id: number;
  photos: { url: string }[];
  name: string;
  current_price: string;
  price: string;
};

type ApiResponse = {
  items: Product[];
};

export const getServerSideProps: GetServerSideProps<{
  products: Product[];
}> = async () => {
  const res = await fetch(
    "https://api.timbu.cloud/products?organization_id=f43a511a3a374211b32ac69dbd6a12b9&Appid=PKXG4ZMTNIZ0A2X&Apikey=9be7b7a250fc4526909e3dad4839e0fc20240712134329744164"
  );

  const data: ApiResponse = await res.json();

  // Pass data to the page via props
  return { props: { products: data.items } };
};

const Page = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.photos[0]?.url} alt={product.name} />
          <p>Current Price: {product.current_price}</p>
          <p>Original Price: {product.price}</p>
        </div>
      ))}
    </main>
  );
};

export default Page;
