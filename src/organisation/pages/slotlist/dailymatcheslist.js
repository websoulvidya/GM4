import React from "react";
import "./daily-matches.css";
import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Dashboard from "../../components/header/Dashboard";
import Footer from "../../components/footer/Footer";
function Dailymatcheslist() {
  return (
    <div>
      {" "}
      <Dashboard />
      <div>
        <div className="daily_matches_slot_list_header">
          <h1>DAILY MATCHES SLOT LIST</h1>
        </div>
        <div className="uk-margin uk-flex daily_match_search_bar">
          <h3 className="total_team_daily_matches">Total Teams : 25</h3>
          <input
            className="uk-input search_field_daily_match"
            type="text"
            placeholder="Enter Team Name"
          />
          <button class="search_btn_daily_match"> Search</button>
        </div>
        <Grid container>
          <Grid
            Item
            xs={12}
            lg={6}
            sm={12}
            xl={5}
            md={7}
            className="grid_section_slot_list_daily_match"
          >
            <div id="digital-accordian-main_daily_match">
              <div id="dig-accordian">
                <a
                  className="uk-accordion-title accordion-list-daily-match"
                  href="#"
                >
                  <span class="daily-match-slot-number">SLOT NUMBER</span>
                  <span class="daily-match-slot-name">TEAM NAME</span>
                </a>
                <hr />
                <ul uk-accordion="collapsible: true">
                  <li class="uk-close">
                    <a
                      className="uk-accordion-title daily-match-slot-accordion"
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
                      class="uk-accordion-title daily-match-slot-accordion"
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
                      className="uk-accordion-title daily-match-slot-accordion"
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
                      className="uk-accordion-title daily-match-slot-accordion"
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
                      className="uk-accordion-title daily-match-slot-accordion"
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
                      className="uk-accordion-title daily-match-slot-accordion"
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
                      className="uk-accordion-title daily-match-slot-accordion"
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
                      className="uk-accordion-title daily-match-slot-accordion"
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
                      className="uk-accordion-title daily-match-slot-accordion"
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
                      className="uk-accordion-title daily-match-slot-accordion"
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
            <Stack spacing={2} className="pagination-daily-match">
              <Pagination count={3} color="primary" />
            </Stack>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default Dailymatcheslist;
