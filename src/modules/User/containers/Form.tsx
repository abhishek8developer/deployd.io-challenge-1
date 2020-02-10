import React from 'react'
import { AppStore, cons } from '../../../store'
import {
  validateEmptyForm,
  validateFormFieldLength
} from '../../../utility/validate'

function Form() {
  const { store, updateStore } = React.useContext(AppStore)
  const { userList, form, createUpdate } = store
  const [status, setStatus] = React.useState({ message: '', error: false })
  function onLogin() {
    if (userList.find((user: any) => user.username === form.username)) {
      updateStatus(false, 'User loggedin.')
      updateStore({
        type: cons.RESET_FORM_FIELDS
      })
    }
  }
  function updateStatus(state: boolean, message: string) {
    setStatus({
      error: state,
      message
    })
    if (!state) {
      setTimeout(() => {
        setStatus({
          error: false,
          message: ''
        })
      }, 1000)
    }
  }
  function onCreateUser() {
    if (validateEmptyForm(form, updateStatus)) {
      if (validateFormFieldLength(form, updateStatus)) {
        if (userList.find((user: any) => user.username === form.username)) {
          updateStatus(true, 'User already exists.')
        } else {
          updateStore({
            type: cons.CREATE_USER
          })
          updateStatus(false, 'User created successfully.')
        }
      }
    }
  }

  return (
    <div className="form">
      <div className="form-container">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={form.username}
            onChange={(e: any) =>
              updateStore({
                type: cons.UPDATE_FORM_FIELDS,
                payload: {
                  field: 'username',
                  value: e.target.value
                }
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={(e: any) =>
              updateStore({
                type: cons.UPDATE_FORM_FIELDS,
                payload: {
                  field: 'password',
                  value: e.target.value
                }
              })
            }
          />
        </div>
        <div className={`status ${status.error ? 'error' : 'success'}`}>
          {status.message}
        </div>
        <div className="action">
          <button onClick={onLogin}>Login</button>
          <button onClick={onCreateUser}>{`${createUpdate} User`}</button>
        </div>
      </div>
    </div>
  )
}

export default Form
