import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import strokeImage from "../assets/Vector 3.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headerTextSection: {
    paddingLeft: "3rem",
    width: "80%",
    padding: "3.5rem 5rem",
  },
  headerSection: {
    overflow: "hidden",
  },
  spacer: {
    margin: "3rem 0",
  },
}));

const TestimonySection = ({
  image,
  backgroundColor = "#222222",
  color = "#FFF",
  title = "",
  content = "",
  handleClickOpen,
  reverse,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={1}
      className={classes.headerSection}
      style={{ backgroundColor, color }}
      alignItems="center"
      direction={reverse ? "row-reverse" : "row"}
      wrap="wrap-reverse">
      <Grid item xs={12} md={6}>
        <img src={image} alt="" width="90%" style={{ marginBottom: -60 }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.headerTextSection}>
          <Typography variant="h5">{title}</Typography>
          <div className={classes.spacer} />
          <Typography>{content}</Typography>
          <div className={classes.spacer} />
          <Button onClick={handleClickOpen} color={"inherit"}>
            <div>
              Share your own story!
              <br />
              <img src={strokeImage} alt="" width="60%" />
            </div>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default TestimonySection;
