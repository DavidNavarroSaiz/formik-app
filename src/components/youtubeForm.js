import React from 'react'
import { Formik,Form,Field , ErrorMessage } from 'formik'
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

const validationSchema = Yup.object({
  name:Yup.string().required("Required"),
  email:Yup.string().email("Invalid email format").required("Required"),
  channel:Yup.string().required("Required")
})

  

  // console.log('form values',formik.values)
  return (
    <Formik initialValues = {initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}>
      
      <Form>
        <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <Field type='text' id='name' name='name' ></Field>
        <ErrorMessage name = 'name' />
        </div>
        <div className='form-control'>
        <label htmlFor='name'>Email</label>
        <Field type='text' id='email' name='email'></Field>
        <ErrorMessage name = 'email' />
        </div>
        <div className='form-control'>
        <label htmlFor='name'>Channel</label>
        <Field type='text' id='channel' name='channel'></Field>
        <ErrorMessage name = 'channel' />
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm
