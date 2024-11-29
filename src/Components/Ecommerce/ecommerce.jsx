import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart, Heart, Plus } from 'lucide-react';
import { Card, Button, CardContent, Badge } from '@mui/material';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:3000/api/v1/users/getAllproduct");
      
      console.log("My data avall", response.data);
      
      if (response.data && Array.isArray(response.data.products)) {
        const uniqueProducts = response.data.products.filter(
          (product, index, self) => 
            index === self.findIndex((p) => p.name === product.name)
        );
        
        setProducts(uniqueProducts);
      } else {
        setError('No products found');
      }
    } catch (err) {
      setError('Error fetching products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleFavorite = (product) => {
    setFavorites(prev => 
      prev.some(f => f.name === product.name)
        ? prev.filter(f => f.name !== product.name)
        : [...prev, product]
    );
  };

  const addToCart = (product) => {
    if (product.inStock) {
      setCart(prev => [...prev, product]);
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-[#182638] min-h-screen">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-white">Shop</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#2c4366] px-4 py-2 rounded-full shadow-sm">
              <ShoppingCart className="h-5 w-5 text-white" />
              <span className="font-medium text-white">{cart.length}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#2c4366] px-4 py-2 rounded-full shadow-sm">
              <Heart className="h-5 w-5 text-white" />
              <span className="font-medium text-white">{favorites.length}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card 
              key={product.name} 
              className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-4 right-4 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(product)}
                  className="rounded-full bg-[#2c4366] backdrop-blur-sm hover:bg-[#2c4366]"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      favorites.some(f => f.name === product.name) 
                        ? "fill-red-500 text-red-500" 
                        : "text-gray-600"
                    }`}
                  />
                </Button>
              </div>

              <div className="relative aspect-square overflow-hidden bg-[#2c4366]">
                <img
                  src={product.imageUrl || '/placeholder-image.png'}
                  alt={product.name}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <CardContent className="p-6 bg-[#2c4366]">
                <div className="space-y-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-[#2c4366] text-white hover:bg-slate-400"
                  >
                    {/* {product.category || 'Uncategorized'} */}
                  </Badge>
                  
                  <div className="space-y-2">
                    <h2 className="font-semibold text-lg text-white">{product.name}</h2>
                    <p className="text-2xl font-bold text-white">${product.price.toFixed(2)}</p>
                  </div>

                  <Button 
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`gap-2 hover:bg-slate-400 ${
                      product.inStock 
                        ? 'bg-gray-200 text-black' 
                        : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? (
                      <>
                        <Plus className="h-4 w-4" />
                        Add to Cart
                      </>
                    ) : (
                      'Out of Stock'
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProductList = () => {
//   // State to store fetched data
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data when the component mounts
//   useEffect(() => {
//     axios.get('http://localhost:3000/api/v1/users/getAllproduct')
//       .then((response) => {
//         setProducts(response.data);  // Store the API data in state
//         setLoading(false);  // Set loading to false once data is fetched
//         console.log(response,'res')
//       })
//       .catch((err) => {
//         setError(err.message);  // Handle any errors
//         setLoading(false);  // Stop loading if there was an error
//       });
//   }, []); 

//   // Render loading, error, or data
//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error) {
//     return <h1>Error: {error}</h1>;
//   }

//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.length === 0 ? (
//         <p>No products available</p>
//       ) : (
//         products.map((product, index) => (
//           <div key={index}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };


// const ecommerce=()=>{
//   axios.get('http://localhost:3000/api/v1/users/getAllproduct')
//       .then((response) => {
       
//         console.log(response,'res')
//       })
//       .catch((err) => {
//       console.log(err,'error')
//       });
//   return(
//     <>
//     <h1>{response.name}</h1>
//     </>
//   )
// }

// export default ProductList;

