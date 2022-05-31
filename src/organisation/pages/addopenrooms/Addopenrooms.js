import React, { useState } from "react";
import Dashboard from "../../components/header/Dashboard";
import Footer from "../../components/footer/Footer";
import "./Addopenrooms.css";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

//modal imports
// import Backdrop from '@mui/material/Backdrop';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

//expired image
import expire from "../../assets/expiry.png";

//drop down 
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";


function Addopenrooms() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger
  } = useForm();

  const [selectSlot, setSelectSlot] = React.useState('');

  const handleSelect = (event) => {
    setSelectSlot(event.target.value);
  };

  const submitData = async (data) => {
    let orginId = localStorage.getItem('id')
    let token = localStorage.getItem('token')
    let url = `https://gm4-server.herokuapp.com/api/organiser/openroom/create/${orginId}`
    const options = {
      method: "POST",
      url: url,
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      data: {
        organiserName: data.orgzname,
        matchDate: selectedDate.toISOString(),
        matchTime: selectedTime.toISOString(),
        matchType: selectSlot
      }
    }
    try {
      const response = await axios(options);
      alert("Room Added Successfully")
      setSelectedDate(null)
      setSelectedTime(null)
      reset();

    } catch (error) {
      alert(error.response.data.error)
    }
  };

  // Datepicker
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
 

  //modal style
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

  //navigation
  let navigate = useNavigate();

  // const [orgName, setorgName] = useState("");

  // const handleKeyDown = (e) => {
  //   if (e.key === " " && orgName.length===0) {
  //     e.preventDefault();
  //   }
  // };

  //modal functions
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color); 
      return {
        ...styles,
        backgroundColor: isFocused ? "#6BDCFC" : null,
        color: isFocused ? "white" : null,
      };
    },
  };

  return (
    <div>
      <Dashboard />
      <div class="circless">
        {/* Header */}
        <h1 class="reghead">OPEN ROOMS</h1>
        <div class="smallcircless">
          <br />

          {/* Registration Form */}

          <form class="regforms" onSubmit={handleSubmit(submitData)}>
            <fieldset class="uk-fieldset">
              <h2 class="joinheader">Join Now</h2>
              <hr />
              <div class="uk-margin">
                <input
                  class="uk-input"
                  type="text"
                  placeholder="Organization Name"
                  id="orgzname"
                  maxLength={30}
                  {...register("orgzname", {
                    required: "**Organization Name is Required",
                    pattern: { value: /^[^@\s#$!][a-zA-Z0-9_.-\s]*$/, message: "**Only Alphabets and numbers allowed" }
                  })}
                  autoComplete="off"
                  onKeyUp={() => { trigger("orgzname") }}
                // onChange={(e) =>
                //   setorgName(
                //     e.target.value
                //       .replace(/[^\w\s]/gi, "")
                //       .replace(/[0-9]/g, "")
                //   )
                // }
                // value={orgName}
                // onKeyDown={handleKeyDown}
                />
                {errors.orgzname && (
                  <span className="errormsgss">{errors.orgzname.message}</span>
                )}
              </div>
              <div class=" uk-margin">
                <div class="uk-input">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    id="dat"
                    placeholderText="Match Date"
                    onChangeRaw={(e) => e.preventDefault()}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <div class="uk-input">
                  <DatePicker
                    selected={selectedTime}
                    onChange={(date) => setSelectedTime(date)}
                    placeholderText="Match Time"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    id="dat"
                    onChangeRaw={(e) => e.preventDefault()}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={selectSlot}
                    onChange={handleSelect}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={{
                      width: '200px',
                      height: '40px',
                      color: 'gray'
                    }}
                  >
                    <MenuItem value="">
                      <>Select options</>
                    </MenuItem>
                    <MenuItem value={"Tournament"}>Tournament</MenuItem>
                    <MenuItem value={"Scrims"}>Scrims</MenuItem>
                    <MenuItem value={"Daily Match"}>Daily Match</MenuItem>
                    <MenuItem value={"Open Rooms"}>Open Rooms</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <br />
              <div>
                {/* Buttons */}
                <button class="openbtns" onClick={handleOpen}>
                  Open
                </button>
                <Link to="/orghome">
                  <button class="closebtns">Close</button>
                </Link>
              </div>

              {/* Modal */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-titlez"
                aria-describedby="modal-modal-descriptionz"
              >
                <Box sx={style} className="modal_box_orgz">
                  <Typography
                    id="modal-modal-titlez"
                    variant="h6"
                    component="h2"
                  ></Typography>
                  <Typography
                    id="modal-modal-descriptionz"
                    className="rules_modalz"
                    sx={{ mt: 2 }}
                    style={{ height: "19rem", overflow: "scroll" }}
                  >
                    <h3>oh no! Unfortunately your Free Trail has expired</h3>
                    <img src={expire} alt="" />
                    <span>
                      If you want to continue , you need to take a Membership
                    </span>
                    <br />
                  </Typography>
                  <div className="button_areaz">
                    <button onClick={handleClose} className="modal_closez">
                      Cancel
                    </button>
                    <button
                      className="modal_closez"
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
          <br />
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Addopenrooms;