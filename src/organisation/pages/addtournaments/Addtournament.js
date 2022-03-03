import React, { useState } from 'react';
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import './Addtournament.css';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import {useNavigate} from 'react-router-dom';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

//expired image
import expire from '../../assets/homeimages/expiry.png';



function Addtournament() {

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

 //navigation
 let navigate = useNavigate();

   //modal functions
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);


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
      <div>
      <Dashboard/>
      </div>
      <div class="circlz">
    {/* Header */}
    <h1 class="tourheader">REGISTRATION</h1>
    <div class="smallcirclz">
      <form class="tourform" onSubmit={handleSubmit(submitData)}>
      <fieldset class="uk-fieldset">
        <h2 class="joinheader">Join Now</h2>
        <hr/>
        {/* Registration Form */}
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Organization Name" id="orgname"  {...register("orgname", { required: "**Organisation Name is Required" })}  autoComplete='off'/>
            {errors.orgname && (<span className='errormsg'>{errors.orgname.message}</span>)}
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Tournament Name" id="tourname"  {...register("tourname", { required: "**Tournament Name is Required" })}  autoComplete='off'/>
            {errors.tourname && (<span className='errormsg'>{errors.tourname.message}</span>)}
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Prize Pool" id="prize"  {...register("prize", { required: "**Prize Pool Required",pattern:{value:/^[0-9]*$/,message:"Only Numbers are allowed"} })}  autoComplete='off'/>
            {errors.prize && (<span className='errormsg'>{errors.prize.message}</span>)}
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Entry Fee" id="fee"  {...register("fee", { required: "**Entry Fee Required",pattern:{value:/^[0-9]*$/,message:"Only Numbers are allowed"} })}  autoComplete='off'/>
            {errors.fee && (<span className='errormsg'>{errors.fee.message}</span>)}
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Team Limit" id="limit"  {...register("limit", { required: "**Team Limit is Required" ,pattern:{value:/^[0-9]*$/,message:"Only Numbers are allowed"} })}  autoComplete='off'/>
            {errors.limit && (<span className='errorm'>{errors.limit.message}</span>)}
            </div>
            <div class="uk-margin" >
            <Select options={options}  placeholder={'Match Type'} styles={colourStyles} theme={(theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#6BDCFC',
      },
    })}/>
</div>
        <div>
          <br/>
          {/* Buttons */}
          <button class="openbtnz" onClick={handleOpen}>Open</button>
          <Link to="/Tournamentlist"><button class="teamlistbtnz">Team List</button></Link>
          <Link to="/orghome"><button class="closebtnz">Close</button></Link>
        </div>

          {/* Modal */}
          <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-titlezz"
                aria-describedby="modal-modal-descriptionzz"
              >
                <Box sx={style} className='modal_box_orgzz' >
                  <Typography id="modal-modal-titlezz" variant="h6" component="h2">
                    
                  </Typography>
                  <Typography id="modal-modal-descriptionzz" className='rules_modalzz' sx={{ mt: 2 }} style={{ height: '19rem', overflow: 'scroll' }} >
                    <h3>oh no! Unfortunately your Free Trail has  expired</h3>
                    <img src={expire} /> 
                    <span>If you want to continue , you need to take a Membership</span>
                    <br />
                  </Typography>
                  <div className='button_areazz'>
                  <button onClick={handleClose} className='modal_closezz'>Cancel</button>
                  <button className='modal_closezz' onClick={()=>{navigate('/Org_payment')}}>Membership</button>
                  </div>
                  
                </Box>
              </Modal>
      </fieldset>
      </form>
      </div>
      <br/>
      </div>

    <div>
      <Footer />
      </div>
     

     </div>
  )
}
export default Addtournament;