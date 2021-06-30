import React from 'react'
import { Formik } from 'formik'

function CreateUser() {
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
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password"
              className="field"
            />
            {errors.password && touched.password && errors.password}
            <input
              type="repPass"
              name="repPass"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.repPass}
              placeholder="Repeat Password"
              className="field"
            />
            {errors.repPass && touched.repPass && errors.repPass}
            {/*<div className="buttons">*/}
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
