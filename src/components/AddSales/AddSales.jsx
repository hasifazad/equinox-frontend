import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SalesAdd() {

    let navigate = useNavigate()

    let [sales, setSales] = useState({
        invoiceNumber: "",
        businessId: null,
        amount: null
    })

    console.log(sales);

    let getData = (e) => {

        setSales({
            ...sales,
            [e.target.name]: e.target.value
        })

    }

    let [business, setBusiness] = useState(null)
    React.useEffect(() => {
        axios.get('http://localhost:3000/business/').then((res) => {

            console.log(res);

            setBusiness(res.data.data)


        }).catch((err) => {
            console.log(err);
        })
    }, [])


    let sendData = () => {

        axios.post('http://localhost:3000/sales', sales).then((res) => {

            console.log(res);

            navigate('/sales')

        }).catch((err) => {

            console.log(err);

        })

        console.log(sales);

    }


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
                    <label className="block text-gray-700 text-sm font-bold mb-2">Business Name</label>
                    {/* <input
                        type="text"
                        name="businessId"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    /> */}
                    <select
                        name="role"
                        onChange={getData}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option>SELECT BUSINESS</option>

                        {
                            business?.map((obj, i) => {
                                return (
                                    <option key={i} value={obj.business_id}>{obj.business_name}</option>
                                )
                            })
                        }
                    </select>
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

export default SalesAdd