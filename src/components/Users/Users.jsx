import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getTime from '../../utils/getTime'

function User() {

    let [users, setUsers] = useState(null)

    useEffect(() => {


        axios.get('http://localhost:3000/users').then((res) => {

            console.log(res.data.data);

            setUsers(res.data.data)


        }).catch((err) => {
            console.log(err);
        })

    }, [])





    return (



        <div className='box-container'>

            <div>
                <Link to='/users/add'>
                    <button className='create'>CREATE NEW USERS</button>
                </Link>
            </div>

            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>USER ID</th>
                            <th>NAME</th>
                            <th>GENDER</th>
                            <th>EMAIL</th>
                            <th>CONTACT</th>
                            <th>ROLE</th>
                            <th>ACTIVE</th>
                            <th>CREATED AT</th>
                            <th>LAST MODIFIED AT</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((obj, index) => {

                                return (
                                    <tr>
                                        <td>{obj.userId}</td>
                                        <td>{obj.firstName + ' ' + obj.lastName}</td>
                                        <td>{obj.gender}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.contactNumber}</td>
                                        <td>{obj.role.roleName[0].role_name}</td>
                                        <td>{obj.isActive == 1 ? 'YES' : 'NO'}</td>
                                        <td>{getTime(obj.createdTime)}</td>
                                        <td>{getTime(obj.lastModifiedTime)}</td>
                                        <td>
                                            <Link to={`/user/edit/${obj.userId}`}>
                                                <button className='edit'>EDIT</button>
                                            </Link>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>


        </div>
    )
}

export default User