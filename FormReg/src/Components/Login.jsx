import React, { useState } from 'react'
import des from './styles.module.css'
// import { useNavigate } from 'react-router-dom';
function Login() {
//   const navigate=useNavigate();
  const[user,setUser]=useState({
            Name:'',
            Email:'',
            Password:'',
            RepeatPassword:''
  })  
       const[errors,setErrors]=useState({});
       const submitData =(e)=>{
        e.preventDefault();

        const newErrors={};
        if(user.Email.trim()===''){
            newErrors.EmailErr='Your Email Is Required'
        }
        if(user.Password.trim()===''){
            newErrors.PasswordErr='Your Password Is Required'
        }
       
        // console.log(user)
        setErrors(newErrors)
        if(Object.keys(newErrors).length===0){
            const users=JSON.parse(localStorage.getItem('users'))||[]
            users.push(user)
            localStorage.setItem('users',JSON.stringify(users))
            // navigate('/login')
        }
       }

  return (
    <div>
      <section>
    <form action="" className={des.fl} onSubmit={submitData}>
      
        <div className={des.cyn} style={{maxWidth:'300px',margin:'auto'}}>
        <div className='mb-3'>
            <h1 style={{color:'white', textAlign:'center',fontSize:'25px',color:'grey',fontWeight:'800'}}>LOGIN</h1>
        </div>
  
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
  onChange={(e)=>{
    setUser({...user,Email:e.target.value})
  }}
  />
  <label className={des.la} for="floatingInput">Email</label>
  {errors.EmailErr && <span style={{color:'red'}}>{errors.EmailErr} </span>}

</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
    onChange={(e)=>{
        setUser({...user,Password:e.target.value})
      }}
  />
  <label className={des.la} for="floatingPassword">Password</label>
  {errors.PasswordErr && <span style={{color:'red'}}>{errors.PasswordErr} </span>}
</div>

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
