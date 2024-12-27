// FilterPanel.jsx
import { useState } from "react";

const FilterPanel = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [search, setSearch] = useState("");
 
  const categories = ["Electronics", "Clothing", "Sports"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "NA", "42"];
 
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFilter();
    }
  };
 
  const handleFilter = () => {
    const params = new URLSearchParams();
    if (category) params.append("category", category);
    if (color) params.append("color", color);
    if (size) params.append("size", size);
    if (search) params.append("search", search);
    onFilter(params.toString());
  };
 
  const handleReset = () => {
    setCategory("");
    setColor("");
    setSize("");
    setSearch("");
    onFilter("");
  };
 
  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row gap-4">
        <select
          className="bg-white/90 backdrop-blur-sm border-0 p-3 rounded-lg shadow-md focus:ring-2 focus:ring-purple-400 transition-all"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
 
        <select
          className="bg-white/90 backdrop-blur-sm border-0 p-3 rounded-lg shadow-md focus:ring-2 focus:ring-purple-400 transition-all"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="">All Colors</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>
 
        <select
          className="bg-white/90 backdrop-blur-sm border-0 p-3 rounded-lg shadow-md focus:ring-2 focus:ring-purple-400 transition-all"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">All Sizes</option>
          {sizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
 
        <input
          type="text"
          className="bg-white/90 backdrop-blur-sm border-0 p-3 rounded-lg shadow-md flex-grow focus:ring-2 focus:ring-purple-400 transition-all"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
        />
 
        <div className="flex gap-2">
          <button
            onClick={handleFilter}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all font-semibold"
          >
            Apply Filters
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all font-semibold"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
 };

export default FilterPanel;