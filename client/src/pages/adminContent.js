import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import JoditEditor from "jodit-react";
import Grid from "@material-ui/core/Grid";

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

    const handleSubmit = () => {
        // setAllValues({
        //     ...allValue,
        // }
        const data = Object.assign({},
            {
                [salesEditor.current.id]: salesEditor.current.value,
                [promotionsEditor.current.id]: promotionsEditor.current.value,
                [newsEditor.current.id]: newsEditor.current.value,
                [safetyEditor.current.id]: safetyEditor.current.value,
                [achievementsEditor.current.id]: achievementsEditor.current.value,
                [birthdayEditor.current.id]: birthdayEditor.current.value
            },
        )
        console.log(data)
        axios
            .post('/api/admincontent', data)
            .then((res) => {
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                console.error(err);
            });
    }
    const salesEditor = useRef(null)
    const promotionsEditor = useRef(null)
    const newsEditor = useRef(null)
    const safetyEditor = useRef(null)
    const achievementsEditor = useRef(null)
    const birthdayEditor = useRef(null)
    const [content, setContent] = useState('')
    console.log(content);

    const config = {
        Sales: {
            readonly: false,// all options from https://xdsoft.net/jodit/doc/
            minHeight: 200,
            placeholder: "Sales",
        },
        Promotions: {
            readonly: false,// all options from https://xdsoft.net/jodit/doc/
            minHeight: 200,
            placeholder: "Promotions"
        },
        News: {
            readonly: false,// all options from https://xdsoft.net/jodit/doc/
            minHeight: 200,
            placeholder: "News"
        },
        Safety: {
            readonly: false,// all options from https://xdsoft.net/jodit/doc/
            minHeight: 200,
            placeholder: "Safety"
        },
        Achievements: {
            readonly: false,// all options from https://xdsoft.net/jodit/doc/
            minHeight: 200,
            placeholder: "Achievements"
        },
        Birthdays: {
            readonly: false,// all options from https://xdsoft.net/jodit/doc/
            minHeight: 200,
            placeholder: "Birthdays",
        }
        // extraButtons: [
        //     {
        //         name: 'Save',
        //         exec: function (editor) {
        //             console.log(editor.editor)
        //             console.log(editor)
        //         }
        //     }
        // ]
    }
    const [showSafety, setShowSafety] = React.useState(false);
    const [showAchievements, setShowAchievements] = React.useState(false);
    const [showPromotions, setShowPromotions] = React.useState(false);
    const [showNews, setShowNews] = React.useState(false);
    const [showSales, setShowSales] = React.useState(false);
    const [showBirthdays, setShowBirthdays] = React.useState(false);
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
            <Button variant="outlined" color="primary"
                onClick={() => {
                    console.log("worked?");
                    if (showSafety === true) {
                    setShowSafety(false);
                    } else {
                    setShowSafety(true);
                    }
                }}
            >
                Safety
            </Button>
            {/* <Button variant="outlined" color="primary"
                onClick={() => {
                    console.log("worked?");
                    if (showAchievements === true) {
                        setShowAchievements(false);
                    } else {
                        setShowAchievements(true);
                    }
                }}
            >
                Achievements
            </Button>
            <Button variant="outlined" color="primary"
                onClick={() => {
                    console.log("worked?");
                    if (showPromotions === true) {
                        setShowPromotions(false);
                    } else {
                        setShowPromotions(true);
                    }
                }}
            >
                Promotions
            </Button>
            <Button variant="outlined" color="primary"
                onClick={() => {
                    console.log("worked?");
                    if (showNews === true) {
                        setShowNews(false);
                    } else {
                        setShowNews(true);
                    }
                }}
            >
                News
            </Button>
            <Button variant="outlined" color="primary"
                onClick={() => {
                    console.log("worked?");
                    if (showSales === true) {
                        setShowSales(false);
                    } else {
                        setShowSales(true);
                    }
                }}
            >
                Sales
            </Button>
            <Button variant="outlined" color="primary"
                onClick={() => {
                    console.log("worked?");
                    if (showBirthdays === true) {
                        setShowBirthdays(false);
                    } else {
                        setShowBirthdays(true);
                    }
                }}
            >
                Birthdays
            </Button> */}
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {
                            showSafety && (
                                <JoditEditor
                            ref={safetyEditor}
                            id="adminSafety"
                            value={content}
                            config={config.Safety}
                            tabIndex={1}
                        />
                            )
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            showAchievements && (
                                <JoditEditor
                                ref={achievementsEditor}
                                id="adminAchievements"
                                value={content}
                                config={config.Achievements}
                                tabIndex={1}
                            />
                            )
                        }
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {
                            showPromotions && (
                                <JoditEditor
                                ref={promotionsEditor}
                                id="adminPromotions"
                                value={content}
                                config={config.Promotions}
                                tabIndex={1}
                            />
                            )
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            showNews && (
                                <JoditEditor
                                ref={newsEditor}
                                id="adminNews"
                                value={content}
                                config={config.News}
                                tabIndex={1}
                            />
                            )
                        }
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {
                            showSales && (
                                <JoditEditor
                                ref={salesEditor}
                                id="adminSales"
                                value={content}
                                config={config.Sales}
                                tabIndex={1}
                            />
                            )
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            showBirthdays && (
                                <JoditEditor
                                ref={birthdayEditor}
                                id="adminBirthdays"
                                value={content}
                                config={config.Birthdays}
                                tabIndex={1}
                            />
                            )
                        }

                    </Grid>
                </Grid>
                {/* <TextField
                    id="adminSales"
                    label="Sales"
                    placeholder="Sales"
                    multiline
                    rows={4}
                    variant="filled"
                    onChange={handleChange}
                /> */}
                {/* <TextField
                    id="adminPromotions"
                    label="Promos"
                    placeholder="Promos"
                    multiline
                    rows={4}
                    variant="filled"
                    onChange={handleChange} */}
                {/* /> */}
                {/* <TextField
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
                /> */}
                {/* <TextField
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
                /> */}
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