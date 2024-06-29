import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {


    let [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        contactNumber: '',
        role: ''

    })

    let { id } = useParams()
    useEffect(() => {

        (async () => {

            try {
                let response = await axios.get(`http://localhost:3000/user/${id}`)
                console.log(response);
                setUserData(response.data.data)
            } catch (error) {
                console.log(error);
            }

        })();

    }, [])



    function getData(e) {

        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })

    }


    let navigate = useNavigate()
    function sendData() {

        (async () => {

            try {
                let response = await axios.put(`http://localhost:3000/user/${id}`, userData)
                console.log(response);

                navigate('/users')

            } catch (error) {
                console.log(error);
            }

        })();

    }

    return (
        <div>

            <form className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={getData}
                        value={userData?.firstName}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={getData}
                        value={userData?.lastName}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    {/* <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                    <input
                        type="text"
                        name="gender"
                        onChange={getData}
                        value={userData?.gender}
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
                                defaultChecked={userData?.gender == 'M' ? true : false}
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
                                defaultChecked={userData?.gender == 'F' ? true : false}
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
                                defaultChecked={userData?.gender == 'O' ? true : false}
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
                        value={userData?.email}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
                    <input
                        type="number"
                        name="contactNumber"
                        onChange={getData}
                        value={userData?.contactNumber}
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

export default EditUser