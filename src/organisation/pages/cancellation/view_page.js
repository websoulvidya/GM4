import React from "react";

import Dashboard from "../../components/header/Dashboard";
import Footer from "../../components/footer/Footer";

import "./Cancellation.css";
import { useLayoutEffect, useEffect, useState } from "react";
import img1 from "../../assets/myMatches/img3.jpeg";
import i1 from "../../assets/myMatches/i4.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function View_page() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const [Cancellation, setcancellation] = useState([]);

  const token = localStorage.getItem("token");

  const getCancelMatch = async () => {
    let url = `https://gm4-server.herokuapp.com/api/organiser/cancellation/request/listall/${localStorage.getItem("id")}`;
    const options = {
      method: "GET",
      url: url,
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    try {
      const response = await axios(options);
      console.log(response);
      setcancellation(response.data)
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  useEffect(() => {
    getCancelMatch();
  }, []);

  return (
    <div>
      <div>
        <Dashboard />
        {/* start header */}
        <div className="cancel_headerclip">
          <h1>CANCEL REQUEST</h1>
        </div>
        {/*end header */}
      </div>
      <div className="view_page">
        <div class="table-users">
          {/* start cancelled users  table */}
          <table cellspacing="0" className="canclled_users">
            <tr>
              <th>username</th>
              <th>team Details</th>
              <th>status</th>
            </tr>
            {Cancellation.map((val) => {
        return(
            <tr>
              <td>{val.userId.firstName} {" "}{val.userId.lastName}</td>
              <td>
                {val.teamName} <br /> {val.slotNumber} <br />{val.reason}
              </td>
              {/* start action link */}
              <td>
                <div className="view_page_icons">
                  <Link to={""}>
                    <span class="orange material-icons">pending_actions</span>
                  </Link>

                  <Link to={""}>
                    <span class="green material-icons">task_alt</span>
                  </Link>

                  <Link to={""}>
                    <span class="red material-icons">cancel</span>
                  </Link>
                </div>
              </td>
              {/* end action link */}
            </tr>
            )})}
          </table>
          {/* end cancelled users  table */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default View_page;
