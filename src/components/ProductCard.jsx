// ProductCard.js
import { useState, useEffect } from 'react';
// import axios from 'axios';

const ProductCard = () => {
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     // Fetch product data from your API
//     const fetchProductData = async () => {
//       try {
//         const response = await axios.get('https://your-api-endpoint/products');
//         setProductData(response.data);
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     };

//     fetchProductData();
//   }, []);
const [productData, setProductData] = useState([]);
const [hasFetchedData, setHasFetchedData] = useState(false);

useEffect(() => {
  // Simulate an API call delay
  const delay = setTimeout(() => {
    // Check if data has already been fetched
    if (!hasFetchedData) {
      setProductData([
        {
          id: 1,
          image: 'https://placekitten.com/300/200',
          title: 'Product 1',
          description: 'Description for Product 1',
          price: 29.99,
        },
        {
          id: 2,
          image: 'https://placekitten.com/300/201',
          title: 'Product 2',
          description: 'Description for Product 2',
          price: 39.99,
        },
        {
          id: 3,
          image: 'https://placekitten.com/300/202',
          title: 'Product 3',
          description: 'Description for Product 3',
          price: 49.99,
        },
        {
            id: 4,
            image: 'https://placekitten.com/300/203',
            title: 'Product 4',
            description: 'Description for Product 3',
            price: 49.99,
          },
          {
            id: 5,
            image: 'https://placekitten.com/300/204',
            title: 'Product 5',
            description: 'Description for Product 3',
            price: 49.99,
          },
          {
            id: 6,
            image: 'https://placekitten.com/300/205',
            title: 'Product 6',
            description: 'Description for Product 3',
            price: 49.99,
          },
      ]);
      // Mark that data has been fetched
      setHasFetchedData(true);
    }
  }, 1000);

  // Clear the timeout to avoid memory leaks
  return () => clearTimeout(delay);
}, [hasFetchedData]);

  return (
    <div className="flex flex-wrap justify-center">
      {productData.map((product) => (
        <div key={product.id} className="max-w-xl m-4 overflow-hidden shadow-lg rounded-lg md:w-1/3 sm:w-1/2">
          <img className="w-full h-60 object-cover" src={product.image} alt={product.title} />

          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 text-base mb-2">{product.description}</p>
            <p className="text-gray-800 font-bold text-lg">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
