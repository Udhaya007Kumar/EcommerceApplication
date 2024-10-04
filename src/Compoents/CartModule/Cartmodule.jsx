import React, { useState } from 'react';
import '../CartModule/Cartmodule.css';


const Cartmodule = ({data,isOpen,openNav,closeNav,cartQuality,CardRomvebutton,cartTotalValue,setCartTotalValue}) => {
    const [cardAddValue, setcardAddValue] =useState(1)

    const [quantities, setQuantities] = useState({});




    const CardADDAmountValue = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 1) + 1 // Default to 1 if not already set
        }));
    };

    // Decrease quantity for a specific item, but not below 1
    const CardDeAmountValue = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max((prevQuantities[id] || 1) - 1, 1)
        }));
    };

    const totalValue = cartQuality.reduce((total, ele) => {
        const quantity = quantities[ele.id] || 1; // Get quantity, default to 1
        return total + (ele.price * quantity);
    }, 0);







    return (
        <div>
       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <a className="closebtn" onClick={closeNav}>×</a>
            <h5 className='text-center lg:text-start xl:text-start m-5 text-3xl text-white font-bold'>MyCart</h5>
            {
                cartQuality.map((ele, index) => {
                    const cardAddValue = quantities[ele.id] || 1; // Get quantity, default to 1
                    return (
                        <div className='bg-slate-300 m-5 xl:bg-gray-50  xl:m-5 rounded-lg' key={index}>
                            <div className='flex xl:flex justify-stretch'>
                                <div className='xl:m-2 rounded-2xl'>
                                    <img className='object-h-48 w-[12rem]' width={50} src={ele.image} alt={ele.title} />
                                </div>
                                <div className='ml-12 mt-3 xl:mt-2 w-1/2'>
                                    <h4 className='text-center font-bold text-base ml-12 xl:font-bold xl:text-xl xl:ml-3'>{ele.title}</h4>
                                    <h5 className='mt-3 ml-12 text-2xl font-bold'> ${ele.price * cardAddValue}</h5>
                                    <div className='mt-5 ml-5'>
                                        <button className='bg-green-500 px-5 rounded-full' onClick={() => CardADDAmountValue(ele.id)}>+</button>
                                        <span className='p-5'>{cardAddValue}</span>
                                        <button className='bg-red-500 px-5 rounded-full' onClick={() => CardDeAmountValue(ele.id)}>-</button>
                                    </div>
                                </div>
                                <div className='mt-8 ml-12 w-1/4 gap-2'>
                                    <button className='mt-2 bg-red-500 px-4 py-3 rounded-2xl hover:bg-red-800 hover:text-white' onClick={() => CardRomvebutton(ele.id)}>Remove</button>
                                </div>
                                
                            </div>
                            
                        </div>
                    );
                })
                
                
            }
            <div className='bg-gray-200 p-5 rounded-lg mt-5'>
                <h4 className='text-xl font-bold'>Total Value: ${totalValue.toFixed(2)}</h4>
            </div>
            
        </div>
        
      
    </div>
       

       
    );
};

export default Cartmodule;