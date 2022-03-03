import React, { useState } from 'react';
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import "./Adddailymatch.css";
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

  //modal imports 
  import Box from '@mui/material/Box';
  import Modal from '@mui/material/Modal';
  import Typography from '@mui/material/Typography';
  
  //expired image
  import expire from '../../assets/expiry.png';


function Adddailymatch() {

  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const submitData = (data) =>{
    console.log(data);
    reset();
  };

  //modal style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const submit= (event)=>{
  event.preventDefault();
}
 //navigation
 let navigate = useNavigate();

   //modal functions
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const [selectedDate, setSelectedDate] = useState(null)
   const [selectedTime, setSelectedTime] = useState(null)
   const [selectedTimes, setSelectedTimes] = useState(null)

   const options = [
    { value: 'Tournament', label: 'Tournament' },
    { value: 'Scrims', label: 'Scrims' },
    { value: 'Daily Match', label: 'Daily Match' },
    { value: 'Open Rooms', label: 'Open Rooms' }
  ]
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

  return (
    <div>
      <Dashboard/>
      <div class="circles">
    {/* Header */}
    <h1 class="regheader">REGISTRATION</h1>
    <div>
    <form class="regformz" onSubmit={handleSubmit(submitData)}>
      <fieldset class="uk-fieldset">
        <h2 class="joinhead">Join Now</h2>
        <hr/>
        {/* Registration Form */}
      <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Organization Name" id='orgname'  
                {...register("orgname", { required: "**Organization Name is Required" })}  autoComplete='off'/>
                {errors.orgname && (<span className='errormsgz'>{errors.orgname.message}</span>)}
            </div>
            <div class="uk-margin">
            <div class="uk-input" >
            <DatePicker  selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="dd/MM/yyyy" minDate={new Date()} id="dat" 
                 placeholderText="Match Date" autoComplete='off' /> 
                 </div>
            </div>
            <div class="uk-margin">
            <div class="uk-input">
            <DatePicker  selected={selectedTime} onChange={(date) => setSelectedTime(date)} placeholderText="Match Time" showTimeSelect showTimeSelectOnly
              timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" id="dat" autoComplete='off' />
            </div>
            </div>
            <div class="uk-margin">
            <div class="uk-input">
            <DatePicker  selected={selectedTimes} onChange={(date) => setSelectedTimes(date)} placeholderText="IDP Time" showTimeSelect showTimeSelectOnly
              timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" id="dat" autoComplete='off'/>
            </div>
            </div>
            <div class="uk-margin">
            <Select options={options} placeholder={'Match Type'} styles={colourStyles} theme={(theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#6BDCFC',
      },
    })}/>
    </div>
        <div>      
          {/* Buttons */}
          <button class="openbtnns" onClick={handleOpen}  >Open</button>
          <Link to="/dailymatchslotlist"><button class="slotlistbtn">Slot List</button></Link>
          <Link to="/orghome"><button class="closebtn">Close</button></Link>
        </div>
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-titlez"
                aria-describedby="modal-modal-descriptionz"
              >
                <Box sx={style} className='modal_box_orgz' >
                  <Typography id="modal-modal-titlez" variant="h6" component="h2">
                    
                  </Typography>
                  <Typography id="modal-modal-descriptionz" className='rules_modalz' sx={{ mt: 2 }} style={{ height: '19rem', overflow: 'scroll' }} >
                    <h3>oh no! Unfortunately your Free Trail has  expired</h3>
                    <img src={expire} /> 
                    <span>If you want to continue , you need to take a Membership</span>
                    <br />
                  </Typography>
                  <div className='button_areaz'>
                  <button onClick={handleClose} className='modal_closez'>Cancel</button>
                  <button className='modal_closez' onClick={()=>{navigate('/Org_payment')}}>Membership</button>
                  </div>
                  
                </Box>
              </Modal>
      </fieldset>
      </form>
      </div>
      <br/><br/>
      </div>
      
    <div>
      <Footer />
      </div>
    </div>
    
  )
  }

export default Adddailymatch;

