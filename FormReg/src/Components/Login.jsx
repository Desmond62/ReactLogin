import React, { useState } from 'react'
import des from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Login() {
  const navigate=useNavigate();
const[user,setUser]=useState({
  email:'',
  password:''
})
const[error,setErrors]=useState('');

const handleChange=(e)=>{
const {name,value}=e.target;
setUser((prevUser)=>(
  {
    ...prevUser,
    [name]:value
  }
))

};


const handleSubmit =(e)=>{
      e.preventDefault();
      if(localStorage.getItem('users')){
        const users =JSON.parse(localStorage.getItem('users'))
        const matchedUser=users.find(
          (u)=> u.Email === user.email && u.Password === user.password
        );
        if(matchedUser){
          // Successful login
        
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'You have successfully loggin',
            showConfirmButton: false,
            timer: 2500
          })
          navigate('/',{replace:true})
        }
        else{
          // Invalid login details
          setErrors("Invalid Login Details")
        }
      }
      else{
        // No register users
        setErrors("You Have Not Registered Please Do First")
      }
};
  return (
    <div>
      <section>
    <form action="" className={des.fl} onSubmit={handleSubmit}>
      
        <div className={des.cyn} style={{maxWidth:'300px',margin:'auto'}}>
        <div className='mb-3'>
            <h1 style={{color:'white', textAlign:'center',fontSize:'25px',color:'grey',fontWeight:'800'}}>LOGIN</h1>
        </div>
  
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" name='email' value={user.email} placeholder="name@example.com" onChange={handleChange}/>
  <label className={des.la} for="floatingInput">Email</label>
</div>

<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" name='password' value={user.password} placeholder="Password" onChange={handleChange}/>
  <label className={des.la} for="floatingPassword">Password</label>
</div>
{error &&  <div className='alert alert-danger'>{error}</div>}
<div className={des.bu}>
    <button type='submit'>Login</button>
    </div>
        </div>
    </form>
      </section>
    </div>
  )
}

export default Login
