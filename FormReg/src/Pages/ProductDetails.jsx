import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Product from '../Components/Product';
import des from '../Components/styles.module.css';

function ProductDetails() {

    const detail =useParams();
    const id =detail.id;
    const [details, setDetails] = useState();
    console.log(id)

    const HandleProduct=()=>{
        const details =JSON.parse(localStorage.getItem("products"));
        const get = details.filter((item) => item.id == id);
        setDetails(get);
    }
    useEffect(()=>{
        HandleProduct();
    },[])

    const changeDetails =(e) =>{
      e.preventDefault();
        document.getElementById('myImage').src="{details[0]?.images[1]}"
        document.getElementById('myImage').src="{details[0]?.images[2]}"
        document.getElementById('myImage').src="{details[0]?.images[3]}"
        document.getElementById('myImage').src="{details[0]?.images[4]}"

    } ;
  
  return (
  
    
    <div className={des.prod}>
      <div className={des.produt}>
      {
        details && <img id='myImage'  src={details[0]?.images[0]} alt="" />
      }
     <h1> {details && details[0]?.title} </h1>
     <h1>{ details && details[0]?.price}</h1>
      </div>
   
      <div className={des.tails}>

   <button onClick={changeDetails}>{
        details && <img src={details[0]?.images[1]} alt="" />
      }</button>   
   <button onClick={changeDetails}>  {
        details && <img src={details[0]?.images[2]} alt="" />
      }</button> 

<button onClick={changeDetails}>    {
        details && <img src={details[0]?.images[3]} alt="" />
      }</button> 
      <button onClick={changeDetails}> {
        details && <img src={details[0]?.images[4]} alt="" />
      }</button> 
       </div> 
    </div>
  
    
  )
}

export default ProductDetails
