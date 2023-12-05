import React, { createContext, useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import './animista.css'
import SidebarMob from './components/SideBar_Mobile/SidebarMob'
import Navbar from './components/Navbar/Navbar'
import AllNavigations from './components/AllNavigations'
export const store = createContext()



const App = () => {

  const [isModalOpen, setisModalOpen] = useState(false)
  const [token, setToken] = useState("")
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [category, setCategory] = useState('')
  const [catData, setCatData] = useState({ products: [] })
  const [pageNo, setPageNo] = useState(1)
  const [user, setUser] = useState("")
  const [cartValue, setCartValue] = useState('')
  const [userMail, setUserMail] = useState("")


  const contextValues = {
    isModalOpen, setisModalOpen,
    token, setToken,
    isSideBarOpen, setIsSideBarOpen,
    category, setCategory,
    catData, setCatData,
    pageNo, setPageNo,
    user, setUser,
    cartValue, setCartValue,
    userMail, setUserMail
  }

  return (
    <store.Provider value={contextValues}>
      <div className='relative'>
        <Header />
        <SidebarMob />
        <div className='md:flex hidden'>
          <Navbar />
        </div>
        <AllNavigations />
      </div>
    </store.Provider>
  )
}

export default App;