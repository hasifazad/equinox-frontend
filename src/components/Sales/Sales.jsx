import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './Sales.css'
import { Link } from 'react-router-dom'
import getTime from '../../utils/getTime'

function Sales() {

    let [sales, setSales] = useState(null)

    useEffect(() => {


        axios.get('http://localhost:3000/sales/').then((res) => {

            console.log(res.data.data);

            setSales(res.data.data)


        }).catch((err) => {
            console.log(err);
        })

    }, [])





    return (

        <div className='box-container'>
            <div>
                <Link to='/sales/add'>
                    <button className='create'>CREATE NEW SALES</button>
                </Link>
            </div>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>SALES ID</th>
                            <th>INVOICE NO</th>
                            <th>BUSINESS NAME</th>
                            <th>CITY</th>
                            <th>AMOUNT</th>
                            <th>CREATED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sales?.map((obj, index) => {

                                return (
                                    <tr>
                                        <td>{obj.sales_id}</td>
                                        <td>{obj.invoice_number}</td>
                                        <td>{obj.business_name}</td>
                                        <td>{obj.city}</td>
                                        <td>{obj.amount}</td>
                                        <td>{getTime(obj.created_time)}</td>

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

export default Sales