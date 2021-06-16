import React from 'react'
import { Formik } from 'formik'

function CreateUser() {
  return (
    <div className="mainFormDiv">
      <h1 className="step">Step 1</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
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
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="field"
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="field"
            />
            {errors.password && touched.password && errors.password}
            <div className="buttons">
              <button type="submit" disabled={isSubmitting} className="back">
                Back
              </button>
              <button type="submit" disabled={isSubmitting} className="next">
                Next Step
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default CreateUser
