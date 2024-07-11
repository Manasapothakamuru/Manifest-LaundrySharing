import React from 'react';
import { useState } from 'react';
import { Button, Grid } from "@mui/material";

export default function WeekdayButton({ WeekDay, Month, Date }) {
    const weekArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const [weekdaySelect, setWeekdaySelect] = useState(false);

    const handleWeekdaySelect = () => {
        setWeekdaySelect(true);
    }

    return (
        <div className="WeekdayButton">
            <Button style={{
                borderRadius: '5px', backgroundColor: '#D6D5DA', color: '#160449', 
                fontSize: '11px', padding: '2px', minWidth: '0px', fontWeight: '600'
            }} onClick={handleWeekdaySelect}>
                <Grid container spacing={0.5} style={{padding: '0px', width: '100%'}}>
                    <Grid item xs={12} style={{padding: '0px'}}>
                        {weekArr[WeekDay]}
                    </Grid>
                    <Grid item xs={12}>
                        {`${Month}/${Date}`}
                    </Grid>
                </Grid>
            </Button>
        </div>
    )
}
