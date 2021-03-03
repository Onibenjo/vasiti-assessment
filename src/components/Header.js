import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import headerImage from "../assets/Group 81.png";
import logo from "../assets/Vasiti-Logo-black 1.png";

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
  },
  headerSection: {
    minHeight: "80vh",
    padding: "5rem",
  },
  appBar: {
    padding: "0 5rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Toolbar>
          <div className={classes.title}>
            <img src={logo} alt="logo" />
          </div>
          <Button color="inherit">ABOUT US</Button>
          <Button color="inherit">STORIES</Button>
          <Button color="inherit">CONTACT</Button>
          <Button color="inherit">LOG IN</Button>
          <Button color="primary" variant="contained">
            SIGN UP
          </Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        className={classes.headerSection}
        justify="center"
        alignItems="center">
        <Grid item xs={6}>
          <div className={classes.headerTextSection}>
            <Typography variant="h3">
              Amazing <br /> Experiences from Our Wonderful Customers
            </Typography>
            <Typography>
              Here is what customers and vendors are saying about us, you can
              share your stories with us too
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
          <img src={headerImage} alt="" width="100%" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
