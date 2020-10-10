import React, { useContext } from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DataContext from "../utils/DataContext";

const Promotions = "Coca Cola 600mL $2 each with Coles Discount Card";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: "#676767",
    background: "#E3E3E3",
    height: 300,
    borderColor: "grey.500"
  },

  Promo: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: "#5FB8B6",
    color: "#FFFFFF",
    height: 300
  }
  }));


function PromotionsPage(props) {
  const classes = useStyles();
  const [showPromo, setShowPromo] = React.useState(false);

  const {adminPromotions} = useContext(DataContext);
  

  return (
    <div>
          <Paper className={classes.Promo}>
            <ThumbUpIcon style={{ fontSize: 50 }} />
            <h3
              onClick={() => {
                console.log("worked?");
                if (showPromo === true) {
                  setShowPromo(false);
                } else {
                  setShowPromo(true);
                }
              }}
            >Promotions:</h3>
            <div> {adminPromotions}</div>
            {
              showPromo && (
              <div>blablablablablablablablablablablablablablablablablablablablablablablabla</div>
              )
            }
          </Paper>
    </div>
  );
}

export default PromotionsPage;
