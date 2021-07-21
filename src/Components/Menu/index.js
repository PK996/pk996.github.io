import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/styles";
import icon from "../Images/icons/menuicon.png";
const useStyles = makeStyles(() =>
  createStyles({
    Top: {
      backgroundColor: "rgba(20, 20, 20, 0.99)",
      minHeight: "fit-content",
      display: "flex",
      minWidth: "min-content",
      flexWrap: "wrap",
    },
    Logo: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "center",
    },
    icon: {
      maxHeight: "60px",
      position: "relative",
      "&:hover": {
        backgroundColor: "rgb(43, 43, 43)",
        borderRadius: "3px",
      },
    },
    MenuUp: {
      flexGrow: 4,
      display: "flex",
      maxWidth: "55%",
      justifyContent: "center",
    },
    Menu: {
      display: "flex",
      listStyleType: "none",
      flexWrap: "wrap",
    },
    MenuObject: {
      padding: "5px 20px 20px 0px",
      fontSize: "x-large",
      color: "#f5deb3",
      listStyleType: "none",
      textDecoration: "none",
    },
    a: {
      "&:hover": {
        color: "rgb(107, 107, 107)",
      },
    },
  })
);

function Menu() {
  const classes = useStyles();
  return (
    <div className={classes.Top}>
      <div className={classes.Logo}>
        <Link exact to="/">
          {" "}
          <img src={icon} className={classes.icon} alt="icon" />{" "}
        </Link>
      </div>
      <div className={classes.MenuUp}>
        <ul className={classes.Menu}>
          <li>
            <Link to="/Painting" className={classes.MenuObject}>
              {" "}
              Malování{" "}
            </Link>
          </li>
          <li>
            <Link to="/Coating" className={classes.MenuObject}>
              {" "}
              Natírání{" "}
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" className={classes.MenuObject}>
              {" "}
              Portfolio{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
