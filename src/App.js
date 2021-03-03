import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import NewTestimony from "./components/NewTestimony";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import TestimonySection from "./components/TestimonySection";
import firstSectionImage from "./assets/Group 89.png";
import secondSectionImage from "./assets/woman-shoppingbag-card 1.png";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF5C00",
    },
  },
});

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button> */}
        <NewTestimony open={open} handleClose={handleClose} />
      </div>
      <TestimonySection
        image={firstSectionImage}
        backgroundColor="#222222"
        title="Tolu & Joy’s Experience"
        content="I had the best experience shopping with vasiti. Usability of the
        website was great, very good customer service, an all round great
        experience. I would definately be coming back! I had the best
        experience shopping with vasiti. Usability of the website was great,
        very good customer service, an all round great experience. I would
        definately be coming back!"
        handleClickOpen={handleClickOpen}
      />
      <TestimonySection
        image={secondSectionImage}
        backgroundColor="#FFF8F5"
        color="#242120"
        title="Josiah’s Experience"
        content="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back!"
        handleClickOpen={handleClickOpen}
        reverse
      />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
