// import React from 'react';
// import {Drinks} from '../data';
// import { CartContext } from '../context/cartcontext';
// import { FaShoppingCart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Category = () =>{
//     console.log(Drinks.menu)
//     // const { addToCart } = useContext(CartContext);
//     // let data = {'id':id, 'name':name,'image':image, 'description':description, 'price':price} ;

//     // const handleAddToCart = () => {
//     //     console.log("Adding to cart:", { id, name, price });
//     //     addToCart({ id, name, price });
//     // };

//     return(
//         <>
//                 <div className="container mx-auto w-full h-fit p-6"><br />
//             <h2 className="text-3xl font-bold text-center mb-8">Our Categories</h2><hr /><br />
//                 <h1 className="text-2xl font-bold text-center mb-8">Cocktails:</h1>
//                 <br />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {Drinks.menu.Cocktails.map((items)=>(
//        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
//             {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
//             <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
//             <p className="text-gray-600 overflow-y-scroll h-[65px]"><b>Ingredients: </b>{items.ingredients }</p>
//             <p className="text-lg font-bold text-yellow-600">{items.price}</p>
//             <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
//                 <button
//             //    onClick={handleAddToCart}
//                className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <FaShoppingCart className="mr-1" />
//                     Add to Cart
//                 </button>
//                 <button
//                     className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <Link to='/buy' >Buy Now</Link>
//                 </button>
//        </div>
//    </div>
//             ))}
            
//             </div>
//         </div>
//         <div className="container mx-auto w-full h-fit p-6">
//                 <h1 className="text-2xl font-bold text-center py-6 mb-8">Mocktails:</h1>
//                 <br />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {Drinks.menu.Mocktails.map((items)=>(
//        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
//             {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
//             <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
//             <p className="text-gray-600 overflow-y-scroll h-[65px] mb-2"><b>Ingredients: </b>{items.ingredients }</p>
//             <p className="text-lg font-bold text-yellow-600">{items.price}</p>
//             <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
//                 <button
//             //    onClick={handleAddToCart}
//                className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <FaShoppingCart className="mr-1" />
//                     Add to Cart
//                 </button>
//                 <button
//                     className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <Link to='/buy' >Buy Now</Link>
//                 </button>
//        </div>
//    </div>
//             ))}
            
//             </div>
//         </div>
//         <div className="container mx-auto w-full h-fit p-6">
//                 <h1 className="text-2xl font-bold py-6 text-center mb-8">Shooters:</h1>
//                 <br />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {Drinks.menu.Shooters.map((items)=>(
//        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
//             {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
//             <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
//             <p className="text-gray-600 overflow-y-scroll h-[65px] mb-2"><b>Ingredients: </b>{items.ingredients }</p>
//             <p className="text-lg font-bold text-yellow-600">{items.price}</p>
//             <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
//                 <button
//             //    onClick={handleAddToCart}
//                className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <FaShoppingCart className="mr-1" />
//                     Add to Cart
//                 </button>
//                 <button
//                     className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <Link to='/buy' >Buy Now</Link>
//                 </button>
//        </div>
//    </div>
//             ))}
            
//             </div>
//         </div>
//         <div className="container mx-auto w-full h-fit p-6">
//                 <h1 className="text-2xl font-bold py-6 text-center mb-8">Wines & Spirits:</h1>
//                 <br />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {Drinks.menu['Wines & Spirits'].map((items)=>(
//        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
//             {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
//             <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
//             <p className="text-gray-600 overflow-y-scroll h-[65px] mb-2"><b>Ingredients: </b>{items.ingredients }</p>
//             <p className="text-lg font-bold text-yellow-600">{items.price}</p>
//             <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
//                 <button
//             //    onClick={handleAddToCart}
//                className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <FaShoppingCart className="mr-1" />
//                     Add to Cart
//                 </button>
//                 <button
//                     className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <Link to='/buy' >Buy Now</Link>
//                 </button>
//        </div>
//    </div>
//             ))}
            
//             </div>
//         </div>
//         <div className="container mx-auto w-full h-fit p-6">
//                 <h1 className="text-2xl font-bold py-6 text-center mb-8">Shakes & Smoothies:</h1>
//                 <br />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {Drinks.menu['Shakes & Smoothies'].map((items)=>(
//        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
//             {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
//             <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
//             <p className="text-gray-600 overflow-y-scroll h-[65px] mb-2"><b>Ingredients: </b>{items.ingredients }</p>
//             <p className="text-lg font-bold text-yellow-600">{items.price}</p>
//             <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
//                 <button
//             //    onClick={handleAddToCart}
//                className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <FaShoppingCart className="mr-1" />
//                     Add to Cart
//                 </button>
//                 <button
//                     className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <Link to='/buy' >Buy Now</Link>
//                 </button>
//        </div>
//    </div>
//             ))}
            
//             </div>
//         </div>
//         <div className="container mx-auto w-full h-fit p-6">
//                 <h1 className="text-2xl font-bold py-6 text-center mb-8">Other Drinks:</h1>
//                 <br />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {Drinks.menu['Other Drinks'].map((items)=>(
//        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
//             {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
//             <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
//             <p className="text-gray-600 overflow-y-scroll h-[65px] mb-2"><b>Ingredients: </b>{items.ingredients }</p>
//             <p className="text-lg font-bold text-yellow-600">{items.price}</p>
//             <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
//                 <button
//             //    onClick={handleAddToCart}
//                className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <FaShoppingCart className="mr-1" />
//                     Add to Cart
//                 </button>
//                 <button
//                     className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
//                 >
//                     <Link to='/buy' >Buy Now</Link>
//                 </button>
//        </div>
//    </div>
//             ))}
            
//             </div>
//         </div>
//         </>
//     )
// }
// export default Category;
// import React, { useState } from "react";
// import { Drinks } from "../data";

// const Category = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Drinks"); // Default to Drinks

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <div className="w-full h-fit py-[30px] items-center justify-center flex flex-col">
//       {/* Top Section */}
//       <div className="flex justify-center w-full items-center px-4 py-4">
//         <h1 className="text-2xl">Categories</h1>
//       </div>

//       {/* Dropdown to Select Category */}
//       <div className="mb-5">
//         <label className="mr-3 font-semibold">Select Category:</label>
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="border border-gray-300 rounded-md px-3 py-2"
//         >
//           {Object.keys(Drinks.menu).map((category, index) => (
//             <option key={index} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Items Display */}
//       <div className="w-full max-w-2xl p-4">
//         <h2 className="text-xl font-bold mb-4">
//           {selectedCategory} Menu
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {Drinks.menu[selectedCategory]
//             .filter((item) => item.available) // Only show available items
//             .map((item) => (
//               <div
//                 key={item.id}
//                 className="border rounded-md p-4 shadow-sm flex flex-col items-start"
//               >
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//                 <p className="text-gray-500">{item.price}</p>
//                 <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md">
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;

import React, { useState } from "react";
import { Drinks } from "../data";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const App = () => {
  const [activeTab, setActiveTab] = useState("Shakes & Smoothies");

  const categoryNames = Object.keys(Drinks.menu);

  const renderContent = () => {
    return (
            <div className="grid px-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Drinks.menu[activeTab].map((items)=>(
       <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
            {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
            <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
            <p className="text-gray-600 overflow-y-scroll h-[65px]"><b>Ingredients: </b>{items.ingredients }</p>
            <p className="text-lg font-bold text-yellow-600">{items.price}</p>
            <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
                <button
            //    onClick={handleAddToCart}
               className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
                >
                    <FaShoppingCart className="mr-1" />
                    Add to Cart
                </button>
                <button
                    className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:text-yellow-600 transition-colors"
                >
                    <Link to='/buy' >Buy Now</Link>
                </button>
       </div>
   </div>
            ))}
            
            </div>
    );
  };

  return (
    <div className="w-full h-fit py-[30px] items-center justify-center flex flex-col">
      {/* Top Navigation */}
      <div className="flex justify-center w-full items-center px-4 py-4">
        <h1 className="text-2xl">Categories</h1>
      </div>

      {/* Categories Navigation */}
      <div className="flex w-full overflow-x-scroll mobile:gap-5 h-fit justify-around py-7">
        {categoryNames.map((category, index) => (
          <div
            key={index}
            className="flex px-5 w-fit flex-row justify-around items-center pt-[20px] py-2"
          >
            <div
              className={`w-[90px] text-center flex flex-col gap-2 ${
                activeTab === category
                  ? "after:w-[100px] after:h-[3px] after:rounded-full after:bg-yellow-500"
                  : "after:w-0"
              } items-center cursor-pointer`}
              onClick={() => setActiveTab(category)}
            >
              <div
                className={`w-6 h-6 ${
                  activeTab === category ? "bg-blue-500" : "bg-gray-500"
                } rounded`}
              ></div>
              <span className="text-xs mt-1">{category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-grow">{renderContent()}</div>
    </div>
  );
};

export default App;
