import React, {useEffect, useMemo} from 'react';
import { Bar } from 'react-chartjs-2';
import '../App.css'
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import {fetchCoins, fetchTweets} from "../connect/api";
import {useDispatch, useSelector} from "react-redux";
import {setCoins} from "../store/coinReducer";
import {setTweets} from "../store/tweetReducer";
import dayjs from "dayjs";


ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);
const BarCharts = React.memo(() => {
    const coinData = useSelector(state => state.coins.coins)
    const coinId = useSelector(state => state.coins.coin_id)
    const dateStart = useSelector(state => state.coins.dateStart)
    const dateEnd = useSelector(state => state.coins.dateEnd)

    let today = useMemo(() => new Date(), [])

    let lastDate = today.setMonth(new Date().getMonth() - 1)

    if (dateEnd.$d){
        today = new Date(dateEnd.$d)
    }

    if (dateStart.$d){
        lastDate = new Date(dateStart.$d)
    }


    let id = 1
    if (coinId){
        id = coinId
    }

    const dispatch = useDispatch()


    useEffect(()=>{
        fetchCoins(id, dayjs(lastDate).toISOString(), dayjs(today).toISOString()).then(data => dispatch(setCoins(data)))
        fetchTweets(id, dayjs(lastDate).toISOString(), dayjs(today).toISOString()).then(data => dispatch(setTweets(data)))
    },[dateStart, dateEnd, id])


    const barData = []
    const timeClose = []


    if(coinData.length > 0){
        // eslint-disable-next-line array-callback-return
        coinData.map(data => {
                barData.push(data.close)
                timeClose.push(new Date(data.time_close).toLocaleDateString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric' }))
            }

        )
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = timeClose;

    const label = coinData.find(data => data.coin_id === id)

    let barName = ''
    if (label){
        barName = label.name
    }

    const data = {
        labels,
        datasets: [
            {
                type: 'line',
                label: '',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                radius:0,
                fill: false,
                data: barData,
            },
            {
                type: 'bar',
                label: barName,
                backgroundColor: 'rgb(75, 192, 192)',
                data: barData,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
            },

        ],
    };



    return (

        <>
            {barData.length === 0 &&
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }

            <Bar
                type='bar'
                className='bar'
                options={options}
                data={data}
                width={800}
                height={600}
            />

        </>


    );
});

export default React.memo(BarCharts);