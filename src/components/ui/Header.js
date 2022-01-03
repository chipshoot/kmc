import styled from "@emotion/styled";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  useTheme,
  IconButton,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
  Autocomplete,
  Box,
  TextField,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import logo from "../../assets/kmcLogo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const languages = ["En", "Se", "Cn"];

function Header(props) {
  const { value, setValue, matches, mainMenu } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [curLanguage, setCurLanguage] = useState(`${languages[selectedIndex]}`);
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setCurLanguage(languages[index]);
    setOpenMenu(false);
  };

  useEffect(() => {
    [...mainMenu].forEach((option, index) => {
      switch (window.location.pathname) {
        case `${option.path}`:
          if (value !== index) {
            setValue(index);
          }
          break;
        default:
          break;
      }
    });
  }, [value, setValue, mainMenu]); // todo: when get mainMenuOptions from contact, add it to dependent

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const MenuTab = styled(Tab)(({ theme }) => ({
    ...theme.typography.tab,
    textTransform: "none",
    minWidth: 10,
    marginLeft: "25px",
  }));

  const MainDrawer = styled(SwipeableDrawer)(
    ({ theme }) => `
    .MuiDrawer-paper {
      background-color: ${theme.palette.primary.main};
    }
  `
  );

  const MainDrawerItem = styled(ListItemText)(
    ({ theme }) => `
    .MuiListItemText-primary {
      font-family: "Raleway";
      font-weight: 700;
      font-size: "1rem";
      color: white;
      opacity: 0.7;
    }
  `
  );

  const LoginButton = styled(Button)(() => ({
    color: `${blue[800]}`,
    background: "white",
    textTransform: "none",
    fontFamily: "Raleway",
    fontWeight: 700,
    borderRadius: "50px",
    height: "30px",
    marginLeft: "10px",
    ":hover": {
      background: "white",
    },
  }));

  const LangMenu = styled(Menu)(
    ({ theme }) => `
    .MuiMenu-paper {
      background-color: ${theme.palette.primary.main};
      color: white;
      border-radius: 0px;
  }
  `
  );

  const LangMenuItem = styled(MenuItem)(({ theme }) => ({
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    textTransform: "uppercase",
  }));

  const drawer = (
    <>
      <MainDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={!iOS}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
      >
        <Toolbar></Toolbar>
        <List
          value={value}
          onChange={handleTabChange}
          disablePadding
          sx={{
            "&& .Mui-selected": {
              backgroundColor: "action.selected",
              borderLeft: `5px solid white`,
              ".MuiListItemText-primary": {
                opacity: 1,
              },
            },
          }}
        >
          {mainMenu.map((option, index) => (
            <ListItemButton
              divider
              key={index}
              component={Link}
              to={option.path}
              onClick={() => {
                setSelectedIndex(index);
                setOpenDrawer(false);
              }}
              selected={selectedIndex === index}
            >
              <MainDrawerItem>{option.name}</MainDrawerItem>
            </ListItemButton>
          ))}
        </List>
        <LoginButton>Login</LoginButton>
        <Autocomplete
          sx={{ marginTop: "50px", color: "white" }}
          id="languageSelect"
          options={languages}
          autoHighlight
          disableClearable={true}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option}
            </Box>
          )}
          renderInput={(params) => (
            <TextField {...params} sx={{ color: "white" }}>
              {curLanguage}
            </TextField>
          )}
        ></Autocomplete>
      </MainDrawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon fontSize="large"></MenuIcon>
      </IconButton>
    </>
  );
  const tabs = (
    <>
      <Tabs
        textColor="inherit"
        value={value}
        onChange={handleTabChange}
        sx={{ ml: "auto" }}
      >
        {mainMenu.map((option, index) => (
          <MenuTab
            key={index}
            label={option.name}
            component={Link}
            to={option.path}
          />
        ))}
      </Tabs>
      <LoginButton disableFocusRipple variant="contained">
        Login
      </LoginButton>
      <Button
        variant="Text"
        sx={{
          fontFamily: "Raleway",
          fontWeight: 700,
          fontSize: "1rem",
        }}
        aria-owns={anchorEl ? "language-menu" : undefined}
        aria-haspopup={anchorEl ? "true" : undefined}
        onClick={(event) => handleClick(event)}
      >
        {curLanguage}
      </Button>
      <LangMenu
        id="language-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {languages.map((lang, index) => (
          <LangMenuItem
            key={lang}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}
          >
            {lang}
          </LangMenuItem>
        ))}
      </LangMenu>
    </>
  );

  return (
    <>
      <AppBar sx={{ zIndex: `${theme.zIndex.modal + 1}` }} elevation={0}>
        <Toolbar>
          <Button
            sx={{ padding: 0 }}
            component={Link}
            to="/"
            onClick={() => setValue(0)}
            disableRipple
          >
            <img alt="Clinic logo" src={logo} height={matches ? "40" : "50"} />
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
