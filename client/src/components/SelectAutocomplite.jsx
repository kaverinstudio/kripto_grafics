import React, {useEffect} from 'react';
import {Autocomplete, TextField, createFilterOptions} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchNames} from "../connect/api";
import {setCoinId, setCoinNames} from "../store/coinReducer";

const SelectAutocomplite = React.memo(() => {
    const dispatch = useDispatch()
    const coinNames = useSelector(state => state.coins.coinNames)

    const [coinName, setCoinName] = React.useState('Bitcoin');


    const namesForSelect = []
    coinNames.map(name => namesForSelect.push({label: name.name, id: name.coin_id}))

    const handleChange = (event) => {
        setCoinName(event.target.value)
        const id = namesForSelect.find(item => item.label === event.target.value)
        if (id){
            dispatch(setCoinId(id.id))
        }
    };

    useEffect(()=>{
        fetchNames().then(data => dispatch(setCoinNames(data)))
    },[dispatch])


    const OPTIONS_LIMIT = 20;
    const defaultFilterOptions = createFilterOptions();

    const filterOptions = (options, state) => {
        return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
    };

    return (
        <Autocomplete
            disablePortal={false}
            id="combo-box-demo"
            options={namesForSelect}
            filterOptions={filterOptions}
            value={coinName}
            limitTags={20}
            openOnFocus={true}
            loading={true}
            loadingText={'Loading…'}
            onSelect={handleChange}
            renderInput={(params) => <TextField {...params} label="Coins" />}
        />
    );
});

export default React.memo(SelectAutocomplite);