import React from 'react'
    import "./Slotlistadd.css"
    import { Grid } from "@mui/material";
    import Pagination from "@mui/material/Pagination";
    import Stack from "@mui/material/Stack";
    import Dashboard from "../../components/header/Dashboard";
    import Footer from "../../components/footer/Footer";
function Slotlistadd() {
  
  
  return (
    <div>
        
      <Dashboard />
      <div>
        <div className="scrims_slot_list_add_header">
          <h1>SCRIMS SLOT LIST</h1>
        </div>
        <div className="uk-margin uk-flex scrims_add_search_bar">
          <h3 className="total_team_scrims_add">Total Teams : 25</h3>
          <input
            className="uk-input search_field_add_scrims"
            type="text"
            placeholder="Enter Team Name"
          />
          <button class="search_btn_add_scrims"> Search</button>
        </div>
        <Grid container>
          <Grid
            Item
            xs={12}
            lg={6}
            sm={12}
            xl={5}
            md={7}
            className="grid_section_slot_list_add_scrims"
          >
            <div id="digital-accordian-main_add_scrims">
              <div id="dig-accordian">
                <a
                  className="uk-accordion-title accordion-list-add-scrims"
                  href="#"
                >
                  <span class="scrims-slot-add-number">SLOT NUMBER</span>
                  <span class="scrims-slot-add-name">TEAM NAME</span>
                </a>
                <hr />
                <ul uk-accordion="collapsible: true">
                  <li class="uk-close">
                    <a
                      className="uk-accordion-title scrims-add-slot-accordion"
                      href="#"
                    >
                      <mark>01</mark>TEAM1
                    </a>
                    <div class="uk-accordion-content">
                      <h6>TEAM TAG</h6>
                      <ul>
                        <li>
                          p1 <span>player name1</span> <span>PID1</span>
                        </li>
                        <li>
                          p2 <span>player name2</span> <span>PID2</span>
                        </li>
                        <li>
                          p3 <span>player name3</span>
                          <span>PID3</span>
                        </li>
                        <li>
                          p4 <span>player name4</span> <span>PID4</span>
                        </li>
                        <li>
                          p5 <span>player name5</span> <span>PID5</span>
                        </li>
                      </ul>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a
                      class="uk-accordion-title scrims-add-slot-accordion"
                      href="#"
                    >
                      <mark>02</mark>TEAM2
                    </a>
                    <div className="uk-accordion-content">
                      <h6>TEAM TAG</h6>
                      <ul>
                        <li>
                          p1 <span>player name1</span> <span>PID1</span>
                        </li>
                        <li>
                          p2 <span>player name2</span> <span>PID2</span>
                        </li>
                        <li>
                          p3 <span>player name3</span>
                          <span>PID3</span>
                        </li>
                        <li>
                          p4 <span>player name4</span> <span>PID4</span>
                        </li>
                        <li>
                          p5 <span>player name5</span> <span>PID5</span>
                        </li>
                      </ul>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a
                      className="uk-accordion-title scrims-add-slot-accordion"
                      href="#"
                    >
                      <mark>03</mark>TEAM3
                    </a>
                    <div class="uk-accordion-content">
                      <h6>TEAM TAG</h6>
                      <ul>
                        <li>
                          p1 <span>player name1</span> <span>PID1</span>
                        </li>
                        <li>
                          p2 <span>player name2</span> <span>PID2</span>
                        </li>
                        <li>
                          p3 <span>player name3</span>
                          <span>PID3</span>
                        </li>
                        <li>
                          p4 <span>player name4</span> <span>PID4</span>
                        </li>
                        <li>
                          p5 <span>player name5</span> <span>PID5</span>
                        </li>
                      </ul>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a
                      className="uk-accordion-title scrims-add-slot-accordion"
                      href="#"
                    >
                      <mark>04</mark>TEAM4
                    </a>
                    <div className="uk-accordion-content">
                      <h6>TEAM TAG</h6>
                      <ul>
                        <li>
                          p1 <span>player name1</span> <span>PID1</span>
                        </li>
                        <li>
                          p2 <span>player name2</span> <span>PID2</span>
                        </li>
                        <li>
                          p3 <span>player name3</span>
                          <span>PID3</span>
                        </li>
                        <li>
                          p4 <span>player name4</span> <span>PID4</span>
                        </li>
                        <li>
                          p5 <span>player name5</span> <span>PID5</span>
                        </li>
                      </ul>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a
                      className="uk-accordion-title scrims-add-slot-accordion"
                      href="#"
                    >
                      <mark>05</mark>TEAM5
                    </a>
                    <div class="uk-accordion-content">
                      <h6>TEAM TAG</h6>
                      <ul>
                        <li>
                          p1 <span>player name1</span> <span>PID1</span>
                        </li>
                        <li>
                          p2 <span>player name2</span> <span>PID2</span>
                        </li>
                        <li>
                          p3 <span>player name3</span>
                          <span>PID3</span>
                        </li>
                        <li>
                          p4 <span>player name4</span> <span>PID4</span>
                        </li>
                        <li>
                          p5 <span>player name5</span> <span>PID5</span>
                        </li>
                      </ul>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a
                      className="uk-accordion-title scrims-add-slot-accordion"
                      href="#"
                    >
                      <mark>06</mark>TEAM6
                    </a>
                    <div class="uk-accordion-content">
                      <h6>TEAM TAG</h6>
                      <ul>
                        <li>
                          p1 <span>player name1</span> <span>PID1</span>
                        </li>
                        <li>
                          p2 <span>player name2</span> <span>PID2</span>
                        </li>
                        <li>
                          p3 <span>player name3</span>
                          <span>PID3</span>
                        </li>
                        <li>
                          p4 <span>player name4</span> <span>PID4</span>
                        </li>
                        <li>
                          p5 <span>player name5</span> <span>PID5</span>
                        </li>
                      </ul>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a
                      className="uk-accordion-title scrims-add-slot-accordion"
                      href="#"
                    >
                      <mark>07</mark>TEAM7
                    </a>
                    <div class="uk-accordion-content">
                      <h6>TEAM TAG</h6>
                      <ul>
                        <li>
                          p1 <span>player name1</span> <span>PID1</span>
                        </li>
                        <li>
                          p2 <span>player name2</span> <span>PID2</span>
                        </li>
                        <li>
                          p3 <span>player name3</span>
                          <span>PID3</span>
                        </li>
                        <li>
                          p4 <span>player name4</span> <span>PID4</span>
                        </li>
                        <li>
                          p5 <span>player name5</span> <span>PID5</span>
                        </li>
                      </ul>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a
                      className="uk-accordion-title scrims-add-slot-accordion"
                      href="#"
                    >
                      <mark>08</mark>TEAM8
                    </a>
                    <div class="uk-accordion-content">
                      <h6>TEAM TAG</h6>
                      <ul>
                        <li>
                          p1 <span>player name1</span> <span>PID1</span>
                        </li>
                        <li>
                          p2 <span>player name2</span> <span>PID2</span>
                        </li>
                        <li>
                          p3 <span>player name3</span>
                          <span>PID3</span>
                        </li>
                        <li>
                          p4 <span>player name4</span> <span>PID4</span>
                        </li>
                        <li>
                          p5 <span>player name5</span> <span>PID5</span>
                        </li>
                      </ul>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a
                      className="uk-accordion-title scrims-add-slot-accordion"
                      href="#"
                    >
                      <mark>09</mark>TEAM9
                    </a>
                    <div class="uk-accordion-content">
                      <h6>TEAM TAG</h6>
                      <ul>
                        <li>
                          p1 <span>player name1</span> <span>PID1</span>
                        </li>
                        <li>
                          p2 <span>player name2</span> <span>PID2</span>
                        </li>
                        <li>
                          p3 <span>player name3</span>
                          <span>PID3</span>
                        </li>
                        <li>
                          p4 <span>player name4</span> <span>PID4</span>
                        </li>
                        <li>
                          p5 <span>player name5</span> <span>PID5</span>
                        </li>
                      </ul>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a
                      className="uk-accordion-title scrims-add-slot-accordion"
                      href="#"
                    >
                      <mark>10</mark>TEAM10
                    </a>
                    <div class="uk-accordion-content">
                      <h6>TEAM TAG</h6>
                      <ul>
                        <li>
                          p1 <span>player name1</span> <span>PID1</span>
                        </li>
                        <li>
                          p2 <span>player name2</span> <span>PID2</span>
                        </li>
                        <li>
                          p3 <span>player name3</span>
                          <span>PID3</span>
                        </li>
                        <li>
                          p4 <span>player name4</span> <span>PID4</span>
                        </li>
                        <li>
                          p5 <span>player name5</span> <span>PID5</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <Stack spacing={2} className="slot_add_paginatn">
              <Pagination count={3} color="primary" />
            </Stack>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  )
  }

export default Slotlistadd