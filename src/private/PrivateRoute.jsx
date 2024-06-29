import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { userContext } from '../App'

function PrivateRoute() {


    let { userData } = useContext(userContext)


    return (
        <div>

            {
                userData ? <Outlet /> : <h1>hello</h1>
            }

        </div>
    )
}

export default PrivateRoute