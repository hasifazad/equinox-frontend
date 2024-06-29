import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UsersAdd() {

    let navigate = useNavigate()

    let [Users, setUsers] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        contactNumber: "",
        role: 1
    })

    let [error, setError] = useState('')

    let getData = (e) => {

        setUsers({
            ...Users,
            [e.target.name]: e.target.value
        })

    }



    let sendData = () => {

        axios.post('http://localhost:3000/users', Users).then((res) => {

            console.log(res);

            navigate('/users')

        }).catch((err) => {

            console.log(err);

            if (err.response.data.status == 400) {
                setError(err.response.data.message)
            }

        })

        console.log(Users);

    }


    return (
        <div>

            <form className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
                <p style={{ color: 'red' }}>{error}</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    {/* <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                    <input
                        type="text"
                        name="gender"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    /> */}
                    <div className="block text-gray-700 text-sm font-bold mb-2">Gender</div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="M"
                                onChange={getData}
                                className="mr-2"
                            />
                            <label htmlFor="gender-male" className="text-gray-700">Male</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="gender-female"
                                name="gender"
                                value="F"
                                onChange={getData}
                                className="mr-2"
                            />
                            <label htmlFor="gender-female" className="text-gray-700">Female</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="gender-other"
                                name="gender"
                                value="O"
                                onChange={getData}
                                className="mr-2"
                            />
                            <label htmlFor="gender-other" className="text-gray-700">Other</label>
                        </div>
                    </div>
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
                    <input
                        type="number"
                        name="contactNumber"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                    <select
                        name="role"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="1">SYSTEM ADMIN</option>
                        <option value="2">ADMIN</option>
                        <option value="3">STAFF</option>
                    </select>
                </div>

                <div className="mb-4">
                    <button
                        type="button"
                        onClick={sendData}
                        className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UsersAdd