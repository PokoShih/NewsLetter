import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';

const News = "Mimi got Towed";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: "#676767",
    background: "#E3E3E3",
    height: 300,
    borderColor: "grey.500"
  }

}));


function NewsPage() {
  const classes = useStyles();
  const [showNews, setShowNews] = React.useState(false);
  return (
    <div>
      <Paper
        className={classes.paper}>
        <PublicIcon style={{ fontSize: 50 }} />
        <h3
          onClick={() => {
            if (showNews === true) {
              setShowNews(false);
              console.log(showNews)
            } else {
              setShowNews(true);
            }
          }}
        >News:
                </h3>
        <div>
          {News}
        </div>
        {
          showNews && (
            <div>
              <ul>Tash is back</ul>
              <ul>Gia is smashed</ul>
              <ul>Chase is crap</ul>
            </div>
          )
        }
      </Paper>
    </div>
  );
}

export default NewsPage;
