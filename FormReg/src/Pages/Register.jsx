import React from 'react'
import Form from '../Components/Form'
import { motion } from 'framer-motion'

function Register() {
  return (
    <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1, }}
        exit={{ opacity: 1 }}>

      <Form/>
    </motion.div>
  )
}

export default Register
