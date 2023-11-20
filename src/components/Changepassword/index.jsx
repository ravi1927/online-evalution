import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { toast } from "react-toastify";
import {
  Box,
  CircularProgress,
  TextField,
  Grid,
  Typography,
  FilledInput,
  FormControl,
  FormControlLabel,
  Radio,
  Button,
  FormHelperText,
  InputAdornment,
  IconButton,
  Switch,
  Stack,
  Backdrop,
} from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Heart from "../../components/Common/Heart";

import "bootstrap/dist/css/bootstrap.css";
import "../../Pages/LoginPage/login.css";


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
    borderRadius: "5px",
  },
  label: {
    fontSize: "10px",
  },
  helperText: {
    // Your styles for the helper text
    color: "#d32f2f",
    marginLeft: "0.2rem",
    marginBottom: "-0.4rem",
  },
}));
const CustomTextField = styled(TextField)({
  boxShadow: "0px 0px 3px 2px rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
  "& .MuiTypography-root": {
    // marginTop: '-1rem'
  },
});

const Changepassword = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(false);

  const [expanded, setExpanded] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

 
  const classes = useStyles();
  const navigate = useNavigate();
  // console.log(process.env.REACT_APP_API_KEY)
  useEffect(() => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("login");
  }, []);

  const handleSubmit = () => {
    navigate("/otp");
    //   if(formik.values.email && formik.values.password){
    //     sessionStorage.setItem('name',formik.values.email)
    //     setLoad(true)
    //   axios.post('/api/user/auth/token',{
    //     emailAddress: formik.values.email,
    //     password:formik.values.password
    //   }).then(res=>{
    //     const data = JSON.stringify(res.data)
    //       sessionStorage?.setItem('login',data)
    //     if(res?.data?.data?.accessToken?.length){
    //       navigate('/dashboard')
    //     }
    //   }).catch(err=>{
    //     toast.error(err?.response?.data?.error?.message)
    //     setLoad(false)
    //   })
    // }
    // else{

    // }
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (e) => {
    setLang(e.target.checked);
    if (e.target.checked === false) {
      i18next.changeLanguage("en");
    }
    if (e.target.checked === true) {
      i18next.changeLanguage("fr");
    }
    sessionStorage.setItem("lang", e.target.checked);
  };
  useEffect(() => {
    const lang = sessionStorage.getItem("lang");
    if (lang != null && lang != undefined) {
      if (lang === false) {
        i18next.changeLanguage("en");
      }
      if (lang === true) {
        i18next.changeLanguage("fr");
      }
      setLang(lang === "true" ? true : false);
      // console.log(lang)
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const Loader = () => {
    return (
      <Backdrop open={true}>
        <Heart />
      </Backdrop>
    );
  };
  const [load, setLoad] = useState(false);
  const isLoading = load;
  return (
    
      <>
      <Box>
      <Card sx={{ justifyContent:'center' }}>
      
      <CardHeader
          sx={{
            borderBottom: "1.5px solid #00000024",
            ".MuiCardHeader-title": { fontWeight: "600" },
            ".MuiCardHeader-subheader": {
              fontWeight: "600",
              fontSize: "0.9rem",
            },
          }}
          title="Changepassword"
          
        >
         
        </CardHeader>
      <CardContent>
      <Grid flexGrow={2}>
            <Grid container sx={{ paddingLeft: "2rem" }}>
              <Grid item xs={12} lg={3} md={6} sm={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "1rem",
                    flexDirection: "row",
                  }}
                >
                  
                  <Box pt={1}>
                    {" "}
                    <label>Old-Password</label>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} lg={3} md={6} sm={12}>
                <TextField 
                size="small"/>
              </Grid>

              <Grid item xs={12} lg={6} md={8} sm={12}></Grid>


              <Grid item xs={12} lg={3} md={6} sm={12}pt={2}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "1rem",
                    flexDirection: "row",
                  }}
                >
                  
                  <Box pt={1}>
                    {" "}
                    <label>New-Password</label>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} lg={3} md={6} sm={12} pt={2}>
                <TextField 
                size="small"/>
              </Grid>

              <Grid item xs={12} lg={6} md={8} sm={12}></Grid>



              <Grid item xs={12} lg={3} md={6} sm={12} pt={1}>
              
              </Grid>

              <Grid item xs={12} lg={3} md={6} sm={12} pt={1}>
              
              </Grid>

              <Grid
                item
                xs={12}
                lg={12}
                md={12}
                sm={12}
                pb={2}
                pr={2}
                sx={{ display: "flex" }}
              >
                <Button variant="contained" style={{color:'white'}}>Submit</Button>
              </Grid>




              

            </Grid>
          </Grid>

      </CardContent>
      
      
    </Card>
    </Box>
      </>
    
  );
};

export default Changepassword;
