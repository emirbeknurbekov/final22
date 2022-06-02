import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../img/IMG_3689.png";
import "./Navbar.css";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import LiveSearch from "../LiveSearch/LiveSearch";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useAuth } from "../../Contexts/AuthContextProvider";
import { useFav } from "../../Contexts/FavContextProvider.js";
import { useCart } from "../../Contexts/CartContextProvider.js";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
// import InfoIcon from "@mui/icons-material/Info";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { currentUser, logOutUser } = useAuth();
  const { getCartLength, cartLength } = useCart();
  const { getFavLength, favLength } = useFav();

  React.useEffect(() => {
    getCartLength();
  }, []);

  React.useEffect(() => {
    getFavLength();
  }, []);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {currentUser.isLogged && (
        <MenuItem onClick={handleMenuClose}>{currentUser.user}</MenuItem>
      )}
      {currentUser.isLogged && (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            logOutUser();
          }}
        >
          Log Out
        </MenuItem>
      )}

      {!currentUser.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="mobile-link" to="/register">
            Register
          </NavLink>
        </MenuItem>
      )}

      {!currentUser.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="mobile-link" to="/login">
            Login
          </NavLink>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {currentUser.isLogged && (
        <MenuItem>
          <NavLink to="/cart" style={{ color: "black" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Badge badgeContent={+cartLength} color="error">
                <LocalMallOutlinedIcon />
              </Badge>
            </IconButton>
          </NavLink>

          <NavLink to="/fav" style={{ color: "black" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Badge badgeContent={+favLength} color="error">
                <BookmarkBorderIcon />
              </Badge>
            </IconButton>
          </NavLink>
        </MenuItem>
      )}

      <MenuItem>
        <NavLink to="/" className="mobile-link">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge>
              <OtherHousesIcon />
            </Badge>
          </IconButton>
          <p>Home</p>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/about" className="mobile-link">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge>
              <InfoIcon />
            </Badge>
          </IconButton>
          <p>About</p>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/products" className="mobile-link">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge>
              <StorefrontIcon />
            </Badge>
          </IconButton>
          <p>Store</p>
        </NavLink>
      </MenuItem>

      {currentUser.isAdmin && (
        <MenuItem>
          <NavLink to="/admin" className="mobile-link">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge>
                <PrivacyTipIcon />
              </Badge>
            </IconButton>
            <p>Admin</p>
          </NavLink>
        </MenuItem>
      )}

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ position: "sticky", top: 0, right: 0, left: 0, zIndex: 50 }}>
      <AppBar className="nav" position="static">
        <Toolbar>
          <Button component={Link} to="/">
            <img className="logo" src={logo} alt="" />
          </Button>

          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            
          </Typography> */}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0.7, display: { xs: "none", md: "flex" } }}>
            <Button
              style={{ color: "#fff", fontSize: "1rem" }}
              component={Link}
              to="/"
            >
              <OtherHousesIcon />
            </Button>
            <Button
              style={{
                color: "#fff",
                fontSize: "1rem",

                textAlign: "center",
              }}
              component={Link}
              to="/about"
            >
              <InfoIcon />
            </Button>

            <Button
              style={{
                color: "#fff",
                fontSize: "1rem",
                // textTransform: "lowercase",
                textAlign: "center",
              }}
              component={Link}
              to="/products"
            >
              <StorefrontIcon />
            </Button>

            {currentUser.isAdmin && (
              <Button
                style={{
                  color: "#fff",
                  fontSize: "1rem",
                  // textTransform: "lowercase",
                  textAlign: "center",
                }}
                component={NavLink}
                to="/admin"
              >
                <PrivacyTipIcon />
              </Button>
            )}
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <LiveSearch />
            {currentUser.isLogged && (
              <Link to="/cart" style={{ color: "white" }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Badge badgeContent={+cartLength} color="error">
                    <LocalMallOutlinedIcon />
                  </Badge>
                </IconButton>
              </Link>
            )}

            {currentUser.isLogged && (
              <Link to="/fav" style={{ color: "white" }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Badge badgeContent={+favLength} color="error">
                    <BookmarkBorderIcon />
                  </Badge>
                </IconButton>
              </Link>
            )}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{
                color: currentUser.isLogged ? "green" : "white",
              }}
            >
              {currentUser.isAdmin ? (
                <AdminPanelSettingsIcon />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
