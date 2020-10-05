import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AttachMoney from "@material-ui/icons/AttachMoney";
import CheckIcon from "@material-ui/icons/Check";
import FlareIcon from "@material-ui/icons/Flare";
import CakeIcon from "@material-ui/icons/Cake";
import PromotionsPage from "../../pages/PromotionsPage";
import NewsPage from "../../pages/NewsPage";


const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Avant Garde Gothic Demi Bold",
    flexGrow: 1,
    fontSize: 24,
    height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#676767",
    background: "#E3E3E3",
    height: 250,
    borderColor: "grey.500",
  },
  title: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#FFFFFF",
    background: "#E01A22",
    height: 100,
  },
  Sales: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "#5FB8B6",
    color: "#FFFFFF",
    height: 100,
  },
}));

const Sales = "$840,000, fulfilment at 97.94% 2.28% missing Items";
const Safety = "Three Point of Contact";
const Achievement = "$1.2M, new high";
const Birthdays = "Poko's birthday 18th September this Friday!";

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.Sales}>
            <AttachMoney style={{ fontSize: 50 }} />     Last Week's Sales: {Sales}
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PromotionsPage />
        </Grid>
        <Grid item xs={6}>
          <NewsPage />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <CheckIcon style={{ fontSize: 50 }} />     Safety:
            <div> {Safety}</div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <FlareIcon style={{ fontSize: 50 }} />     Achievement:
            <div> {Achievement}</div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <CakeIcon style={{ fontSize: 50 }} />     Birthdays:
            <div> {Birthdays}</div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
