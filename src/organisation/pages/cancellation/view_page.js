import React from 'react';

import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';

import './Cancellation.css'

import img1 from "../../assets/myMatches/img3.jpeg"
import i1 from '../../assets/myMatches/i4.jpg'
import { Link } from 'react-router-dom';



function view_page() {
    return (
        <div >
            <div>
                <Dashboard />
                {/* start header */}
                <div className='cancel_headerclip'>
                    <h1>CANCEL REQUEST</h1>
                </div>
                {/*end header */}
            </div>
            <div className='view_page'>

                <div class="table-users">
                    {/* start cancelled users  table */}
                    <table cellspacing="0" className='canclled_users'>
                        <tr>
                            <th>Username</th>
                            <th>team Details</th>
                            <th>status</th>
                        </tr>
                        <tr>

                            <td>John Doe</td>
                            <td>TEAM NAME <br /> 16 <br /> reason for cancelling the match</td>
                            {/* start action link */}
                            <td><div className='view_page_icons'>
                                <Link to={""}>
                                    <span class="orange material-icons">
                                        pending_actions
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="green material-icons">
                                        task_alt
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="red material-icons">
                                        cancel
                                    </span>
                                </Link>


                            </div></td>
                            {/* end action link */}
                        </tr>
                        <tr>

                            <td>John Doe</td>
                            <td>TEAM NAME <br /> 16 <br /> reason for cancelling the match</td>
                            {/* start action link */}
                            <td><div className='view_page_icons'>
                                <Link to={""}>
                                    <span class="orange material-icons">
                                        pending_actions
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="green material-icons">
                                        task_alt
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="red material-icons">
                                        cancel
                                    </span>
                                </Link>


                            </div></td>
                            {/* end action link */}
                        </tr>
                        <tr>

                            <td>John Doe</td>
                            <td>TEAM NAME <br /> 16 <br /> reason for cancelling the match</td>
                            {/* start action link */}
                            <td><div className='view_page_icons'>
                                <Link to={""}>
                                    <span class="orange material-icons">
                                        pending_actions
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="green material-icons">
                                        task_alt
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="red material-icons">
                                        cancel
                                    </span>
                                </Link>


                            </div></td>
                            {/* end action link */}
                        </tr>
                        <tr>

                            <td>John Doe</td>
                            <td>TEAM NAME <br /> 16 <br /> reason for cancelling the match</td>
                            {/* start action link */}
                            <td><div className='view_page_icons'>
                                <Link to={""}>
                                    <span class="orange material-icons">
                                        pending_actions
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="green material-icons">
                                        task_alt
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="red material-icons">
                                        cancel
                                    </span>
                                </Link>


                            </div></td>
                            {/* end action link */}
                        </tr>
                        <tr>

                            <td>John Doe</td>
                            <td>TEAM NAME <br /> 16 <br /> reason for cancelling the match</td>
                            {/* start action link */}
                            <td><div className='view_page_icons'>
                                <Link to={""}>
                                    <span class="orange material-icons">
                                        pending_actions
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="green material-icons">
                                        task_alt
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="red material-icons">
                                        cancel
                                    </span>
                                </Link>


                            </div></td>
                            {/* end action link */}
                        </tr>
                        <tr>

                            <td>John Doe</td>
                            <td>TEAM NAME <br /> 16 <br /> reason for cancelling the match</td>
                            {/* start action link */}
                            <td><div className='view_page_icons'>
                                <Link to={""}>
                                    <span class="orange material-icons">
                                        pending_actions
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="green material-icons">
                                        task_alt
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="red material-icons">
                                        cancel
                                    </span>
                                </Link>


                            </div></td>
                            {/* end action link */}
                        </tr>
                        <tr>

                            <td>John Doe</td>
                            <td>TEAM NAME <br /> 16 <br /> reason for cancelling the match</td>
                            {/* start action link */}
                            <td><div className='view_page_icons'>
                                <Link to={""}>
                                    <span class="orange material-icons">
                                        pending_actions
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="green material-icons">
                                        task_alt
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="red material-icons">
                                        cancel
                                    </span>
                                </Link>


                            </div></td>
                            {/* end action link */}
                        </tr>
                        <tr>

                            <td>John Doe</td>
                            <td>TEAM NAME <br /> 16 <br /> reason for cancelling the match</td>
                            {/* start action link */}
                            <td><div className='view_page_icons'>
                                <Link to={""}>
                                    <span class="orange material-icons">
                                        pending_actions
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="green material-icons">
                                        task_alt
                                    </span>
                                </Link>

                                <Link to={''}>
                                    <span class="red material-icons">
                                        cancel
                                    </span>
                                </Link>


                            </div></td>
                            {/* end action link */}
                        </tr>



                    </table>
                    {/* end cancelled users  table */}
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default view_page;
