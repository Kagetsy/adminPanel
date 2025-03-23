import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../user/userProvider';
import { MenuList, MenuItem } from '@mui/material';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  menuItem: {
    "&.MuiMenuItem-root": {
      background: "inherit",
      padding: "22px 16px",
      width: "100%",
      border: "none",
      outline: "none",
      textAlign: "left",
      cursor: "pointer",
      transition: "0.3s",
      borderRadius: "15px",
    },
    "&.MuiMenuItem-root:hover": {
      background: "#ddd"
    }
  },
  cancelMenuItem: {
    "&.MuiMenuItem-root": {
      background: "inherit",
      padding: "22px 16px",
      width: "100%",
      border: "none",
      outline: "none",
      textAlign: "left",
      cursor: "pointer",
      transition: "0.3s",
      borderRadius: "15px",
      marginTop: "auto"
    },
    "&:hover.MuiMenuItem-root": {
      background: "red"
    }
  },
  menu: {
    "&.MuiList-root": {
      display: "flex",
      border: "1px solid #ccc",
      borderRadius: "15px",
      textAlign: "center",
      flexDirection: "column",
      height: "98%",
      width: "fit-content",
      margin: "10px"
    }
  }
});

function MenuComponent(props) {
  const { classes } = props;
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  function openProfile(){
    navigate("/");
  }
  function openEditProfile(){
    navigate("/edit");
  }
  function openAdministration(){
    navigate("/administration");
  }
  function returnUser(){
    setUser({...user, id: "", value: ""});
    navigate("/");
  }
  return (
    <MenuList className={classes.menu}>
      <MenuItem onClick={openProfile} className={classes.menuItem} id={"profile"}>Мой профиль</MenuItem>
      <MenuItem onClick={openEditProfile} className={classes.menuItem} id={"editProfile"}>Редактировать профиль</MenuItem>
      <MenuItem onClick={openAdministration} className={classes.menuItem} id={"administration"}>Администрирование</MenuItem>
      <MenuItem onClick={returnUser} className={classes.cancelMenuItem} id={"return"}>Выход</MenuItem>
    </MenuList>
  );
}

export default withStyles(styles)(MenuComponent);