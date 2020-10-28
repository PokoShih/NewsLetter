import React, { useContext } from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DataContext from "../utils/DataContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#FFFFFF",
    background: "#C66AA1",
    height: "30vh",
    borderColor: "grey.500",
  }
}));

function PromotionsPage(props) {
  const classes = useStyles();
  const [showPromo, setShowPromo] = React.useState(false);
  const adminContext = useContext(DataContext);
  console.log(adminContext)

  return (
    <div>
      <Paper className={classes.paper}>
        <ThumbUpIcon style={{ fontSize: 16 }} />
        {/* <h3
              onClick={() => {
                console.log("worked?");
                if (showPromo === true) {
                  setShowPromo(false);
                } else {
                  setShowPromo(true);
                }
              }}
            >Promotions:</h3> */}
          Promotions:
          {
            adminContext.adminPromotions ? (
            <div dangerouslySetInnerHTML={{ __html: adminContext.adminPromotions }} />
            ) : (
            <></>
          )
        }
        {
          showPromo && (
          <></>
          )
        }
      </Paper>
    </div>
  );
}

export default PromotionsPage;
