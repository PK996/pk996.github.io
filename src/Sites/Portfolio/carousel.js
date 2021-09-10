import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { makeStyles, createStyles } from "@material-ui/styles";
import { Carousel } from "react-responsive-carousel";
import portfolio1 from "../../Components/Images/portfolio/test1.png";
import portfolio2 from "../../Components/Images/portfolio/test2.png";

const useStyles = makeStyles(() =>
  createStyles({
    picture: {
      backgroundColor: "black",
      borderRadius: "2%"
      
    },
    background: {
      backgroundColor: "black",
      color: "white",
      borderRadius: "2%",
      minwidth: "100%"
    },
  })
);

const DemoCarousel = () => {
  const classes = useStyles();
  return (
    <Carousel className={classes.background}>
      <div className={classes.background}>
        <img
          src={portfolio1}
          className={classes.picture}
          alt="Omlovame se, obrázek chybí"
        />
      </div>
      <div className={classes.background}>
        <img
          src={portfolio2}
          className={classes.picture}
          alt="Omlovame se, obrázek chybí"
        />
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
