import * as React from 'react';

import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import './Business.css'
import getTime from '../../utils/getTime';


function Business() {

    let [business, setBusiness] = React.useState(null)

    React.useEffect(() => {
        axios.get('http://localhost:3000/business/').then((res) => {

            console.log(res);

            setBusiness(res.data.data)


        }).catch((err) => {
            console.log(err);
        })
    }, [])


    return (

        <div className='box-container'>

            <div>
                <Link to='/business/add'>
                    <button className='create'>CREATE NEW</button>
                </Link>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>BUSINESS ID</th>
                            <th>BUSINESS NAME</th>
                            <th>EMAIL</th>
                            <th>CITY</th>
                            <th>CONTACT NO</th>
                            <th>CREATED AT</th>
                            <th>MODIFIED AT</th>
                            <th></th>
                        </tr>
                    </thead>
                    <thead>
                        {
                            business?.map((obj, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{obj.business_id}</td>
                                        <td>{obj.business_name}</td>
                                        <td>{obj.business_email}</td>
                                        <td>{obj.city}</td>
                                        <td>{obj.contact_number}</td>
                                        <td>{getTime(obj.created_time)}</td>
                                        <td>{getTime(obj.last_modified_time)}</td>
                                        <td>
                                            <Link to={`/business/edit/${obj.business_id}`}>
                                                <button className='edit'>EDIT</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </thead>
                </table>
            </div>
        </div>

    );
}

export default Business
