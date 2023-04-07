import React from 'react';
import './EateriesMainContent.css';
import { Link } from 'react-router-dom';

function EateriesMainContent() {

    // const isLoggedIn = !!localStorage.getItem('token');
    // const username = localStorage.getItem('Name');

    return (
        <main>
            <div className='restaurant-container'>
                <div className='row'>
                    {/* <Link to="/pdchome"> */}
                    <div className='col restaurant-option-1'>
                        <a>
                            <h1 className='content'>PDC</h1>
                        </a>
                    </div>
                    {/* </Link> */}
                    <div className='col restaurant-option-2'>
                        <h1 className='content'>Cupcake Lounge</h1>

                    </div>
                </div>
                <div className='row'>
                    <div className='col restaurant-option-3'>
                        <a>
                            <h1 className='content'>Green Olive</h1>
                        </a>
                    </div>
                    <div className='col restaurant-option-4'>
                        <a>
                            <h1 className='content'>Fusion Cafe</h1>
                        </a>
                    </div>
                </div>
            </div>
        </main >
    );

}

export default EateriesMainContent;