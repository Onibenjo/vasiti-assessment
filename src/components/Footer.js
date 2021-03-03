import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import banner from "../assets/subscribe-banner 1.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#25201D",
    color: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footerBanner: {
    // padding: "0 10rem",
    width: "80%",
    margin: "0 auto",
  },
  imageBanner: {
    marginTop: -50,
  },
  footerLinks: {
    padding: "5rem",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        className={classes.footerBanner}
        alignItems="center">
        <Grid item xs={6}>
          <img
            src={banner}
            alt=""
            width="70%"
            className={classes.imageBanner}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Be a member of our community</Typography>
          <Typography>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </Typography>
          <div>
            <input />
            <button>submit</button>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        justify="space-around"
        className={classes.footerLinks}>
        <Grid item xs={6} lg={2}>
          <Typography variant="h5">Company</Typography>
          <Typography>About Us</Typography>
          <Typography>Term of Use</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Press & Media</Typography>
        </Grid>
        <Grid item xs={6} lg={2}>
          <Typography variant="h5">Products</Typography>
          <Typography>Marketplace</Typography>
          <Typography>Magazine</Typography>
          <Typography>Seller</Typography>
          <Typography>Wholesale</Typography>
          <Typography>Services</Typography>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Typography variant="h5">Careers</Typography>
          <Typography>Become a Campus Rep</Typography>
          <Typography>Become a Vasiti Influencer</Typography>
          <Typography>Become a Campus writer</Typography>
          <Typography>Become an Affiliate</Typography>
        </Grid>
        <Grid item xs={6} lg={2}>
          <Typography variant="h5">Get in touch</Typography>
          <Typography>Contact us</Typography>
          <Typography>Partner with us</Typography>
          <Typography>Advertise with us</Typography>
          <Typography>Help/FAQs</Typography>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Typography variant="h5">Join our community</Typography>
          <Typography>Join our community</Typography>
          <Typography>Email newsletter</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
