import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './Orderflow-box.css'


function Orderflowbox () {
    return (
    <div className='Flow-box'>
        <div className='flowbox-content'>
            <h2>Order Flow Box</h2>

            <Route>
                <Switch>
                    <Link to='/'>
                        <button className='Order-btn'>Order </button>
                    </Link>
                </Switch>
                </Route> 
        </div>

    </div>
    )
}

export default Orderflowbox