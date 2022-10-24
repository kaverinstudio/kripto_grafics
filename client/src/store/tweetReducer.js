const SET_TWEETS = 'SET_TWEETS'

const defaultState = {
    tweets: [],
}

export default function tweetReducers(state = defaultState, action) {

    switch (action.type) {
        case SET_TWEETS:
            return {
                ...state,
                tweets: [...action.payload],

            }
        default:
            return state
    }
}

export const setTweets = (tweets) => ({type: SET_TWEETS, payload: tweets})
