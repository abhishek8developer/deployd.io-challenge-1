import React from 'react'
import { AppStore, cons } from '../../../store'
import { FaPen } from 'react-icons/fa'

function List() {
  const { store, updateStore } = React.useContext(AppStore)
  const { userList, searchText } = store
  let filteredList = JSON.parse(JSON.stringify(userList))
  if (searchText.length) {
    filteredList = filteredList.filter((user: any) =>
      user.username.toLowerCase().includes(searchText.toLowerCase())
    )
  }
  function onEdit(field: any) {
    updateStore({
      type: cons.FILL_FOR_EDIT,
      payload: field
    })
  }
  return (
    <div className="list">
      <div className="users">
        <h5>Users List</h5>
        {filteredList.map((user: any, i: number) => {
          return (
            <div key={`user-${i}`} className="user-name">
              <span>
                {i + 1}. {user.username}
              </span>
              <FaPen onClick={() => onEdit(user)} />
            </div>
          )
        })}
        {!filteredList.length && (
          <>
            <div className="no-user">No User Found.</div>
            <div className="no-user">Create one.</div>
          </>
        )}
      </div>
    </div>
  )
}

export default List
