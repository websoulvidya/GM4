import React from 'react';
import './Sidenav.css';

import { Link } from 'react-router-dom';

function sidenav() {
    return (
        <div>
            <div className='sidenav'>
                <div className='button_nav'>
                    {/* <a class="uk-button uk-button-default" id="buttons_nav" href="/orghome"><h4 className='navhead'>DashBoard</h4></a><br /> */}
                    <Link class="uk-button uk-button-default" id="buttons_nav" to='/orghome'>
                        <h4 className='navhead'>DashBoard</h4>
                    </Link><br />
                </div>
                <div className='button_nav'>
                    {/* <a class="uk-button uk-button-default" id="buttons_nav" href="/sendidp"><h4 className='navhead'>Send Idp</h4></a><br /> */}
                    <Link class="uk-button uk-button-default" id="buttons_nav" to='/sendidp'>
                        <h4 className='navhead'>Send Idp</h4>
                    </Link><br />
                </div>
                <div className='button_nav'>
                    {/* <a class="uk-button uk-button-default" id="buttons_nav" href="/slotlist"><h4 className='navhead'>Slot List</h4></a><br /> */}
                    <Link class="uk-button uk-button-default" id="buttons_nav" to='/slotlist'>
                        <h4 className='navhead'>Slot List</h4>
                    </Link><br />
                </div>
                <div className='button_nav'>
                    {/* <a class="uk-button uk-button-default" id="buttons_nav" href="/mymatches"><h4 className='navhead'>My matches</h4></a><br /> */}
                    <Link class="uk-button uk-button-default" id="buttons_nav" to='/mymatches'>
                        <h4 className='navhead'>My matches</h4>
                    </Link><br />
                </div>
                <div className='button_nav'>
                    {/* <a class="uk-button uk-button-default" id="buttons_nav" href="/"><h4 className='navhead'></h4></a><br /> */}
                    <Link class="uk-button uk-button-default" id="buttons_nav" to='/cancellation'>
                        <h4 className='navhead'>Cancellation</h4>
                    </Link><br />
                </div>
                <div className='button_nav'>
                    {/* <a class="uk-button uk-button-default" id="buttons_nav" href="/Org_advertisement"><h4 className='navhead'>Advertisement</h4></a><br /> */}
                    <Link class="uk-button uk-button-default" id="buttons_nav" to='/Org_advertisement'>
                        <h4 className='navhead'>Advertisement</h4>
                    </Link><br />
                </div>

                <div className='button_nav'>
                    <a class="uk-button uk-button-default" id="buttons_nav" href="/Logout">
                        <h4 className='navhead'>Logout</h4>
                    </a><br />
                </div>

            </div>


            {/**card portion */}



        </div>



    );

}
export default sidenav;
