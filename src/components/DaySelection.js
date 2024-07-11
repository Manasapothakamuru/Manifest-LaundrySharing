import React from "react";
import { useState } from "react";
import { Grid, Stack, Box } from '@mui/material';
import LaundryIcon from "../images/LaundryIcon.png"
import WeekdayButton from "./WeekdayButton";

export default function DaySelection() {

    const currentDate = new Date();
    const currWeek = [];
    let tempDate = currentDate;
    for (let i = 0; i < 7; i++) {
        let tempDate = new Date(currentDate);
        tempDate.setDate(currentDate.getDate() + i);
        currWeek.push(tempDate);
    }
    //console.log('currentWeek', currWeek)

    return (
        <Box style={{ backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px' }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="stretch"
                        container
                        spacing={0.5}
                        padding={'0px'}
                    >
                        <img src={LaundryIcon} alt='laundryicon' />
                        {currWeek.map((weekday) => (
                            <div>
                                <WeekdayButton
                                    key={weekday.toDateString()}
                                    WeekDay={weekday.getDay()}
                                    Month={weekday.getMonth() + 1}
                                    Date={weekday.getDate()}
                                    Year={weekday.getFullYear()}>

                                </WeekdayButton>
                            </div>


                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

{/*import React, { useState } from "react";
import { Grid, Stack, Box, Typography, Button } from '@mui/material';
import LaundryIcon from "../images/LaundryIcon.png";

export default function DaySelection() {
    const [selectedDate, setSelectedDate] = useState(null); // State to track selected date

    // Get today's date
    const today = new Date();

    // Calculate Sunday of the current week (assuming Sunday is the first day of the week)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Adjust to Sunday of the current week

    // Create an array of dates for each day of the week
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekdays = days.map((day, index) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + index);
        const formattedDate = `${day} ${date.getDate()}`;
        return formattedDate;
    });

    const handleDateClick = (date) => {
        setSelectedDate(date);
        console.log("Selected Date:", date);
    };

    return (
        <Box sx={{ backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px' }}>
            <Grid container spacing={1} alignItems="center">
                <Grid item>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <img src={LaundryIcon} alt='Laundry Icon' style={{ width: '50px', height: '50px' }} />
                        {weekdays.map((day, index) => (
                            <Button
                                key={index}
                                variant={selectedDate === day ? "contained" : "outlined"}
                                color="primary"
                                size="small"
                                onClick={() => handleDateClick(day)}
                                sx={{ textTransform: 'none' }}
                            >
                                {day}
                            </Button>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}*/}
