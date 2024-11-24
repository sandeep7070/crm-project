import React, { useState } from 'react';
import { ShoppingCart, Heart, Plus } from 'lucide-react';
import { Card, Button, CardContent, Badge}  from '@mui/material'


const ProductGrid = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 199.99,
      image: '/shopping.webp',
    //   image: '/HLOW.jpg',
      category: 'Electronics',
      inStock: true,
    },
    {
      id: 2,
      name: 'Leather Backpack',
      price: 89.99,
      image: '/hiibeg.webp',
      category: 'Accessories',
      inStock: true,
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 299.99,
      image: '/smart.webp',
      category: 'Electronics',
      inStock: false,
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 129.99,
      image: '/shoes.webp',
      category: 'Sports',
      inStock: true,
    }
  ];

  const addToCart = (productId) => {
    setCart([...cart, productId]);
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div className="bg-[#182638] min-h-screen">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-white">Shop</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#2c4366] px-4 py-2 rounded-full shadow-sm">
              <ShoppingCart className="h-5 w-5 text-white" />
              <span className="font-medium ">{cart.length}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#2c4366] px-4 py-2 rounded-full shadow-sm">
              <Heart className="h-5 w-5 text-white" />
              <span className="font-medium">{wishlist.length}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-[#2c4366] backdrop-blur-sm hover:bg-[#2c4366]"
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart
                    className={`h-5 w-5 transition-colors  ${
                      wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </Button>
              </div>

              <div className="relative aspect-square overflow-hidden bg-[#2c4366]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover  w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute  inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <CardContent className="p-6 bg-[#2c4366]">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-[#2c4366] text-white hover:bg-slate-400">
                    {product.category}
                  </Badge>
                  
                  <div className="space-y-2">
                    <h2 className="font-semibold text-lg text-white">{product.name}</h2>
                    <p className="text-2xl font-bold text-white">${product.price}</p>
                  </div>

                  <Button
                    className={`w-full gap-2 ${
                      product.inStock
                        ? ' hover:bg-slate-400'
                        : 'bg-gray-200 text-white cursor-not-allowed'
                    }`}
                    onClick={() => product.inStock && addToCart(product.id)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? (
                      <>
                        <Plus className="h-4 w-4 text-white" />
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

export default ProductGrid;