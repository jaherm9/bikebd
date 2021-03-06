import {
  MdOutlineHome,
  MdShop2,
  MdElectricBike,
  MdOutlineContactPhone,
  MdOutlineLogin,
  MdOutlineLogout,
  MdAdminPanelSettings,
} from "react-icons/md";

import {
  AppBar,
  Button,
  Container,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../Image/logo.png";
import "./Header.css";
// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    width: "230px",
  },
  custombtn: {
    background: "#3F90FC",
    color: "#fff",
    padding: "10px 36px",
    margin: "0 12px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="default" onClick={() => history.push("/")}>
          Products
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="default" onClick={() => history.push("/order")}>
          Order
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="default">Contact Us</Button>
      </MenuItem>
      {loggedUser?.displayName ? (
        <MenuItem>
          <Button style={{ color: "white" }} variant="text">
            {loggedUser.displayName}
          </Button>
        </MenuItem>
      ) : (
        <MenuItem>
          <Button
            color="default"
            className={classes.custombtn}
            onClick={() => history.push("/login")}
          >
            Login
          </Button>
        </MenuItem>
      )}
      <MenuItem>
        <Button
          color="default"
          className={classes.custombtn}
          style={{ background: "#434141" }}
          onClick={() => history.push("/addProduct")}
        >
          Admin
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <div className={classes.logo}>
                <Link to="/">
                  <img style={{ width: "100%" }} src={logo} alt="logo" />
                </Link>
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button color="default" onClick={() => history.push("/")}>
                  <MdOutlineHome className="react-icon" /> Home
                </Button>
                <Button
                  color="default"
                  onClick={() => history.push("/products")}
                >
                  <MdShop2 className="react-icon" /> Products
                </Button>
                <Button color="default" onClick={() => history.push("/order")}>
                  <MdElectricBike className="react-icon" /> Order
                </Button>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  {" "}
                  <Button color="default">
                    <MdOutlineContactPhone className="react-icon" /> Contact Us
                  </Button>
                </Link>

                {loggedUser?.displayName ? (
                  <>
                    <Button
                      color="default"
                      className={classes.custombtn}
                      onClick={() => history.push("/")}
                    >
                      {loggedUser.displayName}
                    </Button>

                    <Button
                      color="default"
                      className={classes.custombtn}
                      onClick={() => setLoggedUser({})}
                      style={{ color: "white" }}
                    >
                      <MdOutlineLogin className="react-icon" /> Log Out
                    </Button>
                  </>
                ) : (
                  <>
                  <Button
                    color="default"
                    className={classes.custombtn}
                    onClick={() => history.push("/login")}
                  >
                    <MdOutlineLogout className="react-icon" /> Login
                  </Button>

                  <Button
                    color="default"
                    className={classes.custombtn}
                    onClick={() => history.push("/register")}
                  >
                    <MdOutlineLogout className="react-icon" /> Register
                  </Button>
                  </>
                )}
          {
             loggedUser.email&&<Button
                  color="default"
                  className={classes.custombtn}
                  style={{ background: "#434141" }}
                  onClick={() => history.push("/addProduct")}
                >
                  <MdAdminPanelSettings className="react-icon" /> Admin
                </Button>
          }

                
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreVert />
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        {renderMobileMenu}
      </div>
    </>
  );
};

export default Header;
