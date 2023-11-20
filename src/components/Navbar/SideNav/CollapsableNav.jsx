// CollapsableNav With Props Functinality for Dynamic UseCase
import Link from "../../Common/Link";
import { useLocation } from "react-router-dom";

import React, { useState, useEffect } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
// ! Icon's
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ExpandMore from "@mui/icons-material/ExpandMore";
const CollapsableNav = ({ primary, links, icon, root, onClick,key }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(location.pathname.includes(root?.split('/')[1]));
    // console.log(location.pathname)
  }, [location.pathname, root]);
  const [hover,setHover] = useState(false)
  const [num,setNum] = useState(-1)
  return (
    <>
      <Link to={root} style={{'color':'#ef8733'}}>
        <ListItemButton
          selected={location.pathname.includes(root?.split('/')[1])}
          onClick={() => {
            setOpen(prev => !prev);
          }} 
          sx={{ '&.Mui-selected':{
            color:'#5A6670',
            backgroundColor:'#EEEEEE',
            borderRadius:open?'10px 10px 0px 0px':'10px'
          },
          marginTop:'0.5rem',
          '&:hover':{
            color:'#5A6670',
            backgroundColor:'#EEEEEE',
            borderRadius:open?'10px 10px 0px 0px':'10px',
            // transition:'ease-in-out',
            // transitionDuration:'1s',
            "&.MuiListItemIcon-root": {
              color: "#5A6670"
            }
          },
          '&.Mui-selected:hover':{
            color:'#5A6670',
            backgroundColor:'#EEEEEE',
            borderRadius:open?'10px 10px 0px 0px':'10px',
            "&.MuiListItemIcon-root": {
              color: "#5A6670"
            }
          },
          color:'#5A6670'
          
        }}
        onMouseEnter={()=>{setHover(true); setNum(key)}}
        onMouseLeave={()=>{setHover(false);setNum(-1)}}
        >
          <ListItemIcon sx={{color:' #5A6670','marginRight':'-1.3rem'
                }}><img src={icon}/></ListItemIcon>
          <ListItemText
            onClick={onClick}
            // fontSize={{ xs: 2, md: 3, lg: 2 }}
            primary={primary}
            sx={{'.MuiListItemText-primary':{fontSize:'0.9rem',fontWeight:'600'}}}
          />
          {/* <IconButton onClick={() => setOpen(prev => !prev)}>
            {open ? <ExpandMore sx={hover&&num==key ?{color:' white'
                }:(location.pathname?.includes(root?.split('/')[1]))?{color:'white'}:{color:'#EEEEEE'}}/> : <ChevronRightOutlinedIcon sx={hover&&num==key ?{color:' white'
              }:(location.pathname?.includes(root?.split('/')[1]))?{color:'white'}:{color:'#EEEEEE'}}/>}
          </IconButton> */}
        </ListItemButton>
      </Link>
      <Collapse in={open} timeout="auto">
        <List component="nav" sx={{marginTop:'-10px'}}>
          {links.map((navItem, index) => (
            <React.Fragment key={index}>
              <Link to={navItem?.link} style={{'color':'#EEEEEE'}}>
                <ListItemButton
                
                  // sx={{ pl: 4 }}
                  onClick={onClick}
                  sx={{ '&.Mui-selected':{
                    color:'#5A6670',
                    backgroundColor:'#EEEEEE',
                    borderRadius:links?.length===index+1 ?'0px 0px 10px 10px':'0px'
                  },
                  // pl: 4,
                  // mb:1  ,
                  marginTop:'-10px',
                  marginBottom :links?.length===index+1 ?'-10px':'0px',
                  
                  '&:hover':{
                    color:'#5A6670',
                    backgroundColor:'#EEEEEE',
                    borderRadius:links?.length===index+1 ?'0px 0px 10px 10px':'0px',
                    // transition:'ease-in-out',
                    // transitionDuration:'1s',
                    
                  },
                  '&.Mui-selected:hover':{
                    color:'#5A6670',
                    backgroundColor:'#EEEEEE',
                    borderRadius:links?.length===index+1 ?'0px 0px 10px 10px':'0px',
                    
                  },
                  color:'#5A6670',
                  backgroundColor:'#EEEEEE',
                  borderRadius:links?.length===index+1 ?'0px 0px 10px 10px':'0px',
                  
                }}
                onMouseEnter={()=>{setHover(true); setNum(index)}}
                onMouseLeave={()=>{setHover(false);setNum(-1)}}
                  selected={navItem?.link === location.pathname}
                >
                  <ListItemIcon sx={{color:' white','marginRight':'-1.3rem'
                }}>{navItem.icon}</ListItemIcon>
                  <ListItemText
                    // fontSize={{ xs: 12, md: 9, lg: 15 }}
                    primary={navItem.title}
                    sx={{'.MuiListItemText-primary':{fontSize:'0.8rem',fontWeight:'600'},color:navItem?.link === location.pathname?'#5A6670':'rgba(90, 102, 112, 0.6)',fontWeight:'600'}}
                  />
                </ListItemButton>
              </Link>
            </React.Fragment>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CollapsableNav;
