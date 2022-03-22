import { React, useLayoutEffect, useState } from 'react';
import Mymatches from './Mymatches';
import './Mymatches.css'

import * as yup from 'yup';
//dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import Select from 'react-select'

//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';

//form validation import 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { date, string } from 'yup/lib/locale';

const options = [
    'one', 'two', 'three'
];
const defaultOption = options[0];



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


export default function Edit_match() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    var curr = new Date()
    var getDate = curr.toISOString().substr(0, 10);

    const [editMatch, setEditMatch] = useState({
        name: 'Tournament Name',
        matchDate: getDate,
        pricePool: 4800,
        entryFeee: 500,
        time: "01:22",
        idpTime: "12:50",
        matchType: 'Tournment'

    })


    //validation
    const submitData = (data) => {
        console.log("form submited")
        console.log(data);
    }
    //date picker
    var today = new Date(),
        Nowtime = today.getHours() + ':' + today.getMinutes();
    console.log(today, "current time");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [Time, setTime] = useState(null);
    const [matchTime, setMatchTime] = useState(null);

    //dropdown
    const options = [
        { value: 'Tournament', label: 'Tournament' },
        { value: 'Scrims', label: 'Scrims' },
        { value: 'Daily Match', label: 'Daily Match' },
        { value: 'Open Rooms', label: 'Open Rooms' }
    ]

    return (
        <div >
            <div>
                <Dashboard />
            </div>
            {/* start header */}
            <div className='mymatches_headerclip'>
                <h1>Edit matches</h1>
            </div>
            {/* end header */}
            <div className='edit_matchess'>

                <div style={{ "paddingTop": '1rem' }} className="edit_matches">
                    {/* edit matches form */}
                    <form className='edit_matchForm' onSubmit={handleSubmit(submitData)}>
                        <fieldset class="uk-fieldset">
                            <h2 class="joinhead">Edit Tournament</h2>
                            <hr />
                            <div class="uk-margin">
                                <label for="tournamentname" className='editMatches_label'>tournament Name</label>

                                {/* <input className="uk-input" type="text" placeholder="Tournament name" id='tournamentname'
                                    {...register("tournamentname", { required: "**Tournament name is Required", minLength: 5, maxLength: 25 })} onChange={(event) => setEditMatch({
                                        ...editMatch,
                                        name: event.currentTarget.value.replace(/[^\w\s]/gi, "").replace(/[0-9]/g, "").replace(/\s/g, "")
                                    })} value={editMatch.name} autoComplete='off' /> */}
                                <input className="uk-input" type="text" placeholder="Tournament name" id='tournamentname'
                                    {...register("tournamentname", { required: "**Tournament name is Required", minLength: 5, maxLength: 25 })} onChange={(event) => {
                                        if (event.target.value == " " && editMatch.name.length === 0) {
                                            event.preventDefault();
                                        } else {
                                            setEditMatch({
                                                ...editMatch,
                                                name: event.currentTarget.value.replace(/[^\w\s]/gi, "").replace(/[0-9]/g, "")
                                            })
                                        }
                                    }} value={editMatch.name} autoComplete='off' />
                                {errors.tournamentname && (<span className='editMatches-error'>{errors.tournamentname.message}</span>)}
                            </div>

                            <div class="uk-margin">
                                <label for="matchdate" className='editMatches_label'>Match Date</label>
                                {/* <input class="uk-input" type="date" id='matchdate' name='matchDate' {...register('matchDate')} onChange={(event) => setEditMatch({ ...editMatch, matchDate: event.target.date })} placeholder="Match Date" value={editMatch.matchDate}  /> */}
                                <div class="uk-input">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText={editMatch.matchDate}
                                        id="dat"
                                        required="true"
                                        autoComplete="off"
                                        onChangeRaw={(e) => e.preventDefault()}
                                    />
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label for="pricepool" className='editMatches_label'>Price Pool</label>

                                <input className="uk-input" type="number" placeholder="Price pool" id='pricepool'
                                    {...register("pricepool", { required: "**Price pool is Required" })} onChange={(event) => setEditMatch({ ...editMatch, pricePool: event.target.value })} value={editMatch.pricePool} autoComplete='off' />
                                {errors.pricepool && (<span className='editMatches-error'>{errors.pricepool.message}</span>)}
                            </div>
                            <div class="uk-margin">
                                <label for="entryFee" className='editMatches_label'>Entry Fee</label>

                                <input className="uk-input" type="number" placeholder="Entry Fee" id='entryFeee'
                                    {...register("entryFeee", { required: "**Entry fee is Required" })} onChange={(event) => setEditMatch({ ...editMatch, entryFeee: event.target.value })} value={editMatch.entryFeee} autoComplete='off' />
                                {errors.entryFeee && (<span className='editMatches-error'>{errors.entryFeee.message}</span>)}
                            </div>
                            <div class="uk-margin">
                                <label for="time" className='editMatches_label'>Match time</label>
                                <input class="uk-input" id='time' type="time" name='time'{...register("matchtime", { required: "**Match time is Required" })} onChange={(event) => setEditMatch({ ...editMatch, time: event.target.value })} placeholder="Match Time" value={editMatch.time} />
                                {errors.matchtime && (<span className='editMatches-error'>{errors.matchtime.message}</span>)}
                                {/* <div class="uk-input">
                                    <DatePicker
                                        selected={matchTime}
                                        onChange={(date) => setMatchTime(date)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm"
                                        id="dat"
                                        value={editMatch.time}
                                        placeholderText={editMatch.time}
                                        autoComplete="off"
                                        required="true"
                                    />
                                </div> */}
                            </div>
                            <div class="uk-margin">
                                <label for="idpTime" className='editMatches_label'>Idp Time</label>
                                <input class="uk-input" id='idpTime' type="time" name='idpTime' {...register("idpTime", { required: "**Idp time is Required" })} onChange={(event) => setEditMatch({ ...editMatch, idpTime: event.target.value })} placeholder="IDP Time" value={editMatch.idpTime} />
                                {errors.idpTime && (<span className='editMatches-error'>{errors.idpTime.message}</span>)}
                                {/* <div class="uk-input">
                                    <DatePicker
                                        selected={Time}
                                        onChange={(date) => setTime(date)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                        id="date"
                                        autoComplete="off"
                                        required="true"
                                        value={editMatch.idpTime}
                                        placeholderText={editMatch.idpTime}
                                    />
                                </div> */}
                            </div>
                            <div class="uk-margin">
                                <label for="matchType" className='editMatches_label'>Match Type</label>

                                <div class="uk-margin">

                                    <Select options={options}
                                        placeholder={'Match Type'}
                                        required

                                        defaultValue={options}
                                        styles={colourStyles}
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                                primary: '#6BDCFC',
                                            },
                                        })} />

                                    {errors.matchType && (<span className='editMatches-error'>{errors.matchType.message}</span>)}

                                </div>

                            </div>

                            <button class="Edit_matches_UpdateBtn" type='submit'>Update</button>

                        </fieldset>
                    </form>
                    {/* end edit matches form */}
                </div>

            </div>
            <Footer />
        </div>
    )
}
