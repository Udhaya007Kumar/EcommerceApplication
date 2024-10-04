import { useEffect, useState } from 'react'
import Navbar from './Compoents/Navbar/Navbar'
import Cart from './Compoents/Cart/Cart'
import axios from 'axios';
import Cartmodule from './Compoents/CartModule/Cartmodule';





function App() {
   const [data,setData] = useState([])
   const [cardIncrement,SetIncrement] = useState(0)
   const [cartQuality,setCartQuality] =useState([]);
   const [isOpen, setIsOpen] = useState(false);
   const [cartTotalValue, setCartTotalValue] =useState(0);
   const [cartvalue,setCardvalue]=useState([])
   const [cartItems, setCartItems] = useState([]);


    const openNav = () => {
      if(cardIncrement!=0){
         setIsOpen(true);
      }  
    };
  
    const closeNav = () => {
      setIsOpen(false);
    };


    const handCartDcerment = (id) => {
      setCartItems(cartItems.filter((item) => item !== id));
      SetIncrement((prevIncrement) => prevIncrement - 1);
    };
   
    const isInCart = (id) => {
      return cartItems.includes(id);
    };


 const handAddCartIncerment = (id) =>{

  const isItemInCart = data.find((cartItem) => cartItem.id === id);
  if(isItemInCart){
      SetIncrement(PrevesCardValue=>PrevesCardValue + 1)
      setCartItems([...cartItems, id]);   
  }else{
    console.log("Item not found");
  }

  data.map((ele)=>{
      if(ele.id===id){  
        // setCardValue(prevId => prevId * 2); 
        setCartQuality((prevCartQuality) => [
          ...prevCartQuality, // Keep the previous cart items
          {
            id: ele.id,
            title: ele.title,
            image: ele.image,
            description: ele.description,
            price: ele.price,
          },
        ]); 
        setCartTotalValue((prevTotalPrice) => prevTotalPrice + ele.price); 
      }
    })      
}


// cardmoudleRomovecarditem
    const CardRomvebutton = (id) => {
    
     
      // Decrease the cart value and increment when removing
      SetIncrement(cardIncrement - 1);
    
      //setCardValue(cartvalue - 1);
      // Remove the item by filtering out the one with the matching id
      setCartQuality((prevCartQuality) =>
        prevCartQuality.filter((ele) => ele.id !== id)
      );
      setCartItems(cartItems.filter((item) => item !== id));
      cartTotalValue(0);
      cartvalue(0);

     
      
    };
   
    


   


   useEffect(()=>{
    const fetchData =async () =>{
       try {
        const res = await axios.get('https://fakestoreapi.com/products')
        setData(res.data);       
       } catch (error) {
        console.error('Error fetching data:', err);
       }
           };
           fetchData();
     },[])

  return (
    <>
     <Navbar cardIncrement={cardIncrement} openNav={openNav} />
    <Cart isInCart={isInCart} handCartDcerment={handCartDcerment} setCardValue={setCardvalue} data={data} setData={setData} cartvalue={cartvalue}  SetIncrement={SetIncrement} handAddCartIncerment={handAddCartIncerment}  />
   <Cartmodule setCartQuality={setCartQuality} data={data} cartQuality={cartQuality} isOpen={isOpen}  closeNav={closeNav} CardRomvebutton={CardRomvebutton} cartTotalValue={cartTotalValue} setCartTotalValue={setCartTotalValue}   /> 
    </>
  )
}

export default App
