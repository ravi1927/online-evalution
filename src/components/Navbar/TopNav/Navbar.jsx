import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Box, IconButton, styled, Toolbar, Tooltip, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
// import logo from "../../../assets/BoA logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { PATHS, SM_WIDTH } from "../../../utils/constants";
import { useCallback, useEffect, useState } from "react";
import axios from "../../../api/axios";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useLocation, useNavigate } from "react-router-dom";
const Img = styled("img")(() => ({
  width: "208px",
  height: "51px",
  cursor: "pointer",
}));

const StyledNavbar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: '#45AEAE',
  paddingTop: theme.spacing(0.3),
  paddingLeft: theme.spacing(1),
  paddingBottom: theme.spacing(0.3),
  // borderBottom: `2px solid ${theme.palette.primary.main}`,
  display: "flex",
  flexDirection: "row",
  position: "fixed",
  top: 0,
  left: 0,
  alignItems: "center",
  // boxShadow: `0px 0px ${theme.palette.primary.main}`,
  justifyContent: "space-between",

}));

const Navbar = ({ setIsOpen, ...other }) => {
  // const { displayName, roleName, reportingRoleName } = JSON.parse(
  //   sessionStorage.getItem("jwtWithDetails"),
  // );
  // const details = JSON.parse(sessionStorage.getItem("jwtWithDetails"));
  // const hasReportingRoleName =
  //   Object?.keys(details)?.includes("reportingRoleName");
  const isLarge = useMediaQuery(`(min-width:${SM_WIDTH}px)`);
  const navigate = useNavigate();
  const name = sessionStorage.getItem('name')
  const [details,setDetails] = useState({})
  const login = JSON.parse(sessionStorage?.getItem('login'))
  const token = login?.data?.accessToken
  const location = useLocation()
// useEffect(()=>{
//       // const decodedToken = jwt_decode(token);
//       // console.log(decodedToken)
//       // setDetails(decodedToken)
//       const base64Url = token?.split('.')[1];
//   const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/');
//   const jsonPayload = decodeURIComponent(
//     atob(base64)
//       .split('')
//       .map((c) => {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join('')
//   );
//   setDetails(JSON.parse(jsonPayload))
//   // console.log(JSON.parse(jsonPayload))
//   // return JSON.parse(jsonPayload);
// },[])
  const toggleNavbar = useCallback(() => {
    setIsOpen(prev => !prev);
  }, [setIsOpen]);

  const handleImageClick = () => {
    // if (roleName.includes("PRIMORDIAL_USER")) {
    //   navigate(PATHS.dashboard);
    // } else if (
    //   roleName.includes("USER_MANAGER") &&
    //   hasReportingRoleName === true &&
    //   reportingRoleName === "NONE"
    // ) {
    // } else if (
    //   hasReportingRoleName === true &&
    //   reportingRoleName.includes("REPORT") &&
    //   !roleName.includes("USER_MANAGER")
    // ) {
    //   navigate(PATHS.dashboard);
    // } else if (
    //   hasReportingRoleName === true &&
    //   reportingRoleName.includes("REPORT") &&
    //   roleName.includes("USER_MANAGER")
    // ) {
    //   navigate(PATHS.dashboard);
    // } else if (
    //   roleName.includes("USER_MANAGER") &&
    //   hasReportingRoleName === false
    // ) {
    // }
  };

  const logOut = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <StyledNavbar {...other} elevation={2}>
      <Toolbar >
        <Box >
          {!isLarge && (
            <Tooltip title='Open Navigation'>
              <IconButton onClick={toggleNavbar}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
          )}
          {/* <Img src={logo} alt='Boa_logo' onClick={() => handleImageClick()} /> */}
        </Box>
        <Box sx={{marginLeft:isLarge?'240px':'0px'}} color={'#FFFFFF'} fontSize={{ xs: 14, md: 16, lg: 18 }}>
            {location.pathname.split('/').length >=3 ? location.pathname?.split('/')[2] :location.pathname?.split('/')[1]}
        </Box>
      </Toolbar>
      
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  marginRight={'1rem'}>
      {/* <Box>
       <Avatar
          alt="profile_pic"
          src={profile_pic}
          sx={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            color:'orange'
          }}
        />
       </Box> */}
        {/* <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        <Typography fontWeight={600} whiteSpace={'nowrap'}>
          {details['https://cnts.civ/display_name']}
        </Typography>
        <Typography fontSize={'12px'}>
          {name}
        </Typography>
        </Box> */}
        <IconButton
        aria-label='send'
        
        size='medium'
        sx={{ marginRight: "5%" ,marginLeft:'2%'}}
        color="white"
        // onClick={logOut}
      >
        <NotificationsIcon />
      </IconButton>
        <IconButton
        aria-label='send'
        
        size='medium'
        sx={{ marginRight: "5%" ,marginLeft:'2%'}}
        color="white"
        onClick={logOut}
      >
        <LogoutIcon />
      </IconButton>
        
      </Box>
    </StyledNavbar>
  );
};

export default Navbar;
