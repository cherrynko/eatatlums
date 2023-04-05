import React from 'react';
import './EateriesMainContent.css';
// import PDCimg from './gettyimages-1295387240-612x612.jpg'
// import CCLimg from './download.jpeg'
// import FCimg from './photo-1600891964599-f61ba0e24092.jpeg';
// import GOimg from './photo-1600891964599-f61ba0e24092.jpeg';
// import { Link } from 'react-router-dom';

function EateriesMainContent() {

    // const isLoggedIn = !!localStorage.getItem('token');
    // const username = localStorage.getItem('Name');

    return (
        <main>
            <div className='restaurant-container'>
                <div className='row'>
                    <div className='col restaurant-option-1'>
                        <a>
                            <h1 className='content'>PDC</h1>
                        </a>
                    </div>
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