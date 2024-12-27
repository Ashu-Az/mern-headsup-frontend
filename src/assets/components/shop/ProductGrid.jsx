// ProductGrid.jsx
import { Link } from "react-router-dom";

// ProductGrid.jsx
const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
      {products.map((product) => (
        <div key={product._id} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div className="relative group">
          <img 
             src={product.images[0]?.url}
             alt={product.name}
             className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
             onError={(e) => {
               e.target.src = 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=2070';
             }}
           />
            <div className="absolute top-0 right-0 m-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              ${product.price}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {product.size}
                </span>
              </div>
              <span className="text-sm text-gray-500">Stock: {product.stock}</span>
            </div>
            
            <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
 };

export default ProductGrid;