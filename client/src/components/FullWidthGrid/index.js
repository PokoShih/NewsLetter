import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AttachMoney from "@material-ui/icons/AttachMoney";
import CheckIcon from "@material-ui/icons/Check";
import FlareIcon from "@material-ui/icons/Flare";
import CakeIcon from "@material-ui/icons/Cake";
import PromotionsPage from "../../pages/PromotionsPage";
import NewsPage from "../../pages/NewsPage";
import API from "../../utils/API";
import DataContext from "../../utils/DataContext";


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




export default function FullWidthGrid() {
  const classes = useStyles();
  const [adminContent, setAdminContent] = React.useState({
    adminSales:"",
    adminSafety:"",
    adminAchievements:"",
    adminBirthdays:""
  });

  useEffect(() => {
    API.getData()
        .then((res => {
          setAdminContent(res.data[0])
        }))
        .catch(err => console.log(err));
  }, [])

  useEffect(() => {
        if (adminContent){
          console.log(adminContent);
          // Sales = adminContent.data[0].adminSales;
        }
  }, [adminContent])

  

  return (
    <div className={classes.root}>
<DataContext.Provider value={adminContent}>
<Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.Sales}>
            <AttachMoney style={{ fontSize: 50 }} />     Last Week's Sales: {adminContent.adminSales}
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
            <div> {adminContent.adminSafety}</div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <FlareIcon style={{ fontSize: 50 }} />     Achievement:
            <div> {adminContent.adminAchievements}</div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <CakeIcon style={{ fontSize: 50 }} />     Birthdays:
            <div> {adminContent.adminBirthdays}</div>
          </Paper>
        </Grid>
      </Grid>
</DataContext.Provider>
      
    </div>
  );
}
