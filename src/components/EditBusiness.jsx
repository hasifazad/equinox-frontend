import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditBusiness() {


    let [businessData, setBusinessData] = useState({
        businessName: '',
        email: '',
        city: '',
        contactNumber: '',
        adminUserId: ''

    })

    let { id } = useParams()
    useEffect(() => {

        (async () => {

            try {
                let response = await axios.get(`http://localhost:3000/business/${id}`)
                console.log(response);
                setBusinessData(response.data.data)
            } catch (error) {
                console.log(error);
            }

        })();

    }, [])



    function getData(e) {

        setBusinessData({
            ...businessData,
            [e.target.name]: e.target.value
        })

    }

    let navigate = useNavigate()
    function sendData() {

        (async () => {

            try {
                let response = await axios.put(`http://localhost:3000/business/${id}`, businessData)
                console.log(response);

                navigate('/')

            } catch (error) {
                console.log(error);
            }

        })();

    }
    return (
        <div>

            <form className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        name="businessName"
                        onChange={getData}
                        value={businessData?.businessName}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={getData}
                        value={businessData?.email}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Contact number</label>
                    <input
                        type="text"
                        name="contactNumber"
                        onChange={getData}
                        value={businessData?.contactNumber}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                    <input
                        type="text"
                        name="city"
                        onChange={getData}
                        value={businessData?.city}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Admin ID</label>
                    <input
                        type="number"
                        name="adminUserId"
                        onChange={getData}
                        value={businessData?.adminUserId}
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

export default EditBusiness