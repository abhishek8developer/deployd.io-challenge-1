import React from 'react'
import './App.css'
import Header from './components/header'
import { User } from './modules'
import { AppStore, reducer } from './store'

const App = () => {
  const [store, setStore] = React.useState<any>(() => reducer())
  return (
    <AppStore.Provider
      value={{
        store,
        updateStore: (action: any) => setStore(reducer(action, store))
      }}
    >
      <div className="app">
        <Header />
        <div className="content-body">
          <User />
        </div>
      </div>
    </AppStore.Provider>
  )
}

export default App
