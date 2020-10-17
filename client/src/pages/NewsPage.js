import React, { useContext } from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';
import DataContext from "../utils/DataContext";

const News = "Mimi got Towed";

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


function NewsPage() {
  const classes = useStyles();
  const [showNews, setShowNews] = React.useState(false);

  const adminContext = useContext(DataContext);
  console.log(adminContext.adminNews);
  return (
    <div>
      <Paper
        className={classes.paper}>
        <PublicIcon style={{ fontSize: 30 }} />
        {/* <h3
          onClick={() => {
            if (showNews === true) {
              setShowNews(false);
              console.log(showNews)
            } else {
              setShowNews(true);
            }
          }}
        >News: */}
        News:
                {/* </h3> */}
        {
          adminContext.adminNews ? (
            <div dangerouslySetInnerHTML={{__html:adminContext.adminNews}}/>
          ):(
            <></>
          )
        }
        {
          showNews && (
            <div>
              {/* <ul>Tash is back</ul>
              <ul>Gia is smashed</ul>
              <ul>Chase is crap</ul> */}
            </div>
          )
        }
      </Paper>
    </div>
  );
}

export default NewsPage;
