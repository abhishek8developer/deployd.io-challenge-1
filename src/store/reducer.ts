import { cons } from './constants'
import { IAction } from '../utility/types'
import { format } from 'path'

const initState = {
  searchText: '',
  createUpdate: 'Create',
  form: {
    username: '',
    password: ''
  },
  userList: [
    {
      username: 'abc',
      password: 123
    }
  ],
  updatePosition: -1
}

const DR = {
  type: 'default',
  payload: ''
}

export default function reducer(action: IAction = DR, state: any = initState) {
  switch (action.type) {
    case cons.UPDATE_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.payload
      }
    }
    case cons.UPDATE_FORM_FIELDS: {
      const { field, value } = action.payload
      return {
        ...state,
        form: {
          ...state.form,
          [field]: value
        }
      }
    }
    case cons.RESET_FORM_FIELDS: {
      return {
        ...state,
        form: {
          username: '',
          password: ''
        }
      }
    }
    case cons.CREATE_USER: {
      const prevState = JSON.parse(JSON.stringify(state))
      if (prevState.createUpdate === 'Create') {
        prevState.userList.push(state.form)
      } else {
        prevState.userList[prevState.updatePosition] = prevState.form
      }

      return {
        ...prevState,
        form: {
          username: '',
          password: ''
        },
        createUpdate: 'Create'
      }
    }
    case cons.FILL_FOR_EDIT: {
      const pos = state.userList.findIndex(
        (user: any) => user.username == action.payload.username
      )
      return {
        ...state,
        form: action.payload,
        createUpdate: 'Update',
        updatePosition: pos
      }
    }
    default: {
      return state
    }
  }
}
