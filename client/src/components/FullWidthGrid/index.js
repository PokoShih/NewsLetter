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
// import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Avant Garde Gothic Demi Bold",
    flexGrow: 1,
    fontSize: 12,
    height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#FFFFFF",
    background: "#C66AA1",
    height: "25vh",
    borderColor: "grey.500",
  },
  bottom: {
    padding: theme.spacing(2),
    textAlign: "left",
    background: "#C66AA1",
    color: "#FFFFFF",
    height: "25vh",
  },
  alert: {
    padding: theme.spacing(2),
    textAlign: "left",
    background: "#EDF7ED",
    color: "black",
    fontWeight: "Bold"
  },
  safety: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "black",
    background: "#E8F4FD",
    height: "90vh",
    borderColor: "grey.500",
    
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [adminContent, setAdminContent] = React.useState({
    adminSales: "",
    adminSafety: "",
    adminAchievements: "",
    adminBirthdays: "",
    adminPromotions: "",
    adminNews: "",
  });

  useEffect(() => {
    API.getData()
      .then((res => {
        if (res.data && res.data.length > 0) {
          setAdminContent(res.data[0])
        }
      }))
      .catch(err => console.log(err));
  }, [])

  // useEffect(() => {
  //       if (adminContent){
  //         console.log(adminContent);
  //         // Sales = adminContent.data[0].adminSales;
  //       }
  // }, [adminContent])

  return (
    <div className={classes.root}>
      <DataContext.Provider value={adminContent}>
          
        <Grid container spacing={1}>

        <Grid item xs={12}>
            <Paper className={classes.alert}>
              <FlareIcon style={{ fontSize: 12 }} /> Your Safety is Upmost Priority, please do not use your mobile while driving
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.safety}>
              <CheckIcon style={{ fontSize: 16 }} /> Safety:
              {
                adminContent ? (
                  <div dangerouslySetInnerHTML={{ __html: adminContent.adminSafety }} />
                  ) :
                (<>Safety:</>)
              }
            </Paper>
          </Grid>
          {/* <Grid item xs={6}>
            <Paper className={classes.paper}>
              <FlareIcon style={{ fontSize: 16 }} /> Achievement:
              {
                adminContent ? (
                  <div dangerouslySetInnerHTML={{ __html: adminContent.adminAchievements }} />
                  ) :
                (<></>)
              }
            </Paper>
          </Grid> */}
        </Grid>
        {/* <Grid container spacing={1}>
          <Grid item xs={6}>
            <PromotionsPage />
          </Grid>
          <Grid item xs={6}>
            <NewsPage />
          </Grid>
        </Grid> */}
        {/* <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.bottom}>
              <AttachMoney style={{ fontSize: 16 }} /> Last Week's Sales:
              {
                adminContent ? (
                  <div dangerouslySetInnerHTML={{ __html: adminContent.adminSales }} />
                  ) :
                (<></>)
              }
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.bottom}>
              <CakeIcon style={{ fontSize: 16 }} />     Birthdays:
              {
                adminContent ? (
                  <div dangerouslySetInnerHTML={{ __html: adminContent.adminBirthdays }} />
                  ) :
                (<></>)
              }
            </Paper>
          </Grid>
        </Grid> */}
      </DataContext.Provider>
    </div>
  );
}
