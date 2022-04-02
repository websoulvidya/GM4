import React from "react";
import Dashboard from "../../components/header/Dashboard";
import Footer from "../../components/footer/Footer";
import "./Addscrims.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import expire from "../../assets/scrims/expired.png";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'
import {useLayoutEffect} from "react";
// modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


function Adddscrims() {
  // for validation
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm();
  // const submitData = (data) => {
  //   console.log(data);
  //   reset();
  // };
  const { register, watch, handleSubmit, formState: { errors }, reset,trigger} = useForm()
  const submitData = (data) =>{
    reset();
    };
// const [orgName, setorgName] = useState("");
// const handleKeyDown = (e) => {
//   if (e.key === " " && orgName.length===0) {
//     e.preventDefault();
//   }
// };



  // match date and time  section
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState(null);

 

  //  navigation section in modal
  let navigate = useNavigate();

 

  //  modal section
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


// dropdown section 
  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        backgroundColor: isFocused ? "#6BDCFC" : null,
        color: isFocused ? "white" : null
      };
    }
  };

  const options = [
    { value: 'Tournament', label: 'Tournament' },
    { value: 'Scrims', label: 'Scrims' },
    { value: 'Daily Match', label: 'Daily Match' },
    { value: 'Open Rooms', label: 'Open Rooms' }
  ]
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
}, []);

  return (
    <div>
      <div>
        <Dashboard />
      </div>
      <div class="addscrims_main">
        <div className="addscrims_header">
          <h1>Registration</h1>
        </div>
        <div>
          <form class="addscrims_regform" onSubmit={handleSubmit(submitData)}>
            <fieldset class="uk-fieldset">
              <h2 class="reg_join_head">Join Now</h2>
              <hr />
              <div class="uk-margin">
                <input
                  class="uk-input"
                  type="text"
                  placeholder="Organization Name"
                  id="scrimname"
                  {...register("scrimname", {
                    required: "**organization Name is Required", 
                    pattern:{value:/^[^@\s#$!][a-zA-Z0-9_.-\s]*$/,message:"**Only Alphabets and numbers allowed and no first space"}})}
                  autoComplete="off"
                  onKeyUp={()=>{trigger("scrimname")}}
                  maxLength={30}
                // onChange= {(e)=>setorgName(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,"") )}
                // value={orgName}
                // onKeyDown={handleKeyDown}
                
                />
                {errors.scrimname && (
                  <span className="errormsg">{errors.scrimname.message}</span>
                )}
              </div>
              <div div class="uk-margin">
              <div class="uk-input">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  id="addscrims_dat"
                  placeholderText="Match Date"
                  autoComplete="off"
                  minDate={new Date()}
      showDisabledMonthNavigation
      onChangeRaw={(e) => e.preventDefault()}
    
      isClearable={true}
                />
                

               
              </div>
              </div>
              <div class="uk-margin">
                <div class="uk-input">
                  <DatePicker
                    selected={selectedTime}
                    onChange={(date) => setSelectedTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    id="addscrims_dat"
                    placeholderText="Match Time"
                    autoComplete="off"
                    onChangeRaw={(e) => e.preventDefault()}
                  />
                </div>
              </div>
              <div class="uk-margin">
                <div class="uk-input">
                  <DatePicker
                    selected={selectedTimes}
                    onChange={(date) => setSelectedTimes(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    id="addscrims_dat"
                    placeholderText="IDP Time"
                    autoComplete="off"
                    onChangeRaw={(e) => e.preventDefault()}
                  />
                </div>
              </div>
              <div class="uk-margin">
              <Select  maxLength={20} options={options} placeholder={'Match Type'} styles={colourStyles}theme={(theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#6BDCFC',
      
      },
    })}  />
              </div>

              
              <div>
              <br />
                <button class="addscrims_open_btn" onClick={handleOpen}>
                  Open
                </button>
                <Link to="/Slotlistadd">
                  
                  <button class="addscrims_slotlist_btn">Slotlist</button>
                </Link>

                <Link to="/orghome"><button class="addscrims_close_btn">Close</button></Link>
              </div>
             
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="modal_box_org">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  ></Typography>
                  <Typography
                    id="modal-modal-description"
                    className="rules_modal"
                    sx={{ mt: 2 }}
                    style={{ height: "auto", overflow: "scroll" }}
                  >
                    <h3>oh no! Unfortunately your Free Trail has expired</h3>
                    <img src={expire} alt='expiry'/>
                    <span>
                      If you want to continue , you need to take a Membership
                    </span>
                    <br />
                  </Typography>
                  <div className="button_area-s">
                  <button onClick={handleClose} className="modal_close">
                      Cancel
                    </button>
                    
                    <button
                      className="modal_close"
                      onClick={() => {
                        navigate("/Org_payment");
                      }}
                    >
                      Membership
                    </button>
                  </div>
                </Box>
              </Modal>
            </fieldset>
          </form>
        </div>
        <br/>
<br/>
<br/>
<br/>
<br/>
      </div>

      <Footer />
    </div>
  );
}
export default Adddscrims;
