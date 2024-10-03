import { useEffect, useState } from 'react'
import Navbar from './Compoents/Navbar/Navbar'
import Cart from './Compoents/Cart/Cart'
import axios from 'axios';
import Cartmodule from './Compoents/CartModule/Cartmodule';





function App() {
   const [count, setCount] = useState(0)
   const [data,setData] = useState([])
   const [cartvalue,setCardValue] = useState(0)
   const [cardIncrement,SetIncrement] = useState(0)
   const [cartQuality,setCartQuality] =useState([]);
   const [isOpen, setIsOpen] = useState(false);
   const [cartTotalValue, setCartTotalValue] =useState(0);

    const openNav = () => {
      if(cardIncrement!=0){
         setIsOpen(true);
      }  
    };
  
    const closeNav = () => {
      setIsOpen(false);
    };




   


 const handAddCartIncerment = (id) =>{
   SetIncrement(cardIncrement +1)
 setCardValue(cartvalue + 1)
   data.map((ele)=>{
      if(ele.id===id){    
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
      setCardValue(cartvalue - 1);
    
      // Remove the item by filtering out the one with the matching id
      setCartQuality((prevCartQuality) =>
        prevCartQuality.filter((ele) => ele.id !== id)
      );
    };
    console.log(cartQuality);
    


   


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
    <Cart data={data} setData={setData} cartvalue={cartvalue} setCartValue={setCardValue} handAddCartIncerment={handAddCartIncerment} />
   <Cartmodule cartQuality={cartQuality} isOpen={isOpen}  closeNav={closeNav} CardRomvebutton={CardRomvebutton} cartTotalValue={cartTotalValue} setCartTotalValue={setCartTotalValue}  />
    </>
  )
}

export default App
