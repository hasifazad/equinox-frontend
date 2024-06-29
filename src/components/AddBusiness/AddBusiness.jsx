import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BusinessAdd() {

    let navigate = useNavigate()

    let [business, setBusiness] = useState({
        name: "",
        email: "",
        contactNumber: "",
        city: "",
        adminUserId: null
    })

    let getData = (e) => {

        setBusiness({
            ...business,
            [e.target.name]: e.target.value
        })

    }



    let sendData = () => {

        axios.post('http://localhost:3000/business', business).then((res) => {

            console.log(res);

            navigate('/')

        }).catch((err) => {

            console.log(err);

        })

        console.log(business);

    }


    return (
        <div>

            <form className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Business Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
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
                    <label className="block text-gray-700 text-sm font-bold mb-2">Contact number</label>
                    <input
                        type="text"
                        name="contactNumber"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                    <input
                        type="text"
                        name="city"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Admin ID</label>
                    <input
                        type="number"
                        name="adminUserId"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
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

export default BusinessAdd