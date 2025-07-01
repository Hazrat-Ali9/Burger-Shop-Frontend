import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'signature', name: 'Signature' },
    { id: 'classic', name: 'Classic' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'spicy', name: 'Spicy' },
  ];

  const products = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      description: "Juicy beef patty with melted cheese, lettuce, tomato, and our special sauce",
      price: 12.99,
      image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      category: "classic",
      calories: 520,
      ingredients: ["Beef", "Cheese", "Lettuce", "Tomato", "Sauce"]
    },
    {
      id: 2,
      name: "BBQ Bacon Deluxe",
      description: "Premium beef with crispy bacon, BBQ sauce, onion rings, and cheddar cheese",
      price: 15.99,
      image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.9,
      category: "signature",
      calories: 680,
      ingredients: ["Beef", "Bacon", "BBQ Sauce", "Onion Rings", "Cheddar"]
    },
    {
      id: 3,
      name: "Veggie Supreme",
      description: "Plant-based patty with avocado, sprouts, cucumber, and herb mayo",
      price: 13.99,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.7,
      category: "vegetarian",
      calories: 420,
      ingredients: ["Plant Patty", "Avocado", "Sprouts", "Cucumber", "Herb Mayo"]
    },
    {
      id: 4,
      name: "Spicy Jalapeño Burger",
      description: "Spicy beef patty with jalapeños, pepper jack cheese, and chipotle mayo",
      price: 14.99,
      image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.6,
      category: "spicy",
      calories: 590,
      ingredients: ["Spicy Beef", "Jalapeños", "Pepper Jack", "Chipotle Mayo"]
    },
    {
      id: 5,
      name: "Mushroom Swiss",
      description: "Beef patty topped with sautéed mushrooms and melted Swiss cheese",
      price: 13.99,
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.5,
      category: "classic",
      calories: 540,
      ingredients: ["Beef", "Mushrooms", "Swiss Cheese", "Herbs"]
    },
    {
      id: 6,
      name: "Double Bacon Cheeseburger",
      description: "Two beef patties with double bacon, cheese, and our signature sauce",
      price: 18.99,
      image: "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      category: "signature",
      calories: 820,
      ingredients: ["Double Beef", "Double Bacon", "Cheese", "Signature Sauce"]
    },
    {
      id: 7,
      name: "Mediterranean Veggie",
      description: "Grilled portobello with feta, olives, tomatoes, and tzatziki sauce",
      price: 12.99,
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.4,
      category: "vegetarian",
      calories: 380,
      ingredients: ["Portobello", "Feta", "Olives", "Tomatoes", "Tzatziki"]
    },
    {
      id: 8,
      name: "Fire Hot Burger",
      description: "Extra spicy beef with ghost pepper sauce, jalapeños, and hot cheese",
      price: 16.99,
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.7,
      category: "spicy",
      calories: 650,
      ingredients: ["Spicy Beef", "Ghost Pepper Sauce", "Hot Cheese", "Jalapeños"]
    },
    {
      id: 9,
      name: "Truffle Deluxe",
      description: "Premium wagyu beef with truffle aioli, arugula, and aged gruyere",
      price: 24.99,
      image: "https://images.pexels.com/photos/1552211/pexels-photo-1552211.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.9,
      category: "signature",
      calories: 720,
      ingredients: ["Wagyu Beef", "Truffle Aioli", "Arugula", "Gruyere"]
    },
    {
      id: 10,
      name: "Classic Hamburger",
      description: "Simple and delicious beef patty with lettuce, tomato, and pickles",
      price: 10.99,
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.3,
      category: "classic",
      calories: 450,
      ingredients: ["Beef", "Lettuce", "Tomato", "Pickles"]
    },
    {
      id: 11,
      name: "Black Bean Burger",
      description: "House-made black bean patty with avocado and cilantro lime sauce",
      price: 11.99,
      image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.2,
      category: "vegetarian",
      calories: 390,
      ingredients: ["Black Bean Patty", "Avocado", "Cilantro Lime Sauce"]
    },
    {
      id: 12,
      name: "Carolina BBQ",
      description: "Pulled pork with tangy Carolina BBQ sauce and coleslaw",
      price: 14.99,
      image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.6,
      category: "signature",
      calories: 610,
      ingredients: ["Pulled Pork", "Carolina BBQ", "Coleslaw"]
    },
    {
      id: 13,
      name: "Buffalo Chicken Burger",
      description: "Crispy chicken with buffalo sauce, blue cheese, and celery",
      price: 13.99,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.5,
      category: "spicy",
      calories: 580,
      ingredients: ["Chicken", "Buffalo Sauce", "Blue Cheese", "Celery"]
    },
    {
      id: 14,
      name: "Fish Burger",
      description: "Crispy fish fillet with tartar sauce, lettuce, and tomato",
      price: 12.99,
      image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.1,
      category: "classic",
      calories: 480,
      ingredients: ["Fish Fillet", "Tartar Sauce", "Lettuce", "Tomato"]
    },
    {
      id: 15,
      name: "Turkey Avocado",
      description: "Lean turkey patty with fresh avocado, sprouts, and honey mustard",
      price: 13.99,
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.4,
      category: "classic",
      calories: 510,
      ingredients: ["Turkey", "Avocado", "Sprouts", "Honey Mustard"]
    },
    {
      id: 16,
      name: "Quinoa Veggie Burger",
      description: "Quinoa and vegetable patty with hummus and roasted peppers",
      price: 12.99,
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.3,
      category: "vegetarian",
      calories: 410,
      ingredients: ["Quinoa Patty", "Hummus", "Roasted Peppers"]
    },
    {
      id: 17,
      name: "Sriracha Chicken",
      description: "Grilled chicken with sriracha mayo, pickled vegetables, and cilantro",
      price: 14.99,
      image: "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.7,
      category: "spicy",
      calories: 560,
      ingredients: ["Chicken", "Sriracha Mayo", "Pickled Vegetables", "Cilantro"]
    },
    {
      id: 18,
      name: "Lamb Mediterranean",
      description: "Seasoned lamb patty with feta, olives, and cucumber yogurt sauce",
      price: 17.99,
      image: "https://images.pexels.com/photos/1552211/pexels-photo-1552211.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.6,
      category: "signature",
      calories: 640,
      ingredients: ["Lamb", "Feta", "Olives", "Cucumber Yogurt"]
    },
    {
      id: 19,
      name: "Breakfast Burger",
      description: "Beef patty with fried egg, bacon, hash browns, and hollandaise",
      price: 16.99,
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      category: "signature",
      calories: 750,
      ingredients: ["Beef", "Fried Egg", "Bacon", "Hash Browns", "Hollandaise"]
    },
    {
      id: 20,
      name: "Impossible Burger",
      description: "Plant-based impossible patty with all the classic fixings",
      price: 15.99,
      image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.5,
      category: "vegetarian",
      calories: 460,
      ingredients: ["Impossible Patty", "Lettuce", "Tomato", "Onion", "Sauce"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our delicious selection of gourmet burgers, made with premium ingredients.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search burgers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-colors duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-700 hover:text-primary-600 dark:hover:text-primary-400 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Showing {filteredProducts.length} of {products.length} burgers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Filter className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No burgers found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;