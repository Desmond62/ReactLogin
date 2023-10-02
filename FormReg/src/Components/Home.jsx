
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
import Display from "./Display";
import {LiaFacebookF} from "react-icons/lia";
import {BsYoutube} from "react-icons/bs";
import {FiInstagram} from "react-icons/fi";
import {BsTwitter} from "react-icons/bs";

function Home() {
       
    
    const[products,setProducts] = useState([]);
      const result = document.getElementById("input")
     
        const handleSearch =(e) =>{
            e.preventDefault();
            if(result.value === "" || result.value === null){
             
              setProducts("")
            }else{
              axios.get(`https://dummyjson.com/products/search?q=${result.value}`)
    .then(res =>{

      setProducts(res.data.products)
   
        });
            }


        }
  
        // useEffect(()=>{
        //   handleSearch()
        // },[])
        const [Features,setFeatures]=useState([]);
        function handleRequest(){
          axios.get('https://dummyjson.com/products')
          .then(res=>{
            localStorage.setItem("products", JSON.stringify(res.data.products))
            setFeatures(res.data.products)
            setFeatures(() => res.data.products.slice(0,12));
      
            console.log(res.data.products)
          })
        }
      
        useEffect(()=>{
          handleRequest();
        },[])
  return (
    <div>


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
                 {products?
                    products
                    .map((item,i)=>{
                      return<Modal item={item} key={i} />
                    }):
                    ""
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

          {/* Fade Carousel Section */}

   
         <section className={des.caro} style={{marginTop:"5px"}}>
         <div class="container pt-0 mb-4">
            <div class="row g-3">

            <div class="col-md-2 g-3">
                <div>
                  <img  className={des.anima} width={'175px'} height={"350px"} style={{borderRadius:'5px'}} alt="" />
                </div>
                     
                </div>
                
              <div class="col-md-8">
                               
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner" style={{borderRadius:'5px'}}>
    <div class="carousel-item active">
      <img src="caro.jpg" class="d-block w-100" height={"350px"} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="caro2.jpg" class="d-block w-100" height={"350px"}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="caro3.jpg" class="d-block w-100" height={"350px"}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="caro4.png" class="d-block w-100" height={"350px"}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="caro5.png" class="d-block w-100" height={"350px"}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="caro6.jpg" class="d-block w-100" height={"350px"}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="caro7.jpg" class="d-block w-100" height={"350px"}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="caro8.jpg" class="d-block w-100" height={"350px"}  alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

              </div>
              <div class="col-md-2">
                
              <div >
                  <img  width={'180px'}height={"165px"} className={des.ani} style={{borderRadius:'5px'}} alt="" />
                </div> 
                <div style={{marginTop:'20px'}}>
                  <img  width={'180px'} height={"165px"} className={des.anis} style={{borderRadius:'5px'}} alt="" />
                </div>
               </div>
            </div>
          </div>
       
          </section>

          
          {/* Feature Product */}

          <p>
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h1 className={des.phone}>Top Smartphones Product</h1>
                </div>
              </div>
            </div>
        {Features.length== 0 ? (
          <p>loading....</p>
        ): (
          <div className='container'>
           <div className='row'> 
            
            {Features
            .filter((item) => item.category == "smartphones")
            .map((item, i) => {
              return <Display item={item} key={i} />
            })}
          </div>
          </div>
         
        )
        }

        
      </p>    

        
      <p>
            <div class="container">
              <div class="row" >
                <div class="col-12">
                  <h1 className={des.phone}> Top Laptops Product</h1>
                </div>
              </div>
            </div>
        {Features.length== 0 ? (
          <p>loading....</p>
        ): (
          <div className='container'>
           <div className='row'> 
            
            {Features
            .filter((item) => item.category == "laptops")
            .map((item, i) => {
              return <Display item={item} key={i} />
            })}
          </div>
          </div>
         
        )
        }

        
      </p>   
        
      <div class="container">
              <div class="row">
                <div class="col-12" >
                <h1 className={des.phone}> Top Snicker Deals</h1>
                </div>
              </div>
            </div>
            <div class="container ">
              <div class="row">

                <div class="col-md-2">
                  <div className={des.img}>
                  <img src="shoe3.jpg" width={"100%"} alt="" />
                    <div className={des.display}>
                    <h1>SNICKERS</h1>
                      <p>$180</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" >
                  <div className={des.img}>
                  <img src="shoe.jpg" width={"100%"} alt="" />
                    <div className={des.display}>
                    <h1>SNICKERS</h1>
                      <p>$180</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" >
                  <div className={des.img}>
                  <img src="shoe2.jpg" width={"100%"} alt="" />
                    <div className={des.display}>
                    <h1>SNICKERS</h1>
                      <p>$180</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" >
                  <div className={des.img}>
                  <img src="shoe4.webp" width={"100%"} alt="" />
                    <div className={des.display}>
                    <h1>SNICKERS</h1>
                      <p>$180</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" >
                  <div className={des.img}>
                  <img src="shoe5.webp" width={"100%"} alt="" />
                    <div className={des.display}>
                    <h1>SNICKERS</h1>
                      <p>$180</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" >
                  <div className={des.img}>
                  <img src="shoe6.webp" width={"100%"} alt="" />
                    <div className={des.display}>
                    <h1>SNICKERS</h1>
                      <p>$180</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Beauty Section */}

            <div class="container pb-5 mt-4">
              <div class='row g-0' style={{backgroundColor:'grey',padding:'0px 0px 10px 5px',borderRadius:'10px'}}>
              <div className={des.health}>
              <h1>Health & Beauty</h1>
              </div>
                <div class="col-md-2">
                <div className={des.img1}>
                     <img src="skin.png" width={""} alt="" />
                    {/* <div className={des.display1}>
                    <h1>SNICKERS</h1>
                    </div> */}
                  </div>
                </div>
                <div class="col-md-2">
                <div className={des.img1}>
                     <img src="skin1.png" width={"100%"} alt="" />
                    {/* <div className={des.display1}>
                    <h1>SNICKERS</h1>
                    </div> */}
                  </div>
                </div>
                <div class="col-md-2">
                <div className={des.img1}>
                     <img src="skin2.png" width={"100%"} alt="" />
                    {/* <div className={des.display1}>
                    <h1>SNICKERS</h1>
                    </div> */}
                  </div>
                </div>
                <div class="col-md-2">
                <div className={des.img1}>
                     <img src="skin3.png" width={"100%"} alt="" />
                    {/* <div className={des.display1}>
                    <h1>SNICKERS</h1>
                    </div> */}
                  </div>
                </div>
                <div class="col-md-2">
                <div className={des.img1}>
                     <img src="skin4.png" width={"100%"} alt="" />
                    {/* <div className={des.display1}>
                    <h1>SNICKERS</h1>
                    </div> */}
                  </div>
                </div>
                <div class="col-md-2">
                <div className={des.img1}>
                     <img src="skin5.png" width={"100%"} alt="" />
                    {/* <div className={des.display1}>
                    <h1>SNICKERS</h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>



                    {/* Footer Section */}
            <footer class="">
                    <section class="pt-4 pb-4" style={{backgroundColor:"rgb(0, 0, 0, 0.8)"}}>
                      <div class='container'>
                        <div class="row">
                          <div class="col-md-3">
                            <div className={des.splay}>
                              <div>
                              <h1>  Online_Sell</h1>
                              </div>
                              <div>
                              <MdStars className={des.Mes}/>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div className={des.line}>
                            <h4>NEW TO ONLINE_LINE?</h4>
                            <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                            <form action="" className={des.input}>
                              <input type="text" name="" id="" placeholder="  ✉️  Enter E-mail Address"/>
                              <button type="submit">MALE</button>
                              <button type="submit">FEMALE</button>
                            </form>
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div className={des.access}>
                              <div>
                              <MdStars className={des.Mess}/>
                              </div>
                              <div>
                                <h4>DOWNLOAD JUMIA FREE APP</h4>
                                <p>Get access to exclusive offers!</p>
                              </div>
                            </div>
                            <button className={des.apps}>
                              <div className={des.app}>
                              <div>
                                  <img src="apple.png" alt="" />
                                </div>
                                <div>
                                  <p>Download on the</p>
                                  <h5>App Store</h5>
                                </div>
                              </div>
                              
                            </button>
                            <button className={des.apps}>
                              <div className={des.app}>
                              <div>
                                  <img src="logo2.png" alt="" />
                                </div>
                                <div>
                                  <p>Get it on</p>
                                  <h5>Google Play</h5>
                                </div>
                              </div>
                              
                            </button>                         
                             </div>
                        </div>
                      </div>
                    </section>

                    <section  class="pt-4 pb-4" style={{backgroundColor:"rgb(0, 0, 0, 0.7)"}}>
                      <div class="container">
                        <div class="row">
                          <div class="col-md-3">
                              <div className={des.link}>
                                <h4>NEED HELP?</h4>
                                  <Link className={des.lin}><p>Chat with us</p></Link>
                                  <Link className={des.lin}><p>Help Center</p>  </Link>
                                  <Link className={des.lin}><p>Contact Us</p> </Link>
                              </div>
                              <div className={des.link}>
                                <h4>USEFUL LINKS</h4>
                                  <Link className={des.lin}><p>How to shop on Online_Sell</p></Link>
                                  <Link className={des.lin}><p>Delivery options and timelines</p>  </Link>
                                  <Link className={des.lin}><p>How to return a product on Online_Sell?</p> </Link>
                                  <Link className={des.lin}><p>Corporate and bulk purchases</p> </Link>
                                  <Link className={des.lin}><p>Report a Product</p> </Link>
                                  <Link className={des.lin}><p>Ship your package anywhere in Nigeria</p> </Link>
                                  <Link className={des.lin}><p>Dispute Resolution Policy</p> </Link>
                                  <Link className={des.lin}><p>Return Policy</p> </Link>

                              </div>

                              <div className={des.social}>
                                <h4>JOIN US ON</h4>
                                  <Link className={des.soc}><LiaFacebookF/>  </Link>
                                  <Link className={des.soc}> <BsYoutube/>   </Link>
                                  <Link className={des.soc}><FiInstagram/> </Link>
                                  <Link className={des.soc}><BsTwitter/> </Link>
                              </div>
                          </div>
                          <div class="col-md-3">
                              <div className={des.link}>
                                <h4>ABOUT ONLINE_SELL</h4>
                                  <Link className={des.lin}><p>About us</p></Link>
                                  <Link className={des.lin}><p>Online_sell  careers</p>  </Link>
                                  <Link className={des.lin}><p>Online_sell Express</p> </Link>
                                  <Link className={des.lin}><p>Terms and Conditions</p> </Link>
                                  <Link className={des.lin}><p>Privacy Notice</p> </Link>
                                  <Link className={des.lin}><p>Online_Sell Store Credit Terms & Conditions</p> </Link>
                                  <Link className={des.lin}><p>Online_Sell Payment Information Guidelines</p> </Link>
                                  <Link className={des.lin}><p>Cookie Notice</p> </Link>
                                  <Link className={des.lin}><p>Online_Sell Global</p> </Link>
                                  <Link className={des.lin}><p>Official Stores</p> </Link>
                                  <Link className={des.lin}><p>Flash Sales</p> </Link>
                                  <Link className={des.lin}><p>Black Friday</p> </Link>
                              </div>
                          </div>
                          <div class="col-md-3">
                              <div className={des.link}>
                                <h4>MAKE MONEY WITH ONLINE_SELL</h4>
                                  <Link className={des.lin}><p>Sell on Online_Sell</p></Link>
                                  <Link className={des.lin}><p>Vendor hub</p>  </Link>
                                  <Link className={des.lin}><p>Become a Sales Consultant</p> </Link>
                                  <Link className={des.lin}><p>Become a Logistics Service Partner</p> </Link>
                                  <Link className={des.lin}><p>Join the Online_Sell DA Academy</p> </Link>
                                  <Link className={des.lin}><p>Join the Online_Sell KOL Program</p> </Link>

                              </div>
                          </div>
                          <div class="col-md-3">
                              <div className={des.link}>
                                <h4>ONLINE_SELL INTERNATIONAL</h4>
                                <div className={des.inter}> 
                                    <div>
                                    <Link className={des.lin}><p>About us</p></Link>
                                  <Link className={des.lin}><p>Algeria</p>  </Link>
                                  <Link className={des.lin}><p>Egypt</p> </Link>
                                  <Link className={des.lin}><p>Ghana</p> </Link>
                                  <Link className={des.lin}><p>Ivory Coast</p> </Link>
                                  <Link className={des.lin}><p>Kenya</p> </Link>
                                    </div>
                                    <div>     
                                  <Link className={des.lin}><p>Morocco</p> </Link>
                                  <Link className={des.lin}><p>Senegal</p> </Link>
                                  <Link className={des.lin}><p>Tunisia</p> </Link>
                                  <Link className={des.lin}><p>Uganda</p> </Link>
                                  <Link className={des.lin}><p>Zando</p> </Link>
                                    </div>
                                </div>
                              </div>
                          </div>
                          <hr style={{color:'white', marginTop: 30}} />
                        </div>
                      </div>
                      
                    <div className={des.footer}>
                    <div>
                       <NavLink className={des.nav}
                            to="/"
                            end
                      >
                        <span className={des.famy}>ONLINE</span>
                        <MdStars className={des.md}/>

                      </NavLink>
                    </div>

                    <div>
                    <NavLink className={des.navv}
                        to="/"
                        end
                      >
                        Home
                        
                      </NavLink>
                    </div>

                    <div>
                    <NavLink className={des.navv}
                              to="/About"
                              end
                            >
                              Product
                            </NavLink>
                    </div>
                    </div>
                    </section>


                    

            </footer>
    </div>
   
  );
}

export default Home;























// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import des from './styles.module.css';
// import Homes from '../Pages/Homes';
// import Combine from './Combine';
// function Home() {

  

  
//   return (
//     <div>
// <Combine/>
// <img src="sky.jpg" width='100%' height='500px' alt="" />
 
//       <div class="container">
//         <div class="row"> 
//           <div class="col-md-4">

//           </div>
//         </div>
//       </div>

// <footer>
//   <h1>This Is React Javascript</h1>
// </footer>
//     </div>
//   )
// }

// export default Home
