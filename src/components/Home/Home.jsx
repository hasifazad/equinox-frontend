import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {

    let [business, setBusiness] = useState(null)


    useEffect(() => {


        axios.get('http://localhost:3000/business').then((res) => {

            console.log(res.data.data);

            setBusiness(res.data.data)


        }).catch((err) => {
            console.log(err);
        })

    }, [])


    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>sdfds</th>
                        <th>sdfds</th>
                        <th>sdfds</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        business?.map((obj, index) => {

                            return (
                                <tr>
                                    <td>{obj.business_id}</td>
                                    <td>{obj.business_email}</td>
                                    <td>{obj.business_name}</td>
                                    <td>{obj.business_id}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home