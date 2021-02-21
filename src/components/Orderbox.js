import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { getOrder } from '../ext-links'


function Findorder() {

    const history= useHistory(); 
    
    const [Email, setEmail] = useState('usertest@user.com' ); 
    const [notfound, setNotfound] = useState('')

    const Findyourorder =  async () => {
        const meals_link = await getOrder(Email)
        if (meals_link[0]) {
            localStorage.setItem('getOrder', JSON.stringify(meals_link[0]))
            history.push ({pathname: 'Select-dish'})
        } else {
            setNotfound('Order Not Found')
        }
    
    
        
    }
 

    return (
        <>
        <div className='Order-finder'>
            <h2>Find Your Order Here</h2>

            <div className='email-finder'>
            <label  htmlFor="search-email">Enter Email {notfound}</label>
			 <input type="email" name="search-email" value={Email} onChange={e => setEmail(e.target.value)} />
             <button className='findorder-btn'  onClick={Findyourorder}>Find</button>
            </div>
        </div>

        </>
        
        )

    };

export default Findorder