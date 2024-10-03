import React from 'react';
import './Cart.css'

const Cart = ({data,cartvalue,handAddCartIncerment}) => {

 
    

    return (
        <div>
             <div className=' container mx-auto '>
                <h1 className=' mt-5 pl-5 xl:p-5 text-start text-2xl text-black font-bold md:text-2xl xl:text-3xl '>Shpping Cart...</h1>

                {/*   card   */}

                {
                   data.map((item,index)=>{
                    return(
                        <div key={index} className='m-2 mt-3 xl:container xl:mx-auto xl:p-2'>
                        <div className='mt-8 rounded-xl bg-slate-500 xl:bg-slate-400 xl:p-2 xl:ml-12 xl:mr-12 xl:rounded-lg hover:shadow-2xl '>
                             <div className=' xl:flex flex-wrap xl:justify-between'>
                                <div className='object-fill rounded-lg w-full xl:p-1 xl:w-[200px] bg-slate-700'> 
                                    <img className='' width={200} src={item.image}></img>
                                </div> 
                                <div className='mt-2 xl:w-1/2 xl:ml-5 xl:mt-2  '>
                                 <h2 className='text-center text-2xl xl:text-black xl:text-3xl font-bold hover:text-[#802c6e]'>{item.title}</h2>
                                 <p id='description' className=' ml-2 sm:hidden xl:block mt-2 text-start font-thin text-xl'>{item.description}</p>
                                </div>
                                
                                <div >
                                    <h2 className='mr-5 p-3 text-center text-2xl mt-8 font-bold'>${item.price}</h2>
                                    <div className='xl:mr-8'>
                                     {
                                            cartvalue === 0 ?
                                            (
                                             <button
                                             onClick={() => handAddCartIncerment(item.id)} className='text-center p-3 bg-yellow-400 w-full mb-2 hover:bg-yellow-900 rounded-2xl text-xl text-white xl:p-3 xl:mt-5 xl:text-xl' >
                                             Add To Cart
                                            </button>
                                                
                                            ):(
                                                <button onClick={() => handAddCartIncerment(item.id)} className='text-center p-3 bg-red-800 w-full mb-2 hover:bg-yellow-900   rounded-2xl text-xl text-white xl:p-3 xl:mt-5 xl:text-xl '>Remove</button>
                                            )
                                        }  
                                  
                                    </div>
                                </div>     
                           </div>   
                         </div>
                       </div>                       
                    )
                   })  
                }
            </div>
        </div>
    );
};

export default Cart;



// <div className='rounded-lg  '>
//                                <img 
//                                   className='object-contain sm:h-32 sm:w-48 xl:h-64 xl:w-96' 
//                                  src={item.image} 
//                                  alt={`Image of ${item.name}`} 
//                                /> 
//                                 </div>   
//                               <div className='mt-5 ml-7'>
//                                 <h2 className=' text-2xl font-bold xl:text-3xl hover:text-[#802c6e]'>{item.title}</h2>
//                               </div> 
//                               <div>test</div>   


