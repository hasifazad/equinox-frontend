import { createContext, useState } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignUp from "./components/Signup/Signup"
import Login from "./components/Login/Login"
import Navbar from "./components/Navbar/Navbar"

import Business from "./components/Business/Business"
import Sales from "./components/Sales/Sales"
import Users from "./components/Users/Users"


import AddBusiness from "./components/AddBusiness/AddBusiness"
import AddUser from "./components/AddUser/AddUser"
import AddSales from "./components/AddSales/AddSales"
import EditSales from "./components/EditSales"
import EditBusiness from "./components/EditBusiness"
import EditUser from "./components/EditUser"
import PrivateRoute from "./private/PrivateRoute"




export let userContext = createContext()

function App() {


  let [userData, setUserData] = useState(null)

  return (
    <>



      <userContext.Provider value={{ userData, setUserData }}>


        <BrowserRouter>

          <Navbar />
          <Routes>

            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />} >
              <Route path="/signup" element={<SignUp />} />

              <Route path="/" element={<Business />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/users" element={<Users />} />


              <Route path="/business/add" element={<AddBusiness />} />
              <Route path="/sales/add" element={<AddSales />} />
              <Route path="/users/add" element={<AddUser />} />

              <Route path="/business/edit/:id" element={<EditBusiness />} />
              <Route path="/sales/edit/:id" element={<EditSales />} />
              <Route path="/user/edit/:id" element={<EditUser />} />


              <Route path="/*" element={<h1>ERROR</h1>} />
            </Route>
          </Routes>

        </BrowserRouter>


      </userContext.Provider>


    </>
  )
}

export default App
