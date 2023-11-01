import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Product from '../Components/Product';
import des from '../Components/styles.module.css';

function ProductDetails() {

    const detail =useParams();
    const id =detail.id;
    const [details, setDetails] = useState();
    console.log(id)

    const [currentImageIndex,setcurrentImageIndex]=useState();

    const HandleProduct=()=>{
        const details =JSON.parse(localStorage.getItem("products"));
        const get = details.filter((item) => item.id == id);
        setDetails(get);
    }
    useEffect(()=>{
        HandleProduct();
    },[])

    
    const changeDetails =(index) =>{
    setcurrentImageIndex(index);
        
    } ;
  
  return (
  
    
    <div className={des.prod}>
      <div className={des.produt}>
      {
        details && <img id='myImage'  src={details[0]?.images[currentImageIndex]} alt="" />
      }
     <h1> {details && details[0]?.title} </h1>
     <h1>{ details && details[0]?.price}</h1>
      </div>
   
      <div className={des.tails}>

      {details && 
      details[0]?.images.slice(0).map((image,index) =>(
          <button key={index} onClick={() => changeDetails(index + 0)}><img src ={image} alt=""/></button>
        ))
      }
       </div> 
    </div>
  
    
  )
}

export default ProductDetails
