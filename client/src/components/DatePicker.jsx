import React, {useEffect} from 'react';
import dayjs from 'dayjs';
import moment from 'moment'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {useDispatch, useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import {setDateEnd, setDateStart} from "../store/coinReducer";

const DatePicker = React.memo(() => {
    const today = new Date();
    const [valueEnd, setValueEnd] = React.useState(dayjs(today));
    const [valueStart, setValueStart] = React.useState(dayjs(today.setMonth(today.getMonth() - 1)));
    const dispatch = useDispatch()
    const coinId = useSelector(state => state.coins.coin_id)
    const openDates = useSelector(state => state.coins.coinNames).filter(coin => coin.coin_id === coinId)

    let minDate = moment.unix(1367107200).format('YYYY-MM-DD')

    if (openDates.length > 0){
        minDate = moment.unix(openDates[0].date_added).format('YYYY-MM-DD')
        // console.log(parseInt(moment.unix(openDates[0].date_added).format('YYYYMMDD')), parseInt(dayjs(valueStart).format('YYYYMMDD')))
    }


    useEffect(()=>{
        dispatch(setDateEnd(valueEnd))
        dispatch(setDateStart(valueStart))

        if (openDates.length > 0 && parseInt(moment.unix(openDates[0].date_added).format('YYYYMMDD')) > parseInt(dayjs(valueStart).format('YYYYMMDD'))) {
            setValueStart(minDate)
            dispatch(setDateStart(minDate))
        }

        if (parseInt(dayjs(valueStart).format('YYYYMMDD')) > parseInt(dayjs(valueEnd).format('YYYYMMDD'))){
            alert('The start date cannot be greater than the end date')
            setValueEnd(dayjs(new Date()))
            dispatch(setDateEnd(valueEnd))
        }

    },[dispatch, valueEnd, valueStart, openDates, minDate])


    const handleChangeStart = (newValue) => {
        dispatch(setDateStart(newValue.$d))
        setValueStart(newValue);
    };
    const handleChangeEnd = (newValue) => {
        dispatch(setDateEnd(newValue))
        setValueEnd(newValue);
    };


    return (
        <div className='mt-5'>
            <Row>
            <Col sm={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                <DesktopDatePicker
                    minDate={minDate}
                    maxDate={new Date()}
                    label="Date start"
                    inputFormat="DD/MM/YYYY"
                    value={valueStart}
                    onChange={handleChangeStart}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
            </Col>
            <Col sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            maxDate={new Date()}
                            minDate={minDate}
                            label="Date end"
                            inputFormat="DD/MM/YYYY"
                            value={valueEnd}
                            onChange={handleChangeEnd}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </Col>
            </Row>
        </div>
    );
});

export default DatePicker;