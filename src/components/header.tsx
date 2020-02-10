import React from 'react'
import '../style/_header.scss'
import AppStore from '../store/store'
import { FaSearch } from 'react-icons/fa'
import { cons } from '../store/constants'

function Header() {
  const { store, updateStore } = React.useContext(AppStore)
  return (
    <div className="header">
      <div className="brand">
        <label>deployd</label>
        <span>.io</span>
      </div>
      <div className="search">
        <FaSearch size={12} />
        <input
          type="text"
          placeholder="Search user"
          value={store.searchText}
          onChange={(e: any) =>
            updateStore({
              type: cons.UPDATE_SEARCH_TEXT,
              payload: e.target.value
            })
          }
        />
      </div>
    </div>
  )
}

export default Header
