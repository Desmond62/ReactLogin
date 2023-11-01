import React, { useState } from 'react'
import des from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Form() {
  const navigate=useNavigate();
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

        if(user.Name.trim()===''){
            newErrors.NameErr='Your Name Is Required'
        }
        if(user.Email.trim()=== ''){
            newErrors.EmailErr='Your Email Is Required'
        }
        if(user.Password.trim()  === ''){
            newErrors.PasswordErr='Your Password Is Required'
        }
        if(user.Password.trim().length < 8){
          newErrors.PasswordErr='Your Password shouldnt be less than 8 characters'
      }
        if(user.RepeatPassword.trim()===''){
            newErrors.RepeatPasswordErr='Your Password Is Required'
        }
        else if(user.RepeatPassword.trim()!==user.Password.trim()){
            newErrors.RepeatPasswordErr ='Your Passwords Do Not Match'
        }
        // console.log(user)
        setErrors(newErrors)
        if(Object.keys(newErrors).length===0){
            const users=JSON.parse(localStorage.getItem('users'))||[]
            users.push(user)
            localStorage.setItem('users',JSON.stringify(users))
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'You have successfully Registered',
              showConfirmButton: false,
              timer: 2500
            })
            navigate('/login')
        }
       }

  return (
    <div>
      <section>
    <form action="" className={des.fle} onSubmit={submitData}>
      
        <div className={des.dis} style={{maxWidth:'300px',margin:'auto'}}>
        <div className='mb-3'>
            <h1 style={{color:'white', textAlign:'center',fontSize:'25px'}}>REGISTER</h1>
        </div>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
  onChange={(e)=>{
    setUser({...user, Name:e.target.value})
  }}
  />
  <label for="floatingInput">Name</label>
  {errors.NameErr && <span style={{color:'red'}}>{errors.NameErr} </span>}
</div>
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
  onChange={(e)=>{
    setUser({...user,Email:e.target.value})
  }}
  />
  <label for="floatingInput">Email</label>
  {errors.EmailErr && <span style={{color:'red'}}>{errors.EmailErr} </span>}

</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
    onChange={(e)=>{
        setUser({...user,Password:e.target.value})
      }}
  />
  <label for="floatingPassword">Password</label>
  {errors.PasswordErr && <span style={{color:'red'}}>{errors.PasswordErr} </span>}
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
    onChange={(e)=>{
        setUser({...user,RepeatPassword:e.target.value})
      }}
  />
  <label for="floatingPassword">RepeatPassword</label>
  {errors.RepeatPasswordErr && <span style={{color:'red'}}>{errors.RepeatPasswordErr} </span>}

</div>

<div className={des.but}>
    <button type='submit'>Register</button>
    </div>
        </div>
    </form>
      </section>
    </div>
  )
}

export default Form
