import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function MultilineTextFields() {
    let history = useHistory();
    const classes = useStyles();
    const [allValue, setAllValues] = React.useState({
        adminSales: "",
        adminPromotions: "",
        adminNews: "",
        adminSafety: "",
        adminAchievements: "",
        adminBirthdays: "",
    });

    const handleChange = event => {
        setAllValues({ ...allValue, [event.target.id]: event.target.value })
        // console.log(event.target.id)
        // console.log(event.target.value)
    }

    const handleSubmit = () => {
        console.log(allValue);
        if (allValue != "") {
            history.push("/");
            const data = allValue;
            axios
                .post('/api/admincontent', data)
                .then((res) => {
                    console.log(res);
                })
                .catch(err => {
                    console.error(err);
                });
        }

    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="adminSales"
                    label="Sales"
                    placeholder="Sales"
                    multiline
                    rows={4}
                    variant="filled"
                    onChange={handleChange}
                />
                <TextField
                    id="adminPromotions"
                    label="Promos"
                    placeholder="Promos"
                    multiline
                    rows={4}
                    variant="filled"
                    onChange={handleChange}
                />
                <TextField
                    id="adminNews"
                    label="News"
                    placeholder="News"
                    multiline
                    rows={4}
                    variant="filled"
                    onChange={handleChange}
                />
                <TextField
                    id="adminSafety"
                    label="Safety"
                    placeholder="Safety"
                    multiline
                    rows={4}
                    variant="filled"
                    onChange={handleChange}
                />
                <TextField
                    id="adminAchievements"
                    label="Achievements"
                    placeholder="Achievements"
                    multiline
                    rows={4}
                    variant="filled"
                    onChange={handleChange}
                />
                <TextField
                    id="adminBirthdays"
                    label="Birthdays"
                    placeholder="Birthdays"
                    multiline
                    rows={4}
                    variant="filled"
                    onChange={handleChange}
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </form>
    );
}