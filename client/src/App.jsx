
import './App.css'
import {useFormik} from 'formik'
import { signUpSchema } from './schemas'

const initialValues = {
  name:"",
  email:"",
  password:"",
  confirm_password:""
}

function App() {

 const {values , errors , handleChange , handleBlur ,handleSubmit , touched} =  useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit: (values , action) => {
      console.log(values,"line 17")
      action.resetForm();
    }
  })
console.log(errors)
  return (
    <>
    <div className="container">

    <nav className='navbar'>
        <div className='left'>
            <h4> Form Validation using Formik & Yup</h4>
        </div>

        {/* <div className='right'>
            <button >Create</button>
        </div> */}
       
    </nav>

    <form action="" onSubmit={handleSubmit} className='formstyle'>
     {errors.name && touched.name ? ( <p style={{color:"red"}}>{errors.name}</p> ) : null }
      <input type="text" placeholder='Enter your name' name='name' value={values.name} onChange={handleChange} handleBlur={handleBlur} />

      {errors.email && touched.email ? ( <p style={{color:"red"}}>{errors.email}</p> ) : null }
      <input type="text" placeholder='Enter your Email' name='email' value={values.email} onChange={handleChange} handleBlur={handleBlur} />

      {errors.password && touched.password ? ( <p style={{color:"red"}}>{errors.password}</p> ) : null }
      <input type='password' placeholder='password' name='password' value={values.password} onChange={handleChange} handleBlur={handleBlur} />

     {errors.confirm_password && touched.confirm_password ? ( <p style={{color:"red"}}>{errors.confirm_password}</p> ) : null }
      <input type="password" placeholder='confirm_password' name='confirm_password' value={values.confirm_password} onChange={handleChange} handleBlur={handleBlur}/>
      <button type='submit'>submit</button>
    </form>
    </div>
    </>
  )
}

export default App
