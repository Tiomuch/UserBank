import React, { useState } from 'react'
import { Formik } from 'formik'

function CreateUser() {
  const [passType, setPassType] = useState('password')
  const [repPassType, setRepPassType] = useState('password')
  const [passStyle, setPassStyle] = useState('white')
  const [repPassStyle, setRepPassStyle] = useState('white')

  const showPass = (e) => {
    if (e.target.name === 'pass') {
      if (passType === 'password') {
        setPassType('text')
        setPassStyle('black')
      } else {
        setPassType('password')
        setPassStyle('white')
      }
    } else if (e.target.name === 'repPass') {
      if (repPassType === 'password') {
        setRepPassType('text')
        setRepPassStyle('black')
      } else {
        setRepPassType('password')
        setRepPassStyle('white')
      }
    }
  }

  return (
    <div className="mainFormDiv">
      <h1 className="step">Step 1</h1>
      <Formik
        initialValues={{ userName: '', password: '', avatar: '', repPass: '' }}
        validate={values => {
          const errors = {}
          if (!values.userName) {
            errors.userName = 'Required'
          } else if (!values.password) {
            errors.password = 'Required'
          } else if (!values.repPass) {
            errors.repPass = 'Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
          <form onSubmit={handleSubmit} className="form">
            <input
              type="avatar"
              name="avatar"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.avatar}
              className="field"
            />
            {errors.avatar && touched.avatar && errors.avatar}
            <input
              type="userName"
              name="userName"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
              className="field"
            />
            {errors.userName && touched.userName && errors.userName}
            <div>
              <input
                type={passType}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                className="field"
              />
              <button type="button" className="eye" name="pass" style={{backgroundColor: passStyle}} onClick={showPass}/>
              {errors.password && touched.password && errors.password}
            </div>
            <div>
              <input
                type={repPassType}
                name="repPass"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repPass}
                placeholder="Repeat Password"
                className="field"
              />
              <button type="button" className="eye" name="repPass" style={{backgroundColor: repPassStyle}} onClick={showPass}/>
              {errors.repPass && touched.repPass && errors.repPass}
            </div>
            <button type="submit" disabled={isSubmitting} className="firstSubmit">
              Next Step
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default CreateUser
