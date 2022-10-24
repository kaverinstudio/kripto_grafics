import React from 'react';
import {useSelector} from "react-redux";
import {Box, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {List} from "@mui/material";

const TweetComponent = ({handleOpen}) => {
    const tweetData = useSelector(state => state.tweets.tweets)


    return (
        <div>
            {tweetData.length > 0 ?
                <>
                    <Typography style={{textAlign: 'center'}}>
                        Tweets List
                    </Typography>
                    <List sx={{width: '100%', height: 340, overflowY: 'auto'}}>
                        {tweetData.map((value, key) => (
                            <ListItem
                                key={key}
                                disableGutters

                            >
                                <ListItemButton onClick={()=> handleOpen(value)}>
                                    <ListItemText primary={value.tweet_date.substr(0, 19)} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </>
                :
                <Box>
                    <Typography style={{textAlign: 'center'}}>
                        No tweets for this date range
                    </Typography>
                </Box>
            }

        </div>
    );
};

export default TweetComponent;