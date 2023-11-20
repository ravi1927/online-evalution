import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import CardWrapper from "../../components/Card/CardWrapper";
import MuiDrawer from "../../components/Navbar/SideNav/Drawer";
import DrawList from "../../components/Navbar/SideNav/DrawerList";
import Navbar from "../../components/Navbar/TopNav/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { CircularProgress, Backdrop } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from "react-redux";
import Heart from "../../components/Common/Heart";
import { setLoading } from "../../store/slices/app.tsx";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <Heart/>
    </Backdrop>
  );
};
const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [timer, setTimer] = useState(900);
  // ! Auto Logout
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    const resetTimeout = () => {
      setTimer(900);
    };
    const events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress",
    ];
    for (let i in events) {
      window.addEventListener(events[i], resetTimeout);
    }
    return () => {
      clearInterval(myInterval);
      for (let i in events) {
        window.removeEventListener(events[i], resetTimeout);
      }
    };
  }, [timer]);

  if (timer === 0) {
    // localStorage.clear();
    // navigate("/");
    window.location.reload();
  }
  const appState = useSelector((state) => (state?.app));
  const [load,setLoad] =useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setLoading(false))
  },[])
useEffect(()=>{
  setLoad(appState?.value)
},[appState?.value])

  return (
    <Stack direction={"row"}>
      <Navbar setIsOpen={setIsOpen}  style={{ zIndex: 99 }} />
      <MuiDrawer style={{ zIndex: 100 }} isOpen={isOpen}>
        <DrawList setIsOpen={setIsOpen} />
      </MuiDrawer>
      <CardWrapper style={{zIndex:98}} >{<Outlet />}</CardWrapper>
      {load && <Loader />}
    </Stack>
  );
};

export default NavMenu;
