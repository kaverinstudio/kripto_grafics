const SET_COINS = 'SET_COINS'
const SET_DATE_START = 'SET_DATE_START'
const SET_DATE_END = 'SET_DATE_END'
const SET_COIN_ID = 'SET_COIN_ID'
const SET_COIN_NAMES = 'SET_COIN_NAMES'

const defaultState = {
    coins: [],
    coinNames: [],
    dateStart: '',
    dateEnd: '',
    coin_id:'',
}

export default function coinReducers(state = defaultState, action) {

    switch (action.type) {
        case SET_COINS:
            return {
                ...state,
                coins: [...action.payload],

            }
        case SET_DATE_START:
            return {
                ...state,
                dateStart: action.payload,
            }
        case SET_DATE_END:
            return {
                ...state,
                dateEnd: action.payload,
            }
        case SET_COIN_ID:
            return {
                ...state,
                coin_id: action.payload,
            }
        case SET_COIN_NAMES:
            return {
                ...state,
                coinNames: action.payload,
            }
        default:
            return state
    }
}

export const setCoins = (coins) => ({type: SET_COINS, payload: coins})
export const setDateStart = (dateStart) => ({type: SET_DATE_START, payload: dateStart})
export const setDateEnd = (dateEnd) => ({type: SET_DATE_END, payload: dateEnd})
export const setCoinId = (coinId) => ({type: SET_COIN_ID, payload: coinId})
export const setCoinNames = (names) => ({type: SET_COIN_NAMES, payload: names})