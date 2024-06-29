import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function EditSales() {

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

    function getData() { }
    function sendData() { }


    return (
        <div>

            <form className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Invoice Number</label>
                    <input
                        type="text"
                        name="invoiceNumber"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Business Id</label>
                    <input
                        type="text"
                        name="businessId"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
                    <input
                        type="text"
                        name="amount"
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

export default EditSales