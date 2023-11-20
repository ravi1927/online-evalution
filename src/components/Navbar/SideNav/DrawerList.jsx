
import { Avatar, Typography } from "@mui/material";
import profile_pic from "../../../assets/User.svg";
import { useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import CollapsableNav from "./CollapsableNav";
import DvrIcon from "@mui/icons-material/Dvr";
import Link from "../../Common/Link";
import { PATHS } from "../../../utils/constants";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";

import DevicesIcon from "@mui/icons-material/Devices";
import DatasetIcon from "@mui/icons-material/Dataset";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import FmdBadOutlinedIcon from '@mui/icons-material/FmdBadOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { useTranslation } from "react-i18next";
import dashboard from '../../../assets/dashboard-img.svg'
import home from '../../../assets/house-img.svg'
import survey from '../../../assets/survey-img.svg'
import reports from '../../../assets/reports-img.svg'
import EditIcon from '../../../assets/edit.png';
import Password from '../../../assets/password.png';
import Course from '../../../assets/course.png';
import user from '../../../assets/user-solidd.svg'
import i18next from "i18next";
import { toast } from "react-toastify";
const DrawList = ({ setIsOpen }) => {
  const {t} = useTranslation() 
  const lang = sessionStorage.getItem('lang')
  useEffect(()=>{
    i18next.changeLanguage(lang==='true'?'fr':'en')
  },[lang])

  const location = useLocation();



  const navItems2 = [
    {
      title: `${t('Dashboard')}`,
      link: PATHS.dashboard,
      icon: dashboard,
    },
    // {
    //   title: `${t('Survey')}`,
    //   link: PATHS.Survey.root,
    //   icon: survey,
    //   children: [
    //     {
    //       title: `${t('View Surveys')}`,
    //       link: PATHS.Survey.root,
    //     },
    //     {
    //       title: `${t('Create new Survey')}`,
    //       link: PATHS.Survey.createSurvey,
    //     },
    //     {
    //       title: `${t('Assign Survey')}`,
    //       link: PATHS.Survey.assignSurvey,
    //     },

    //         ],
    //       },
    //       {
    //         title: `${t('House Holds')}`,
    //         link: PATHS?.HouseHold.root,
    //         icon: home,
    //         children: [
        
    //     {
    //       title: "Households",
    //       link:PATHS?.HouseHold.root,
    //     },
    //     {
    //       title: "Add Household",
    //       link:   PATHS?.HouseHold?.addHouseHold,
    //     },
    //   ],
    // },
    // {
    //   title: "User Management",
    //   link: PATHS?.userManagement.root,
    //   icon: user,
    //   children:[
    //     {
    //       title: "User List",
    //       link: PATHS?.userManagement.root,
    //     },
    //     {
    //       title: "Add User",
    //       link: PATHS?.userManagement.createUser,
    //     },
    //   ]
    // },
    // {
    //   title: "Reports",
    //   link: PATHS?.Reports,
    //   icon: reports,
    // },

    {
      title: "Manage Course",
      link: PATHS?.Managecourse.root,
      icon: Course,
    },
    {
      title: "Edit Profile",
      link: PATHS?.Editprofile,
      icon: EditIcon,
    },

    {
      title: "ChangePassword",
      link: PATHS?.Changepassword.root,
      icon: Password,
    },

    {
      title: "Pdf",
      link: PATHS?.Testing.root,
      icon: Password,
    },
    
  ];
  const closeNavbar = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

 
  const [face,setFace] = useState()

  return (
    <Box
      sx={{
        width: "100%",
        height:'100%'
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        marginBottom={'rem'}
        marginTop={'-3rem'}
      >
        <Avatar
        
          alt="profile_pic"
          src={face?.length ? `data:image/jpeg;base64,${face}` : profile_pic}
          sx={{
            width: "90px",
            height: "90px",
            objectFit: "cover",
            // marginTop:'-1.8rem',
            // marginBottom:'-1rem'
          }}
        />
        <Typography
          fontSize={{ xs: 18, md: 16, lg: 18 }}
          marginTop={'1rem'}
          variant="body2"
          color={'#45AEAE'}
          fontWeight={'bold'}
          textAlign={"center"}
        >
          {/* {displayName} */}Valuter
        </Typography>

        <Typography
          fontSize={{ xs: 14, md: 14, lg: 14 }}
          variant="h6"
          color="#343434"
          sx={{ fontWeight: "500" }}
        >
          {/* {roleName} */}
        </Typography>
        <Typography
          fontSize={{ xs: 14, md: 14, lg: 14 }}
          variant="h6"
          color="#343434"
          sx={{ fontWeight: "500" }}
        >
          {/* {reportingRoleName} */}
        </Typography>

        <Typography
          fontSize={{ xs: 14, md: 14, lg: 14 }}
          variant="h6"
          color="#343434"
          sx={{ fontWeight: "500" }}
        >
          {/* {branchName} */}
        </Typography>
      </Box>
      <Box sx={{  position: "relative",padding:'0px 1rem'}}>
        <List component="nav">
          {navItems2?.map((navItem, index) =>
            !!navItem?.children?.length ? (
              <CollapsableNav
                key={index}
                onClick={closeNavbar}
                primary={navItem?.title}
                links={navItem?.children}
                icon={navItem?.icon}
                root={navItem?.link}
              />
            ) : (
              <List >
                <Link to={navItem?.link} key={index} style={{'color':'#EEEEEE'}}>
                  <ListItemButton
                  sx={{ '&.Mui-selected':{
                    color:'#5A6670',
                    backgroundColor:'#EEEEEE',
                    borderRadius:'10px',
                    
                  },
                  marginBottom:'-0.5rem',
                  '&:hover':{
                    color:'#5A6670',
                    backgroundColor:'#EEEEEE',
                    borderRadius:'10px',
                   
                    "&.MuiListItemIcon-root": {
                      color: "#5A6670",
                    }
                  },
                  '&.Mui-selected:hover':{
                    color:'#5A6670',
                    backgroundColor:'#EEEEEE',
                    borderRadius:'10px',
                    "&.MuiListItemIcon-root": {
                      color: "#5A6670"
                    }
                  },
                  color:'#5A6670',
                  
                  
                }}
                // onMouseEnter={()=>{setHover(true); setNum(index)}}
                // onMouseLeave={()=>{setHover(false);setNum(-1)}}
                    selected={navItem?.link === location.pathname}
                    onClick={()=>{closeNavbar()}}
                  >
                    <ListItemIcon sx={{'marginRight':'-1.3rem'
                }}><img src={navItem?.icon} width={'17rem'} height={'17rem'}/></ListItemIcon>
                    <ListItemText primary={navItem?.title} sx={{'.MuiListItemText-primary':{fontSize:'0.9rem',fontWeight:'600'}}}/>
                  </ListItemButton>
                </Link>
              </List>
            ),
          )}
        </List>
      </Box>
    </Box>
  );
};

export default DrawList;

