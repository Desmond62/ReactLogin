import React from 'react'
import des from './styles.module.css';

const Modal=({item,key}) =>{
  return (
    // <div>

    
<div class="col-md-12" >
     <div className={des.mul}>
      <div key ={key}>
     <img src={item.images[0]} alt=""/>
     <div class="mult">
       <div>
         <p> {item.title}...</p>
         {/* <h3>${item.price}</h3> */}
       </div>
       <div>
        {/* <a href="#"><button type="submit">VIEW</button></a>  */}
       </div>
       </div>
     </div>
   </div>
   </div>

    // </div>
  )
}

export default Modal
