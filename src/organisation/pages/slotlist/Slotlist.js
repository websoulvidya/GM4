import React from "react";
import Dashboard from "../../components/header/Dashboard";
import Footer from "../../components/footer/Footer";
import img1 from "../../assets/262886-pubg-game-wallpaper.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Slotlist.css";
import { Link } from "react-router-dom";
import { Hidden } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid ",
  boxShadow: 24,
  p: 4,
};
function Slotlist() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{overflowX:'hidden'}}>
      <Dashboard />
      <div>
        <div className="slot_header">
          <h1>SLOT LIST</h1>
        </div>
        {/* tournament section */}
        <div className="sub_slot_header">
          <h1>TOURNAMENTS </h1>
        </div>
        <div className="soltlist-main-wrapper">
          <div className="slotlist-card-list">
            <div
              class="uk-width-1-1 uk-grid uk-text-center slot-main-card"
              uk-grid
            >
              <div className="slot-list-carditems">
                <div class="slot-list-card">
                  <div className="slotlist-main-titile">
                    <h3>Tournament name</h3>
                  </div>
                  <div className="slotlist-team-img">
                    <img src={img1} />
                  </div>
                  <div className="slotlist-rule">
                    <i
                      class="fa fa-gavel slot-rule-icon"
                      onClick={handleOpen}
                      aria-hidden="true"
                    ></i>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style} className="slot-list-modal_box-all">
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Rules
                        </Typography>
                        <Typography
                          id="modal-modal-description-all"
                          className="slot-list-rules_modal"
                          sx={{ mt: 2 }}
                          style={{ height: "25rem", overflow: "scroll" }}
                        >
                          <ul>
                            <li>
                              The room ID and password for the game will be
                              provided 15 mins before the start time of the
                              contest
                            </li>
                            <li>
                              If you are unable to join the custom tournament
                              created on the Call of Duty platform by the start
                              time, the joining fee will not be refunded
                            </li>
                            <li>
                              If you join the tournament on the Call of Duty
                              platform without joining the contest on Gamerji,
                              you will be kicked out of the tournament by our
                              moderator and your account will be banned from
                              Gamerji
                            </li>
                            <li>
                              
                              Make sure not to share the room ID and password
                              with anyone who has not joined the contest on
                              Gamerji. This will result in your account being
                              banned and your winnings being frozen
                            </li>
                            <li>
                              After completion of COD match Screenshot of your
                              rank is compulsory.
                            </li>
                            <li>
                              Upload your Rank screenshot in the GamerJi App
                              within 30 mins after completion of the game to get
                              winnings.
                            </li>
                            <li>
                              Once you join the custom room on the Call of Duty
                              platform, position your player in the column given
                              to you. If you are found in any other column, you
                              might get kicked out
                            </li>
                            <li>
                              Teaming and/or griefing can get you kicked out of
                              the tournament. Admin's decision will be final in
                              such cases and no refunds will be given
                            </li>
                          </ul>
                          <br />
                        </Typography>
                        <button
                          onClick={handleClose}
                          className="slotlist_modal_close"
                        >
                          ok
                        </button>
                      </Box>
                    </Modal>
                  </div>
                  <div className="slot-list-pay-section">
                    <h6>Prize Pool</h6>
                    <p className="slot-list-prize-pool">300</p>
                    <span>Entry Fee</span>
                    <p className="slot-list-entry-fee">100</p>
                  </div>
                  <div className="slot-list-progress-bar">
                    <progress value="3333" max="10000"></progress>

                    <p className="slot-progressbar-left-text">100 Joined</p>
                    <p className="slot-progressbar-right-text">400 Spot left</p>
                  </div>
                  <div className="slot-list-reg-section">
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    <Link to={"/tournamentslotlist"}>slot list</Link>
                  </div>
                </div>
              </div>
              <div className="slot-list-carditems">
                <div class="slot-list-card">
                  <div className="slotlist-main-titile">
                    <h3>Tournament name</h3>
                  </div>
                  <div className="slotlist-team-img">
                    <img src={img1} />
                  </div>
                  <div className="slotlist-rule">
                    <i
                      class="fa fa-gavel slot-rule-icon"
                      onClick={handleOpen}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="slot-list-pay-section">
                    <h6>Prize Pool</h6>
                    <p className="slot-list-prize-pool">300</p>
                    <span>Entry Fee</span>
                    <p className="slot-list-entry-fee">100</p>
                  </div>
                  <div className="slot-list-progress-bar">
                    <progress value="3333" max="10000"></progress>

                    <p className="slot-progressbar-left-text">100 Joined</p>
                    <p className="slot-progressbar-right-text">400 Spot left</p>
                  </div>
                  <div className="slot-list-reg-section">
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    <Link to={"/tournamentslotlist"}>slot list</Link>
                  </div>
                </div>
              </div>
              <div className="slot-list-carditems">
                <div class="slot-list-card">
                  <div className="slotlist-main-titile">
                    <h3>Tournament name</h3>
                  </div>
                  <div className="slotlist-team-img">
                    <img src={img1} />
                  </div>
                  <div className="slotlist-rule">
                    <i
                      class="fa fa-gavel slot-rule-icon"
                      onClick={handleOpen}
                      aria-hidden="true"
                    ></i>
                   
                  </div>
                  <div className="slot-list-pay-section">
                    <h6>Prize Pool</h6>
                    <p className="slot-list-prize-pool">300</p>
                    <span>Entry Fee</span>
                    <p className="slot-list-entry-fee">100</p>
                  </div>
                  <div className="slot-list-progress-bar">
                    <progress value="3333" max="10000"></progress>

                    <p className="slot-progressbar-left-text">100 Joined</p>
                    <p className="slot-progressbar-right-text">400 Spot left</p>
                  </div>
                  <div className="slot-list-reg-section">
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    <Link to={"/tournamentslotlist"}>slot list</Link>
                  </div>
                </div>
              </div>
              <div className="slot-list-carditems">
                <div class="slot-list-card">
                  <div className="slotlist-main-titile">
                    <h3>Tournament name</h3>
                  </div>
                  <div className="slotlist-team-img">
                    <img src={img1} />
                  </div>
                  <div className="slotlist-rule">
                    <i
                      class="fa fa-gavel slot-rule-icon"
                      onClick={handleOpen}
                      aria-hidden="true"
                    ></i>
                   
                  </div>
                  <div className="slot-list-pay-section">
                    <h6>Prize Pool</h6>
                    <p className="slot-list-prize-pool">300</p>
                    <span>Entry Fee</span>
                    <p className="slot-list-entry-fee">100</p>
                  </div>
                  <div className="slot-list-progress-bar">
                    <progress value="3333" max="10000"></progress>

                    <p className="slot-progressbar-left-text">100 Joined</p>
                    <p className="slot-progressbar-right-text">400 Spot left</p>
                  </div>
                  <div className="slot-list-reg-section">
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    <Link to={"/tournamentslotlist"}>slot list</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* scrims section */}
        <div className="sub_slot_header">
          <h1>SCRIMS </h1>
        </div>
        <div className="soltlist-main-wrapper">
          <div className="slotlist-card-list">
            <div
              class="uk-child-width-1-2  uk-grid uk-text-center slot-main-card"
              uk-grid
            >
              <div className="slot-list-carditems-sd">
                <div class="slot-list-card">
                  <div className="slotlist-main-titile">
                    <h3>Tournament name</h3>
                  </div>
                  <div className="slotlist-team-img">
                    <img src={img1} />
                  </div>
                  <div className="slotlist-rule">
                    <i
                      class="fa fa-gavel slot-rule-icon"
                      onClick={handleOpen}
                      aria-hidden="true"
                    ></i>
                   
                  </div>
                  <div className="slot-list-pay-section-sd">
                    <h6>match time</h6>
                    <p className="slot-list-prize-pool-sd">12:01</p>
                    <span>idp time</span>
                    <p className="slot-list-entry-fee-sd">3:45</p>
                  </div>
                  <h6 className="slot_match_date">MATCH DATE : 05-02-2022</h6>
                  <div className="slot-list-progress-bar-sd">
                    <progress value="3333" max="10000"></progress>

                    <p className="slot-progressbar-left-text">100 Joined</p>
                    <p className="slot-progressbar-right-text">400 Spot left</p>
                  </div>
                  <div className="slot-list-reg-section">
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    <Link to={"/scrimslist"}>slot list</Link>
                  </div>
                </div>
              </div>
              <div className="slot-list-carditems-sd">
                <div class="slot-list-card">
                  <div className="slotlist-main-titile">
                    <h3>Tournament name</h3>
                  </div>
                  <div className="slotlist-team-img">
                    <img src={img1} />
                  </div>
                  <div className="slotlist-rule">
                    <i
                      class="fa fa-gavel slot-rule-icon"
                      onClick={handleOpen}
                      aria-hidden="true"
                    ></i>
                   
                  </div>
                  <div className="slot-list-pay-section-sd">
                    <h6>match time</h6>
                    <p className="slot-list-prize-pool-sd">12:01</p>
                    <span>idp time</span>
                    <p className="slot-list-entry-fee-sd">3:45</p>
                  </div>
                  <h6 className="slot_match_date">MATCH DATE : 05-02-2022</h6>
                  <div className="slot-list-progress-bar-sd">
                    <progress value="3333" max="10000"></progress>

                    <p className="slot-progressbar-left-text">100 Joined</p>
                    <p className="slot-progressbar-right-text">400 Spot left</p>
                  </div>
                  <div className="slot-list-reg-section">
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    <Link to={"/scrimslist"}>slot list</Link>
                  </div>
                </div>
              </div>
              <div className="slot-list-carditems-sd">
                <div class="slot-list-card">
                  <div className="slotlist-main-titile">
                    <h3>Tournament name</h3>
                  </div>
                  <div className="slotlist-team-img">
                    <img src={img1} />
                  </div>
                  <div className="slotlist-rule">
                    <i
                      class="fa fa-gavel slot-rule-icon"
                      onClick={handleOpen}
                      aria-hidden="true"
                    ></i>
                    
                  </div>
                  <div className="slot-list-pay-section-sd">
                    <h6>match time</h6>
                    <p className="slot-list-prize-pool-sd">12:01</p>
                    <span>idp time</span>
                    <p className="slot-list-entry-fee-sd">3:45</p>
                  </div>
                  <h6 className="slot_match_date">MATCH DATE : 05-01-2022</h6>
                  <div className="slot-list-progress-bar-sd">
                    <progress value="3333" max="10000"></progress>

                    <p className="slot-progressbar-left-text">100 Joined</p>
                    <p className="slot-progressbar-right-text">400 Spot left</p>
                  </div>
                  <div className="slot-list-reg-section">
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    <Link to={"/scrimslist"}>slot list</Link>
                  </div>
                </div>
              </div>
              <div className="slot-list-carditems-sd">
                <div class="slot-list-card">
                  <div className="slotlist-main-titile">
                    <h3>Tournament name</h3>
                  </div>
                  <div className="slotlist-team-img">
                    <img src={img1} />
                  </div>
                  <div className="slotlist-rule">
                    <i
                      class="fa fa-gavel slot-rule-icon"
                      onClick={handleOpen}
                      aria-hidden="true"
                    ></i>
                   
                  </div>
                  <div className="slot-list-pay-section-sd">
                    <h6>match time</h6>
                    <p className="slot-list-prize-pool-sd">12:01</p>
                    <span>idp time</span>
                    <p className="slot-list-entry-fee-sd">3:45</p>
                  </div>
                  <h6 className="slot_match_date">MATCH DATE : 05-01-2022</h6>
                  <div className="slot-list-progress-bar-sd">
                    <progress value="3333" max="10000"></progress>

                    <p className="slot-progressbar-left-text">100 Joined</p>
                    <p className="slot-progressbar-right-text">400 Spot left</p>
                  </div>
                  <div className="slot-list-reg-section">
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    <Link to={"/scrimslist"}>slot list</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DAILY MATCHES SECTION */}
          <div className="sub_slot_header">
            <h1>DAILY MATCHES </h1>
          </div>
          <div className="soltlist-main-wrapper">
            <div className="slotlist-card-list">
              <div
                class="uk-child-width-1-2 uk-grid uk-text-center slot-main-card"
                uk-grid
              >
                <div className="slot-list-carditems-sd">
                  <div class="slot-list-card">
                    <div className="slotlist-main-titile">
                      <h3>Tournament name</h3>
                    </div>
                    <div className="slotlist-team-img">
                      <img src={img1} />
                    </div>
                    <div className="slotlist-rule">
                      <i
                        class="fa fa-gavel slot-rule-icon"
                        onClick={handleOpen}
                        aria-hidden="true"
                      ></i>
                     
                    </div>
                    <div className="slot-list-pay-section-sd">
                      <h6>match time</h6>
                      <p className="slot-list-prize-pool-sd">12:01</p>
                      <span>idp time</span>
                      <p className="slot-list-entry-fee-sd">3:45</p>
                    </div>
                    <h6 className="slot_match_date">MATCH DATE : 05-02-2022</h6>
                    <div className="slot-list-progress-bar-sd">
                      <progress value="3333" max="10000"></progress>

                      <p className="slot-progressbar-left-text">100 Joined</p>
                      <p className="slot-progressbar-right-text">
                        400 Spot left
                      </p>
                    </div>
                    <div className="slot-list-reg-section">
                      <h6>Hosted By</h6>
                      <p>E-Sports Team</p>

                      <Link to={"/dailymatcheslist"}>slot list</Link>
                    </div>
                  </div>
                </div>
                <div className="slot-list-carditems-sd">
                  <div class="slot-list-card">
                    <div className="slotlist-main-titile">
                      <h3>Tournament name</h3>
                    </div>
                    <div className="slotlist-team-img">
                      <img src={img1} />
                    </div>
                    <div className="slotlist-rule">
                      <i
                        class="fa fa-gavel slot-rule-icon"
                        onClick={handleOpen}
                        aria-hidden="true"
                      ></i>
                      
                    </div>
                    <div className="slot-list-pay-section-sd">
                      <h6>match time</h6>
                      <p className="slot-list-prize-pool-sd">12:01</p>
                      <span>idp time</span>
                      <p className="slot-list-entry-fee-sd">3:45</p>
                    </div>
                    <h6 className="slot_match_date">MATCH DATE : 05-01-2022</h6>
                    <div className="slot-list-progress-bar-sd">
                      <progress value="3333" max="10000"></progress>

                      <p className="slot-progressbar-left-text">100 Joined</p>
                      <p className="slot-progressbar-right-text">
                        400 Spot left
                      </p>
                    </div>
                    <div className="slot-list-reg-section">
                      <h6>Hosted By</h6>
                      <p>E-Sports Team</p>

                      <Link to={"/dailymatcheslist"}>slot list</Link>
                    </div>
                  </div>
                </div>
                <div className="slot-list-carditems-sd">
                  <div class="slot-list-card">
                    <div className="slotlist-main-titile">
                      <h3>Tournament name</h3>
                    </div>
                    <div className="slotlist-team-img">
                      <img src={img1} />
                    </div>
                    <div className="slotlist-rule">
                      <i
                        class="fa fa-gavel slot-rule-icon"
                        onClick={handleOpen}
                        aria-hidden="true"
                      ></i>
                     
                    </div>
                    <div className="slot-list-pay-section-sd">
                      <h6>match time</h6>
                      <p className="slot-list-prize-pool-sd">12:01</p>
                      <span>idp time</span>
                      <p className="slot-list-entry-fee-sd">3:45</p>
                    </div>
                    <h6 className="slot_match_date">MATCH DATE : 05-02-2022</h6>
                    <div className="slot-list-progress-bar-sd">
                      <progress value="3333" max="10000"></progress>

                      <p className="slot-progressbar-left-text">100 Joined</p>
                      <p className="slot-progressbar-right-text">
                        400 Spot left
                      </p>
                    </div>
                    <div className="slot-list-reg-section">
                      <h6>Hosted By</h6>
                      <p>E-Sports Team</p>

                      <Link to={"/dailymatcheslist"}>slot list</Link>
                    </div>
                  </div>
                </div>
                <div className="slot-list-carditems-sd">
                  <div class="slot-list-card">
                    <div className="slotlist-main-titile">
                      <h3>Tournament name</h3>
                    </div>
                    <div className="slotlist-team-img">
                      <img src={img1} />
                    </div>
                    <div className="slotlist-rule">
                      <i
                        class="fa fa-gavel slot-rule-icon"
                        onClick={handleOpen}
                        aria-hidden="true"
                      ></i>
                     
                    </div>
                    <div className="slot-list-pay-section-sd">
                      <h6>match time</h6>
                      <p className="slot-list-prize-pool-sd">12:01</p>
                      <span>idp time</span>
                      <p className="slot-list-entry-fee-sd">3:45</p>
                    </div>
                    <h6 className="slot_match_date">MATCH DATE : 05-02-2022</h6>
                    <div className="slot-list-progress-bar-sd">
                      <progress value="3333" max="10000"></progress>

                      <p className="slot-progressbar-left-text">100 Joined</p>
                      <p className="slot-progressbar-right-text">
                        400 Spot left
                      </p>
                    </div>
                    <div className="slot-list-reg-section">
                      <h6>Hosted By</h6>
                      <p>E-Sports Team</p>
                      <Link to={"/dailymatcheslist"}>slot list</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Slotlist;
