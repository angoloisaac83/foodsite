import React from 'react';
import {Drinks} from '../data';
import { CartContext } from '../context/cartcontext';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Category = () =>{
    console.log(Drinks.menu)
    // const { addToCart } = useContext(CartContext);
    // let data = {'id':id, 'name':name,'image':image, 'description':description, 'price':price} ;

    // const handleAddToCart = () => {
    //     console.log("Adding to cart:", { id, name, price });
    //     addToCart({ id, name, price });
    // };

    return(
        <>
                <div className="container mx-auto w-full h-fit p-6"><br />
            <h2 className="text-3xl font-bold text-center mb-8">Our Categories</h2><hr /><br />
                <h1 className="text-2xl font-bold text-center mb-8">Cocktails:</h1>
                <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Drinks.menu.Cocktails.map((items)=>(
       <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
            {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
            <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
            <p className="text-gray-600 overflow-y-scroll h-[65px]"><b>Ingredients: </b>{items.ingredients }</p>
            <p className="text-lg font-bold text-green-600">{items.price}</p>
            <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
                <button
            //    onClick={handleAddToCart}
               className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <FaShoppingCart className="mr-1" />
                    Add to Cart
                </button>
                <button
                    className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <Link to='/buy' >Buy Now</Link>
                </button>
       </div>
   </div>
            ))}
            
            </div>
        </div>
        <div className="container mx-auto w-full h-fit p-6">
                <h1 className="text-2xl font-bold text-center py-6 mb-8">Mocktails:</h1>
                <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Drinks.menu.Mocktails.map((items)=>(
       <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
            {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
            <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
            <p className="text-gray-600 overflow-y-scroll h-[65px] mb-2"><b>Ingredients: </b>{items.ingredients }</p>
            <p className="text-lg font-bold text-green-600">{items.price}</p>
            <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
                <button
            //    onClick={handleAddToCart}
               className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <FaShoppingCart className="mr-1" />
                    Add to Cart
                </button>
                <button
                    className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <Link to='/buy' >Buy Now</Link>
                </button>
       </div>
   </div>
            ))}
            
            </div>
        </div>
        <div className="container mx-auto w-full h-fit p-6">
                <h1 className="text-2xl font-bold py-6 text-center mb-8">Shooters:</h1>
                <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Drinks.menu.Shooters.map((items)=>(
       <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
            {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
            <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
            <p className="text-gray-600 overflow-y-scroll h-[65px] mb-2"><b>Ingredients: </b>{items.ingredients }</p>
            <p className="text-lg font-bold text-green-600">{items.price}</p>
            <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
                <button
            //    onClick={handleAddToCart}
               className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <FaShoppingCart className="mr-1" />
                    Add to Cart
                </button>
                <button
                    className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <Link to='/buy' >Buy Now</Link>
                </button>
       </div>
   </div>
            ))}
            
            </div>
        </div>
        <div className="container mx-auto w-full h-fit p-6">
                <h1 className="text-2xl font-bold py-6 text-center mb-8">Wines & Spirits:</h1>
                <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Drinks.menu['Wines & Spirits'].map((items)=>(
       <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
            {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
            <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
            <p className="text-gray-600 overflow-y-scroll h-[65px] mb-2"><b>Ingredients: </b>{items.ingredients }</p>
            <p className="text-lg font-bold text-green-600">{items.price}</p>
            <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
                <button
            //    onClick={handleAddToCart}
               className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <FaShoppingCart className="mr-1" />
                    Add to Cart
                </button>
                <button
                    className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <Link to='/buy' >Buy Now</Link>
                </button>
       </div>
   </div>
            ))}
            
            </div>
        </div>
        <div className="container mx-auto w-full h-fit p-6">
                <h1 className="text-2xl font-bold py-6 text-center mb-8">Shakes & Smoothies:</h1>
                <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Drinks.menu['Shakes & Smoothies'].map((items)=>(
       <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
            {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
            <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
            <p className="text-gray-600 overflow-y-scroll h-[65px] mb-2"><b>Ingredients: </b>{items.ingredients }</p>
            <p className="text-lg font-bold text-green-600">{items.price}</p>
            <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
                <button
            //    onClick={handleAddToCart}
               className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <FaShoppingCart className="mr-1" />
                    Add to Cart
                </button>
                <button
                    className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <Link to='/buy' >Buy Now</Link>
                </button>
       </div>
   </div>
            ))}
            
            </div>
        </div>
        <div className="container mx-auto w-full h-fit p-6">
                <h1 className="text-2xl font-bold py-6 text-center mb-8">Other Drinks:</h1>
                <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Drinks.menu['Other Drinks'].map((items)=>(
       <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
            {/* <img className="rounded-md w-full h-[200px] object-cover" src={items.name} alt={items.name} /> */}
            <h3 className="text-xl font-semibold mb-2 pt-3">{items.name}</h3>
            <p className="text-gray-600 overflow-y-scroll h-[65px] mb-2"><b>Ingredients: </b>{items.ingredients }</p>
            <p className="text-lg font-bold text-green-600">{items.price}</p>
            <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
                <button
            //    onClick={handleAddToCart}
               className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <FaShoppingCart className="mr-1" />
                    Add to Cart
                </button>
                <button
                    className="bg-green-500 flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <Link to='/buy' >Buy Now</Link>
                </button>
       </div>
   </div>
            ))}
            
            </div>
        </div>
        </>
    )
}
export default Category;