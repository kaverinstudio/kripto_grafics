import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import exelWriter from "../writer/writer";
import {useSelector} from "react-redux";

const SendButton = () => {

    const coinData = useSelector(state => state.coins.coins)
    const sendButtonHandler = () =>{
        console.log('click')
        exelWriter(coinData);
    }

    return (
        <Stack direction="row" spacing={2}>
            <Button disabled={coinData.length === 0} onClick={sendButtonHandler} variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </Stack>
    );
};

export default SendButton;