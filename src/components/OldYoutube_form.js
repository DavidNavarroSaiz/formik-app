import React from 'react'
import { useFormik  } from 'formik'
import * as Yup from 'yup'

function YoutubeForm() {
const initialValues = {
  name: '',
  email: '',
  channel: ''
}
const onSubmit = values => {
  console.log(values)
}
const validate =values =>{
  let errors = {}
  if (!values.name){
    errors.name = 'Required'
  }
  if (!values.email){
    errors.email = 'Required'
  }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Invalid email format';
  }
  if (!values.channel){
    errors.channel = 'Required'
  }
  return errors
}

const validationSchema = Yup.object({
  name:Yup.string().required("Required"),
  email:Yup.string().email("Invalid email format").required("Required"),
  channel:Yup.string().required("Required")
})

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  // console.log('form values',formik.values)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
        {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>
        <div className='form-control'>
        <label htmlFor='name'>Email</label>
        <input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
        </div>
        <div className='form-control'>
        <label htmlFor='name'>Channel</label>
        <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}></input>
        {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
