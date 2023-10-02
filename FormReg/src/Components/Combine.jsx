import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import des from './styles.module.css';
import {HiMiniBars3} from 'react-icons/hi2';
import {MdStars} from "react-icons/md";
import {HiOutlineUser} from "react-icons/hi";
import {RiArrowDropDownLine} from "react-icons/ri";
import {BiHelpCircle} from "react-icons/bi";
import {HiOutlineShoppingCart} from "react-icons/hi";
import axios from "axios";
import Modal from "./Modal";
function Combine() {

    const[products,setProducts] = useState([]);
        const result = document.getElementById("input")
        const handleSearch =(e) =>{
            e.preventDefault();
              axios.get(`https://dummyjson.com/products/search?q=${result.value}`)
    .then(res =>{
      
  
      setProducts(res.data.products)
      // console.log(res.data.products)
 
        });
        }
  
        // useEffect(()=>{
        //   handleSearch()
        // },[])
  return (
    <div>

        <nav className={des.navbar}>
         
           </nav>

            {/* <video className={des.ocean} muted autoPlay loop>
              <source src="jumia.mp4" />

           </video> */}

           {/* Modal Section */}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header ">
              <h5 class="modal-title cyn" id="exampleModalLabel">PRODUCTS</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={des.bud}>
            <div class="modal-body"  >
              <div class="container">
                <div class="row" id="mod">
                 {products
                    .map((item,i)=>{
                      return<Modal item={item} key={i} />
                    })
                 }
                        </div>   
               </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

     
      <nav style={{padding:'0'}} class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#" className={des.sell}>
      <MdStars className={des.Md}/>
    <span>  Online_Sell</span>
    
    
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
          <NavLink className={des.nav}
        to="/"
        end
      >
        <span style={{fontSize:'12px',color:'black',fontWeight:'750',fontFamily:''}}>ONLINE</span>
        <MdStars className={des.md}/>

      </NavLink>
            </a>
        </li>
        <li class="nav-item">
          <a  class="nav-link active" aria-current="page" href="#">
          <NavLink className={des.nav}
        to="/"
        end
      >
        Home
        
      </NavLink>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
                <NavLink className={des.nav}
              to="/About"
              end
            >
              Product
            </NavLink>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
                <NavLink className={des.nav}
              to="/Contact"
              style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
              end
            >
              Contact
            </NavLink>
            </a>
        </li>

      </ul>
      </div>
    </div>
</nav>


      <nav style={{padding:'0px',boxShadow:'2px 2px 2px lightgrey'}} class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container">
    <div className={des.paret}>
      <div>
      <button class="btn btn-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <HiMiniBars3 className={des.Him}/></button> 
      </div>
      <div>
      <a class="navbar-brand ms-5" href="#"><span className={des.ne}>Online_Sell</span> <MdStars className={des.m}/>
</a>
      </div>
    </div>


    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
      <form class="d-flex" >
        <input className={des.inp} id="input" type="search" placeholder="Search products" aria-label="Search"/>
        <button type="button"  className={des.btn} onClick={handleSearch}  data-bs-toggle="modal" data-bs-target="#exampleModal">Search</button>                  
      </form>
      </ul>
      <span class="navbar-text">
        <div className={des.play}>
        <Link to="" className={des.okay}>
        <div className={des.icon}>
          <div className={des.ico}>
            <HiOutlineUser/>
          </div>
          <div>
          <p>Account</p>
          </div>
          <div className={des.arr}>
          <RiArrowDropDownLine/>
          </div>
        </div>
        </Link>
        <Link to="" className={des.okay}>
        <div className={des.icon}>
          <div className={des.ico}>
            <BiHelpCircle/>
          </div>
          <div>
          <p>Help</p>
          </div>
          <div className={des.arr}>
          <RiArrowDropDownLine/>
          </div>
        </div>
        </Link>
        <Link to="" className={des.okay}>
        <div className={des.icon}>
          <div className={des.ico}>
            <HiOutlineShoppingCart /> 
          </div>
          <div className={des.spa}>
          <span>0</span>
          </div>
          <div>
          <p>Cart</p>
          </div>
        </div>
        </Link>
        </div>
     
      </span>
    </div>
  </div>
</nav> 

{/* Offcanvas Section */}

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"  style={{width:'17%',height:'70%',marginLeft:'50px',marginTop:'110px',borderRadius:'10px'}}>
  <div class="offcanvas-header">
    {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
    {/* <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" style={{float:'right'}}></button> */}
  {/* <div class="offcanvas-body"> */}
    <div className={des.li}>
    <li class="nav-item" style={{listStyleType:'none'}}>
          <a class="nav-link active" aria-current="page" href="#">
          <NavLink className={des.nv}
        to="/"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        <div class="d-flex">
        <div>
        {/* <GoHome/> */}
        Home
        </div>
        </div>
     
        
      </NavLink>
            </a>
        </li>
        <li class="nav-item" style={{listStyleType:'none'}}>
          <a class="nav-link" href="#">
                <NavLink className={des.nv}
              to="/About"
              style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
              end
            >
              Product
            </NavLink>
            </a>
        </li>
        <li class="nav-item" style={{listStyleType:'none'}}>
          <a class="nav-link" href="#">
                <NavLink className={des.nv}
              to="/Contact"
              style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
              end
            >
              Contact
            </NavLink>
            </a>
        </li>
    {/* </div> */}
  </div>
  </div>

</div>  
    </div>
   
  );
}

export default Combine;
